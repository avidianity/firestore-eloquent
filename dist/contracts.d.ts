import { Collection } from './collection';
import { Model } from './model';
export interface ModelData {
    id?: string;
    created_at?: {
        nanoseconds: number;
        seconds: number;
    };
    updated_at?: {
        nanoseconds: number;
        seconds: number;
    };
}
export interface InteractsWithRelationship<T extends Model> {
    get(): Promise<T | Collection<T>>;
    create(data: any): Promise<T | Collection<T>>;
    save(instance?: T): Promise<T | Collection<T>>;
    update(data: any): Promise<T | Collection<T>>;
}
