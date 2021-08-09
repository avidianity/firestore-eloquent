"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BelongsTo = void 0;

var _queryBuilder = require("../query-builder");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var BelongsTo = /*#__PURE__*/function (_QueryBuilder) {
  _inherits(BelongsTo, _QueryBuilder);

  var _super = _createSuper(BelongsTo);

  function BelongsTo(child, parent, name) {
    var _this;

    _classCallCheck(this, BelongsTo);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "child", void 0);

    _defineProperty(_assertThisInitialized(_this), "parent", void 0);

    _defineProperty(_assertThisInitialized(_this), "name", void 0);

    _this.child = child;
    _this.parent = parent;
    _this.name = name;
    return _this;
  }

  _createClass(BelongsTo, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var parent;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.queries.forEach(function (query) {
                  switch (query.method) {
                    case 'where':
                      var operator = query.operator,
                          value = query.value;

                      _this2.parent.where(query.key, operator, value);

                      break;

                    case 'whereIn':
                      _this2.parent.whereIn(query.key, query.values);

                      break;

                    case 'whereNotIn':
                      _this2.parent.whereNotIn(query.key, query.values);

                      break;

                    case 'limit':
                      _this2.parent.limit(query.amount);

                      break;
                  }
                });
                _context.next = 4;
                return this.parent.findOne(this.child.get(this.getForeignKey()));

              case 4:
                parent = _context.sent;
                this.clearQueries();
                this.child.set(this.name, parent);
                return _context.abrupt("return", parent);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "set",
    value: function set(parent) {
      this.child.set(this.getForeignKey(), parent.get('id'));
      this.child.set(this.name, parent);
      return this;
    }
  }, {
    key: "save",
    value: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (parent) {
                  this.parent = parent;
                }

                _context2.prev = 1;
                _context2.next = 4;
                return this.parent.save();

              case 4:
                this.child.set(this.name, this.parent);
                return _context2.abrupt("return", this.child);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                throw _context2.t0;

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 8]]);
      }));

      function save(_x) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }, {
    key: "delete",
    value: function _delete() {
      throw new Error('Cannot delete parent model.');
    }
  }, {
    key: "getForeignKey",
    value: function getForeignKey() {
      return this.parent.name.toLowerCase() + '_id';
    }
  }]);

  return BelongsTo;
}(_queryBuilder.QueryBuilder);

