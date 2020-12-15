import { Collection } from './collection';
import { HasEvent } from './has-event';
import pluralize from 'pluralize';
import { InteractsWithRelationship, ModelData } from './contracts';
import { makeCollection } from './db';
import firebase from 'firebase';

export class Model<T extends ModelData = any> extends HasEvent {
	protected fillables: Array<string>;
	protected data: T = {} as T;
	type: any = Model;

	constructor(data?: T) {
		super();
		this.booting();
		this.fillables = this.fillable();
		if (this.name.length === 0) {
			this.name = pluralize(this.constructor.name.toLowerCase());
		}
		if (!('id' in this.data)) {
			this.data.id === '';
		}
		if (data !== undefined) {
			this.fill(data);
		}
		makeCollection(this.name);
		this.booted();
	}

	protected fillable(): Array<string> {
		return [];
	}

	protected booting() {}

	protected booted() {}

	entries() {
		return Object.entries(this.getData());
	}

	values() {
		return Object.values(this.getData());
	}

	keys() {
		return Object.keys(this.getData());
	}

	getTableName() {
		return this.name;
	}

	async findOne(id: string) {
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
				throw new Error('Model does not exist.');
			}
			const body = {
				...document.data(),
				id: document.id,
			};
			this.forceFill(body);
			return this;
		} catch (error) {
			throw error;
		} finally {
			this.clearQueries();
		}
	}

	getCollection() {
		return makeCollection(this.name);
	}

	fill(data: T) {
		for (const [key, value] of Object.entries(data)) {
			if (
				this.fillables.find((filler) => filler === key) !== undefined ||
				this.fillables.includes(key)
			) {
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

	async count() {
		const collection = await this.all();
		return collection.length;
	}

	async delete() {
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
			this.clearQueries();
			return;
		} catch (error) {
			throw error;
		}
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
		return {
			...this.data,
			...this.getDates(),
		};
	}

	async first() {
		try {
			const collection = await this.getAll();
			if (collection.length > 0) {
				return collection[0];
			}
			return null;
		} catch (error) {
			throw error;
		}
	}

	async getAll(): Promise<Collection<this>> {
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
			this.clearQueries();
			return data;
		} catch (error) {
			throw error;
		}
	}

	async load(relations: Array<string>) {
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
		return this;
	}

	all() {
		return this.getAll();
	}

	async create(data?: any) {
		if (data) {
			this.fill(data);
		}
		const newData = { ...this.data };
		this.fill(newData);
		this.set('created_at', firebase.firestore.FieldValue.serverTimestamp());
		this.set('updated_at', firebase.firestore.FieldValue.serverTimestamp());
		this.callEvent('creating').callEvent('saving');
		const ref = await this.getCollection().add(newData);
		const document = await ref.get();
		this.forceFill({
			...document.data(),
			id: document.id,
		});
		this.callEvent('created').callEvent('saved');
		return this;
	}

	async update(data?: any) {
		if (data) {
			this.fill(data);
		}
		const oldUpdatedAt = this.get('updated_at');
		try {
			this.callEvent('updating').callEvent('saving');
			this.set(
				'updated_at',
				firebase.firestore.FieldValue.serverTimestamp()
			);
			const data = { ...this.data } as any;
			delete data.id;
			await this.getCollection().doc(this.data.id).update(data);
			const document = await this.getCollection().doc(this.data.id).get();
			this.forceFill({
				...document.data(),
				id: document.id,
			});
			this.callEvent('updated').callEvent('saved');
			return this;
		} catch (error) {
			this.set('updated_at', oldUpdatedAt);
			throw error;
		}
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

	has(key: string) {
		return this.get(key) !== null;
	}

	getDates() {
		return {
			created_at: this.has('created_at')
				? new Date(this.get('created_at').seconds)
				: null,
			updated_at: this.has('updated_at')
				? new Date(this.get('updated_at').seconds)
				: null,
		};
	}
}
