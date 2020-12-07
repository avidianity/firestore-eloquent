import { Model } from '../model';
import { HasOneOrMany } from './has-one-or-many';
export declare class HasOne<T extends Model> extends HasOneOrMany<T> {
    get(): Promise<T | null>;
}
