export class Collection extends Array {
    load(relations) {
        return new Promise(async (resolve, reject) => {
            const operations = [];
            this.forEach((item) => operations.push(item.load(relations)));
            try {
                const results = await Promise.all(operations);
                results.forEach((item, index) => this.splice(index, 1, item));
                return resolve(this);
            }
            catch (error) {
                return reject(error);
            }
        });
    }
    save() {
        return Promise.all(this.map((item) => item.save()));
    }
    delete() {
        return Promise.all(this.map((item) => item.delete()));
    }
}
