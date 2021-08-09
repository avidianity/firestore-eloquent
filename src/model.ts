import { Collection } from './collection';
import { HasEvent } from './has-event';
import pluralize from 'pluralize';
import { InteractsWithRelationship, ModelData } from './contracts';
import { makeCollection } from './db';

export class Model<T extends ModelData = any> extends HasEvent<T> {
	protected fillables: Array<string>;
	protected data: T = {} as T;
	type: any = Model;

	constructor(data?: Partial<T>) {
		super();
		this.booting();
		this.fillables = this.fillable();

		if (!this.name || this.name.length === 0) {
			this.name = pluralize(this.constructor.name.toLowerCase());
		}

		if (!('id' in this.data)) {
			this.data.id === '';
		}
		if (data !== undefined) {
			this.fill(data);
		}
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
		return pluralize(this.name);
	}

	toJSON() {
		return this.getData();
	}

	async paginate(page: number, perPage: number) {
		try {
			let collection = this.getCollection() as any;
			this.queries.forEach((query) => {
				switch (query.method) {
					case 'where':
						const { operator, value } = query;
						collection = collection.where(query.key, operator, value);
						break;
					case 'whereIn':
						const { values } = query;
						values.forEach((value: any) => {
							collection = collection.where(query.key, '==', value);
						});
						break;
					case 'whereNotIn':
						query.values.forEach((value: any) => {
							collection = collection.where(query.key, '!=', value);
						});
						break;
					case 'limit':
						collection = collection.limit(query.amount);
						break;
				}
			});
			const snapshot = await collection
				.limit(perPage)
				.startAt(perPage * (page - 1))
				.get();

			const data = new Collection();
			snapshot.forEach((document: { data: () => T; id: any }) => {
				const body = {
					...document.data(),
					id: document.id,
				};
				const instance = new this.type();
				instance.forceFill(body);
				data.push(instance);
			});
			return data;
		} catch (error) {
			throw error;
		} finally {
			this.clearQueries();
		}
	}

	async findOne(id: string) {
		try {
			let collection = this.getCollection() as any;
			this.queries.forEach((query) => {
				switch (query.method) {
					case 'where':
						const { operator, value } = query;
						collection = collection.where(query.key, operator, value);
						break;
					case 'whereIn':
						const { values } = query;
						values.forEach((value: any) => {
							collection = collection.where(query.key, '==', value);
						});
						break;
					case 'whereNotIn':
						query.values.forEach((value: any) => {
							collection = collection.where(query.key, '!=', value);
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
		return makeCollection(this.getTableName());
	}

	fill(data: Partial<T>) {
		for (const [key, value] of Object.entries(data)) {
			if (this.fillables.find((filler) => filler === key) !== undefined || this.fillables.includes(key)) {
				this.set(key as keyof T, value);
			}
		}
		return this;
	}

	forceFill(data: Partial<T>) {
		for (const [key, value] of Object.entries(data)) {
			this.set(key as any, value);
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
						collection = collection.where(query.key, operator, value);
						break;
					case 'whereIn':
						const { values } = query;
						values.forEach((value: any) => {
							collection = collection.where(query.key, '==', value);
						});
						break;
					case 'whereNotIn':
						query.values.forEach((value: any) => {
							collection = collection.where(query.key, '!=', value);
						});
						break;
					case 'limit':
						collection = collection.limit(query.amount);
						break;
				}
			});
			await collection.doc(this.data.id).delete();
			this.callEvent('deleted');

			return;
		} catch (error) {
			throw error;
		} finally {
			this.clearQueries();
		}
	}

	set<K extends keyof T>(key: K, value: T[K]) {
		this.data[key] = value;
		return this;
	}

	get<K extends keyof T>(key: K): T[K] {
		if (!(key in this.data)) {
			return null as unknown as T[K];
		}
		const value = this.data[key];

		if (value instanceof Model) {
			return value.getData();
		} else if (value instanceof Collection) {
			return value.toJSON() as any;
		} else if (Array.isArray(value)) {
			return value.map((item) => {
				if (item instanceof Model) {
					return item.getData();
				}
				return item;
			}) as any;
		}

		return value;
	}

	getData(): T {
		const data: any = {};

		for (const key in this.data) {
			const value = this.data[key];

			if (value instanceof Model) {
				data[key] = value.getData();
			} else if (value instanceof Collection) {
				data[key] = value.toJSON();
			} else if (Array.isArray(value)) {
				data[key] = value.map((item) => {
					if (item instanceof Model) {
						return item.getData();
					}
					return item;
				});
			} else {
				data[key] = value;
			}
		}

		return data;
	}

	async first() {
		const collection = await this.limit(1).getAll();

		if (collection.length > 0) {
			return collection[0];
		}

		return null;
	}

	async getAll(): Promise<Collection<this>> {
		try {
			let collection = this.getCollection() as any;
			this.queries.forEach((query) => {
				switch (query.method) {
					case 'where':
						const { operator, value } = query;
						collection = collection.where(query.key, operator, value);
						break;
					case 'whereIn':
						const { values } = query;
						values.forEach((value: any) => {
							collection = collection.where(query.key, '==', value);
						});
						break;
					case 'whereNotIn':
						query.values.forEach((value: any) => {
							collection = collection.where(query.key, '!=', value);
						});
						break;
					case 'limit':
						collection = collection.limit(query.amount);
						break;
				}
			});
			const snapshot = await collection.get();
			const data = new Collection();

			snapshot.forEach((document: any) => {
				const body = {
					...document.data(),
					id: document.id,
				};
				const instance = new this.type();
				instance.forceFill(body);
				data.push(instance);
			});

			return data;
		} catch (error) {
			throw error;
		} finally {
			this.clearQueries();
		}
	}

	withoutRelations(): T {
		const data: any = {};

		for (const key in this.data) {
			const value = this.data[key];

			if (value instanceof Model === false) {
				data[key] = value;
			}
		}

		return data;
	}

	async load(relations: Array<string>) {
		const operations = relations.map((relation) => ((this as any)[relation]() as InteractsWithRelationship<this>).get());
		const results = await Promise.all(operations);
		results.forEach((data, index) => {
			const name = relations[index];
			this.set(name as keyof T, <any>data);
		});
		return this;
	}

	all() {
		return this.getAll();
	}

	async create(data?: T) {
		if (data) {
			this.fill(data);
		}

		this.set('created_at', new Date().toJSON());
		this.set('updated_at', new Date().toJSON());

		this.callEvent('creating').callEvent('saving');

		const ref = this.getCollection().doc();

		await ref.set({
			...this.data,
			id: ref.id,
		});

		this.callEvent('created').callEvent('saved');
		return this;
	}

	async update(data?: Partial<T>) {
		if (data) {
			this.fill(data);
		}
		const oldUpdatedAt = this.get('updated_at');
		try {
			this.callEvent('updating').callEvent('saving');
			this.set('updated_at', new Date().toJSON());

			await this.getCollection()
				.doc(this.data.id)
				.set({
					...this.withoutRelations(),
				});

			this.callEvent('updated').callEvent('saved');
			return this;
		} catch (error) {
			this.set('updated_at', oldUpdatedAt);
			throw error;
		}
	}

	id() {
		return this.get('id') as string;
	}

	save(data?: Partial<T>) {
		if (data) {
			this.fill(data);
		}
		return !('id' in this.data) || !this.data.id || this.data.id.length === 0 ? this.create() : this.update();
	}

	unset<K extends keyof T>(key: K) {
		delete this.data[key];
		return this;
	}

	has<K extends keyof T>(key: K) {
		return this.get(key) !== null;
	}
}
