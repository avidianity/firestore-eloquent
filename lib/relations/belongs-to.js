"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BelongsTo = void 0;

var _queryBuilder = require("../query-builder");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BelongsTo extends _queryBuilder.QueryBuilder {
  constructor(child, parent, name) {
    super();

    _defineProperty(this, "child", void 0);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "name", void 0);

    this.child = child;
    this.parent = parent;
    this.name = name || parent.getTableName();
  }

  create(data) {
    throw new Error('Cannot create parent.');
  }

  async update(data) {
    const parent = await this.parent.update(data);
    this.child.set(this.name, parent);
    return parent;
  }

  async get() {
    try {
      this.queries.forEach(query => {
        switch (query.method) {
          case 'where':
            const {
              operator,
              value
            } = query;
            this.parent.where(query.key, operator, value);
            break;

          case 'whereIn':
            this.parent.whereIn(query.key, query.values);
            break;

          case 'limit':
            this.parent.limit(query.amount);
            break;
        }
      });
      const parent = await this.parent.findOneOrFail(this.child.get(this.getForeignKey()));
      this.child.set(this.name, parent);
      return parent;
    } catch (error) {
      this.child.set(this.name, null);
      return null;
    } finally {
      this.clearQueries();
    }
  }

  async set(parent) {
    this.child.set(this.getForeignKey(), parent.get('id'));
    this.child.set(this.name, parent);
    await this.child.save();
    return this;
  }

  async save(parent) {
    if (parent) {
      this.parent = parent;
    }

    try {
      await this.set(this.parent);
      await this.parent.save();
      return this.parent;
    } catch (error) {
      throw error;
    }
  }

  async delete() {
    throw new Error('Cannot delete parent model.');
  }

  getForeignKey() {
    return `${this.name}_id`;
  }

}

