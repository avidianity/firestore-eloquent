import { Collection } from './collection';
import { Model } from './model';
import firebase from 'firebase';
export interface ModelData {
    id?: string;
    created_at?: string;
    updated_at?: string;
}
export declare type ModelDataType<T> = T extends Model<infer D> ? D : ModelData;
export interface InteractsWithRelationship<T extends Model> {
    get(): Promise<T | Collection<T> | null>;
    create(data: any): Promise<T | Collection<T>>;
    save(instance?: T): Promise<T | Collection<T>>;
    update(data: any): Promise<T | Collection<T>>;
}
export interface Listener {
    success(collection: Array<any>): void;
    onError?: Function;
}
export declare type FirestoreCollection = firebase.firestore.CollectionReference<firebase.firestore.DocumentData> | firebase.firestore.Query<firebase.firestore.DocumentData>;
