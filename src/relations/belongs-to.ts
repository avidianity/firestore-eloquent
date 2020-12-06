import { Model } from '../model';

export class BelongsTo<T extends Model> {
	protected child: T;
	protected parent: T;
	protected name: string;

	constructor(child: T, parent: T, name: string) {
		this.child = child;
		this.parent = parent;
		this.name = name;
	}

	get() {
		return new Promise<T>(async (resolve, reject) => {
			try {
				const parent = await this.parent.findOne(
					this.child.get(this.getForeignKey())
				);
				this.child.set(this.name, parent);
				return resolve(parent);
			} catch (error) {
				reject(error);
			}
		});
	}

	set(parent: T) {
		this.child.set(this.getForeignKey(), parent.get('id'));
		return this;
	}

	save(parent?: T) {
		if (parent) {
			this.parent = parent;
		}
		return new Promise<T>(async (resolve, reject) => {
			try {
				await this.parent.save();
				this.child.set(this.name, this.parent);
				return resolve(this.child);
			} catch (error) {
				return reject(error);
			}
		});
	}

	protected getForeignKey() {
		return this.parent.constructor.name.toLowerCase() + '_id';
	}
}
