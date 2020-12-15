import { ModelData } from '../contracts';
import { Model } from '../model';
import { QueryBuilder } from '../query-builder';

export class BelongsTo<
	T extends Model,
	D extends ModelData
> extends QueryBuilder<D> {
	protected child: T;
	protected parent: T;
	protected name: string;

	constructor(child: T, parent: T, name: string) {
		super();
		this.child = child;
		this.parent = parent;
		this.name = name;
	}

	async get() {
		try {
			this.queries.forEach((query) => {
				switch (query.method) {
					case 'where':
						const { operator, value } = query;
						this.parent.where(query.key, operator, value);
						break;
					case 'whereIn':
						this.parent.whereIn(query.key, query.values);
						break;
					case 'whereNotIn':
						this.parent.whereNotIn(query.key, query.values);
						break;
					case 'limit':
						this.parent.limit(query.amount);
						break;
				}
			});
			const parent = await this.parent.findOne(
				this.child.get(this.getForeignKey())
			);
			this.clearQueries();
			this.child.set(this.name, parent);
			return parent;
		} catch (error) {
			throw error;
		}
	}

	set(parent: T) {
		this.child.set(this.getForeignKey(), parent.get('id'));
		this.child.set(this.name, parent);
		return this;
	}

	async save(parent?: T) {
		if (parent) {
			this.parent = parent;
		}
		try {
			await this.parent.save();
			this.child.set(this.name, this.parent);
			return this.child;
		} catch (error) {
			throw error;
		}
	}

	delete() {
		throw new Error('Cannot delete parent model.');
	}

	protected getForeignKey() {
		return this.parent.constructor.name.toLowerCase() + '_id';
	}
}
