import { Model } from './model';
export declare class Collection<T extends Model = any> extends Array<T> {
    load(relations: Array<string>): Promise<this>;
    save(): Promise<T[]>;
    delete(): Promise<void[]>;
}
