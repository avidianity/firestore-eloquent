import firebase from 'firebase';
import faker from 'faker';
import { getFirestore, Model, setFirestore } from '../src/firestore-eloquent';
import { app, clear, Comment, Post } from './app';

let firestore: firebase.firestore.Firestore;
let post: Post;
let comment: Comment;

beforeAll(async () => {
	post = await new Post({ name: faker.random.words(3) }).save();

	comment = await new Comment({
		name: faker.random.words(3),
		post_id: post.id(),
	}).save();

	firestore = app.firestore();
	setFirestore(firestore);
});

describe('model `belongsTo` relationship test suite', () => {
	it('gets parent', async () => {
		const parent = await comment.post().get();
		expect(parent).toBeInstanceOf(Post);
	});

	it('fails when creating and deleting', async () => {
		expect.assertions(2);
		try {
			await comment.post().create();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}

		try {
			await comment.post().delete();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

	it('updates parent', async () => {
		const name = faker.random.words(3);

		const parent = await comment.post().update({ name });

		expect(parent.get('name')).toBe(name);
	});

	it('saves a separate parent', async () => {
		const post = await new Post({ name: faker.random.words(3) }).save();

		const parent = await comment.post().save(post);

		expect(parent.id()).toBe(post.id());
	});

	it('makes query builder work', async () => {
		const post = await comment
			.post()
			.where('id', '==', 'something-that-doesnt-exist')
			.whereIn('id', ['value1', 'value2'])
			.limit(1)
			.get();

		expect(post).toBeInstanceOf(Post);
	});
});

afterAll(async () => {
	await clear();
	await firestore.terminate();
	await app.delete();
	await getFirestore().terminate();
	firestore = null;
});
