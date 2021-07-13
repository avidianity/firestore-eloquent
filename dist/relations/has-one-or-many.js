import { QueryBuilder } from '../query-builder';
export class HasOneOrMany extends QueryBuilder {
    relation;
    parent;
    name;
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
    async create(data) {
        try {
            data[this.getForeignKey()] = this.parent.get('id');
            const model = new this.relation.type();
            model.fill(data);
            await model.save();
            return model;
        }
        catch (error) {
            throw error;
        }
    }
    async update(data) {
        try {
            data[this.getForeignKey()] = this.parent.get('id');
            this.relation.fill(data);
            await this.relation.save();
            return this.relation;
        }
        catch (error) {
            throw error;
        }
    }
    save(instance) {
        let relation = instance || this.relation;
        const data = relation.getData();
        data[this.getForeignKey()] = this.parent.get('id');
        return relation.get('id') === null
            ? relation.create(data)
            : relation.update(data);
    }
    async first() {
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
            return child;
        }
        catch (error) {
            throw error;
        }
        finally {
            this.clearQueries();
        }
    }
    async delete() {
        try {
            const modelsOrModel = await this.get();
            if (modelsOrModel) {
                await modelsOrModel.delete();
            }
            this.parent.unset(this.name);
            return;
        }
        catch (error) {
            throw error;
        }
    }
    getForeignKey() {
        return this.parent.constructor.name.toLowerCase() + '_id';
    }
}
