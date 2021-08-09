"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BelongsTo = void 0;

var _pluralize = require("pluralize");

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
      return (0, _pluralize.singular)(this.parent.name.toLowerCase()) + '_id';
    }
  }]);

  return BelongsTo;
}(_queryBuilder.QueryBuilder);

exports.BelongsTo = BelongsTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvYmVsb25ncy10by50cyJdLCJuYW1lcyI6WyJCZWxvbmdzVG8iLCJjaGlsZCIsInBhcmVudCIsIm5hbWUiLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5Iiwid2hlcmVJbiIsInZhbHVlcyIsIndoZXJlTm90SW4iLCJsaW1pdCIsImFtb3VudCIsImZpbmRPbmUiLCJnZXQiLCJnZXRGb3JlaWduS2V5IiwiY2xlYXJRdWVyaWVzIiwic2V0Iiwic2F2ZSIsIkVycm9yIiwidG9Mb3dlckNhc2UiLCJRdWVyeUJ1aWxkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLFM7Ozs7O0FBS1oscUJBQVlDLEtBQVosRUFBc0JDLE1BQXRCLEVBQWlDQyxJQUFqQyxFQUErQztBQUFBOztBQUFBOztBQUM5Qzs7QUFEOEM7O0FBQUE7O0FBQUE7O0FBRTlDLFVBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUo4QztBQUs5Qzs7Ozs7eUVBRUQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRSxxQkFBS0MsT0FBTCxDQUFhQyxPQUFiLENBQXFCLFVBQUNDLEtBQUQsRUFBVztBQUMvQiwwQkFBUUEsS0FBSyxDQUFDQyxNQUFkO0FBQ0MseUJBQUssT0FBTDtBQUNDLDBCQUFRQyxRQUFSLEdBQTRCRixLQUE1QixDQUFRRSxRQUFSO0FBQUEsMEJBQWtCQyxLQUFsQixHQUE0QkgsS0FBNUIsQ0FBa0JHLEtBQWxCOztBQUNBLHNCQUFBLE1BQUksQ0FBQ1AsTUFBTCxDQUFZUSxLQUFaLENBQWtCSixLQUFLLENBQUNLLEdBQXhCLEVBQTZCSCxRQUE3QixFQUF1Q0MsS0FBdkM7O0FBQ0E7O0FBQ0QseUJBQUssU0FBTDtBQUNDLHNCQUFBLE1BQUksQ0FBQ1AsTUFBTCxDQUFZVSxPQUFaLENBQW9CTixLQUFLLENBQUNLLEdBQTFCLEVBQStCTCxLQUFLLENBQUNPLE1BQXJDOztBQUNBOztBQUNELHlCQUFLLFlBQUw7QUFDQyxzQkFBQSxNQUFJLENBQUNYLE1BQUwsQ0FBWVksVUFBWixDQUF1QlIsS0FBSyxDQUFDSyxHQUE3QixFQUFrQ0wsS0FBSyxDQUFDTyxNQUF4Qzs7QUFDQTs7QUFDRCx5QkFBSyxPQUFMO0FBQ0Msc0JBQUEsTUFBSSxDQUFDWCxNQUFMLENBQVlhLEtBQVosQ0FBa0JULEtBQUssQ0FBQ1UsTUFBeEI7O0FBQ0E7QUFiRjtBQWVBLGlCQWhCRDtBQUZGO0FBQUEsdUJBbUJ1QixLQUFLZCxNQUFMLENBQVllLE9BQVosQ0FBb0IsS0FBS2hCLEtBQUwsQ0FBV2lCLEdBQVgsQ0FBZSxLQUFLQyxhQUFMLEVBQWYsQ0FBcEIsQ0FuQnZCOztBQUFBO0FBbUJRakIsZ0JBQUFBLE1BbkJSO0FBb0JFLHFCQUFLa0IsWUFBTDtBQUNBLHFCQUFLbkIsS0FBTCxDQUFXb0IsR0FBWCxDQUFlLEtBQUtsQixJQUFwQixFQUEwQkQsTUFBMUI7QUFyQkYsaURBc0JTQSxNQXRCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7O1dBNEJBLGFBQUlBLE1BQUosRUFBZTtBQUNkLFdBQUtELEtBQUwsQ0FBV29CLEdBQVgsQ0FBZSxLQUFLRixhQUFMLEVBQWYsRUFBcUNqQixNQUFNLENBQUNnQixHQUFQLENBQVcsSUFBWCxDQUFyQztBQUNBLFdBQUtqQixLQUFMLENBQVdvQixHQUFYLENBQWUsS0FBS2xCLElBQXBCLEVBQTBCRCxNQUExQjtBQUNBLGFBQU8sSUFBUDtBQUNBOzs7OzBFQUVELGtCQUFXQSxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQyxvQkFBSUEsTUFBSixFQUFZO0FBQ1gsdUJBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBOztBQUhGO0FBQUE7QUFBQSx1QkFLUSxLQUFLQSxNQUFMLENBQVlvQixJQUFaLEVBTFI7O0FBQUE7QUFNRSxxQkFBS3JCLEtBQUwsQ0FBV29CLEdBQVgsQ0FBZSxLQUFLbEIsSUFBcEIsRUFBMEIsS0FBS0QsTUFBL0I7QUFORixrREFPUyxLQUFLRCxLQVBkOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7V0FhQSxtQkFBUztBQUNSLFlBQU0sSUFBSXNCLEtBQUosQ0FBVSw2QkFBVixDQUFOO0FBQ0E7OztXQUVELHlCQUEwQjtBQUN6QixhQUFPLHlCQUFTLEtBQUtyQixNQUFMLENBQVlDLElBQVosQ0FBaUJxQixXQUFqQixFQUFULElBQTJDLEtBQWxEO0FBQ0E7Ozs7RUFqRW1FQywwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpbmd1bGFyIH0gZnJvbSAncGx1cmFsaXplJztcclxuaW1wb3J0IHsgTW9kZWxEYXRhIH0gZnJvbSAnLi4vY29udHJhY3RzJztcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9tb2RlbCc7XHJcbmltcG9ydCB7IFF1ZXJ5QnVpbGRlciB9IGZyb20gJy4uL3F1ZXJ5LWJ1aWxkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJlbG9uZ3NUbzxUIGV4dGVuZHMgTW9kZWwsIEQgZXh0ZW5kcyBNb2RlbERhdGE+IGV4dGVuZHMgUXVlcnlCdWlsZGVyPEQ+IHtcclxuXHRwcm90ZWN0ZWQgY2hpbGQ6IFQ7XHJcblx0cHJvdGVjdGVkIHBhcmVudDogVDtcclxuXHRwcm90ZWN0ZWQgbmFtZTogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjaGlsZDogVCwgcGFyZW50OiBULCBuYW1lOiBzdHJpbmcpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmNoaWxkID0gY2hpbGQ7XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHRhc3luYyBnZXQoKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnQud2hlcmVJbihxdWVyeS5rZXksIHF1ZXJ5LnZhbHVlcyk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XHJcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LndoZXJlTm90SW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0JzpcclxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnQubGltaXQocXVlcnkuYW1vdW50KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3QgcGFyZW50ID0gYXdhaXQgdGhpcy5wYXJlbnQuZmluZE9uZSh0aGlzLmNoaWxkLmdldCh0aGlzLmdldEZvcmVpZ25LZXkoKSkpO1xyXG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xyXG5cdFx0XHR0aGlzLmNoaWxkLnNldCh0aGlzLm5hbWUsIHBhcmVudCk7XHJcblx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldChwYXJlbnQ6IFQpIHtcclxuXHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpLCBwYXJlbnQuZ2V0KCdpZCcpKTtcclxuXHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMubmFtZSwgcGFyZW50KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgc2F2ZShwYXJlbnQ/OiBUKSB7XHJcblx0XHRpZiAocGFyZW50KSB7XHJcblx0XHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0fVxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgdGhpcy5wYXJlbnQuc2F2ZSgpO1xyXG5cdFx0XHR0aGlzLmNoaWxkLnNldCh0aGlzLm5hbWUsIHRoaXMucGFyZW50KTtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY2hpbGQ7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRlbGV0ZSgpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZSBwYXJlbnQgbW9kZWwuJyk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZ2V0Rm9yZWlnbktleSgpIHtcclxuXHRcdHJldHVybiBzaW5ndWxhcih0aGlzLnBhcmVudC5uYW1lLnRvTG93ZXJDYXNlKCkpICsgJ19pZCc7XHJcblx0fVxyXG59XHJcbiJdfQ==