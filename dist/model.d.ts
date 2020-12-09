import firebase from 'firebase/app';
import 'firebase/firestore';
import { Collection } from './collection';
import { HasEvent } from './has-event';
import { Listener, ModelData } from './contracts';
export declare class Model<T extends ModelData = any> extends HasEvent {
    protected name: string;
    protected fillable: Array<string>;
    protected data: T;
    protected db: firebase.firestore.Firestore;
    protected collection: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
    protected listeners: Array<Listener | null>;
    type: any;
    constructor(data?: T);
    protected booting(): void;
    protected booted(): void;
    protected listen(): void;
    entries(): [string, any][];
    values(): any[];
    keys(): string[];
    findOne(id: string): Promise<this>;
    getCollection(): firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
    fill(data: T): this;
    forceFill(data: any): this;
    count(): Promise<number>;
    delete(): Promise<void>;
    set(key: string, value: any): this;
    get<T = any>(key: string): T;
    getData(): T & {
        created_at: Date;
        updated_at: Date;
    };
    first(): Promise<this | null>;
    getAll(): Promise<Collection<this>>;
    load(relations: Array<string>): Promise<this>;
    all(): Promise<Collection<this>>;
    create(data?: any): Promise<this>;
    update(data?: any): Promise<this>;
    save(data?: any): Promise<this>;
    getDates(): {
        created_at: Date;
        updated_at: Date;
    };
    addListener(success: (models: Collection<this>) => void, onError?: Function): number;
    removeListener(index: number): this;
    clearListeners(): this;
}