exports.BelongsTo = BelongsTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvYmVsb25ncy10by50cyJdLCJuYW1lcyI6WyJCZWxvbmdzVG8iLCJRdWVyeUJ1aWxkZXIiLCJjb25zdHJ1Y3RvciIsImNoaWxkIiwicGFyZW50IiwibmFtZSIsImdldFRhYmxlTmFtZSIsImNyZWF0ZSIsImRhdGEiLCJFcnJvciIsInVwZGF0ZSIsInNldCIsImdldCIsInF1ZXJpZXMiLCJmb3JFYWNoIiwicXVlcnkiLCJtZXRob2QiLCJvcGVyYXRvciIsInZhbHVlIiwid2hlcmUiLCJrZXkiLCJ3aGVyZUluIiwidmFsdWVzIiwibGltaXQiLCJhbW91bnQiLCJmaW5kT25lT3JGYWlsIiwiZ2V0Rm9yZWlnbktleSIsImVycm9yIiwiY2xlYXJRdWVyaWVzIiwic2F2ZSIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7O0FBRU8sTUFBTUEsU0FBTixTQUE4REMsMEJBQTlELENBQXNIO0FBSzVIQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBV0MsTUFBWCxFQUFzQkMsSUFBdEIsRUFBcUM7QUFDL0M7O0FBRCtDOztBQUFBOztBQUFBOztBQUUvQyxTQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQUksSUFBSUQsTUFBTSxDQUFDRSxZQUFQLEVBQXBCO0FBQ0E7O0FBRURDLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBRCxFQUFnQztBQUNyQyxVQUFNLElBQUlDLEtBQUosQ0FBVSx1QkFBVixDQUFOO0FBQ0E7O0FBRVcsUUFBTkMsTUFBTSxDQUFDRixJQUFELEVBQW9CO0FBQy9CLFVBQU1KLE1BQU0sR0FBRyxNQUFNLEtBQUtBLE1BQUwsQ0FBWU0sTUFBWixDQUFtQkYsSUFBbkIsQ0FBckI7QUFDQSxTQUFLTCxLQUFMLENBQVdRLEdBQVgsQ0FBZSxLQUFLTixJQUFwQixFQUEwQkQsTUFBMUI7QUFDQSxXQUFPQSxNQUFQO0FBQ0E7O0FBRVEsUUFBSFEsR0FBRyxHQUFHO0FBQ1gsUUFBSTtBQUNILFdBQUtDLE9BQUwsQ0FBYUMsT0FBYixDQUFzQkMsS0FBRCxJQUFXO0FBQy9CLGdCQUFRQSxLQUFLLENBQUNDLE1BQWQ7QUFDQyxlQUFLLE9BQUw7QUFDQyxrQkFBTTtBQUFFQyxjQUFBQSxRQUFGO0FBQVlDLGNBQUFBO0FBQVosZ0JBQXNCSCxLQUE1QjtBQUNBLGlCQUFLWCxNQUFMLENBQVllLEtBQVosQ0FBa0JKLEtBQUssQ0FBQ0ssR0FBeEIsRUFBNkJILFFBQTdCLEVBQXVDQyxLQUF2QztBQUNBOztBQUNELGVBQUssU0FBTDtBQUNDLGlCQUFLZCxNQUFMLENBQVlpQixPQUFaLENBQW9CTixLQUFLLENBQUNLLEdBQTFCLEVBQStCTCxLQUFLLENBQUNPLE1BQXJDO0FBQ0E7O0FBQ0QsZUFBSyxPQUFMO0FBQ0MsaUJBQUtsQixNQUFMLENBQVltQixLQUFaLENBQWtCUixLQUFLLENBQUNTLE1BQXhCO0FBQ0E7QUFWRjtBQVlBLE9BYkQ7QUFlQSxZQUFNcEIsTUFBTSxHQUFHLE1BQU0sS0FBS0EsTUFBTCxDQUFZcUIsYUFBWixDQUEwQixLQUFLdEIsS0FBTCxDQUFXUyxHQUFYLENBQWUsS0FBS2MsYUFBTCxFQUFmLENBQTFCLENBQXJCO0FBRUEsV0FBS3ZCLEtBQUwsQ0FBV1EsR0FBWCxDQUFlLEtBQUtOLElBQXBCLEVBQTBCRCxNQUExQjtBQUVBLGFBQU9BLE1BQVA7QUFDQSxLQXJCRCxDQXFCRSxPQUFPdUIsS0FBUCxFQUFjO0FBQ2YsV0FBS3hCLEtBQUwsQ0FBV1EsR0FBWCxDQUFlLEtBQUtOLElBQXBCLEVBQTBCLElBQTFCO0FBQ0EsYUFBTyxJQUFQO0FBQ0EsS0F4QkQsU0F3QlU7QUFDVCxXQUFLdUIsWUFBTDtBQUNBO0FBQ0Q7O0FBRVEsUUFBSGpCLEdBQUcsQ0FBQ1AsTUFBRCxFQUFZO0FBQ3BCLFNBQUtELEtBQUwsQ0FBV1EsR0FBWCxDQUFlLEtBQUtlLGFBQUwsRUFBZixFQUFxQ3RCLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLElBQVgsQ0FBckM7QUFDQSxTQUFLVCxLQUFMLENBQVdRLEdBQVgsQ0FBZSxLQUFLTixJQUFwQixFQUEwQkQsTUFBMUI7QUFDQSxVQUFNLEtBQUtELEtBQUwsQ0FBVzBCLElBQVgsRUFBTjtBQUNBLFdBQU8sSUFBUDtBQUNBOztBQUVTLFFBQUpBLElBQUksQ0FBQ3pCLE1BQUQsRUFBYTtBQUN0QixRQUFJQSxNQUFKLEVBQVk7QUFDWCxXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQTs7QUFDRCxRQUFJO0FBQ0gsWUFBTSxLQUFLTyxHQUFMLENBQVMsS0FBS1AsTUFBZCxDQUFOO0FBQ0EsWUFBTSxLQUFLQSxNQUFMLENBQVl5QixJQUFaLEVBQU47QUFDQSxhQUFPLEtBQUt6QixNQUFaO0FBQ0EsS0FKRCxDQUlFLE9BQU91QixLQUFQLEVBQWM7QUFDZixZQUFNQSxLQUFOO0FBQ0E7QUFDRDs7QUFFVyxRQUFORyxNQUFNLEdBQWtCO0FBQzdCLFVBQU0sSUFBSXJCLEtBQUosQ0FBVSw2QkFBVixDQUFOO0FBQ0E7O0FBRVNpQixFQUFBQSxhQUFhLEdBQUc7QUFDekIsV0FBUSxHQUFFLEtBQUtyQixJQUFLLEtBQXBCO0FBQ0E7O0FBOUUySCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXAsIE1vZGVsRGF0YSB9IGZyb20gJy4uL2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7IFF1ZXJ5QnVpbGRlciB9IGZyb20gJy4uL3F1ZXJ5LWJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgQmVsb25nc1RvPFQgZXh0ZW5kcyBNb2RlbCwgRCBleHRlbmRzIE1vZGVsRGF0YT4gZXh0ZW5kcyBRdWVyeUJ1aWxkZXI8RD4gaW1wbGVtZW50cyBJbnRlcmFjdHNXaXRoUmVsYXRpb25zaGlwPFQ+IHtcblx0cHJvdGVjdGVkIGNoaWxkOiBUO1xuXHRwcm90ZWN0ZWQgcGFyZW50OiBUO1xuXHRwcm90ZWN0ZWQgbmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNoaWxkOiBULCBwYXJlbnQ6IFQsIG5hbWU/OiBzdHJpbmcpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuY2hpbGQgPSBjaGlsZDtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lIHx8IHBhcmVudC5nZXRUYWJsZU5hbWUoKTtcblx0fVxuXG5cdGNyZWF0ZShkYXRhPzogUGFydGlhbDxEPik6IFByb21pc2U8VD4ge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSBwYXJlbnQuJyk7XG5cdH1cblxuXHRhc3luYyB1cGRhdGUoZGF0YT86IFBhcnRpYWw8RD4pIHtcblx0XHRjb25zdCBwYXJlbnQgPSBhd2FpdCB0aGlzLnBhcmVudC51cGRhdGUoZGF0YSk7XG5cdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5uYW1lLCBwYXJlbnQpO1xuXHRcdHJldHVybiBwYXJlbnQ7XG5cdH1cblxuXHRhc3luYyBnZXQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnQud2hlcmVJbihxdWVyeS5rZXksIHF1ZXJ5LnZhbHVlcyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudC5saW1pdChxdWVyeS5hbW91bnQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBwYXJlbnQgPSBhd2FpdCB0aGlzLnBhcmVudC5maW5kT25lT3JGYWlsKHRoaXMuY2hpbGQuZ2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpKSk7XG5cblx0XHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMubmFtZSwgcGFyZW50KTtcblxuXHRcdFx0cmV0dXJuIHBhcmVudDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5uYW1lLCBudWxsKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIHNldChwYXJlbnQ6IFQpIHtcblx0XHR0aGlzLmNoaWxkLnNldCh0aGlzLmdldEZvcmVpZ25LZXkoKSwgcGFyZW50LmdldCgnaWQnKSk7XG5cdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5uYW1lLCBwYXJlbnQpO1xuXHRcdGF3YWl0IHRoaXMuY2hpbGQuc2F2ZSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXN5bmMgc2F2ZShwYXJlbnQ/OiBUKSB7XG5cdFx0aWYgKHBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCB0aGlzLnNldCh0aGlzLnBhcmVudCk7XG5cdFx0XHRhd2FpdCB0aGlzLnBhcmVudC5zYXZlKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQ7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGRlbGV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgcGFyZW50IG1vZGVsLicpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldEZvcmVpZ25LZXkoKSB7XG5cdFx0cmV0dXJuIGAke3RoaXMubmFtZX1faWRgO1xuXHR9XG59XG4iXX0=