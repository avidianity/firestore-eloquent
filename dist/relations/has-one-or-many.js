import { QueryBuilder } from '../query-builder';
export class HasOneOrMany extends QueryBuilder {
    constructor(relation, parent, name) {
        super();
        this.relation = relation;
        this.parent = parent;
        this.name = name;
    }
    get() {
        throw new Error('get() needs to be defined on the child class.');
        return new Promise(() => { });
    }
    create(data) {
        return new Promise(async (resolve, reject) => {
            try {
                data[this.getForeignKey()] = this.parent.get('id');
                const model = new this.relation.type();
                model.fill(data);
                await model.save();
                return resolve(model);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    update(data) {
        return new Promise(async (resolve, reject) => {
            try {
                data[this.getForeignKey()] = this.parent.get('id');
                this.relation.fill(data);
                await this.relation.save();
                return resolve(this.relation);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    save(instance) {
        let relation = instance || this.relation;
        const data = relation.getData();
        data[this.getForeignKey()] = this.parent.get('id');
        return relation.get('id') === null
            ? relation.create(data)
            : relation.update(data);
    }
    first() {
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
                const child = await this.relation
                    .where(this.getForeignKey(), '==', this.parent.get('id'))
                    .first();
                this.parent.set(this.name, child);
                return resolve(child);
            }
            catch (error) {
                return reject(error);
            }
            finally {
                this.clearQueries();
            }
        });
    }
    delete() {
        return new Promise(async (resolve, reject) => {
            try {
                const modelsOrModel = await this.get();
                if (modelsOrModel) {
                    await modelsOrModel.delete();
                }
                this.parent.set(this.name, null);
                return resolve();
            }
            catch (error) {
                return reject(error);
            }
        });
    }
    getForeignKey() {
        return this.parent.constructor.name.toLowerCase() + '_id';
    }
}
