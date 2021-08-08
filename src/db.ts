import firebase from 'firebase/app';
import 'firebase/firestore';
import { Collection } from './collection';
import { Listener } from './contracts';
import { Model } from './model';

const firestore = firebase.firestore();

export const collections: {
	[key: string]: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
} = {};

export const listeners: {
	[key: string]: Array<Listener | null>;
} = {};

export function makeCollection(name: string) {
	if (!(name in collections)) {
		collections[name] = firestore.collection(name);
	}
	return collections[name];
}

export const listened: Array<string> = [];

export function listen<T extends Model>(model: { new (): T }) {
	const name = new model().getTableName();
	if (listened.includes(name)) {
		return;
	}
	if (!(name in collections)) {
		makeCollection(name);
	}
	const collection = collections[name];
	collection.onSnapshot(
		(snapshot) => {
			const data = new Collection<any>();
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
		},
		(error) => {
			if (name in listeners) {
				listeners[name].forEach((listener) => {
					if (listener !== null && listener.onError !== undefined) {
						listener.onError(error);
					}
				});
			}
		}
	);
	listened.push(name);
}

export function addListener<T extends Model>(collection: { new (): T }, success: (models: Collection<T>) => void, onError?: Function) {
	const name = new collection().getTableName();
	if (!(name in listeners)) {
		listeners[name] = [];
	}
	return (
		listeners[name].push({
			success,
			onError,
		}) - 1
	);
}

export function removeListener<T extends Model>(model: { new (): T }, index: number) {
	const name = new model().getTableName();
	if (!(name in listeners)) {
		return;
	}
	listeners[name].splice(index, 1, null);
}

export function clearListeners<T extends Model>(model: { new (): T }) {
	const name = new model().getTableName();
	if (!(name in listeners)) {
		return;
	}
	listeners[name] = [];
}
