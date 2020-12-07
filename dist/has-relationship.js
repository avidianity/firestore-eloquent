import { QueryBuilder } from './query-builder';
import { BelongsTo } from './relations/belongs-to';
import { HasMany } from './relations/has-many';
import { HasOne } from './relations/has-one';
export class HasRelationship extends QueryBuilder {
    hasMany(relation, name) {
        return new HasMany(relation, this, name);
    }
    hasOne(relation, name) {
        return new HasOne(relation, this, name);
    }
    belongsTo(parent, name) {
        return new BelongsTo(this, parent, name);
    }
}
