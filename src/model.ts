import firebase from 'firebase/app';
import 'firebase/firestore';
import { Collection } from './collection';
import { HasEvent } from './has-event';
import pluralize from 'pluralize';
import { InteractsWithRelationship, ModelData } from './contracts';

export class Model<T extends ModelData = any> extends HasEvent {
	protected name = '';
	protected fillable: Array<string> = [];
	protected data: T = {} as T;
	protected db: firebase.firestore.Firestore;
	protected collection: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
	type: any = Model;

	constructor(data?: T) {
		super();
		this.booting();
		this.db = firebase.firestore();
		if (data !== undefined) {
			this.fill(data);
		}
		if (this.name.length === 0) {
			this.name = pluralize(this.constructor.name.toLowerCase());
		}
		if (!('id' in this.data)) {
			this.data.id === '';
		}
		this.collection = this.db.collection(this.name);
		this.booted();
	}

	protected booting() {}

	protected booted() {}

	findOne(id: string) {
		return new Promise<this>(async (resolve, reject) => {
			try {
				let collection = this.getCollection() as any;
				this.queries.forEach((query) => {
					switch (query.method) {
						case 'where':
							const { operator, value } = query;
							collection = collection.where(
								query.key,
								operator,
								value
							);
							break;
						case 'whereIn':
							const { values } = query;
							values.forEach((value: any) => {
								collection = collection.where(
									query.key,
									'==',
									value
								);
							});
							break;
						case 'whereNotIn':
							query.values.forEach((value: any) => {
								collection = collection.where(
									query.key,
									'!=',
									value
								);
							});
							break;
						case 'limit':
							collection = collection.limit(query.amount);
							break;
					}
				});
				const document = await collection.doc(id).get();
				if (!document) {
					return reject(new Error('Model not found.'));
				}
				const body = {
					...document.data(),
					id: document.id,
				};
				this.forceFill(body);
				return resolve(this);
			} catch (error) {
				return reject(error);
			} finally {
				this.clearQueries();
			}
		});
	}

	getCollection() {
		return this.collection;
	}

	fill(data: T) {
		for (const [key, value] of Object.entries(data)) {
			if (this.fillable.includes(key)) {
				this.set(key, value);
			}
		}
		return this;
	}

	forceFill(data: any) {
		for (const [key, value] of Object.entries(data)) {
			this.set(key, value);
		}
		return this;
	}

	delete() {
		return new Promise<void>(async (resolve, reject) => {
			try {
				this.callEvent('deleting');
				let collection = this.getCollection() as any;
				this.queries.forEach((query) => {
					switch (query.method) {
						case 'where':
							const { operator, value } = query;
							collection = collection.where(
								query.key,
								operator,
								value
							);
							break;
						case 'whereIn':
							const { values } = query;
							values.forEach((value: any) => {
								collection = collection.where(
									query.key,
									'==',
									value
								);
							});
							break;
						case 'whereNotIn':
							query.values.forEach((value: any) => {
								collection = collection.where(
									query.key,
									'!=',
									value
								);
							});
							break;
						case 'limit':
							collection = collection.limit(query.amount);
							break;
					}
				});
				await collection.doc(this.data.id).delete();
				this.callEvent('deleted');
				return resolve();
			} catch (error) {
				return reject(error);
			} finally {
				this.clearQueries();
			}
		});
	}

	set(key: string, value: any) {
		(this.data as any)[key] = value;
		return this;
	}

	get<T = any>(key: string): T {
		if (!(key in this.data)) {
			return (null as unknown) as T;
		}
		return (this.data as any)[key];
	}

	getData() {
		return this.data;
	}

	first() {
		return new Promise<this | null>(async (resolve, reject) => {
			try {
				const collection = await this.getAll();
				if (collection.length > 0) {
					return resolve(collection[0]);
				}
				return resolve(null);
			} catch (error) {
				return reject(error);
			} finally {
				this.clearQueries();
			}
		});
	}

