import { Collection } from '../collection';
import { Model } from '../model';
import { HasOneOrMany } from './has-one-or-many';

export class HasMany<T extends Model> extends HasOneOrMany<T> {
	get() {
		return new Promise<Collection<T>>((resolve, reject) => {
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
			const foreignKey = this.getForeignKey();
			this.relation
				.where(foreignKey, '==', this.parent.get('id'))
				.getAll()
				.then((collection) => {
					this.parent.set(this.name, collection);
					return resolve(collection as any);
				})
				.catch((error) => reject(error))
				.finally(() => this.clearQueries());
		});
	}

	find(id: string): Promise<T> {
		return new Promise(async (resolve, reject) => {
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
				const foreignKey = this.getForeignKey();
				const model = await this.relation
					.where(foreignKey, '==', this.parent.get('id'))
					.findOne(id);
				return resolve(model);
			} catch (error) {
				return reject(error);
			}
		});
	}

	count() {
		return new Promise<number>(async (resolve, reject) => {
			try {
				const collection = await this.get();
				return resolve(collection.length);
			} catch (error) {
				return reject(error);
			}
		});
	}
}
