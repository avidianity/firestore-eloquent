import { InteractsWithRelationship } from '../contracts';
import { Model } from '../model';
export declare abstract class HasOneOrMany<T extends Model> implements InteractsWithRelationship<T> {
    protected relation: T;
    protected parent: Model<any>;
    protected name: string;
    constructor(relation: T, parent: Model<any>, name: string);
    get(): Promise<any>;
    create(data: any): Promise<T>;
    update(data: any): Promise<T>;
    save(instance?: T): Promise<T>;
    protected getForeignKey(): string;
}
