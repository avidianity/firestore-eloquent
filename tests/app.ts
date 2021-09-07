import firebase from 'firebase';
import { Model, ModelData } from '../src/firestore-eloquent';
import { config } from './test-config';

export const app = firebase.initializeApp(config);

export type TestData = {
	name: string;
} & ModelData;

export interface PostData extends ModelData {
	name: string;
}

export interface CommentData extends ModelData {
	name: string;
}

export interface ImageData extends ModelData {
	name: string;
}

export class TestModel extends Model<TestData> {
	type = TestModel;

	fillable() {
		return ['name'];
	}
}

export class Post extends Model<PostData> {
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

export class Image extends Model<ImageData & { post_id: string }> {
	type = Image;

	fillable() {
		return ['name', 'post_id'];
	}

	post() {
		return this.belongsTo(Post);
	}
}

export class Comment extends Model<CommentData & { post_id: string }> {
	type = Comment;

	fillable() {
		return ['name', 'post_id'];
	}

	post() {
		return this.belongsTo(Post);
	}
}

export async function clear() {
	// clear out everything
	await (await new TestModel().all()).delete();
	await (await new Post().all()).delete();
	await (await new Comment().all()).delete();
	await (await new Image().all()).delete();
}
