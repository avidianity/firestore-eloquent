import firebase from 'firebase';
import faker from 'faker';
import { getFirestore, Model, setFirestore, Collection } from '../src/firestore-eloquent';
import { app, Comment, Post } from './app';

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

describe('model `hasMany` relationship test suite', () => {
	it('fetches collection of models', async () => {
		const comments = await post
			.comments()
			.where('id', '==', 'something-that-does-not-exist')
			.whereIn('id', ['value1', 'value2'])
			.limit(1)
			.get();

		expect(comments).toBeInstanceOf(Collection);
	});

	it('counts the number of children', async () => {
		const count = await post.comments().count();

		expect(count).toBeGreaterThanOrEqual(0);
	});

	it('finds a child', async () => {
		expect.assertions(3);

		const child = await post.comments().find(comment.id());

		const data = post.getData();

		expect(child).toBeInstanceOf(Comment);
		expect(typeof data === 'object').toBeTruthy();

		try {
			await post
				.comments()
				.where('id', '==', 'something-that-does-not-exist')
				.whereIn('id', ['value1', 'value2'])
				.limit(1)
				.findOrFail('something-that-does-not-exist');
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

	it('fails on non existent children', async () => {
		expect.assertions(3);

		const comment = await post.comments().first();

		expect(comment).toBeInstanceOf(Comment);

		try {
			const comment = await post
				.comments()
				.where('id', '==', 'something-that-does-not-exist')
				.whereIn('id', ['value1', 'value2'])
				.limit(1)
				.firstOrFail();
			expect(comment).toBeInstanceOf(Comment);
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}

		expect(await post.comments().firstOrFail()).toBeInstanceOf(Comment);
	});

	it('creates a child', async () => {
		expect.assertions(3);

		const first = await post.comments().create({ name: faker.random.words(3) });
		const second = await post.comments().save(new Comment({ name: faker.random.words(3) }));

		expect(first).toBeInstanceOf(Comment);
		expect(second).toBeInstanceOf(Comment);
		expect(first.get('post_id') === post.id() && second.get('post_id') === post.id()).toBeTruthy();
	});

	it('deletes children', async () => {
		await post.comments().delete();
		const count = await post.comments().count();
		expect(count === 0).toBeTruthy();
	});
});

afterAll(async () => {
	await firestore.terminate();
	await app.delete();
	await getFirestore().terminate();
	firestore = null;
});
