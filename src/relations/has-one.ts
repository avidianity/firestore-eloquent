import { Model } from '../model';
import { HasOneOrMany } from './has-one-or-many';

export class HasOne<T extends Model> extends HasOneOrMany<T> {
	get() {
		return new Promise<T>(async (resolve, reject) => {
			try {
				const child = await this.relation
					.where(this.getForeignKey(), '==', this.parent.get('id'))
					.first();
				if (!child) {
					return reject(new Error('Child does not exist.'));
				}
				this.parent.set(this.name, child);
				return resolve((child as unknown) as T);
			} catch (error) {
				return reject(error);
			}
		});
	}
}
