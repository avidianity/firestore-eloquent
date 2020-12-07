import { InteractsWithRelationship } from '../contracts';
import { Model } from '../model';
import { QueryBuilder } from '../query-builder';
export declare abstract class HasOneOrMany<T extends Model> extends QueryBuilder implements InteractsWithRelationship<T> {
    protected relation: T;
    protected parent: Model<any>;
    protected name: string;
    constructor(relation: T, parent: Model, name: string);
    get(): Promise<any>;
    create(data: any): Promise<T>;
    update(data: any): Promise<T>;
    save(instance?: T): Promise<T>;
    protected getForeignKey(): string;
}
