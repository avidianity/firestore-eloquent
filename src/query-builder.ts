import { ModelData } from './contracts';
import { HasMacros } from './has-macros';

type Modes = 'where' | 'whereIn' | 'whereNotIn' | 'limit';

interface Query {
	method: Modes;
	key: string;
	amount: number;
	[key: string]: any;
}

export class QueryBuilder<T extends ModelData> extends HasMacros {
	protected queries: Array<Query> = [];

	protected clearQueries() {
		this.queries = [];
		return this;
	}

	where<K extends keyof T>(key: K, operator: string, value: T[K]) {
		this.queries.push({
			key: <string>key,
			operator,
			value,
			method: 'where',
			amount: 0,
		});
		return this;
	}

	whereIn<K extends keyof T>(key: K, values: Array<T[K]>) {
		this.queries.push({
			key: <string>key,
			values,
			method: 'whereIn',
			amount: 0,
		});
		return this;
	}

	limit(amount: number) {
		this.queries.push({ amount, method: 'limit', key: 'N/A' });
		return this;
	}
}
