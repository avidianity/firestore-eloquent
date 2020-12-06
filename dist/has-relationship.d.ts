import { Model } from './model';
import { BelongsTo } from './relations/belongs-to';
import { HasMany } from './relations/has-many';
export declare abstract class HasRelationship {
    protected hasMany<T extends Model>(relation: T, name: string): HasMany<T>;
    protected belongsTo<T extends Model>(parent: T, name: string): BelongsTo<T>;
}
