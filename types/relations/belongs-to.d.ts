import { ModelData } from '../contracts';
import { Model } from '../model';
import { QueryBuilder } from '../query-builder';
export declare class BelongsTo<T extends Model, D extends ModelData> extends QueryBuilder<D> {
    protected child: T;
    protected parent: T;
    protected name: string;
    constructor(child: T, parent: T, name: string);
    get(): Promise<T>;
    set(parent: T): this;
    save(parent?: T): Promise<T>;
    delete(): void;
    protected getForeignKey(): string;
}
