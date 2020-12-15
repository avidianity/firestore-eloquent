import { Collection } from '../collection';
import { InteractsWithRelationship, ModelData } from '../contracts';
import { Model } from '../model';
import { QueryBuilder } from '../query-builder';

export abstract class HasOneOrMany<T extends Model, D extends ModelData>
	extends QueryBuilder<D>
	implements InteractsWithRelationship<T> {
	protected relation: T;
	protected parent: Model<any>;
	protected name: string;

	constructor(relation: T, parent: Model, name: string) {
		super();
		this.relation = relation;
		this.parent = parent;
		this.name = name;
	}

	get() {
		throw new Error('get() needs to be defined on the child class.');
		return new Promise<T | Collection<T> | any>(() => {});
	}

	create(data: any) {
		return new Promise<T>(async (resolve, reject) => {
			try {
				data[this.getForeignKey()] = this.parent.get('id');
				const model = new this.relation.type();
				model.fill(data);
				await model.save();
				return resolve(model);
			} catch (error) {
				reject(error);
			}
		});
	}

	update(data: any) {
		return new Promise<T>(async (resolve, reject) => {
			try {
				data[this.getForeignKey()] = this.parent.get('id');
				this.relation.fill(data);
				await this.relation.save();
				return resolve(this.relation);
			} catch (error) {
				reject(error);
			}
		});
	}

	save(instance?: T) {
		let relation = instance || this.relation;
		const data = relation.getData();
		data[this.getForeignKey()] = this.parent.get('id');
		return relation.get('id') === null
			? relation.create(data)
			: relation.update(data);
	}

	first() {
		return new Promise<T | null>(async (resolve, reject) => {
			try {
				this.queries.forEach((query) => {
					switch (query.method) {
						case 'where':
							const { operator, value } = query;
							this.relation.where(query.key, operator, value);
							break;
						case 'whereIn':
							this.relation.whereIn(query.key, query.values);
							break;
						case 'whereNotIn':
							this.relation.whereNotIn(query.key, query.values);
							break;
						case 'limit':
							this.relation.limit(query.amount);
							break;
					}
				});
				const child = await this.relation
					.where(this.getForeignKey(), '==', this.parent.get('id'))
					.first();
				this.parent.set(this.name, child);
				return resolve((child as unknown) as T | null);
			} catch (error) {
				return reject(error);
			} finally {
				this.clearQueries();
			}
		});
	}

	delete() {
		return new Promise<void>(async (resolve, reject) => {
			try {
				const modelsOrModel = await this.get();
				if (modelsOrModel) {
					await modelsOrModel.delete();
				}
				this.parent.set(this.name, null);
				return resolve();
			} catch (error) {
				return reject(error);
			}
		});
	}

	protected getForeignKey() {
		return this.parent.constructor.name.toLowerCase() + '_id';
	}
}
