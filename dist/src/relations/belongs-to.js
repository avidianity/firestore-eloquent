import { QueryBuilder } from '../query-builder';
export class BelongsTo extends QueryBuilder {
    constructor(child, parent, name) {
        super();
        this.child = child;
        this.parent = parent;
        this.name = name;
    }
    get() {
        return new Promise(async (resolve, reject) => {
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
                this.child.set(this.name, parent);
                return resolve(parent);
            }
            catch (error) {
                reject(error);
            }
            finally {
                this.clearQueries();
            }
        });
    }
    set(parent) {
        this.child.set(this.getForeignKey(), parent.get('id'));
        this.child.set(this.name, parent);
        return this;
    }
    save(parent) {
        if (parent) {
            this.parent = parent;
        }
        return new Promise(async (resolve, reject) => {
            try {
                await this.parent.save();
                this.child.set(this.name, this.parent);
                return resolve(this.child);
            }
            catch (error) {
                return reject(error);
            }
        });
    }
    delete() {
        throw new Error('Cannot delete parent model.');
    }
    getForeignKey() {
        return this.parent.constructor.name.toLowerCase() + '_id';
    }
}
