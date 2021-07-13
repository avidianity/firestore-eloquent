import { Collection } from './collection';
import { Model } from './model';
export interface ModelData {
    id?: string;
    created_at?: string;
    updated_at?: string;
}
export interface InteractsWithRelationship<T extends Model> {
    get(): Promise<T | Collection<T>>;
    create(data: any): Promise<T | Collection<T>>;
    save(instance?: T): Promise<T | Collection<T>>;
    update(data: any): Promise<T | Collection<T>>;
}
export interface Listener {
    success(collection: Array<any>): void;
    onError?: Function;
}
