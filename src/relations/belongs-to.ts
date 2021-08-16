import { isSingular, singular } from 'pluralize';
import { InteractsWithRelationship, ModelData } from '../contracts';
import { Model } from '../model';
import { QueryBuilder } from '../query-builder';

export class BelongsTo<T extends Model, D extends ModelData> extends QueryBuilder<D> implements InteractsWithRelationship<T> {
	protected child: T;
	protected parent: T;
	protected name: string;

	constructor(child: T, parent: T, name?: string) {
		super();
		this.child = child;
		this.parent = parent;
		this.name = name || singular(parent.name);
	}

	create() {
		throw new Error('Cannot create parent.');
		return new Promise<T>(() => {});
	}

	async update(data: D) {
		const parent = await this.parent.update(data);
		this.child.set(this.name, parent);
		return parent;
	}

	async get() {
		try {
			const id = this.child.get(this.getForeignKey());

			if (typeof id !== 'string' || id.length === 0) {
				return null;
			}

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

			const parent = await this.parent.findOne(id);

			this.child.set(this.name, parent);

			return parent;
		} catch (error) {
			throw error;
		} finally {
			this.clearQueries();
		}
	}

	set(parent: T) {
		this.child.set(this.getForeignKey(), parent.get('id'));
		this.child.set(this.name, parent);
		this.child.save().catch(console.error);
		return this;
	}

	async save(parent?: T) {
		if (parent) {
			this.parent = parent;
		}
		try {
			await this.parent.save();
			this.set(this.parent);
			return this.child;
		} catch (error) {
			throw error;
		}
	}

	delete() {
		throw new Error('Cannot delete parent model.');
	}

	protected getForeignKey() {
		return (isSingular(this.name) ? this.name : singular(this.name) + '_id').toLowerCase();
	}
}
