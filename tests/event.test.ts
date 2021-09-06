import firebase from 'firebase';
import faker from 'faker';
import { getFirestore, Model, ModelData, setFirestore } from '../src/firestore-eloquent';
import { app, clear } from './app';

interface PostData extends ModelData {
	name: string;
}

let firestore: firebase.firestore.Firestore;

beforeAll(async () => {
	firestore = app.firestore();
	setFirestore(firestore);
});

describe('model `events` test suite', () => {
	it('makes events work', async () => {
		expect.assertions(10);

		class Post extends Model<PostData> {
			type = Post;

			fillable() {
				return ['name'];
			}

			booted() {
				this.creating((post) => {
					expect(post).toBeInstanceOf(Post);
				});

				this.created((post) => {
					expect(post).toBeInstanceOf(Post);
				});

				this.updating((post) => {
					expect(post).toBeInstanceOf(Post);
				});

				this.updated((post) => {
					expect(post).toBeInstanceOf(Post);
				});

				this.deleting((post) => {
					expect(post).toBeInstanceOf(Post);
				});

				this.deleted((post) => {
					expect(post).toBeInstanceOf(Post);
				});

				this.saving((post) => {
					expect(post).toBeInstanceOf(Post);
				});

				this.saved((post) => {
					expect(post).toBeInstanceOf(Post);
				});
			}
		}

		const post = await new Post({ name: faker.random.words(3) }).save();
		post.set('name', faker.random.words(3));
		await post.save();
		await post.delete();
	});
});

afterAll(async () => {
	await clear();
	await firestore.terminate();
	await app.delete();
	await getFirestore().terminate();
	firestore = null;
});
