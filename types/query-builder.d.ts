import { ModelData } from './contracts';
import { HasMacros } from './has-macros';
declare type Modes = 'where' | 'whereIn' | 'whereNotIn' | 'limit';
interface Query {
	method: Modes;
	key: string;
	amount: number;
	[key: string]: any;
}
export declare class QueryBuilder<T extends ModelData> extends HasMacros {
	protected queries: Array<Query>;
	protected clearQueries(): this;
	where<K extends keyof T>(key: K, operator: string, value: T[K]): this;
	whereIn<K extends keyof T>(key: K, values: Array<T[K]>): this;
	whereNotIn<K extends keyof T>(key: K, values: Array<T[K]>): this;
	limit(amount: number): this;
}
export {};
