"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasOneOrMany = void 0;

var _model = require("../model");

var _queryBuilder = require("../query-builder");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class HasOneOrMany extends _queryBuilder.QueryBuilder {
  constructor(relation, parent, name) {
    super();

    _defineProperty(this, "relation", void 0);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "name", void 0);

    this.relation = relation;
    this.parent = parent;
    this.name = name || parent.getTableName();
  }

  get() {
    return new Promise(() => {});
  }

  async create(data) {
    try {
      const model = new this.relation.type();
      model.fill(data);
      model.set(this.getForeignKey(), this.parent.get('id'));
      await model.save();
      return model;
    } catch (error) {
      throw error;
    }
  }

  async update(data) {
    try {
      this.relation.fill(data);
      this.relation.set(this.getForeignKey(), this.parent.get('id'));
      await this.relation.save();
      return this.relation;
    } catch (error) {
      throw error;
    }
  }

  save(instance) {
    if (instance) {
      this.relation.fill(instance instanceof _model.Model ? instance.getData() : instance);
    }

    const relation = this.relation;
    const data = relation.getData();
    relation.set(this.getForeignKey(), this.parent.get('id'));
    return relation.get('id') === null ? relation.create(data) : relation.update(data);
  }

  async first() {
    try {
      this.queries.forEach(query => {
        switch (query.method) {
          case 'where':
            const {
              operator,
              value
            } = query;
            this.relation.where(query.key, operator, value);
            break;

          case 'whereIn':
            this.relation.whereIn(query.key, query.values);
            break;

          case 'limit':
            this.relation.limit(query.amount);
            break;
        }
      });
      const child = await this.relation.where(this.getForeignKey(), '==', this.parent.get('id')).first();
      this.parent.set(this.name, child);
      return child;
    } catch (error) {
      throw error;
    } finally {
      this.clearQueries();
    }
  }

  async firstOrFail() {
    const child = await this.first();

    if (!child) {
      throw new Error('Model does not exist');
    }

    return child;
  }

  async delete() {
    try {
      const modelsOrModel = await this.get();

      if (modelsOrModel) {
        await modelsOrModel.delete();
      }

      this.parent.unset(this.name);
      return;
    } catch (error) {
      throw error;
    }
  }

  getForeignKey() {
    return `${this.name}_id`;
  }

}

