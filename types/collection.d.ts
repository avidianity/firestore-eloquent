import { ModelData } from './contracts';
import { Model } from './model';
import { HasMacros } from './has-macros';
export interface Collection<T extends Model = any, D extends ModelData = any> extends Array<T>, HasMacros {
}
export declare class Collection<T extends Model = any, D extends ModelData = any> {
    load(relations: Array<string>): Promise<this>;
    toJSON(): D[];
    save(): Promise<T[]>;
    delete(): Promise<void>;
    includes(model: T): boolean;
    indexOf(model: T): number;
    replace(model: T, index?: number): T[];
    remove(index: number): T[];
    get(item: string | T): T | undefined;
    set(item: T): this;
    toArray(): T[];
}
