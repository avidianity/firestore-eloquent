import firebase from 'firebase/app';
import 'firebase/firestore';
import { Collection } from './collection';
import { Listener } from './contracts';
import { Model } from './model';
export declare const collections: {
    [key: string]: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
};
export declare const listeners: {
    [key: string]: Array<Listener | null>;
};
export declare function makeCollection(name: string): firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
export declare const listened: Array<string>;
export declare function listen(model: typeof Model): void;
export declare function addListener<T extends Model>(collection: typeof Model, success: (models: Collection<T>) => void, onError?: Function): number;
export declare function removeListener(collection: typeof Model, index: number): void;
export declare function clearListeners(collection: typeof Model): void;
