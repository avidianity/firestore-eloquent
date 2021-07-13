"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasRelationship = void 0;

var _queryBuilder = require("./query-builder");

var _belongsTo = require("./relations/belongs-to");

var _hasMany = require("./relations/has-many");

var _hasOne = require("./relations/has-one");

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

var HasRelationship = /*#__PURE__*/function (_QueryBuilder) {
  _inherits(HasRelationship, _QueryBuilder);

  var _super = _createSuper(HasRelationship);

  function HasRelationship() {
    _classCallCheck(this, HasRelationship);

    return _super.apply(this, arguments);
  }

  _createClass(HasRelationship, [{
    key: "hasMany",
    value: function hasMany(relation, name) {
      return new _hasMany.HasMany(relation, this, name);
    }
  }, {
    key: "hasOne",
    value: function hasOne(relation, name) {
      return new _hasOne.HasOne(relation, this, name);
    }
  }, {
    key: "belongsTo",
    value: function belongsTo(parent, name) {
      return new _belongsTo.BelongsTo(this, parent, name);
    }
  }]);

  return HasRelationship;
}(_queryBuilder.QueryBuilder);

exports.HasRelationship = HasRelationship;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oYXMtcmVsYXRpb25zaGlwLnRzIl0sIm5hbWVzIjpbIkhhc1JlbGF0aW9uc2hpcCIsInJlbGF0aW9uIiwibmFtZSIsIkhhc01hbnkiLCJIYXNPbmUiLCJwYXJlbnQiLCJCZWxvbmdzVG8iLCJRdWVyeUJ1aWxkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXNCQSxlOzs7Ozs7Ozs7Ozs7O1dBR3JCLGlCQUNDQyxRQURELEVBRUNDLElBRkQsRUFHaUI7QUFDaEIsYUFBTyxJQUFJQyxnQkFBSixDQUFrQkYsUUFBbEIsRUFBNkIsSUFBN0IsRUFBd0RDLElBQXhELENBQVA7QUFDQTs7O1dBRUQsZ0JBQWtDRCxRQUFsQyxFQUErQ0MsSUFBL0MsRUFBMkU7QUFDMUUsYUFBTyxJQUFJRSxjQUFKLENBQWlCSCxRQUFqQixFQUE0QixJQUE1QixFQUF1REMsSUFBdkQsQ0FBUDtBQUNBOzs7V0FFRCxtQkFBcUNHLE1BQXJDLEVBQWdESCxJQUFoRCxFQUE4RDtBQUM3RCxhQUFPLElBQUlJLG9CQUFKLENBQXFCLElBQXJCLEVBQTRDRCxNQUE1QyxFQUFvREgsSUFBcEQsQ0FBUDtBQUNBOzs7O0VBZFFLLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxEYXRhIH0gZnJvbSAnLi9jb250cmFjdHMnO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBRdWVyeUJ1aWxkZXIgfSBmcm9tICcuL3F1ZXJ5LWJ1aWxkZXInO1xyXG5pbXBvcnQgeyBCZWxvbmdzVG8gfSBmcm9tICcuL3JlbGF0aW9ucy9iZWxvbmdzLXRvJztcclxuaW1wb3J0IHsgSGFzTWFueSB9IGZyb20gJy4vcmVsYXRpb25zL2hhcy1tYW55JztcclxuaW1wb3J0IHsgSGFzT25lIH0gZnJvbSAnLi9yZWxhdGlvbnMvaGFzLW9uZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGFzUmVsYXRpb25zaGlwPFxyXG5cdEQgZXh0ZW5kcyBNb2RlbERhdGFcclxuPiBleHRlbmRzIFF1ZXJ5QnVpbGRlcjxEPiB7XHJcblx0cHJvdGVjdGVkIGhhc01hbnk8VCBleHRlbmRzIE1vZGVsPihcclxuXHRcdHJlbGF0aW9uOiBULFxyXG5cdFx0bmFtZTogc3RyaW5nXHJcblx0KTogSGFzTWFueTxULCBEPiB7XHJcblx0XHRyZXR1cm4gbmV3IEhhc01hbnk8VCwgRD4ocmVsYXRpb24sICh0aGlzIGFzIHVua25vd24pIGFzIE1vZGVsLCBuYW1lKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBoYXNPbmU8VCBleHRlbmRzIE1vZGVsPihyZWxhdGlvbjogVCwgbmFtZTogc3RyaW5nKTogSGFzT25lPFQsIEQ+IHtcclxuXHRcdHJldHVybiBuZXcgSGFzT25lPFQsIEQ+KHJlbGF0aW9uLCAodGhpcyBhcyB1bmtub3duKSBhcyBNb2RlbCwgbmFtZSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgYmVsb25nc1RvPFQgZXh0ZW5kcyBNb2RlbD4ocGFyZW50OiBULCBuYW1lOiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiBuZXcgQmVsb25nc1RvPFQsIEQ+KCh0aGlzIGFzIHVua25vd24pIGFzIFQsIHBhcmVudCwgbmFtZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==