import { ModelData } from '../contracts';
import { Model } from '../model';
import { HasOneOrMany } from './has-one-or-many';

export class HasOne<T extends Model, D extends ModelData> extends HasOneOrMany<
	T,
	D
> {
	get() {
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
				if (!child) {
					return reject(new Error('Child does not exist.'));
				}
				this.parent.set(this.name, child);
				return resolve((child as unknown) as T | null);
			} catch (error) {
				return reject(error);
			} finally {
				this.clearQueries();
			}
		});
	}
}
