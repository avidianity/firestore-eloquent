import { Collection } from './collection';
import { HasEvent } from './has-event';
import { ModelData } from './contracts';
import firebase from 'firebase';
export declare class Model<T extends ModelData = any> extends HasEvent {
    protected fillables: Array<keyof T>;
    protected data: T;
    type: any;
    constructor(data?: Partial<T>);
    protected fillable<K extends T>(): Array<keyof K>;
    protected booting(): void;
    protected booted(): void;
    entries(): [string, any][];
    values(): any[];
    keys(): string[];
    getTableName(): string;
    toJSON(): T & {
        created_at: Date | null;
        updated_at: Date | null;
    };
    paginate(page: number, perPage: number): Promise<Collection<any>>;
    findOne(id: string): Promise<this>;
    getCollection(): firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
    fill(data: Partial<T>): this;
    forceFill(data: Partial<T>): this;
    count(): Promise<number>;
    delete(): Promise<void>;
    set<K extends keyof T>(key: K, value: T[K]): this;
    get<K extends keyof T>(key: K): T[K];
    getData(): T & {
        created_at: Date | null;
        updated_at: Date | null;
    };
    first(): Promise<this | null>;
    getAll(): Promise<Collection<this>>;
    load(relations: Array<string>): Promise<this>;
    all(): Promise<Collection<this>>;
    create(data?: any): Promise<this>;
    update(data?: any): Promise<this>;
    id(): string;
    save(data?: any): Promise<this>;
    has<K extends keyof T>(key: K): boolean;
    getDates(): {
        created_at: Date | null;
        updated_at: Date | null;
    };
}
