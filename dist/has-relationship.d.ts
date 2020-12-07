import { Model } from './model';
import { QueryBuilder } from './query-builder';
import { BelongsTo } from './relations/belongs-to';
import { HasMany } from './relations/has-many';
import { HasOne } from './relations/has-one';
export declare abstract class HasRelationship extends QueryBuilder {
    protected hasMany<T extends Model>(relation: T, name: string): HasMany<T>;
    protected hasOne<T extends Model>(relation: T, name: string): HasOne<T>;
    protected belongsTo<T extends Model>(parent: T, name: string): BelongsTo<T>;
}
