import { QueryBuilder } from '../query-builder';
export class BelongsTo extends QueryBuilder {
    child;
    parent;
    name;
    constructor(child, parent, name) {
        super();
        this.child = child;
        this.parent = parent;
        this.name = name;
    }
    async get() {
        try {
            this.queries.forEach((query) => {
                switch (query.method) {
                    case 'where':
                        const { operator, value } = query;
                        this.parent.where(query.key, operator, value);
                        break;
                    case 'whereIn':
                        this.parent.whereIn(query.key, query.values);
                        break;
                    case 'whereNotIn':
                        this.parent.whereNotIn(query.key, query.values);
                        break;
                    case 'limit':
                        this.parent.limit(query.amount);
                        break;
                }
            });
            const parent = await this.parent.findOne(this.child.get(this.getForeignKey()));
            this.clearQueries();
            this.child.set(this.name, parent);
            return parent;
        }
        catch (error) {
            throw error;
        }
    }
    set(parent) {
        this.child.set(this.getForeignKey(), parent.get('id'));
        this.child.set(this.name, parent);
        return this;
    }
    async save(parent) {
        if (parent) {
            this.parent = parent;
        }
        try {
            await this.parent.save();
            this.child.set(this.name, this.parent);
            return this.child;
        }
        catch (error) {
            throw error;
        }
    }
    delete() {
        throw new Error('Cannot delete parent model.');
    }
    getForeignKey() {
        return this.parent.constructor.name.toLowerCase() + '_id';
    }
}
