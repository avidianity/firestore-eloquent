import { ModelData } from '../contracts';
import { Model } from '../model';
import { HasOneOrMany } from './has-one-or-many';
export declare class HasMany<T extends Model, D extends ModelData> extends HasOneOrMany<T, D> {
    get(): Promise<import("../collection").Collection<T, any>>;
    find(id: string): Promise<T | null>;
    findOrFail(id: string): Promise<T>;
    count(): Promise<number>;
}
