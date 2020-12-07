import { HasMacros } from './has-macros';

type Modes = 'where' | 'whereIn' | 'whereNotIn' | 'limit';

interface Query {
	method: Modes;
	key: string;
	amount: number;
	[key: string]: any;
}

export class QueryBuilder extends HasMacros {
	protected queries: Array<Query> = [];

	protected clearQueries() {
		this.queries = [];
		return this;
	}

	where(key: string, operator: string, value: any) {
		this.queries.push({ key, operator, value, method: 'where', amount: 0 });
		return this;
	}

	whereIn(key: string, values: Array<any>) {
		this.queries.push({ key, values, method: 'whereIn', amount: 0 });
		return this;
	}

	whereNotIn(key: string, values: Array<any>) {
		this.queries.push({ key, values, method: 'whereNotIn', amount: 0 });
		return this;
	}

	limit(amount: number) {
		this.queries.push({ amount, method: 'limit', key: 'N/A' });
		return this;
	}
}
