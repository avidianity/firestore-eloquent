import { HasOneOrMany } from './has-one-or-many';
export class HasMany extends HasOneOrMany {
    get() {
        return new Promise((resolve, reject) => {
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
            this.relation
                .where(foreignKey, '==', this.parent.get('id'))
                .getAll()
                .then((collection) => {
                this.parent.set(this.name, collection);
                return resolve(collection);
            })
                .catch((error) => reject(error))
                .finally(() => this.clearQueries());
        });
    }
    find(id) {
        return new Promise(async (resolve, reject) => {
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
                return resolve(model);
            }
            catch (error) {
                return reject(error);
            }
        });
    }
    count() {
        return new Promise(async (resolve, reject) => {
            try {
                const collection = await this.get();
                return resolve(collection.length);
            }
            catch (error) {
                return reject(error);
            }
        });
    }
}
