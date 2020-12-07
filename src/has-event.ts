import { HasRelationship } from './has-relationship';

export type EventTypes =
	| 'creating'
	| 'created'
	| 'updating'
	| 'updated'
	| 'deleting'
	| 'deleted'
	| 'saving'
	| 'saved';

export type Callback<T = any> = (model: T) => void;

const events = {
	creating: [] as Array<Callback>,
	created: [] as Array<Callback>,
	updating: [] as Array<Callback>,
	updated: [] as Array<Callback>,
	deleting: [] as Array<Callback>,
	deleted: [] as Array<Callback>,
	saving: [] as Array<Callback>,
	saved: [] as Array<Callback>,
};

export abstract class HasEvent extends HasRelationship {
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
		events[name].forEach((callback) => callback(this));
		return this;
	}

	registerEvent(name: EventTypes, callback: Callback<this>) {
		events[name].push(callback);
		return this;
	}
}
