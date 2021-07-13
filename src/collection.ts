import { Model } from './model';

export class Collection<T extends Model = any> extends Array<T> {
	async load(relations: Array<string>) {
		const results = await Promise.all(this.map((item) => item.load(relations)));
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

	includes(model: T) {
		const match = this.find((item) => item.get('id') === model.get('id'));
		return match || super.includes(model) ? true : false;
	}

	indexOf(model: T) {
		const index = this.findIndex((item) => item.get('id') === model.get('id'));
		return index;
	}

	replace(model: T, index?: number) {
		if (index) {
			return this.splice(index, 1, model);
		}
		const modelIndex = this.indexOf(model);
		return this.splice(modelIndex, 1, model);
	}

	remove(index: number) {
		return this.splice(index, 1);
	}

	get(item: string | T) {
		if (typeof item === 'string') {
			return this.find((i) => i.get('id') === item);
		}

		return this.find((i) => i.get('id') === item.get('id'));
	}

	set(item: T) {
		if (this.includes(item)) {
			this.replace(item, this.indexOf(item));
		} else {
			this.push(item);
		}

		return this;
	}
}
