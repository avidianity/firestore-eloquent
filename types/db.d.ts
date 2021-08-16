import firebase from 'firebase/app';
import 'firebase/firestore';
import { Collection } from './collection';
import { Listener } from './contracts';
import { Model } from './model';
export declare function getFirestore(): firebase.firestore.Firestore;
export declare function setFirestore(firestore: firebase.firestore.Firestore): void;
export declare const collections: {
    [key: string]: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
};
export declare const listeners: {
    [key: string]: Array<Listener | null>;
};
export declare function makeCollection(name: string): firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
export declare const listened: Array<string>;
export declare function listen<T extends Model>(model: {
    new (): T;
}): void;
export declare function addListener<T extends Model>(collection: {
    new (): T;
}, success: (models: Collection<T>) => void, onError?: Function): number;
export declare function removeListener<T extends Model>(model: {
    new (): T;
}, index: number): void;
export declare function clearListeners<T extends Model>(model: {
    new (): T;
}): void;
