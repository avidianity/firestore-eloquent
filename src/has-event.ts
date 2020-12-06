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

const events = {
	creating: [] as Array<Function>,
	created: [] as Array<Function>,
	updating: [] as Array<Function>,
	updated: [] as Array<Function>,
	deleting: [] as Array<Function>,
	deleted: [] as Array<Function>,
	saving: [] as Array<Function>,
	saved: [] as Array<Function>,
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

	registerEvent(name: EventTypes, callback: Function) {
		events[name].push(callback);
		return this;
	}
}
