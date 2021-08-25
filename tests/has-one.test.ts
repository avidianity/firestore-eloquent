import firebase from 'firebase';
import faker from 'faker';
import { getFirestore, Model, setFirestore, Collection } from '../src/firestore-eloquent';
import { app, Image, Post } from './app';

let firestore: firebase.firestore.Firestore;
let post: Post;
let image: Image;

beforeAll(async () => {
	post = await new Post({ name: faker.random.words(3) }).save();

	image = await new Image({
		name: faker.random.words(3),
		post_id: post.id(),
	}).save();

	firestore = app.firestore();
	setFirestore(firestore);
});

describe('model `hasOne` relationship test suite', () => {
	it('gets child', async () => {
		const child = await post.image().get();

		expect(child).toBeInstanceOf(Image);
	});

	it('updates child', async () => {
		expect.assertions(2);
		const name = faker.random.words(3);

		const child = await post.image().update({ name });
		const data = post.getData();

		expect(child.get('name') === name).toBeTruthy();
		expect(typeof data === 'object').toBeTruthy();
	});

	it('gets null', async () => {
		const child = await post
			.image()
			.where('id', '==', 'something-that-does-not-exist')
			.whereIn('id', ['value1', 'value2'])
			.limit(1)
			.get();

		expect(child).toBeNull();
	});
});

afterAll(async () => {
	await firestore.terminate();
	await app.delete();
	await getFirestore().terminate();
	firestore = null;
});
