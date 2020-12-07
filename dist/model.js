import firebase from 'firebase/app';
import 'firebase/firestore';
import { Collection } from './collection';
import { HasEvent } from './has-event';
import pluralize from 'pluralize';
export class Model extends HasEvent {
    constructor(data) {
        super();
        this.name = '';
        this.fillable = [];
        this.data = {};
        this.type = Model;
        this.booting();
        this.db = firebase.firestore();
        if (data !== undefined) {
            this.fill(data);
        }
        if (this.name.length === 0) {
            this.name = pluralize(this.constructor.name.toLowerCase());
        }
        if (!('id' in this.data)) {
            this.data.id === '';
        }
        this.collection = this.db.collection(this.name);
        this.booted();
    }
    booting() { }
    booted() { }
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
                    return reject(new Error('Model not found.'));
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
            if (this.fillable.includes(key)) {
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
        return this.data;
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
        return new Promise((resolve, reject) => {
            let collection = this.getCollection();
            collection
                .get()
                .then((snapshot) => {
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
            })
                .catch((error) => reject(error));
        });
    }
    create(data) {
        return new Promise(async (resolve, reject) => {
            if (data) {
                this.fill(data);
            }
            if (Object.entries(this.data).length === 0) {
                return reject(new Error('There is no data.'));
            }
            try {
                const data = { ...this.data };
                const self = new this.type();
                self.fill(data);
                self.set('created_at', firebase.firestore.FieldValue.serverTimestamp());
                self.set('updated_at', firebase.firestore.FieldValue.serverTimestamp());
                self.callEvent('creating').callEvent('saving');
                const document = await (await self.collection.add(data)).get();
                self.forceFill({
                    ...document.data(),
                    id: document.id,
                });
                self.callEvent('created').callEvent('saved');
                resolve(self);
            }
            catch (error) {
                reject(error);
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
    getDates() {
        return {
            created_at: new Date(this.get('created_at').seconds),
            updated_at: new Date(this.get('updated_at').seconds),
        };
    }
}
