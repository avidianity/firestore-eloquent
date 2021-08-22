import { ModelData } from '../contracts';
import { Model } from '../model';
import { HasOneOrMany } from './has-one-or-many';

export class HasMany<T extends Model, D extends ModelData> extends HasOneOrMany<T, D> {
	async get() {
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
					case 'limit':
						this.relation.limit(query.amount);
						break;
				}
			});
			const foreignKey = this.getForeignKey();
			const collection = await this.relation.where(foreignKey, '==', this.parent.get('id')).getAll();

			this.parent.set(this.name, collection);
			return collection;
		} catch (error) {
			throw error;
		} finally {
			this.clearQueries();
		}
	}

	async find(id: string): Promise<T | null> {
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
					case 'limit':
						this.relation.limit(query.amount);
						break;
				}
			});
			const foreignKey = this.getForeignKey();
			const model = await this.relation.where(foreignKey, '==', this.parent.get('id')).findOne(id);
			return model;
		} catch (error) {
			throw error;
		} finally {
			this.clearQueries();
		}
	}

	async findOrFail(id: string) {
		const model = await this.find(id);

		if (!model) {
			throw new Error('Model does not exist.');
		}

		return model;
	}

	async count() {
		try {
			const collection = await this.get();
			return collection.length;
		} catch (error) {
			throw error;
		}
	}
}
