import { HasRelationship } from './has-relationship';
const events = {
    creating: [],
    created: [],
    updating: [],
    updated: [],
    deleting: [],
    deleted: [],
    saving: [],
    saved: [],
};
export class HasEvent extends HasRelationship {
    creating(callback) {
        return this.registerEvent('creating', callback);
    }
    created(callback) {
        return this.registerEvent('created', callback);
    }
    updating(callback) {
        return this.registerEvent('updating', callback);
    }
    updated(callback) {
        return this.registerEvent('updated', callback);
    }
    deleting(callback) {
        return this.registerEvent('deleting', callback);
    }
    deleted(callback) {
        return this.registerEvent('deleted', callback);
    }
    saving(callback) {
        return this.registerEvent('saving', callback);
    }
    saved(callback) {
        return this.registerEvent('saved', callback);
    }
    callEvent(name) {
        events[name].forEach((callback) => callback(this));
        return this;
    }
    registerEvent(name, callback) {
        events[name].push(callback);
        return this;
    }
}
