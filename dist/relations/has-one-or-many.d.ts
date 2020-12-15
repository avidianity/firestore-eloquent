import { InteractsWithRelationship, ModelData } from '../contracts';
import { Model } from '../model';
import { QueryBuilder } from '../query-builder';
export declare abstract class HasOneOrMany<T extends Model, D extends ModelData> extends QueryBuilder<D> implements InteractsWithRelationship<T> {
    protected relation: T;
    protected parent: Model<any>;
    protected name: string;
    constructor(relation: T, parent: Model, name: string);
    get(): Promise<any>;
    create(data: any): Promise<any>;
    update(data: any): Promise<T>;
    save(instance?: T): Promise<T>;
    first(): Promise<T | null>;
    delete(): Promise<void>;
    protected getForeignKey(): string;
}
