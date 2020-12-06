export class HasOneOrMany {
    constructor(relation, parent, name) {
        this.relation = relation;
        this.parent = parent;
        this.name = name;
    }
    get() {
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
    getForeignKey() {
        return this.parent.constructor.name.toLowerCase() + '_id';
    }
}
