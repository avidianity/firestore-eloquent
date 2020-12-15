# firestore-eloquent

A library for creating eloquent models in firestore inspired heavily by Laravel's Eloquent ORM.

## Setup

### Installation

__npm:__

```npm
npm install afirestore-eloquent
```

__yarn:__

```yarn
yarn add firestore-eloquent
```

### Usage

__Note:__ Firebase must be initialized before using these models.

Example:

```javascript
firebase.initializeApp({
  apiKey: "AIza....",
  appId: "1:27992087142:web:ce....",
  projectId: "my-firebase-project",
  authDomain: "YOUR_APP.firebaseapp.com",
  databaseURL: "https://YOUR_APP.firebaseio.com",
  storageBucket: "YOUR_APP.appspot.com",
  messagingSenderId: "123456789",
  measurementId: "G-12345",
});
```

Making Models:

Using and creating models should be similar to using Laravel Eloquent Models.

Note: The Authenticatable class for user models is still under development.

```typescript
import { Model, ModelData } from 'firestore-eloquent';

// Optional
export interface PostData extends ModelData {
    title: string;
    description: string;
}

export class Post extends Model<PostData> {
    type = Post;
    
    fillable() {
        return ['title', 'description'];
    }
}
```

CRUD Examples:

```typescript
import { Post } from 'path/to/models';

const post = new Post({
    title: 'My Title',
    description: 'My Description',
});

// You can also use fill() or forceFill()
post.fill({
    title: 'My Title',
    description: 'My Description',
});

// create
await post.create(); /* or */ post.create(data);

// update
await post.update(); /* or */ post.update(data);

// delete
await post.delete();

// save
await post.save(); /* or */ post.save(data);

// fetching
await post.all();

// get one
await post.first();

// find one by id
await post.findOne(id);

```

### Events

Events are also supported.

Example:

```typescript
export class Post extends Model<PostData> {
    type = Post;

    fillable() {
        return ['title', 'description'];
    }

    // register events here
    booted() {
        this.creating((post) => {});
        this.created((post) => {});

        this.updating((post) => {});
        this.updated((post) => {});

        this.deleting((post) => {});
        this.deleted((post) => {});

        this.saving((post) => {});
        this.saved((post) => {});
    }
}
```

### Relationships

Currently, only `hasOne`, `hasMany` and `belongsTo` are supported.

Example:

```typescript
export class Post extends Model<PostData> {
    type = Post;
    
    fillable() {
        return ['title', 'description'];
    }

    comments() {
        return this.hasMany(new Comment(), 'comments');
    }
}

export class Comment extends Model<CommentData> {
    type = Comment;
    
    fillable() {
        return ['body'];
    }

    post() {
        return this.belongsTo(new Post(), 'post');
    }
}

const post = new Post(data);
await post.save();

// saving
post.comments().save(new Comment({
    body: 'My comment',
}));

// creating
const comment = await post.comments().create(data);

// fetching
const comments = await post.comments().getAll();
```

### Contributing

I would really appreciate it if someone can help me create and improve the docs.
I made this on short notice for my personal use and I will try to update this package
as frequent as possible.

### License

This library is open-sourced software licensed under the [MIT license](LICENSE.md).