exports.BelongsTo = BelongsTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvYmVsb25ncy10by50cyJdLCJuYW1lcyI6WyJCZWxvbmdzVG8iLCJjaGlsZCIsInBhcmVudCIsIm5hbWUiLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5Iiwid2hlcmVJbiIsInZhbHVlcyIsIndoZXJlTm90SW4iLCJsaW1pdCIsImFtb3VudCIsImZpbmRPbmUiLCJnZXQiLCJnZXRGb3JlaWduS2V5IiwiY2xlYXJRdWVyaWVzIiwic2V0Iiwic2F2ZSIsIkVycm9yIiwidG9Mb3dlckNhc2UiLCJRdWVyeUJ1aWxkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLFM7Ozs7O0FBS1oscUJBQVlDLEtBQVosRUFBc0JDLE1BQXRCLEVBQWlDQyxJQUFqQyxFQUErQztBQUFBOztBQUFBOztBQUM5Qzs7QUFEOEM7O0FBQUE7O0FBQUE7O0FBRTlDLFVBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUo4QztBQUs5Qzs7Ozs7eUVBRUQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRSxxQkFBS0MsT0FBTCxDQUFhQyxPQUFiLENBQXFCLFVBQUNDLEtBQUQsRUFBVztBQUMvQiwwQkFBUUEsS0FBSyxDQUFDQyxNQUFkO0FBQ0MseUJBQUssT0FBTDtBQUNDLDBCQUFRQyxRQUFSLEdBQTRCRixLQUE1QixDQUFRRSxRQUFSO0FBQUEsMEJBQWtCQyxLQUFsQixHQUE0QkgsS0FBNUIsQ0FBa0JHLEtBQWxCOztBQUNBLHNCQUFBLE1BQUksQ0FBQ1AsTUFBTCxDQUFZUSxLQUFaLENBQWtCSixLQUFLLENBQUNLLEdBQXhCLEVBQTZCSCxRQUE3QixFQUF1Q0MsS0FBdkM7O0FBQ0E7O0FBQ0QseUJBQUssU0FBTDtBQUNDLHNCQUFBLE1BQUksQ0FBQ1AsTUFBTCxDQUFZVSxPQUFaLENBQW9CTixLQUFLLENBQUNLLEdBQTFCLEVBQStCTCxLQUFLLENBQUNPLE1BQXJDOztBQUNBOztBQUNELHlCQUFLLFlBQUw7QUFDQyxzQkFBQSxNQUFJLENBQUNYLE1BQUwsQ0FBWVksVUFBWixDQUF1QlIsS0FBSyxDQUFDSyxHQUE3QixFQUFrQ0wsS0FBSyxDQUFDTyxNQUF4Qzs7QUFDQTs7QUFDRCx5QkFBSyxPQUFMO0FBQ0Msc0JBQUEsTUFBSSxDQUFDWCxNQUFMLENBQVlhLEtBQVosQ0FBa0JULEtBQUssQ0FBQ1UsTUFBeEI7O0FBQ0E7QUFiRjtBQWVBLGlCQWhCRDtBQUZGO0FBQUEsdUJBbUJ1QixLQUFLZCxNQUFMLENBQVllLE9BQVosQ0FBb0IsS0FBS2hCLEtBQUwsQ0FBV2lCLEdBQVgsQ0FBZSxLQUFLQyxhQUFMLEVBQWYsQ0FBcEIsQ0FuQnZCOztBQUFBO0FBbUJRakIsZ0JBQUFBLE1BbkJSO0FBb0JFLHFCQUFLa0IsWUFBTDtBQUNBLHFCQUFLbkIsS0FBTCxDQUFXb0IsR0FBWCxDQUFlLEtBQUtsQixJQUFwQixFQUEwQkQsTUFBMUI7QUFyQkYsaURBc0JTQSxNQXRCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7O1dBNEJBLGFBQUlBLE1BQUosRUFBZTtBQUNkLFdBQUtELEtBQUwsQ0FBV29CLEdBQVgsQ0FBZSxLQUFLRixhQUFMLEVBQWYsRUFBcUNqQixNQUFNLENBQUNnQixHQUFQLENBQVcsSUFBWCxDQUFyQztBQUNBLFdBQUtqQixLQUFMLENBQVdvQixHQUFYLENBQWUsS0FBS2xCLElBQXBCLEVBQTBCRCxNQUExQjtBQUNBLGFBQU8sSUFBUDtBQUNBOzs7OzBFQUVELGtCQUFXQSxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQyxvQkFBSUEsTUFBSixFQUFZO0FBQ1gsdUJBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBOztBQUhGO0FBQUE7QUFBQSx1QkFLUSxLQUFLQSxNQUFMLENBQVlvQixJQUFaLEVBTFI7O0FBQUE7QUFNRSxxQkFBS3JCLEtBQUwsQ0FBV29CLEdBQVgsQ0FBZSxLQUFLbEIsSUFBcEIsRUFBMEIsS0FBS0QsTUFBL0I7QUFORixrREFPUyxLQUFLRCxLQVBkOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7V0FhQSxtQkFBUztBQUNSLFlBQU0sSUFBSXNCLEtBQUosQ0FBVSw2QkFBVixDQUFOO0FBQ0E7OztXQUVELHlCQUEwQjtBQUN6QixhQUFPLEtBQUtyQixNQUFMLENBQVlDLElBQVosQ0FBaUJxQixXQUFqQixLQUFpQyxLQUF4QztBQUNBOzs7O0VBakVtRUMsMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbERhdGEgfSBmcm9tICcuLi9jb250cmFjdHMnO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4uL21vZGVsJztcclxuaW1wb3J0IHsgUXVlcnlCdWlsZGVyIH0gZnJvbSAnLi4vcXVlcnktYnVpbGRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmVsb25nc1RvPFQgZXh0ZW5kcyBNb2RlbCwgRCBleHRlbmRzIE1vZGVsRGF0YT4gZXh0ZW5kcyBRdWVyeUJ1aWxkZXI8RD4ge1xyXG5cdHByb3RlY3RlZCBjaGlsZDogVDtcclxuXHRwcm90ZWN0ZWQgcGFyZW50OiBUO1xyXG5cdHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNoaWxkOiBULCBwYXJlbnQ6IFQsIG5hbWU6IHN0cmluZykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuY2hpbGQgPSBjaGlsZDtcclxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGdldCgpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnQud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudC53aGVyZUluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnQud2hlcmVOb3RJbihxdWVyeS5rZXksIHF1ZXJ5LnZhbHVlcyk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudC5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBwYXJlbnQgPSBhd2FpdCB0aGlzLnBhcmVudC5maW5kT25lKHRoaXMuY2hpbGQuZ2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpKSk7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMubmFtZSwgcGFyZW50KTtcclxuXHRcdFx0cmV0dXJuIHBhcmVudDtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0KHBhcmVudDogVCkge1xyXG5cdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5nZXRGb3JlaWduS2V5KCksIHBhcmVudC5nZXQoJ2lkJykpO1xyXG5cdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5uYW1lLCBwYXJlbnQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRhc3luYyBzYXZlKHBhcmVudD86IFQpIHtcclxuXHRcdGlmIChwYXJlbnQpIHtcclxuXHRcdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblx0XHR9XHJcblx0XHR0cnkge1xyXG5cdFx0XHRhd2FpdCB0aGlzLnBhcmVudC5zYXZlKCk7XHJcblx0XHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMubmFtZSwgdGhpcy5wYXJlbnQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGlsZDtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZGVsZXRlKCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlIHBhcmVudCBtb2RlbC4nKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBnZXRGb3JlaWduS2V5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50Lm5hbWUudG9Mb3dlckNhc2UoKSArICdfaWQnO1xyXG5cdH1cclxufVxyXG4iXX0=