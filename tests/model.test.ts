import firebase from 'firebase';
import faker from 'faker';
import { getFirestore, Model, setFirestore, Collection } from '../src/firestore-eloquent';
import { app, clear, TestModel } from './app';

let firestore: firebase.firestore.Firestore;

beforeAll(() => {
	firestore = app.firestore();
	setFirestore(firestore);
});

describe('model test suite', () => {
	it('makes a new model instance', () => {
		expect(TestModel.make({})).toBeInstanceOf(Model);
	});

	it('creates a new model', async () => {
		const model = await new TestModel({ name: faker.random.words(3) }).save();

		const doc = await firestore.collection(model.getTableName()).doc(model.id()).get();

		expect(model instanceof Model && doc.exists).toBeTruthy();
	});

	it('updates a model', async () => {
		const model = await new TestModel({ name: faker.random.words(3) }).save();

		const name = faker.random.words(3);

		await model.update({ name });

		expect(model.get('name')).toBe(name);
	});

	it('fetches models', async () => {
		const models = await TestModel.createQueryBuilder().all();

		expect(models).toBeInstanceOf(Collection);
	});

	it('fetches one model', async () => {
		expect.assertions(2);
		const model = await new TestModel({ name: faker.random.words(3) }).save();

		const findOne = await TestModel.createQueryBuilder().findOne(model.id());
		expect(findOne).toBeInstanceOf(Model);

		try {
			await TestModel.createQueryBuilder().findOneOrFail('something-that-doesnt-exist');
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

	it('counts the number of models', async () => {
		const count = await TestModel.createQueryBuilder().count();

		expect(count).toBeGreaterThanOrEqual(0);
	});

	it('tests the get/set/unset/has of a model', () => {
		expect.assertions(3);

		const name = faker.random.words(3);
		const model = new TestModel();

		expect(model.has('name')).toBeFalsy();

		model.set('name', name);

		expect(model.get('name')).toBe(name);

		model.unset('name');

		expect(model.get('name')).toBeNull();
	});

	it('tests the first and firstOrFail methods', async () => {
		expect.assertions(2);
		const first = await TestModel.createQueryBuilder().first();
		expect(first === null || first instanceof Model).toBeTruthy();
		try {
			const first = await TestModel.createQueryBuilder().firstOrFail();
			expect(first).toBeInstanceOf(Model);
		} catch (error) {
			expect(error).toBeInstanceOf(error);
		}
	});

	it('paginates models', async () => {
		const models = await TestModel.createQueryBuilder().paginate(1, 10);
		expect(models).toBeInstanceOf(Collection);
	});

	it('fails when fetching non-existent', async () => {
		try {
			await TestModel.createQueryBuilder()
				.where('name', '==', 'something-that-doesnt-exist')
				.whereIn('id', ['value1', 'value2'])
				.limit(1)
				.firstOrFail();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

	it('creates custom macros', () => {
		const model = new TestModel();
		model.macro('getStuff', () => 'value');
		const value = model.call('getStuff');

		expect(value).toBe('value');
	});

	it('checks `Object`.(entries|values|keys)', () => {
		expect.assertions(3);
		const model = new TestModel();
		const values = model.values();
		const entries = model.entries();
		const keys = model.keys();
		expect(values).toBeInstanceOf(Array);
		expect(entries).toBeInstanceOf(Array);
		expect(keys).toBeInstanceOf(Array);
	});
});

afterAll(async () => {
	await clear();
	await firestore.terminate();
	await app.delete();
	await getFirestore().terminate();
	firestore = null;
});
