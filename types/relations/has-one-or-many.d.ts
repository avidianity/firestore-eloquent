import { InteractsWithRelationship, ModelData } from '../contracts';
import { Model } from '../model';
import { QueryBuilder } from '../query-builder';
export declare abstract class HasOneOrMany<T extends Model, D extends ModelData> extends QueryBuilder<D> implements InteractsWithRelationship<T> {
    protected relation: T;
    protected parent: Model<any>;
    protected name: string;
    constructor(relation: T, parent: Model, name?: string);
    get(): Promise<any>;
    create(data: Partial<D>): Promise<any>;
    update(data: Partial<D>): Promise<T>;
    save(instance?: T): Promise<T>;
    first(): Promise<T | null>;
    firstOrFail(): Promise<T>;
    delete(): Promise<void>;
    protected getForeignKey(): string;
}
