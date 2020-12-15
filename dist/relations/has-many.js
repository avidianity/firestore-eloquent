import { HasOneOrMany } from './has-one-or-many';
export class HasMany extends HasOneOrMany {
    async get() {
        try {
            this.queries.forEach((query) => {
                switch (query.method) {
                    case 'where':
                        const { operator, value } = query;
                        this.relation.where(query.key, operator, value);
                        break;
                    case 'whereIn':
                        this.relation.whereIn(query.key, query.values);
                        break;
                    case 'whereNotIn':
                        this.relation.whereNotIn(query.key, query.values);
                        break;
                    case 'limit':
                        this.relation.limit(query.amount);
                        break;
                }
            });
            const foreignKey = this.getForeignKey();
            const collection = await this.relation
                .where(foreignKey, '==', this.parent.get('id'))
                .getAll();
            this.clearQueries();
            this.parent.set(this.name, collection);
            return collection;
        }
        catch (error) {
            throw error;
        }
    }
    async find(id) {
        try {
            this.queries.forEach((query) => {
                switch (query.method) {
                    case 'where':
                        const { operator, value } = query;
                        this.relation.where(query.key, operator, value);
                        break;
                    case 'whereIn':
                        this.relation.whereIn(query.key, query.values);
                        break;
                    case 'whereNotIn':
                        this.relation.whereNotIn(query.key, query.values);
                        break;
                    case 'limit':
                        this.relation.limit(query.amount);
                        break;
                }
            });
            const foreignKey = this.getForeignKey();
            const model = await this.relation
                .where(foreignKey, '==', this.parent.get('id'))
                .findOne(id);
            this.clearQueries();
            return model;
        }
        catch (error) {
            throw error;
        }
    }
    async count() {
        try {
            const collection = await this.get();
            return collection.length;
        }
        catch (error) {
            throw error;
        }
    }
}
