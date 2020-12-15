export class Collection extends Array {
    async load(...relations) {
        const results = await Promise.all(this.map((item) => item.load(...relations)));
        results.forEach((item, index) => this.splice(index, 1, item));
        return this;
    }
    toJSON() {
        return this.map((item) => item.toJSON());
    }
    save() {
        return Promise.all(this.map((item) => item.save()));
    }
    async delete() {
        await Promise.all(this.map((item) => item.delete()));
    }
    includes(model) {
        const match = this.find((item) => item.get('id') === model.get('id'));
        return match || super.includes(model) ? true : false;
    }
    indexOf(model) {
        const index = this.findIndex((item) => item.get('id') === model.get('id'));
        return index;
    }
    replace(model, index) {
        if (index) {
            return this.splice(index, 1, model);
        }
        const modelIndex = this.indexOf(model);
        return this.splice(modelIndex, 1, model);
    }
    remove(index) {
        return this.splice(index, 1);
    }
}
