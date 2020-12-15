import { Model } from './model';

export class Collection<T extends Model = any> extends Array<T> {
	async load(relations: Array<string>) {
		try {
			const results = await Promise.all(
				this.map((item) => item.load(relations))
			);
			results.forEach((item, index) => this.splice(index, 1, item));
			return this;
		} catch (error) {
			throw error;
		}
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
}
