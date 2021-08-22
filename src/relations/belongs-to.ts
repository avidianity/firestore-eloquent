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
		this.name = name || parent.getTableName();
	}

	create(data?: Partial<D>): Promise<T> {
		throw new Error('Cannot create parent.');
	}

	async update(data?: Partial<D>) {
		const parent = await this.parent.update(data);
		this.child.set(this.name, parent);
		return parent;
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
					case 'limit':
						this.parent.limit(query.amount);
						break;
				}
			});

			const parent = await this.parent.findOneOrFail(this.child.get(this.getForeignKey()));

			this.child.set(this.name, parent);

			return parent;
		} catch (error) {
			this.child.set(this.name, null);
			return null;
		} finally {
			this.clearQueries();
		}
	}

	async set(parent: T) {
		this.child.set(this.getForeignKey(), parent.get('id'));
		this.child.set(this.name, parent);
		await this.child.save();
		return this;
	}

	async save(parent?: T) {
		if (parent) {
			this.parent = parent;
		}
		try {
			await this.set(this.parent);
			await this.parent.save();
			return this.parent;
		} catch (error) {
			throw error;
		}
	}

	async delete(): Promise<void> {
		throw new Error('Cannot delete parent model.');
	}

	protected getForeignKey() {
		return `${this.name}_id`;
	}
}
