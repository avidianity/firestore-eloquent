import { Collection } from './collection';
import { HasEvent } from './has-event';
import { FirestoreCollection, InteractsWithRelationship, ModelData } from './contracts';
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
			this.name = this.constructor.name.toLowerCase();
		}

		if (!('id' in this.data)) {
			this.data.id === '';
		}
		if (data !== undefined) {
			this.fill(data);
		}
		this.booted();
	}

	static createQueryBuilder() {
		return new this();
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

	toJSON() {
		return this.getData();
	}

	toRawData() {
		return { ...this.data };
	}

	static make(data?: any) {
		return new this(data);
	}

	async paginate(page: number, perPage: number): Promise<Collection<this, T>> {
		try {
			let collection: FirestoreCollection = this.getCollection();
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
				.orderBy('id')
				.startAt(perPage * (page - 1))
				.limit(perPage)
				.get();

			const data = new Collection();
			snapshot.forEach((document) => {
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

	async findOne(id: string): Promise<this | null> {
		try {
			const document = await this.getCollection().doc(id).get();

			if (!document.exists) {
				return null;
			}

			const body: any = {
				...document.data(),
				id: document.id,
			};

			this.forceFill(body);
			return this;
		} catch (error) {
			console.error(error);
			return null;
		} finally {
			this.clearQueries();
		}
	}

	async findOneOrFail(id: string) {
		const model = await this.findOne(id);

		if (!model) {
			throw new Error('Model does not exist.');
		}

		return model;
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
			let collection = this.getCollection();
			await collection.doc(this.id()).delete();
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

	async firstOrFail() {
		const item = await this.first();

		if (!item) {
			throw new Error('Model does not exist.');
		}

		return item;
	}

	async getAll(): Promise<Collection<this, T>> {
		try {
			let collection: FirestoreCollection = this.getCollection();
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

			snapshot.forEach((document) => {
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

			if (value instanceof Model === false && value instanceof Collection === false) {
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

	async create(data?: Partial<T>) {
		if (data) {
			this.fill(data);
		}

		this.set('created_at', new Date().toJSON());
		this.set('updated_at', new Date().toJSON());

		this.callEvent('creating').callEvent('saving');

		const ref = this.getCollection().doc();

		const payload = {
			...this.withoutRelations(),
			id: ref.id,
		};

		await ref.set(payload);

		this.forceFill(payload);

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

			const data = this.withoutRelations();

			await this.getCollection().doc(data.id).set(data);

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
		return this.has('id') ? this.update() : this.create();
	}

	unset<K extends keyof T>(key: K) {
		delete this.data[key];
		return this;
	}

	has<K extends keyof T>(key: K) {
		return key in this.data || this.get(key) !== null;
	}
}
