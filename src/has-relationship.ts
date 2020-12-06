import { Model } from './model';
import { BelongsTo } from './relations/belongs-to';
import { HasMany } from './relations/has-many';

export abstract class HasRelationship {
	protected hasMany<T extends Model>(relation: T, name: string): HasMany<T> {
		return new HasMany<T>(relation, (this as unknown) as Model<any>, name);
	}

	protected belongsTo<T extends Model>(parent: T, name: string) {
		return new BelongsTo<T>((this as unknown) as T, parent, name);
	}
}
