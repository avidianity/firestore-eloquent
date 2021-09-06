# firestore-eloquent

A library for creating eloquent models in firestore inspired heavily by Laravel's Eloquent ORM.

[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

## Setup

### Installation

__npm:__

```npm
npm install firestore-eloquent
```

__yarn:__

```yarn
yarn add firestore-eloquent
```

### Usage

__Note:__ Firebase must be initialized before using these models.

Example:

```javascript
const app = firebase.initializeApp({
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

If you have an already existing firestore instance:

```javascript
import { setFirestore } from 'firestore-eloquent';

const firestore = app.firestore();

setFirestore(firestore);
```

You can also get the firestore instance that is being used:

```javascript
import { getFirestore } from 'firestore-eloquent';

// returns firebase.firestore.Firestore
const firestore = getFirestore();
```

Making Models:

Using and creating models should be similar to using Laravel Eloquent Models.

Notes:

- The Authenticatable class for user models is still under development.
- It's possible to not override the constructor of the class, the library will try to infer the collection name according to the name of the class (ex: model `Post` will have a collection name of `post`). But this is not recommended because building a production version of an app that is using this library will most likely rename these classes due to minification of the code from webpack or other module bundlers.

```typescript
import { Model, ModelData } from 'firestore-eloquent';

// Optional
export interface PostData extends ModelData {
    title: string;
    description: string;
}

export class Post extends Model<PostData> {
    type = Post;

    constructor(data?: Partial<PostData>) {
        super(data);
        // explicitly set collection name
        this.name = 'posts';
    }
    
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

// Reading data

// get a specific key
console.log(post.get('title')) // My Title

// get all data
console.log(post.getData()) // { title: 'My Title', description: 'My Description' }

// set data
post.set('title', 'My New Title');

await post.save();

```

### Events

Events are also supported.

Example:

```typescript
export class Post extends Model<PostData> {
    type = Post;

    constructor(data?: Partial<PostData>) {
        super(data);
        this.name = 'posts';
    }

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

    constructor(data?: Partial<PostData>) {
        super(data);
        this.name = 'posts';
    }
    
    fillable() {
        return ['title', 'description'];
    }

    comments() {
        return this.hasMany(Comment);
    }
}

export class Comment extends Model<CommentData> {
    type = Comment;

    constructor(data?: Partial<CommentData>) {
        super(data);
        this.name = 'comments';
    }
    
    fillable() {
        return ['body'];
    }

    post() {
        return this.belongsTo(Post);
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

// loading
await post.load(['comments']);
```

### Collections

Collections extend the `Array` class and has several methods added to it. `Model.all()` and `hasMany` relationships all return Collections of that model. Some of the methods are overriden to improve their functionality such as `collection.includes(model)` and `collection.indexOf(model)`.

```typescript
const posts = await new Post().all(); // Collection<Post>

// call methods from `Array`
const post = posts.pop();

post.set('title', 'Another Title');

// pushes the post if it does not exist, otherwise it replaces with it's index
posts.set(post);

// or do this instead
posts.replace(post)

// find by id
const newPost = posts.get(id);

// load relationships of all posts
await posts.load(['comments']);
const comments = posts.map(post => post.get('comments')); // CommentData[]

// turn into a normal `Array`
const array = posts.toArray();
```

### JSON

Calling `JSON.stringify` on models will automatically call `getData()` on them, this applies to collections as well.

### Observers and Listeners

There are wrapper methods available to make use of firestore's onSnapshot method.

```typescript
import { listen, addListener, removeListener, clearListeners } from 'firestore-eloquent';

// add a listener
const handle = addListener(Post, (posts) => {
    console.log(posts) // Post[]
});

// remove a listener
removeListener(Post, handle);

// tell the library to actually start listening to onSnapshot methods
listen(Post)

// remove all registered listeners
clearListeners(Post)

```

#### Example in React

```typescript
const [posts, setPosts] = useState<Post[]>([]);

useEffect(() => {
    const handle = addListener(Post, setPosts);
    listen(Post);

    return () => {
        removeListener(Post, handle);
    };
}, []);
```

### Contributing

Contributions are welcome! Just fork the project and make a pull request.

### License

This library is open-sourced software licensed under the [MIT license](LICENSE.md).
