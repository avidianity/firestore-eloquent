import { HasOneOrMany } from './has-one-or-many';
export class HasOne extends HasOneOrMany {
    get() {
        return new Promise(async (resolve, reject) => {
            try {
                const child = await this.relation
                    .where(this.getForeignKey(), '==', this.parent.get('id'))
                    .first();
                if (!child) {
                    return reject(new Error('Child does not exist.'));
                }
                this.parent.set(this.name, child);
                return resolve(child);
            }
            catch (error) {
                return reject(error);
            }
        });
    }
}
