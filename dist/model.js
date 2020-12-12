import firebase from 'firebase/app';
import 'firebase/firestore';
import { Collection } from './collection';
import { HasEvent } from './has-event';
import pluralize from 'pluralize';
export class Model extends HasEvent {
    constructor(data) {
        super();
        this.name = '';
        this.data = {};
        this.listeners = [];
        this.type = Model;
        this.fillable = [];
        this.booting();
        this.db = firebase.firestore();
        if (this.name.length === 0) {
            this.name = pluralize(this.constructor.name.toLowerCase());
        }
        if (!('id' in this.data)) {
            this.data.id === '';
        }
        this.collection = this.db.collection(this.name);
        if (data !== undefined) {
            this.fill(data);
        }
        this.booted();
        this.listen();
    }
    booting() { }
    booted() { }
    listen() {
        this.collection.onSnapshot((snapshot) => {
            const data = new Collection();
            snapshot.forEach((document) => {
                const self = new this.type();
                self.forceFill({
                    ...document.data(),
                    id: document.id,
                });
                data.push(self);
            });
            this.listeners.forEach((listener) => {
                if (listener !== null) {
                    listener.success(data);
                }
            });
        }, (error) => {
            this.listeners.forEach((listener) => {
                if (listener !== null && listener.onError !== undefined) {
                    listener.onError(error);
                }
            });
        });
    }
    entries() {
        return Object.entries(this.getData());
    }
    values() {
        return Object.values(this.getData());
    }
    keys() {
        return Object.keys(this.getData());
    }
    findOne(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let collection = this.getCollection();
                this.queries.forEach((query) => {
                    switch (query.method) {
                        case 'where':
                            const { operator, value } = query;
                            collection = collection.where(query.key, operator, value);
                            break;
                        case 'whereIn':
                            const { values } = query;
                            values.forEach((value) => {
                                collection = collection.where(query.key, '==', value);
                            });
                            break;
                        case 'whereNotIn':
                            query.values.forEach((value) => {
                                collection = collection.where(query.key, '!=', value);
                            });
                            break;
                        case 'limit':
                            collection = collection.limit(query.amount);
                            break;
                    }
                });
                const document = await collection.doc(id).get();
                if (!document) {
                    return reject(new Error('Model does not exist.'));
                }
                const body = {
                    ...document.data(),
                    id: document.id,
                };
                this.forceFill(body);
                return resolve(this);
            }
            catch (error) {
                return reject(error);
            }
            finally {
                this.clearQueries();
            }
        });
    }
    getCollection() {
        return this.collection;
    }
    fill(data) {
        for (const [key, value] of Object.entries(data)) {
            if (this.fillable.find((filler) => filler === key) !== undefined ||
                this.fillable.includes(key)) {
                this.set(key, value);
            }
        }
        return this;
    }
    forceFill(data) {
        for (const [key, value] of Object.entries(data)) {
            this.set(key, value);
        }
        return this;
    }
    count() {
        return new Promise(async (resolve, reject) => {
            try {
                const collection = await this.all();
                return resolve(collection.length);
            }
            catch (error) {
                return reject(error);
            }
        });
    }
    delete() {
        return new Promise(async (resolve, reject) => {
            try {
                this.callEvent('deleting');
                let collection = this.getCollection();
                this.queries.forEach((query) => {
                    switch (query.method) {
                        case 'where':
                            const { operator, value } = query;
                            collection = collection.where(query.key, operator, value);
                            break;
                        case 'whereIn':
                            const { values } = query;
                            values.forEach((value) => {
                                collection = collection.where(query.key, '==', value);
                            });
                            break;
                        case 'whereNotIn':
                            query.values.forEach((value) => {
                                collection = collection.where(query.key, '!=', value);
                            });
                            break;
                        case 'limit':
                            collection = collection.limit(query.amount);
                            break;
                    }
                });
                await collection.doc(this.data.id).delete();
                this.callEvent('deleted');
                return resolve();
            }
            catch (error) {
                return reject(error);
            }
            finally {
                this.clearQueries();
            }
        });
    }
    set(key, value) {
        this.data[key] = value;
        return this;
    }
    get(key) {
        if (!(key in this.data)) {
            return null;
        }
        return this.data[key];
    }
    getData() {
        return {
            ...this.data,
            ...this.getDates(),
        };
    }
    first() {
        return new Promise(async (resolve, reject) => {
            try {
                const collection = await this.getAll();
                if (collection.length > 0) {
                    return resolve(collection[0]);
                }
                return resolve(null);
            }
            catch (error) {
                return reject(error);
            }
            finally {
                this.clearQueries();
            }
        });
    }
    getAll() {
        return new Promise(async (resolve, reject) => {
            try {
                let collection = this.getCollection();
                this.queries.forEach((query) => {
                    switch (query.method) {
                        case 'where':
                            const { operator, value } = query;
                            collection = collection.where(query.key, operator, value);
                            break;
                        case 'whereIn':
                            const { values } = query;
                            values.forEach((value) => {
                                collection = collection.where(query.key, '==', value);
                            });
                            break;
                        case 'whereNotIn':
                            query.values.forEach((value) => {
                                collection = collection.where(query.key, '!=', value);
                            });
                            break;
                        case 'limit':
                            collection = collection.limit(query.amount);
                            break;
                    }
                });
                const snapshot = await collection.get();
                const data = new Collection();
                snapshot.forEach((document) => {
                    const body = {
                        ...document.data(),
                        id: document.id,
                    };
                    const instance = new this.type();
                    instance.forceFill(body);
                    data.push(instance);
                });
                return resolve(data);
            }
            catch (error) {
                return reject(error);
            }
            finally {
                this.clearQueries();
            }
        });
    }
    load(relations) {
        return new Promise(async (resolve, reject) => {
            try {
                const operations = [];
                relations.forEach((relation) => {
                    const promise = this[relation]().get();
                    operations.push(promise);
                });
                const results = await Promise.all(operations);
                results.forEach((data, index) => {
                    const name = relations[index];
                    this.set(name, data);
                });
                return resolve(this);
            }
            catch (error) {
                return reject(error);
            }
        });
    }
    all() {
        return this.getAll();
    }
    create(data) {
        if (data) {
            this.fill(data);
        }
        return new Promise(async (resolve, reject) => {
            try {
                const data = { ...this.data };
                this.fill(data);
                this.set('created_at', firebase.firestore.FieldValue.serverTimestamp());
                this.set('updated_at', firebase.firestore.FieldValue.serverTimestamp());
                this.callEvent('creating').callEvent('saving');
                const ref = await this.getCollection().add(data);
                const document = await ref.get();
                this.forceFill({
                    ...document.data(),
                    id: document.id,
                });
                this.callEvent('created').callEvent('saved');
                return resolve(this);
            }
            catch (error) {
                return reject(error);
            }
        });
    }
    update(data) {
        if (data) {
            this.fill(data);
        }
        return new Promise(async (resolve, reject) => {
            const oldUpdatedAt = this.get('updated_at');
            try {
                this.callEvent('updating').callEvent('saving');
                this.set('updated_at', firebase.firestore.FieldValue.serverTimestamp());
                const data = { ...this.data };
                delete data.id;
                await this.collection.doc(this.data.id).update(data);
                const document = await this.collection.doc(this.data.id).get();
                this.forceFill({
                    ...document.data(),
                    id: document.id,
                });
                this.callEvent('updated').callEvent('saved');
                return resolve(this);
            }
            catch (error) {
                this.set('updated_at', oldUpdatedAt);
                return reject(error);
            }
            finally {
                this.clearQueries();
            }
        });
    }
    save(data) {
        if (data) {
            this.fill(data);
        }
        return !('id' in this.data) ||
            !this.data.id ||
            this.data.id.length === 0
            ? this.create()
            : this.update();
    }
    has(key) {
        return this.get(key) !== null;
    }
    getDates() {
        return {
            created_at: this.has('created_at')
                ? new Date(this.get('created_at').seconds)
                : new Date(Date.now()),
            updated_at: this.has('updated_at')
                ? new Date(this.get('updated_at').seconds)
                : new Date(Date.now()),
        };
    }
    addListener(success, onError) {
        return (this.listeners.push({
            success,
            onError,
        }) - 1);
    }
    removeListener(index) {
        this.listeners.splice(index, 1, null);
        return this;
    }
    clearListeners() {
        this.listeners = [];
        return this;
    }
}
