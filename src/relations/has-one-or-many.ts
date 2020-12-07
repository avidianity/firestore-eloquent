import { Collection } from '../collection';
import { InteractsWithRelationship } from '../contracts';
import { Model } from '../model';
import { QueryBuilder } from '../query-builder';

export abstract class HasOneOrMany<T extends Model>
	extends QueryBuilder
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

	protected getForeignKey() {
		return this.parent.constructor.name.toLowerCase() + '_id';
	}
}