	getAll(): Promise<Collection<this>> {
		return new Promise(async (resolve, reject) => {
			try {
				let collection = this.getCollection() as any;
				this.queries.forEach((query) => {
					switch (query.method) {
						case 'where':
							const { operator, value } = query;
							collection = collection.where(
								query.key,
								operator,
								value
							);
							break;
						case 'whereIn':
							const { values } = query;
							values.forEach((value: any) => {
								collection = collection.where(
									query.key,
									'==',
									value
								);
							});
							break;
						case 'whereNotIn':
							query.values.forEach((value: any) => {
								collection = collection.where(
									query.key,
									'!=',
									value
								);
							});
							break;
						case 'limit':
							collection = collection.limit(query.amount);
							break;
					}
				});
				const snapshot = await collection.get();
				const data = new Collection<any>();
				snapshot.forEach((document: any) => {
					const body = {
						...document.data(),
						id: document.id,
					};
					const instance = new this.type();
					instance.forceFill(body);
					data.push(instance);
				});
				return resolve(data);
			} catch (error) {
				return reject(error);
			} finally {
				this.clearQueries();
			}
		});
	}

	load(relations: Array<string>) {
		return new Promise<this>(async (resolve, reject) => {
			try {
				const operations: Array<Promise<any>> = [];
				relations.forEach((relation) => {
					const promise = ((this as any)[
						relation
					]() as InteractsWithRelationship<this>).get();
					operations.push(promise);
				});
				const results = await Promise.all(operations);
				results.forEach((data, index) => {
					const name = relations[index];
					this.set(name, data);
				});
				return resolve(this);
			} catch (error) {
				return reject(error);
			}
		});
	}

	all() {
		return new Promise<Collection<this>>((resolve, reject) => {
			let collection = this.getCollection();
			collection
				.get()
				.then((snapshot) => {
					const data = new Collection<any>();
					snapshot.forEach((document) => {
						const body = {
							...document.data(),
							id: document.id,
						};
						const instance = new this.type();
						instance.forceFill(body);
						data.push(instance);
					});
					return resolve(data);
				})
				.catch((error) => reject(error));
		});
	}

	create(data?: any) {
		return new Promise<this>(async (resolve, reject) => {
			if (data) {
				this.fill(data);
			}
			if (Object.entries(this.data).length === 0) {
				return reject(new Error('There is no data.'));
			}
			try {
				const data = { ...this.data };
				const self = new this.type();
				self.fill(data);
				self.set(
					'created_at',
					firebase.firestore.FieldValue.serverTimestamp()
				);
				self.set(
					'updated_at',
					firebase.firestore.FieldValue.serverTimestamp()
				);
				self.callEvent('creating').callEvent('saving');
				const document = await (await self.collection.add(data)).get();
				self.forceFill({
					...document.data(),
					id: document.id,
				});
				self.callEvent('created').callEvent('saved');
				resolve(self as any);
			} catch (error) {
				reject(error);
			}
		});
	}

	update(data?: any) {
		if (data) {
			this.fill(data);
		}
		return new Promise<this>(async (resolve, reject) => {
			const oldUpdatedAt = this.get('updated_at');
			try {
				this.callEvent('updating').callEvent('saving');
				this.set(
					'updated_at',
					firebase.firestore.FieldValue.serverTimestamp()
				);
				const data = { ...this.data } as any;
				delete data.id;
				await this.collection.doc(this.data.id).update(data);
				const document = await this.collection.doc(this.data.id).get();
				this.forceFill({
					...document.data(),
					id: document.id,
				});
				this.callEvent('updated').callEvent('saved');
				return resolve(this);
			} catch (error) {
				this.set('updated_at', oldUpdatedAt);
				return reject(error);
			} finally {
				this.clearQueries();
			}
		});
	}

	save(data?: any): Promise<this> {
		if (data) {
			this.fill(data);
		}
		return !('id' in this.data) ||
			!this.data.id ||
			this.data.id.length === 0
			? this.create()
			: this.update();
	}

	getDates() {
		return {
			created_at: new Date(this.get('created_at').seconds),
			updated_at: new Date(this.get('updated_at').seconds),
		};
	}
}
