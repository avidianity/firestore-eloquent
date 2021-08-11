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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oYXMtcmVsYXRpb25zaGlwLnRzIl0sIm5hbWVzIjpbIkhhc1JlbGF0aW9uc2hpcCIsInJlbGF0aW9uIiwibmFtZSIsIkhhc01hbnkiLCJIYXNPbmUiLCJwYXJlbnQiLCJCZWxvbmdzVG8iLCJRdWVyeUJ1aWxkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXNCQSxlOzs7Ozs7Ozs7Ozs7O1dBQ3JCLGlCQUFtQ0MsUUFBbkMsRUFBZ0RDLElBQWhELEVBQThFO0FBQzdFLGFBQU8sSUFBSUMsZ0JBQUosQ0FBa0JGLFFBQWxCLEVBQTRCLElBQTVCLEVBQXNEQyxJQUF0RCxDQUFQO0FBQ0E7OztXQUVELGdCQUFrQ0QsUUFBbEMsRUFBK0NDLElBQS9DLEVBQTRFO0FBQzNFLGFBQU8sSUFBSUUsY0FBSixDQUFpQkgsUUFBakIsRUFBMkIsSUFBM0IsRUFBcURDLElBQXJELENBQVA7QUFDQTs7O1dBRUQsbUJBQXFDRyxNQUFyQyxFQUFnREgsSUFBaEQsRUFBK0Q7QUFDOUQsYUFBTyxJQUFJSSxvQkFBSixDQUFvQixJQUFwQixFQUEwQ0QsTUFBMUMsRUFBa0RILElBQWxELENBQVA7QUFDQTs7OztFQVhpRUssMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbERhdGEgfSBmcm9tICcuL2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgUXVlcnlCdWlsZGVyIH0gZnJvbSAnLi9xdWVyeS1idWlsZGVyJztcbmltcG9ydCB7IEJlbG9uZ3NUbyB9IGZyb20gJy4vcmVsYXRpb25zL2JlbG9uZ3MtdG8nO1xuaW1wb3J0IHsgSGFzTWFueSB9IGZyb20gJy4vcmVsYXRpb25zL2hhcy1tYW55JztcbmltcG9ydCB7IEhhc09uZSB9IGZyb20gJy4vcmVsYXRpb25zL2hhcy1vbmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGFzUmVsYXRpb25zaGlwPEQgZXh0ZW5kcyBNb2RlbERhdGE+IGV4dGVuZHMgUXVlcnlCdWlsZGVyPEQ+IHtcblx0cHJvdGVjdGVkIGhhc01hbnk8VCBleHRlbmRzIE1vZGVsPihyZWxhdGlvbjogVCwgbmFtZT86IHN0cmluZyk6IEhhc01hbnk8VCwgRD4ge1xuXHRcdHJldHVybiBuZXcgSGFzTWFueTxULCBEPihyZWxhdGlvbiwgdGhpcyBhcyB1bmtub3duIGFzIE1vZGVsLCBuYW1lKTtcblx0fVxuXG5cdHByb3RlY3RlZCBoYXNPbmU8VCBleHRlbmRzIE1vZGVsPihyZWxhdGlvbjogVCwgbmFtZT86IHN0cmluZyk6IEhhc09uZTxULCBEPiB7XG5cdFx0cmV0dXJuIG5ldyBIYXNPbmU8VCwgRD4ocmVsYXRpb24sIHRoaXMgYXMgdW5rbm93biBhcyBNb2RlbCwgbmFtZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYmVsb25nc1RvPFQgZXh0ZW5kcyBNb2RlbD4ocGFyZW50OiBULCBuYW1lPzogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG5ldyBCZWxvbmdzVG88VCwgRD4odGhpcyBhcyB1bmtub3duIGFzIFQsIHBhcmVudCwgbmFtZSk7XG5cdH1cbn1cbiJdfQ==