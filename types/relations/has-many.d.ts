import { Collection } from '../collection';
import { ModelData } from '../contracts';
import { Model } from '../model';
import { HasOneOrMany } from './has-one-or-many';
export declare class HasMany<T extends Model, D extends ModelData> extends HasOneOrMany<T, D> {
    constructor(relation: T, parent: Model, name?: string);
    get(): Promise<Collection<T>>;
    find(id: string): Promise<T | null>;
    count(): Promise<number>;
}
