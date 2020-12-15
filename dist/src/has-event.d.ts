import { HasRelationship } from './has-relationship';
export declare type EventTypes = 'creating' | 'created' | 'updating' | 'updated' | 'deleting' | 'deleted' | 'saving' | 'saved';
export declare type Callback<T = any> = (model: T) => void;
export declare type Event = {
    [key: string]: Callback;
};
export declare abstract class HasEvent extends HasRelationship {
    protected name: string;
    creating(callback: (thisArg: this) => void): this;
    created(callback: (thisArg: this) => void): this;
    updating(callback: (thisArg: this) => void): this;
    updated(callback: (thisArg: this) => void): this;
    deleting(callback: (thisArg: this) => void): this;
    deleted(callback: (thisArg: this) => void): this;
    saving(callback: (thisArg: this) => void): this;
    saved(callback: (thisArg: this) => void): this;
    callEvent(name: EventTypes): this;
    registerEvent(name: EventTypes, callback: Callback<this>): this;
}
