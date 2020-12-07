import { HasMacros } from './has-macros';
declare type Modes = 'where' | 'whereIn' | 'whereNotIn' | 'limit';
interface Query {
    method: Modes;
    key: string;
    amount: number;
    [key: string]: any;
}
export declare class QueryBuilder extends HasMacros {
    protected queries: Array<Query>;
    protected clearQueries(): this;
    where(key: string, operator: string, value: any): this;
    whereIn(key: string, values: Array<any>): this;
    whereNotIn(key: string, values: Array<any>): this;
    limit(amount: number): this;
}
export {};
