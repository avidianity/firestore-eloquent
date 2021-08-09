import { ModelData } from '../contracts';
import { Model } from '../model';
import { HasOneOrMany } from './has-one-or-many';
export declare class HasOne<T extends Model, D extends ModelData> extends HasOneOrMany<T, D> {
    constructor(relation: T, parent: Model, name?: string);
    get(): Promise<T | null>;
}
