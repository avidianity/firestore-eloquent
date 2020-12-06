export class BelongsTo {
    constructor(child, parent, name) {
        this.child = child;
        this.parent = parent;
        this.name = name;
    }
    get() {
        return new Promise(async (resolve, reject) => {
            try {
                const parent = await this.parent.findOne(this.child.get(this.getForeignKey()));
                this.child.set(this.name, parent);
                return resolve(parent);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    set(parent) {
        this.child.set(this.getForeignKey(), parent.get('id'));
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
    getForeignKey() {
        return this.parent.constructor.name.toLowerCase() + '_id';
    }
}
