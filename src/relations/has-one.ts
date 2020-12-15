import { ModelData } from '../contracts';
import { Model } from '../model';
import { HasOneOrMany } from './has-one-or-many';

export class HasOne<T extends Model, D extends ModelData> extends HasOneOrMany<
	T,
	D
> {
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
			this.clearQueries();
			this.parent.set(this.name, child);
			return child;
		} catch (error) {
			throw error;
		}
	}
}
