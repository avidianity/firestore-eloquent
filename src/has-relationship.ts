import { Model } from './model';
import { QueryBuilder } from './query-builder';
import { BelongsTo } from './relations/belongs-to';
import { HasMany } from './relations/has-many';
import { HasOne } from './relations/has-one';

export abstract class HasRelationship extends QueryBuilder {
	protected hasMany<T extends Model>(relation: T, name: string): HasMany<T> {
		return new HasMany<T>(relation, (this as unknown) as Model, name);
	}

	protected hasOne<T extends Model>(relation: T, name: string) {
		return new HasOne<T>(relation, (this as unknown) as Model, name);
	}

	protected belongsTo<T extends Model>(parent: T, name: string) {
		return new BelongsTo<T>((this as unknown) as T, parent, name);
	}
}
