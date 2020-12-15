import { HasMacros } from './has-macros';
export class QueryBuilder extends HasMacros {
    constructor() {
        super(...arguments);
        this.queries = [];
    }
    clearQueries() {
        this.queries = [];
        return this;
    }
    where(key, operator, value) {
        this.queries.push({ key, operator, value, method: 'where', amount: 0 });
        return this;
    }
    whereIn(key, values) {
        this.queries.push({ key, values, method: 'whereIn', amount: 0 });
        return this;
    }
    whereNotIn(key, values) {
        this.queries.push({ key, values, method: 'whereNotIn', amount: 0 });
        return this;
    }
    limit(amount) {
        this.queries.push({ amount, method: 'limit', key: 'N/A' });
        return this;
    }
}