exports.HasOneOrMany = HasOneOrMany;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvaGFzLW9uZS1vci1tYW55LnRzIl0sIm5hbWVzIjpbIkhhc09uZU9yTWFueSIsIlF1ZXJ5QnVpbGRlciIsImNvbnN0cnVjdG9yIiwicmVsYXRpb24iLCJwYXJlbnQiLCJuYW1lIiwiZ2V0VGFibGVOYW1lIiwiZ2V0IiwiUHJvbWlzZSIsImNyZWF0ZSIsImRhdGEiLCJtb2RlbCIsInR5cGUiLCJmaWxsIiwic2V0IiwiZ2V0Rm9yZWlnbktleSIsInNhdmUiLCJlcnJvciIsInVwZGF0ZSIsImluc3RhbmNlIiwiTW9kZWwiLCJnZXREYXRhIiwiZmlyc3QiLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5Iiwid2hlcmVJbiIsInZhbHVlcyIsImxpbWl0IiwiYW1vdW50IiwiY2hpbGQiLCJjbGVhclF1ZXJpZXMiLCJmaXJzdE9yRmFpbCIsIkVycm9yIiwiZGVsZXRlIiwibW9kZWxzT3JNb2RlbCIsInVuc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7QUFFTyxNQUFlQSxZQUFmLFNBQTBFQywwQkFBMUUsQ0FBa0k7QUFLeElDLEVBQUFBLFdBQVcsQ0FBQ0MsUUFBRCxFQUFjQyxNQUFkLEVBQTZCQyxJQUE3QixFQUE0QztBQUN0RDs7QUFEc0Q7O0FBQUE7O0FBQUE7O0FBRXRELFNBQUtGLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFJLElBQUlELE1BQU0sQ0FBQ0UsWUFBUCxFQUFwQjtBQUNBOztBQUVEQyxFQUFBQSxHQUFHLEdBQUc7QUFDTCxXQUFPLElBQUlDLE9BQUosQ0FBcUMsTUFBTSxDQUFFLENBQTdDLENBQVA7QUFDQTs7QUFFVyxRQUFOQyxNQUFNLENBQUNDLElBQUQsRUFBbUI7QUFDOUIsUUFBSTtBQUNILFlBQU1DLEtBQUssR0FBRyxJQUFJ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QUFDRDs7QUFFZ0IsUUFBWEMsV0FBVyxHQUFHO0FBQ25CLFVBQU1GLEtBQUssR0FBRyxNQUFNLEtBQUtiLEtBQUwsRUFBcEI7O0FBRUEsUUFBSSxDQUFDYSxLQUFMLEVBQVk7QUFDWCxZQUFNLElBQUlHLEtBQUosQ0FBVSxzQkFBVixDQUFOO0FBQ0E7O0FBRUQsV0FBT0gsS0FBUDtBQUNBOztBQUVXLFFBQU5JLE1BQU0sR0FBRztBQUNkLFFBQUk7QUFDSCxZQUFNQyxhQUFhLEdBQUcsTUFBTSxLQUFLakMsR0FBTCxFQUE1Qjs7QUFDQSxVQUFJaUMsYUFBSixFQUFtQjtBQUNsQixjQUFNQSxhQUFhLENBQUNELE1BQWQsRUFBTjtBQUNBOztBQUNELFdBQUtuQyxNQUFMLENBQVlxQyxLQUFaLENBQWtCLEtBQUtwQyxJQUF2QjtBQUNBO0FBQ0EsS0FQRCxDQU9FLE9BQU9ZLEtBQVAsRUFBYztBQUNmLFlBQU1BLEtBQU47QUFDQTtBQUNEOztBQUVTRixFQUFBQSxhQUFhLEdBQUc7QUFDekIsV0FBUSxHQUFFLEtBQUtWLElBQUssS0FBcEI7QUFDQTs7QUFwR3VJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHsgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcCwgTW9kZWxEYXRhIH0gZnJvbSAnLi4vY29udHJhY3RzJztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgUXVlcnlCdWlsZGVyIH0gZnJvbSAnLi4vcXVlcnktYnVpbGRlcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIYXNPbmVPck1hbnk8VCBleHRlbmRzIE1vZGVsLCBEIGV4dGVuZHMgTW9kZWxEYXRhPiBleHRlbmRzIFF1ZXJ5QnVpbGRlcjxEPiBpbXBsZW1lbnRzIEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXA8VD4ge1xuXHRwcm90ZWN0ZWQgcmVsYXRpb246IFQ7XG5cdHByb3RlY3RlZCBwYXJlbnQ6IE1vZGVsPGFueT47XG5cdHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocmVsYXRpb246IFQsIHBhcmVudDogTW9kZWwsIG5hbWU/OiBzdHJpbmcpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucmVsYXRpb24gPSByZWxhdGlvbjtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lIHx8IHBhcmVudC5nZXRUYWJsZU5hbWUoKTtcblx0fVxuXG5cdGdldCgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8VCB8IENvbGxlY3Rpb248VD4gfCBhbnk+KCgpID0+IHt9KTtcblx0fVxuXG5cdGFzeW5jIGNyZWF0ZShkYXRhOiBQYXJ0aWFsPEQ+KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IG1vZGVsID0gbmV3IHRoaXMucmVsYXRpb24udHlwZSgpO1xuXHRcdFx0bW9kZWwuZmlsbChkYXRhKTtcblx0XHRcdG1vZGVsLnNldCh0aGlzLmdldEZvcmVpZ25LZXkoKSwgdGhpcy5wYXJlbnQuZ2V0KCdpZCcpKTtcblx0XHRcdGF3YWl0IG1vZGVsLnNhdmUoKTtcblx0XHRcdHJldHVybiBtb2RlbDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgdXBkYXRlKGRhdGE6IFBhcnRpYWw8RD4pIHtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5yZWxhdGlvbi5maWxsKGRhdGEpO1xuXHRcdFx0dGhpcy5yZWxhdGlvbi5zZXQodGhpcy5nZXRGb3JlaWduS2V5KCksIHRoaXMucGFyZW50LmdldCgnaWQnKSk7XG5cdFx0XHRhd2FpdCB0aGlzLnJlbGF0aW9uLnNhdmUoKTtcblx0XHRcdHJldHVybiB0aGlzLnJlbGF0aW9uO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH1cblxuXHRzYXZlKGluc3RhbmNlPzogVCkge1xuXHRcdGlmIChpbnN0YW5jZSkge1xuXHRcdFx0dGhpcy5yZWxhdGlvbi5maWxsKGluc3RhbmNlIGluc3RhbmNlb2YgTW9kZWwgPyBpbnN0YW5jZS5nZXREYXRhKCkgOiBpbnN0YW5jZSk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlbGF0aW9uID0gdGhpcy5yZWxhdGlvbjtcblx0XHRjb25zdCBkYXRhID0gcmVsYXRpb24uZ2V0RGF0YSgpO1xuXHRcdHJlbGF0aW9uLnNldCh0aGlzLmdldEZvcmVpZ25LZXkoKSwgdGhpcy5wYXJlbnQuZ2V0KCdpZCcpKTtcblx0XHRyZXR1cm4gcmVsYXRpb24uZ2V0KCdpZCcpID09PSBudWxsID8gcmVsYXRpb24uY3JlYXRlKGRhdGEpIDogcmVsYXRpb24udXBkYXRlKGRhdGEpO1xuXHR9XG5cblx0YXN5bmMgZmlyc3QoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlSW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgY2hpbGQgPSBhd2FpdCB0aGlzLnJlbGF0aW9uLndoZXJlKHRoaXMuZ2V0Rm9yZWlnbktleSgpLCAnPT0nLCB0aGlzLnBhcmVudC5nZXQoJ2lkJykpLmZpcnN0KCk7XG5cdFx0XHR0aGlzLnBhcmVudC5zZXQodGhpcy5uYW1lLCBjaGlsZCk7XG5cdFx0XHRyZXR1cm4gY2hpbGQ7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGZpcnN0T3JGYWlsKCkge1xuXHRcdGNvbnN0IGNoaWxkID0gYXdhaXQgdGhpcy5maXJzdCgpO1xuXG5cdFx0aWYgKCFjaGlsZCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNb2RlbCBkb2VzIG5vdCBleGlzdCcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjaGlsZDtcblx0fVxuXG5cdGFzeW5jIGRlbGV0ZSgpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgbW9kZWxzT3JNb2RlbCA9IGF3YWl0IHRoaXMuZ2V0KCk7XG5cdFx0XHRpZiAobW9kZWxzT3JNb2RlbCkge1xuXHRcdFx0XHRhd2FpdCBtb2RlbHNPck1vZGVsLmRlbGV0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5wYXJlbnQudW5zZXQodGhpcy5uYW1lKTtcblx0XHRcdHJldHVybjtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldEZvcmVpZ25LZXkoKSB7XG5cdFx0cmV0dXJuIGAke3RoaXMubmFtZX1faWRgO1xuXHR9XG59XG4iXX0=