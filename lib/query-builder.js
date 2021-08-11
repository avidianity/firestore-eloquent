"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryBuilder = void 0;

var _hasMacros = require("./has-macros");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var QueryBuilder = /*#__PURE__*/function (_HasMacros) {
  _inherits(QueryBuilder, _HasMacros);

  var _super = _createSuper(QueryBuilder);

  function QueryBuilder() {
    var _this;

    _classCallCheck(this, QueryBuilder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "queries", []);

    return _this;
  }

  _createClass(QueryBuilder, [{
    key: "clearQueries",
    value: function clearQueries() {
      this.queries = [];
      return this;
    }
  }, {
    key: "where",
    value: function where(key, operator, value) {
      this.queries.push({
        key: key,
        operator: operator,
        value: value,
        method: 'where',
        amount: 0
      });
      return this;
    }
  }, {
    key: "whereIn",
    value: function whereIn(key, values) {
      this.queries.push({
        key: key,
        values: values,
        method: 'whereIn',
        amount: 0
      });
      return this;
    }
  }, {
    key: "whereNotIn",
    value: function whereNotIn(key, values) {
      this.queries.push({
        key: key,
        values: values,
        method: 'whereNotIn',
        amount: 0
      });
      return this;
    }
  }, {
    key: "limit",
    value: function limit(amount) {
      this.queries.push({
        amount: amount,
        method: 'limit',
        key: 'N/A'
      });
      return this;
    }
  }]);

  return QueryBuilder;
}(_hasMacros.HasMacros);

exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyeS1idWlsZGVyLnRzIl0sIm5hbWVzIjpbIlF1ZXJ5QnVpbGRlciIsInF1ZXJpZXMiLCJrZXkiLCJvcGVyYXRvciIsInZhbHVlIiwicHVzaCIsIm1ldGhvZCIsImFtb3VudCIsInZhbHVlcyIsIkhhc01hY3JvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVdhQSxZOzs7Ozs7Ozs7Ozs7Ozs7OzhEQUNzQixFOzs7Ozs7O1dBRWxDLHdCQUF5QjtBQUN4QixXQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLGFBQU8sSUFBUDtBQUNBOzs7V0FFRCxlQUF5QkMsR0FBekIsRUFBaUNDLFFBQWpDLEVBQW1EQyxLQUFuRCxFQUFnRTtBQUMvRCxXQUFLSCxPQUFMLENBQWFJLElBQWIsQ0FBa0I7QUFDakJILFFBQUFBLEdBQUcsRUFBVUEsR0FESTtBQUVqQkMsUUFBQUEsUUFBUSxFQUFSQSxRQUZpQjtBQUdqQkMsUUFBQUEsS0FBSyxFQUFMQSxLQUhpQjtBQUlqQkUsUUFBQUEsTUFBTSxFQUFFLE9BSlM7QUFLakJDLFFBQUFBLE1BQU0sRUFBRTtBQUxTLE9BQWxCO0FBT0EsYUFBTyxJQUFQO0FBQ0E7OztXQUVELGlCQUEyQkwsR0FBM0IsRUFBbUNNLE1BQW5DLEVBQXdEO0FBQ3ZELFdBQUtQLE9BQUwsQ0FBYUksSUFBYixDQUFrQjtBQUNqQkgsUUFBQUEsR0FBRyxFQUFVQSxHQURJO0FBRWpCTSxRQUFBQSxNQUFNLEVBQU5BLE1BRmlCO0FBR2pCRixRQUFBQSxNQUFNLEVBQUUsU0FIUztBQUlqQkMsUUFBQUEsTUFBTSxFQUFFO0FBSlMsT0FBbEI7QUFNQSxhQUFPLElBQVA7QUFDQTs7O1dBRUQsb0JBQThCTCxHQUE5QixFQUFzQ00sTUFBdEMsRUFBMkQ7QUFDMUQsV0FBS1AsT0FBTCxDQUFhSSxJQUFiLENBQWtCO0FBQ2pCSCxRQUFBQSxHQUFHLEVBQVVBLEdBREk7QUFFakJNLFFBQUFBLE1BQU0sRUFBTkEsTUFGaUI7QUFHakJGLFFBQUFBLE1BQU0sRUFBRSxZQUhTO0FBSWpCQyxRQUFBQSxNQUFNLEVBQUU7QUFKUyxPQUFsQjtBQU1BLGFBQU8sSUFBUDtBQUNBOzs7V0FFRCxlQUFNQSxNQUFOLEVBQXNCO0FBQ3JCLFdBQUtOLE9BQUwsQ0FBYUksSUFBYixDQUFrQjtBQUFFRSxRQUFBQSxNQUFNLEVBQU5BLE1BQUY7QUFBVUQsUUFBQUEsTUFBTSxFQUFFLE9BQWxCO0FBQTJCSixRQUFBQSxHQUFHLEVBQUU7QUFBaEMsT0FBbEI7QUFDQSxhQUFPLElBQVA7QUFDQTs7OztFQTFDcURPLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxEYXRhIH0gZnJvbSAnLi9jb250cmFjdHMnO1xyXG5pbXBvcnQgeyBIYXNNYWNyb3MgfSBmcm9tICcuL2hhcy1tYWNyb3MnO1xyXG5cclxudHlwZSBNb2RlcyA9ICd3aGVyZScgfCAnd2hlcmVJbicgfCAnd2hlcmVOb3RJbicgfCAnbGltaXQnO1xyXG5cclxuaW50ZXJmYWNlIFF1ZXJ5IHtcclxuXHRtZXRob2Q6IE1vZGVzO1xyXG5cdGtleTogc3RyaW5nO1xyXG5cdGFtb3VudDogbnVtYmVyO1xyXG5cdFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXJ5QnVpbGRlcjxUIGV4dGVuZHMgTW9kZWxEYXRhPiBleHRlbmRzIEhhc01hY3JvcyB7XHJcblx0cHJvdGVjdGVkIHF1ZXJpZXM6IEFycmF5PFF1ZXJ5PiA9IFtdO1xyXG5cclxuXHRwcm90ZWN0ZWQgY2xlYXJRdWVyaWVzKCkge1xyXG5cdFx0dGhpcy5xdWVyaWVzID0gW107XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHdoZXJlPEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEssIG9wZXJhdG9yOiBzdHJpbmcsIHZhbHVlOiBUW0tdKSB7XHJcblx0XHR0aGlzLnF1ZXJpZXMucHVzaCh7XHJcblx0XHRcdGtleTogPHN0cmluZz5rZXksXHJcblx0XHRcdG9wZXJhdG9yLFxyXG5cdFx0XHR2YWx1ZSxcclxuXHRcdFx0bWV0aG9kOiAnd2hlcmUnLFxyXG5cdFx0XHRhbW91bnQ6IDAsXHJcblx0XHR9KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0d2hlcmVJbjxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLLCB2YWx1ZXM6IEFycmF5PFRbS10+KSB7XHJcblx0XHR0aGlzLnF1ZXJpZXMucHVzaCh7XHJcblx0XHRcdGtleTogPHN0cmluZz5rZXksXHJcblx0XHRcdHZhbHVlcyxcclxuXHRcdFx0bWV0aG9kOiAnd2hlcmVJbicsXHJcblx0XHRcdGFtb3VudDogMCxcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHR3aGVyZU5vdEluPEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEssIHZhbHVlczogQXJyYXk8VFtLXT4pIHtcclxuXHRcdHRoaXMucXVlcmllcy5wdXNoKHtcclxuXHRcdFx0a2V5OiA8c3RyaW5nPmtleSxcclxuXHRcdFx0dmFsdWVzLFxyXG5cdFx0XHRtZXRob2Q6ICd3aGVyZU5vdEluJyxcclxuXHRcdFx0YW1vdW50OiAwLFxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGxpbWl0KGFtb3VudDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLnF1ZXJpZXMucHVzaCh7IGFtb3VudCwgbWV0aG9kOiAnbGltaXQnLCBrZXk6ICdOL0EnIH0pO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG59XHJcbiJdfQ==