import { BelongsTo } from './relations/belongs-to';
import { HasMany } from './relations/has-many';
export class HasRelationship {
    hasMany(relation, name) {
        return new HasMany(relation, this, name);
    }
    belongsTo(parent, name) {
        return new BelongsTo(this, parent, name);
    }
}
