import firebase from 'firebase';
import 'firebase/firestore';
import { Collection } from './collection';
import { HasEvent } from './has-event';
import { ModelData } from './contracts';
export declare class Model<T extends ModelData = any> extends HasEvent {
    protected name: string;
    protected fillable: Array<string>;
    protected data: T;
    protected db: firebase.firestore.Firestore;
    protected collection: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
    protected queries: Array<{
        [key: string]: any;
    }>;
    type: any;
    constructor(data?: T);
    protected booting(): void;
    protected booted(): void;
    protected clearQueries(): this;
    findOne(id: string): Promise<this>;
    getCollection(): firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
    where(key: string, operator: string, value: any): this;
    whereIn(key: string, values: Array<any>): this;
    whereNotIn(key: string, values: Array<any>): this;
    limit(amount: number): this;
    fill(data: T): this;
    forceFill(data: any): this;
    delete(): Promise<void>;
    set(key: string, value: any): this;
    get<T = any>(key: string): T;
    getData(): T;
    first(): Promise<this | null>;
    getAll(): Promise<Collection<this>>;
    load(relations: Array<string>): Promise<this>;
    all(): Promise<Collection<this>>;
    create(data: any): Promise<this>;
    update(data?: any): Promise<this>;
    save(data?: any): Promise<this>;
}
