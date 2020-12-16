import firebase from 'firebase/app';
import 'firebase/firestore';
import { Collection } from './collection';
const firestore = firebase.firestore();
export const collections = {};
export const listeners = {};
export function makeCollection(name) {
    if (!(name in collections)) {
        collections[name] = firestore.collection(name);
    }
    return collections[name];
}
export const listened = [];
export function listen(model) {
    const name = new model().getTableName();
    if (listened.includes(name)) {
        return;
    }
    if (!(name in collections)) {
        makeCollection(name);
    }
    const collection = collections[name];
    collection.onSnapshot((snapshot) => {
        const data = new Collection();
        snapshot.forEach((document) => {
            const self = new model();
            self.forceFill({
                ...document.data(),
                id: document.id,
            });
            data.push(self);
        });
        if (name in listeners) {
            listeners[name].forEach((listener) => {
                if (listener !== null) {
                    listener.success(data);
                }
            });
        }
    }, (error) => {
        if (name in listeners) {
            listeners[name].forEach((listener) => {
                if (listener !== null && listener.onError !== undefined) {
                    listener.onError(error);
                }
            });
        }
    });
    listened.push(name);
}
export function addListener(collection, success, onError) {
    const name = new collection().getTableName();
    if (!(name in listeners)) {
        listeners[name] = [];
    }
    return (listeners[name].push({
        success,
        onError,
    }) - 1);
}
export function removeListener(collection, index) {
    const name = new collection().getTableName();
    if (!(name in listeners)) {
        return;
    }
    listeners[name].splice(index, 1, null);
}
export function clearListeners(collection) {
    const name = new collection().getTableName();
    if (!(name in listeners)) {
        return;
    }
    listeners[name] = [];
}
