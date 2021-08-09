import { Collection } from '../collection';
import { InteractsWithRelationship, ModelData } from '../contracts';
import { Model } from '../model';
import { QueryBuilder } from '../query-builder';

export abstract class HasOneOrMany<T extends Model, D extends ModelData> extends QueryBuilder<D> implements InteractsWithRelationship<T> {
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

	async create(data: any) {
		try {
			const model = new this.relation.type();
			model.fill(data);
			model.set(this.getForeignKey(), this.parent.get('id'));
			await model.save();
			return model;
		} catch (error) {
			throw error;
		}
	}

	async update(data: any) {
		try {
			this.relation.fill(data);
			this.relation.set(this.getForeignKey(), this.parent.get('id'));
			await this.relation.save();
			return this.relation;
		} catch (error) {
			throw error;
		}
	}

	save(instance?: T) {
		const relation = instance || this.relation;
		const data = relation.getData();
		relation.set(this.getForeignKey(), this.parent.get('id'));
		return relation.get('id') === null ? relation.create(data) : relation.update(data);
	}

	async first() {
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
			const child = await this.relation.where(this.getForeignKey(), '==', this.parent.get('id')).first();
			this.parent.set(this.name, child);
			return child;
		} catch (error) {
			throw error;
		} finally {
			this.clearQueries();
		}
	}

	async delete() {
		try {
			const modelsOrModel = await this.get();
			if (modelsOrModel) {
				await modelsOrModel.delete();
			}
			this.parent.unset(this.name);
			return;
		} catch (error) {
			throw error;
		}
	}

	protected getForeignKey() {
		return this.parent.name.toLowerCase() + '_id';
	}
}
