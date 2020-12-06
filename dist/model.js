import firebase from 'firebase';
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
        // needs to be overwritten
        this.db = firebase.firestore();
        this.queries = [];
        this.type = Model;
        this.booting();
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
    clearQueries() {
        this.queries = [];
        return this;
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
    where(key, operator, value) {
        this.queries.push({ key, operator, value, method: 'where' });
        return this;
    }
    whereIn(key, values) {
        this.queries.push({ key, values, method: 'whereIn' });
        return this;
    }
    whereNotIn(key, values) {
        this.queries.push({ key, values, method: 'whereNotIn' });
        return this;
    }
    limit(amount) {
        this.queries.push({ amount, method: 'limit' });
        return this;
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
        return new Promise((resolve, reject) => {
            relations.forEach(async (relation) => {
                try {
                    const data = await this[relation]().get();
                    this.set(relation, data);
                }
                catch (error) {
                    return reject(error);
                }
            });
            return resolve(this);
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
            try {
                data.created_at = firebase.firestore.FieldValue.serverTimestamp();
                data.updated_at = firebase.firestore.FieldValue.serverTimestamp();
                const self = new this.type();
                self.forceFill(data);
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
                this.callEvent('updating');
                this.set('updated_at', firebase.firestore.FieldValue.serverTimestamp());
                const data = { ...this.data };
                delete data.id;
                await this.collection.doc(this.data.id).update(data);
                this.callEvent('updated');
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
        return !('id' in this.data) || this.data.id.length === 0
            ? new Promise(async (resolve, reject) => {
                try {
                    const data = this.data;
                    data.created_at = firebase.firestore.FieldValue.serverTimestamp();
                    data.updated_at = firebase.firestore.FieldValue.serverTimestamp();
                    this.callEvent('creating').callEvent('saving');
                    const document = await (await this.collection.add(data)).get();
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
                finally {
                    this.clearQueries();
                }
            })
            : this.update();
    }
}
