import firebase from 'firebase';
import faker from 'faker';
import { getFirestore, setFirestore, Collection } from '../src/firestore-eloquent';
import { app, clear, Comment, Post } from './app';

let firestore: firebase.firestore.Firestore;
let post: Post;
let comment: Comment;
let collection: Collection<Comment>;

beforeAll(async () => {
	post = await new Post({ name: faker.random.words(3) }).save();

	comment = await new Comment({
		name: faker.random.words(3),
		post_id: post.id(),
	}).save();

	collection = await post.comments().get();

	firestore = app.firestore();
	setFirestore(firestore);
});

describe('collection test suite', () => {
	it('loads relationships', async () => {
		const posts = await Post.createQueryBuilder().all();
		await posts.load(['comments']);
		expect(posts[0].has('comments')).toBeTruthy();
	});

	it('serializes collection', async () => {
		const posts = await Post.createQueryBuilder().all();
		expect(posts.toJSON()).toBeInstanceOf(Array);
	});

	it('tests get/set/toArray/replace', async () => {
		expect.assertions(3);

		const child = collection.get(comment);

		expect(child).toBeInstanceOf(Comment);

		const newChild = await new Comment({
			name: faker.random.words(3),
			post_id: post.id(),
		}).save();

		collection.set(newChild);
		collection.replace(newChild);
		collection.replace(newChild, collection.length);

		expect(collection.includes(newChild)).toBeTruthy();

		expect(collection.toArray()).toBeInstanceOf(Array);
	});

	it('deletes all items', async () => {
		await collection.delete();
		const count = await post.comments().count();
		expect(count === 0).toBeTruthy();
	});

	it('saves all items', async () => {
		expect.assertions(3);

		expect(await collection.save()).toBeInstanceOf(Collection);

		const model = collection[0];

		expect(collection.indexOf(model) === 0).toBeTruthy();

		collection.remove(collection.indexOf(model));

		expect(collection.length >= 0).toBeTruthy();
	});

	it('tests `toJSON`', async () => {
		const posts = await Post.createQueryBuilder().all();
		const data = posts.toJSON();
		expect(data).toBeInstanceOf(Array);
	});

	it('gets a post by id', async () => {
		const post = await new Post({ name: faker.random.words(3) }).save();
		const posts = await Post.createQueryBuilder().all();
		posts.set(post);
		expect(posts.get(post.id())).toBeInstanceOf(Post);
	});
});

afterAll(async () => {
	await clear();
	await firestore.terminate();
	await app.delete();
	await getFirestore().terminate();
	firestore = null;
});
