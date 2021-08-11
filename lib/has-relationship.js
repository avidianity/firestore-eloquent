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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oYXMtcmVsYXRpb25zaGlwLnRzIl0sIm5hbWVzIjpbIkhhc1JlbGF0aW9uc2hpcCIsInJlbGF0aW9uIiwibmFtZSIsIkhhc01hbnkiLCJIYXNPbmUiLCJwYXJlbnQiLCJCZWxvbmdzVG8iLCJRdWVyeUJ1aWxkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXNCQSxlOzs7Ozs7Ozs7Ozs7O1dBQ3JCLGlCQUFtQ0MsUUFBbkMsRUFBZ0RDLElBQWhELEVBQThFO0FBQzdFLGFBQU8sSUFBSUMsZ0JBQUosQ0FBa0JGLFFBQWxCLEVBQTRCLElBQTVCLEVBQXNEQyxJQUF0RCxDQUFQO0FBQ0E7OztXQUVELGdCQUFrQ0QsUUFBbEMsRUFBK0NDLElBQS9DLEVBQTRFO0FBQzNFLGFBQU8sSUFBSUUsY0FBSixDQUFpQkgsUUFBakIsRUFBMkIsSUFBM0IsRUFBcURDLElBQXJELENBQVA7QUFDQTs7O1dBRUQsbUJBQXFDRyxNQUFyQyxFQUFnREgsSUFBaEQsRUFBK0Q7QUFDOUQsYUFBTyxJQUFJSSxvQkFBSixDQUFvQixJQUFwQixFQUEwQ0QsTUFBMUMsRUFBa0RILElBQWxELENBQVA7QUFDQTs7OztFQVhpRUssMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbERhdGEgfSBmcm9tICcuL2NvbnRyYWN0cyc7XHJcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IFF1ZXJ5QnVpbGRlciB9IGZyb20gJy4vcXVlcnktYnVpbGRlcic7XHJcbmltcG9ydCB7IEJlbG9uZ3NUbyB9IGZyb20gJy4vcmVsYXRpb25zL2JlbG9uZ3MtdG8nO1xyXG5pbXBvcnQgeyBIYXNNYW55IH0gZnJvbSAnLi9yZWxhdGlvbnMvaGFzLW1hbnknO1xyXG5pbXBvcnQgeyBIYXNPbmUgfSBmcm9tICcuL3JlbGF0aW9ucy9oYXMtb25lJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIYXNSZWxhdGlvbnNoaXA8RCBleHRlbmRzIE1vZGVsRGF0YT4gZXh0ZW5kcyBRdWVyeUJ1aWxkZXI8RD4ge1xyXG5cdHByb3RlY3RlZCBoYXNNYW55PFQgZXh0ZW5kcyBNb2RlbD4ocmVsYXRpb246IFQsIG5hbWU/OiBzdHJpbmcpOiBIYXNNYW55PFQsIEQ+IHtcclxuXHRcdHJldHVybiBuZXcgSGFzTWFueTxULCBEPihyZWxhdGlvbiwgdGhpcyBhcyB1bmtub3duIGFzIE1vZGVsLCBuYW1lKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBoYXNPbmU8VCBleHRlbmRzIE1vZGVsPihyZWxhdGlvbjogVCwgbmFtZT86IHN0cmluZyk6IEhhc09uZTxULCBEPiB7XHJcblx0XHRyZXR1cm4gbmV3IEhhc09uZTxULCBEPihyZWxhdGlvbiwgdGhpcyBhcyB1bmtub3duIGFzIE1vZGVsLCBuYW1lKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBiZWxvbmdzVG88VCBleHRlbmRzIE1vZGVsPihwYXJlbnQ6IFQsIG5hbWU/OiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiBuZXcgQmVsb25nc1RvPFQsIEQ+KHRoaXMgYXMgdW5rbm93biBhcyBULCBwYXJlbnQsIG5hbWUpO1xyXG5cdH1cclxufVxyXG4iXX0=