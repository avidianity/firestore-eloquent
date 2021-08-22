import firebase from 'firebase';
import { Model, ModelData } from '../src/firestore-eloquent';
import { config } from './test-config';

export const app = firebase.initializeApp(config);

export type TestData = {
	name: string;
} & ModelData;

export class TestModel extends Model<TestData> {
	type = TestModel;

	fillable() {
		return ['name'];
	}
}

export class Post extends Model<TestData> {
	type = Post;

	fillable() {
		return ['name'];
	}

	comments() {
		return this.hasMany(Comment);
	}

	image() {
		return this.hasOne(Image);
	}
}

export class Image extends Model<TestData & { post_id: string }> {
	type = Image;

	fillable() {
		return ['name', 'post_id'];
	}

	post() {
		return this.belongsTo(Post);
	}
}

export class Comment extends Model<TestData & { post_id: string }> {
	type = Comment;

	fillable() {
		return ['name', 'post_id'];
	}

	post() {
		return this.belongsTo(Post);
	}
}
