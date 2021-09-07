import { ModelData, ModelDataType } from './contracts';
import { Model } from './model';
import { QueryBuilder } from './query-builder';
import { BelongsTo } from './relations/belongs-to';
import { HasMany } from './relations/has-many';
import { HasOne } from './relations/has-one';

export abstract class HasRelationship<D extends ModelData> extends QueryBuilder<D> {
	protected hasMany<T extends Model, D = ModelDataType<T>>(relation: { new (): T }, name?: string): HasMany<T, D> {
		return new HasMany<T, D>(new relation(), this as unknown as Model, name);
	}

	protected hasOne<T extends Model, D = ModelDataType<T>>(relation: { new (): T }, name?: string): HasOne<T, D> {
		return new HasOne<T, D>(new relation(), this as unknown as Model, name);
	}

	protected belongsTo<T extends Model, D = ModelDataType<T>>(parent: { new (): T }, name?: string): BelongsTo<T, D> {
		return new BelongsTo<T, D>(this as unknown as T, new parent(), name);
	}
}
