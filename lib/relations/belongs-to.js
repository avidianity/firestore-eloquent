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
    _this.name = name || (0, _pluralize.singular)(parent.name);
    return _this;
  }

  _createClass(BelongsTo, [{
    key: "create",
    value: function create() {
      throw new Error('Cannot create parent.');
      return new Promise(function () {});
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var parent;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.parent.update(data);

              case 2:
                parent = _context.sent;
                this.child.set(this.name, parent);
                return _context.abrupt("return", parent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function update(_x) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var id, parent;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
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
                id = this.child.get(this.getForeignKey());

                if (id) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", null);

              case 5:
                _context2.next = 7;
                return this.parent.findOne(id);

              case 7:
                parent = _context2.sent;
                this.child.set(this.name, parent);
                return _context2.abrupt("return", parent);

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 15:
                _context2.prev = 15;
                this.clearQueries();
                return _context2.finish(15);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 12, 15, 18]]);
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
      this.child.save()["catch"](console.error);
      return this;
    }
  }, {
    key: "save",
    value: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (parent) {
                  this.parent = parent;
                }

                _context3.prev = 1;
                _context3.next = 4;
                return this.parent.save();

              case 4:
                this.set(this.parent);
                return _context3.abrupt("return", this.child);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);
                throw _context3.t0;

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 8]]);
      }));

      function save(_x2) {
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
      return ((0, _pluralize.isSingular)(this.name) ? this.name : (0, _pluralize.singular)(this.name) + '_id').toLowerCase();
    }
  }]);

  return BelongsTo;
}(_queryBuilder.QueryBuilder);

exports.BelongsTo = BelongsTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvYmVsb25ncy10by50cyJdLCJuYW1lcyI6WyJCZWxvbmdzVG8iLCJjaGlsZCIsInBhcmVudCIsIm5hbWUiLCJFcnJvciIsIlByb21pc2UiLCJkYXRhIiwidXBkYXRlIiwic2V0IiwicXVlcmllcyIsImZvckVhY2giLCJxdWVyeSIsIm1ldGhvZCIsIm9wZXJhdG9yIiwidmFsdWUiLCJ3aGVyZSIsImtleSIsIndoZXJlSW4iLCJ2YWx1ZXMiLCJ3aGVyZU5vdEluIiwibGltaXQiLCJhbW91bnQiLCJpZCIsImdldCIsImdldEZvcmVpZ25LZXkiLCJmaW5kT25lIiwiY2xlYXJRdWVyaWVzIiwic2F2ZSIsImNvbnNvbGUiLCJlcnJvciIsInRvTG93ZXJDYXNlIiwiUXVlcnlCdWlsZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhQSxTOzs7OztBQUtaLHFCQUFZQyxLQUFaLEVBQXNCQyxNQUF0QixFQUFpQ0MsSUFBakMsRUFBZ0Q7QUFBQTs7QUFBQTs7QUFDL0M7O0FBRCtDOztBQUFBOztBQUFBOztBQUUvQyxVQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQUksSUFBSSx5QkFBU0QsTUFBTSxDQUFDQyxJQUFoQixDQUFwQjtBQUorQztBQUsvQzs7OztXQUVELGtCQUFTO0FBQ1IsWUFBTSxJQUFJQyxLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNBLGFBQU8sSUFBSUMsT0FBSixDQUFlLFlBQU0sQ0FBRSxDQUF2QixDQUFQO0FBQ0E7Ozs7NEVBRUQsaUJBQWFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDc0IsS0FBS0osTUFBTCxDQUFZSyxNQUFaLENBQW1CRCxJQUFuQixDQUR0Qjs7QUFBQTtBQUNPSixnQkFBQUEsTUFEUDtBQUVDLHFCQUFL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N0IsR0FBb0MseUJBQVMsS0FBS0EsSUFBZCxJQUFzQixLQUEzRCxFQUFrRTJCLFdBQWxFLEVBQVA7QUFDQTs7OztFQXRGbUVDLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNTaW5ndWxhciwgc2luZ3VsYXIgfSBmcm9tICdwbHVyYWxpemUnO1xuaW1wb3J0IHsgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcCwgTW9kZWxEYXRhIH0gZnJvbSAnLi4vY29udHJhY3RzJztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgUXVlcnlCdWlsZGVyIH0gZnJvbSAnLi4vcXVlcnktYnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBCZWxvbmdzVG88VCBleHRlbmRzIE1vZGVsLCBEIGV4dGVuZHMgTW9kZWxEYXRhPiBleHRlbmRzIFF1ZXJ5QnVpbGRlcjxEPiBpbXBsZW1lbnRzIEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXA8VD4ge1xuXHRwcm90ZWN0ZWQgY2hpbGQ6IFQ7XG5cdHByb3RlY3RlZCBwYXJlbnQ6IFQ7XG5cdHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY2hpbGQ6IFQsIHBhcmVudDogVCwgbmFtZT86IHN0cmluZykge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5jaGlsZCA9IGNoaWxkO1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMubmFtZSA9IG5hbWUgfHwgc2luZ3VsYXIocGFyZW50Lm5hbWUpO1xuXHR9XG5cblx0Y3JlYXRlKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSBwYXJlbnQuJyk7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPFQ+KCgpID0+IHt9KTtcblx0fVxuXG5cdGFzeW5jIHVwZGF0ZShkYXRhOiBEKSB7XG5cdFx0Y29uc3QgcGFyZW50ID0gYXdhaXQgdGhpcy5wYXJlbnQudXBkYXRlKGRhdGEpO1xuXHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMubmFtZSwgcGFyZW50KTtcblx0XHRyZXR1cm4gcGFyZW50O1xuXHR9XG5cblx0YXN5bmMgZ2V0KCkge1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudC53aGVyZShxdWVyeS5rZXksIG9wZXJhdG9yLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LndoZXJlSW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudC53aGVyZU5vdEluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0Jzpcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LmxpbWl0KHF1ZXJ5LmFtb3VudCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBpZCA9IHRoaXMuY2hpbGQuZ2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpKTtcblxuXHRcdFx0aWYgKCFpZCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyZW50ID0gYXdhaXQgdGhpcy5wYXJlbnQuZmluZE9uZShpZCk7XG5cblx0XHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMubmFtZSwgcGFyZW50KTtcblxuXHRcdFx0cmV0dXJuIHBhcmVudDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XG5cdFx0fVxuXHR9XG5cblx0c2V0KHBhcmVudDogVCkge1xuXHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpLCBwYXJlbnQuZ2V0KCdpZCcpKTtcblx0XHR0aGlzLmNoaWxkLnNldCh0aGlzLm5hbWUsIHBhcmVudCk7XG5cdFx0dGhpcy5jaGlsZC5zYXZlKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhc3luYyBzYXZlKHBhcmVudD86IFQpIHtcblx0XHRpZiAocGFyZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHRoaXMucGFyZW50LnNhdmUoKTtcblx0XHRcdHRoaXMuc2V0KHRoaXMucGFyZW50KTtcblx0XHRcdHJldHVybiB0aGlzLmNoaWxkO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH1cblxuXHRkZWxldGUoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlIHBhcmVudCBtb2RlbC4nKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRGb3JlaWduS2V5KCkge1xuXHRcdHJldHVybiAoaXNTaW5ndWxhcih0aGlzLm5hbWUpID8gdGhpcy5uYW1lIDogc2luZ3VsYXIodGhpcy5uYW1lKSArICdfaWQnKS50b0xvd2VyQ2FzZSgpO1xuXHR9XG59XG4iXX0=