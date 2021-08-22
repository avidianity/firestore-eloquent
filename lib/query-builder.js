"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryBuilder = void 0;

var _hasMacros = require("./has-macros");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class QueryBuilder extends _hasMacros.HasMacros {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "queries", []);
  }

  clearQueries() {
    this.queries = [];
    return this;
  }

  where(key, operator, value) {
    this.queries.push({
      key: key,
      operator,
      value,
      method: 'where',
      amount: 0
    });
    return this;
  }

  whereIn(key, values) {
    this.queries.push({
      key: key,
      values,
      method: 'whereIn',
      amount: 0
    });
    return this;
  }

  limit(amount) {
    this.queries.push({
      amount,
      method: 'limit',
      key: 'N/A'
    });
    return this;
  }

}

exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS1idWlsZGVyLnRzIl0sIm5hbWVzIjpbIlF1ZXJ5QnVpbGRlciIsIkhhc01hY3JvcyIsImNsZWFyUXVlcmllcyIsInF1ZXJpZXMiLCJ3aGVyZSIsImtleSIsIm9wZXJhdG9yIiwidmFsdWUiLCJwdXNoIiwibWV0aG9kIiwiYW1vdW50Iiwid2hlcmVJbiIsInZhbHVlcyIsImxpbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFXTyxNQUFNQSxZQUFOLFNBQWdEQyxvQkFBaEQsQ0FBMEQ7QUFBQTtBQUFBOztBQUFBLHFDQUM5QixFQUQ4QjtBQUFBOztBQUd0REMsRUFBQUEsWUFBWSxHQUFHO0FBQ3hCLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsV0FBTyxJQUFQO0FBQ0E7O0FBRURDLEVBQUFBLEtBQUssQ0FBb0JDLEdBQXBCLEVBQTRCQyxRQUE1QixFQUE4Q0MsS0FBOUMsRUFBMkQ7QUFDL0QsU0FBS0osT0FBTCxDQUFhSyxJQUFiLENBQWtCO0FBQ2pCSCxNQUFBQSxHQUFHLEVBQVVBLEdBREk7QUFFakJDLE1BQUFBLFFBRmlCO0FBR2pCQyxNQUFBQSxLQUhpQjtBQUlqQkUsTUFBQUEsTUFBTSxFQUFFLE9BSlM7QUFLakJDLE1BQUFBLE1BQU0sRUFBRTtBQUxTLEtBQWxCO0FBT0EsV0FBTyxJQUFQO0FBQ0E7O0FBRURDLEVBQUFBLE9BQU8sQ0FBb0JOLEdBQXBCLEVBQTRCTyxNQUE1QixFQUFpRDtBQUN2RCxTQUFLVCxPQUFMLENBQWFLLElBQWIsQ0FBa0I7QUFDakJILE1BQUFBLEdBQUcsRUFBVUEsR0FESTtBQUVqQk8sTUFBQUEsTUFGaUI7QUFHakJILE1BQUFBLE1BQU0sRUFBRSxTQUhTO0FBSWpCQyxNQUFBQSxNQUFNLEVBQUU7QUFKUyxLQUFsQjtBQU1BLFdBQU8sSUFBUDtBQUNBOztBQUVERyxFQUFBQSxLQUFLLENBQUNILE1BQUQsRUFBaUI7QUFDckIsU0FBS1AsT0FBTCxDQUFhSyxJQUFiLENBQWtCO0FBQUVFLE1BQUFBLE1BQUY7QUFBVUQsTUFBQUEsTUFBTSxFQUFFLE9BQWxCO0FBQTJCSixNQUFBQSxHQUFHLEVBQUU7QUFBaEMsS0FBbEI7QUFDQSxXQUFPLElBQVA7QUFDQTs7QUFoQytEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxEYXRhIH0gZnJvbSAnLi9jb250cmFjdHMnO1xuaW1wb3J0IHsgSGFzTWFjcm9zIH0gZnJvbSAnLi9oYXMtbWFjcm9zJztcblxudHlwZSBNb2RlcyA9ICd3aGVyZScgfCAnd2hlcmVJbicgfCAnd2hlcmVOb3RJbicgfCAnbGltaXQnO1xuXG5pbnRlcmZhY2UgUXVlcnkge1xuXHRtZXRob2Q6IE1vZGVzO1xuXHRrZXk6IHN0cmluZztcblx0YW1vdW50OiBudW1iZXI7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXJ5QnVpbGRlcjxUIGV4dGVuZHMgTW9kZWxEYXRhPiBleHRlbmRzIEhhc01hY3JvcyB7XG5cdHByb3RlY3RlZCBxdWVyaWVzOiBBcnJheTxRdWVyeT4gPSBbXTtcblxuXHRwcm90ZWN0ZWQgY2xlYXJRdWVyaWVzKCkge1xuXHRcdHRoaXMucXVlcmllcyA9IFtdO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0d2hlcmU8SyBleHRlbmRzIGtleW9mIFQ+KGtleTogSywgb3BlcmF0b3I6IHN0cmluZywgdmFsdWU6IFRbS10pIHtcblx0XHR0aGlzLnF1ZXJpZXMucHVzaCh7XG5cdFx0XHRrZXk6IDxzdHJpbmc+a2V5LFxuXHRcdFx0b3BlcmF0b3IsXG5cdFx0XHR2YWx1ZSxcblx0XHRcdG1ldGhvZDogJ3doZXJlJyxcblx0XHRcdGFtb3VudDogMCxcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHdoZXJlSW48SyBleHRlbmRzIGtleW9mIFQ+KGtleTogSywgdmFsdWVzOiBBcnJheTxUW0tdPikge1xuXHRcdHRoaXMucXVlcmllcy5wdXNoKHtcblx0XHRcdGtleTogPHN0cmluZz5rZXksXG5cdFx0XHR2YWx1ZXMsXG5cdFx0XHRtZXRob2Q6ICd3aGVyZUluJyxcblx0XHRcdGFtb3VudDogMCxcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxpbWl0KGFtb3VudDogbnVtYmVyKSB7XG5cdFx0dGhpcy5xdWVyaWVzLnB1c2goeyBhbW91bnQsIG1ldGhvZDogJ2xpbWl0Jywga2V5OiAnTi9BJyB9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuIl19