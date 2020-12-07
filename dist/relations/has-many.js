import { HasOneOrMany } from './has-one-or-many';
export class HasMany extends HasOneOrMany {
    get() {
        return new Promise((resolve, reject) => {
            const foreignKey = this.getForeignKey();
            this.relation
                .where(foreignKey, '==', this.parent.get('id'))
                .getAll()
                .then((collection) => {
                this.parent.set(this.name, collection);
                return resolve(collection);
            })
                .catch((error) => reject(error));
        });
    }
    find(id) {
        return new Promise(async (resolve, reject) => {
            try {
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
}
