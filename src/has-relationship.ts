import { ModelData } from './contracts';
import { Model } from './model';
import { QueryBuilder } from './query-builder';
import { BelongsTo } from './relations/belongs-to';
import { HasMany } from './relations/has-many';
import { HasOne } from './relations/has-one';

export abstract class HasRelationship<D extends ModelData> extends QueryBuilder<D> {
	protected hasMany<T extends Model>(relation: T, name?: string): HasMany<T, D> {
		return new HasMany<T, D>(relation, this as unknown as Model, name);
	}

	protected hasOne<T extends Model>(relation: T, name?: string): HasOne<T, D> {
		return new HasOne<T, D>(relation, this as unknown as Model, name);
	}

	protected belongsTo<T extends Model>(parent: T, name?: string) {
		return new BelongsTo<T, D>(this as unknown as T, parent, name);
	}
}
