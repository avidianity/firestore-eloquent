import { ModelData } from './contracts';
import { HasRelationship } from './has-relationship';

export type EventTypes = 'creating' | 'created' | 'updating' | 'updated' | 'deleting' | 'deleted' | 'saving' | 'saved';

export type Callback<T = any> = (model: T) => void;

export type Event = {
	[key: string]: Callback;
};

const events = {
	creating: {} as Event,
	created: {} as Event,
	updating: {} as Event,
	updated: {} as Event,
	deleting: {} as Event,
	deleted: {} as Event,
	saving: {} as Event,
	saved: {} as Event,
};

export abstract class HasEvent<T extends ModelData> extends HasRelationship<T> {
	protected name: string;

	constructor() {
		super();
		this.name = '';
	}

	creating(callback: (thisArg: this) => void) {
		return this.registerEvent('creating', callback);
	}
	created(callback: (thisArg: this) => void) {
		return this.registerEvent('created', callback);
	}
	updating(callback: (thisArg: this) => void) {
		return this.registerEvent('updating', callback);
	}
	updated(callback: (thisArg: this) => void) {
		return this.registerEvent('updated', callback);
	}
	deleting(callback: (thisArg: this) => void) {
		return this.registerEvent('deleting', callback);
	}
	deleted(callback: (thisArg: this) => void) {
		return this.registerEvent('deleted', callback);
	}
	saving(callback: (thisArg: this) => void) {
		return this.registerEvent('saving', callback);
	}
	saved(callback: (thisArg: this) => void) {
		return this.registerEvent('saved', callback);
	}

	callEvent(name: EventTypes) {
		if (!(this.name in events[name])) {
			return this;
		}
		const callback = events[name][this.name];
		callback(this);
		return this;
	}

	registerEvent(name: EventTypes, callback: Callback<this>) {
		if (!(this.name in events[name])) {
			events[name][this.name] = callback;
		}
		return this;
	}
}
