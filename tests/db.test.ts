import firebase from 'firebase';
import faker from 'faker';
import {
	addListener,
	clearListeners,
	Collection,
	getFirestore,
	listen,
	makeCollection,
	removeListener,
	setFirestore,
} from '../src/firestore-eloquent';
import { app, Post } from './app';

let firestore: firebase.firestore.Firestore;
let post: Post;

beforeAll(async () => {
	post = await new Post({ name: faker.random.words(3) }).save();
	firestore = app.firestore();
	setFirestore(firestore);
});

describe('db test suite', () => {
	it('gets an instance of firestore', () => {
		const firestore = getFirestore();
		setFirestore(firestore);
		expect(firestore).toBeInstanceOf(firebase.firestore.Firestore);
	});

	it('makes a collection', () => {
		const collection = makeCollection('sample-name');
		expect(collection).toBeInstanceOf(firebase.firestore.CollectionReference);
	});

	it('tests listeners', async () => {
		addListener(Post, (posts) => {
			expect(posts).toBeInstanceOf(Collection);
		});

		const index = addListener(Post, (posts) => {
			throw new Error('This should have been removed from the listeners');
		});

		removeListener(Post, index);

		listen(Post);

		await new Post({ name: faker.random.words(3) }).save();

		addListener(Post, (posts) => {
			throw new Error('This should have been removed from the listeners');
		});

		clearListeners(Post);

		await new Post({ name: faker.random.words(3) }).save();
	});
});

afterAll(async () => {
	await firestore.terminate();
	await app.delete();
	await getFirestore().terminate();
	firestore = null;
});
