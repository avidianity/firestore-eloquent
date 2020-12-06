import { Model } from '../model';
export declare class BelongsTo<T extends Model> {
    protected child: T;
    protected parent: T;
    protected name: string;
    constructor(child: T, parent: T, name: string);
    get(): Promise<T>;
    set(parent: T): this;
    save(parent?: T): Promise<T>;
    protected getForeignKey(): string;
}
