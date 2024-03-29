import { ModelData, ModelDataType } from './contracts';
import { Model } from './model';
import { QueryBuilder } from './query-builder';
import { BelongsTo } from './relations/belongs-to';
import { HasMany } from './relations/has-many';
import { HasOne } from './relations/has-one';
export declare abstract class HasRelationship<D extends ModelData> extends QueryBuilder<D> {
    protected hasMany<T extends Model, D = ModelDataType<T>>(relation: {
        new (): T;
    }, name?: string): HasMany<T, D>;
    protected hasOne<T extends Model, D = ModelDataType<T>>(relation: {
        new (): T;
    }, name?: string): HasOne<T, D>;
    protected belongsTo<T extends Model, D = ModelDataType<T>>(parent: {
        new (): T;
    }, name?: string): BelongsTo<T, D>;
}
