import { Collection } from './collection';
import { HasEvent } from './has-event';
import { ModelData } from './contracts';
import firebase from 'firebase';
export declare class Model<T extends ModelData = any> extends HasEvent {
    protected fillables: Array<string>;
    protected data: T;
    type: any;
    constructor(data?: T);
    protected fillable(): Array<string>;
    protected booting(): void;
    protected booted(): void;
    entries(): [string, any][];
    values(): any[];
    keys(): string[];
    getTableName(): string;
    findOne(id: string): Promise<this>;
    getCollection(): firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
    fill(data: T): this;
    forceFill(data: any): this;
    count(): Promise<number>;
    delete(): Promise<void>;
    set(key: string, value: any): this;
    get<T = any>(key: string): T;
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
    save(data?: any): Promise<this>;
    has(key: string): boolean;
    getDates(): {
        created_at: Date | null;
        updated_at: Date | null;
    };
}
