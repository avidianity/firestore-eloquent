import { Collection } from '../collection';
import { Model } from '../model';
import { HasOneOrMany } from './has-one-or-many';
export declare class HasMany<T extends Model> extends HasOneOrMany<T> {
    get(): Promise<Collection<T>>;
    find(id: string): Promise<T>;
    count(): Promise<number>;
}
