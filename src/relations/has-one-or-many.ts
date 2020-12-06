import { Collection } from '../collection';
import { InteractsWithRelationship } from '../contracts';
import { Model } from '../model';

export abstract class HasOneOrMany<T extends Model>
	implements InteractsWithRelationship<T> {
	protected relation: T;
	protected parent: Model<any>;
	protected name: string;

	constructor(relation: T, parent: Model<any>, name: string) {
		this.relation = relation;
		this.parent = parent;
		this.name = name;
	}

	get() {
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
