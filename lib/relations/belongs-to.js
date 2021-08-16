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
                id = this.child.get(this.getForeignKey());

                if (!(typeof id !== 'string' || id.length === 0)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", null);

              case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvYmVsb25ncy10by50cyJdLCJuYW1lcyI6WyJCZWxvbmdzVG8iLCJjaGlsZCIsInBhcmVudCIsIm5hbWUiLCJFcnJvciIsIlByb21pc2UiLCJkYXRhIiwidXBkYXRlIiwic2V0IiwiaWQiLCJnZXQiLCJnZXRGb3JlaWduS2V5IiwibGVuZ3RoIiwicXVlcmllcyIsImZvckVhY2giLCJxdWVyeSIsIm1ldGhvZCIsIm9wZXJhdG9yIiwidmFsdWUiLCJ3aGVyZSIsImtleSIsIndoZXJlSW4iLCJ2YWx1ZXMiLCJ3aGVyZU5vdEluIiwibGltaXQiLCJhbW91bnQiLCJmaW5kT25lIiwiY2xlYXJRdWVyaWVzIiwic2F2ZSIsImNvbnNvbGUiLCJlcnJvciIsInRvTG93ZXJDYXNlIiwiUXVlcnlCdWlsZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhQSxTOzs7OztBQUtaLHFCQUFZQyxLQUFaLEVBQXNCQyxNQUF0QixFQUFpQ0MsSUFBakMsRUFBZ0Q7QUFBQTs7QUFBQTs7QUFDL0M7O0FBRCtDOztBQUFBOztBQUFBOztBQUUvQyxVQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQUksSUFBSSx5QkFBU0QsTUFBTSxDQUFDQyxJQUFoQixDQUFwQjtBQUorQztBQUsvQzs7OztXQUVELGtCQUFTO0FBQ1IsWUFBTSxJQUFJQyxLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNBLGFBQU8sSUFBSUMsT0FBSixDQUFlLFlBQU0sQ0FBRSxDQUF2QixDQUFQO0FBQ0E7Ozs7NEVBRUQsaUJBQWFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDc0IsS0FBS0osTUFBTCxDQUFZSyxNQUFaLENBQW1CRCxJQUFuQixDQUR0Qjs7QUFBQTtBQUNPSixnQkFBQUEsTUFEUDtB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QUN6QixhQUFPLENBQUMsMkJBQVcsS0FBS0QsSUFBaEIsSUFBd0IsS0FBS0EsSUFBN0IsR0FBb0MseUJBQVMsS0FBS0EsSUFBZCxJQUFzQixLQUEzRCxFQUFrRTRCLFdBQWxFLEVBQVA7QUFDQTs7OztFQXZGbUVDLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNTaW5ndWxhciwgc2luZ3VsYXIgfSBmcm9tICdwbHVyYWxpemUnO1xuaW1wb3J0IHsgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcCwgTW9kZWxEYXRhIH0gZnJvbSAnLi4vY29udHJhY3RzJztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgUXVlcnlCdWlsZGVyIH0gZnJvbSAnLi4vcXVlcnktYnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBCZWxvbmdzVG88VCBleHRlbmRzIE1vZGVsLCBEIGV4dGVuZHMgTW9kZWxEYXRhPiBleHRlbmRzIFF1ZXJ5QnVpbGRlcjxEPiBpbXBsZW1lbnRzIEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXA8VD4ge1xuXHRwcm90ZWN0ZWQgY2hpbGQ6IFQ7XG5cdHByb3RlY3RlZCBwYXJlbnQ6IFQ7XG5cdHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY2hpbGQ6IFQsIHBhcmVudDogVCwgbmFtZT86IHN0cmluZykge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5jaGlsZCA9IGNoaWxkO1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMubmFtZSA9IG5hbWUgfHwgc2luZ3VsYXIocGFyZW50Lm5hbWUpO1xuXHR9XG5cblx0Y3JlYXRlKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSBwYXJlbnQuJyk7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPFQ+KCgpID0+IHt9KTtcblx0fVxuXG5cdGFzeW5jIHVwZGF0ZShkYXRhOiBEKSB7XG5cdFx0Y29uc3QgcGFyZW50ID0gYXdhaXQgdGhpcy5wYXJlbnQudXBkYXRlKGRhdGEpO1xuXHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMubmFtZSwgcGFyZW50KTtcblx0XHRyZXR1cm4gcGFyZW50O1xuXHR9XG5cblx0YXN5bmMgZ2V0KCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBpZCA9IHRoaXMuY2hpbGQuZ2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgfHwgaWQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudC53aGVyZShxdWVyeS5rZXksIG9wZXJhdG9yLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LndoZXJlSW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudC53aGVyZU5vdEluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0Jzpcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LmxpbWl0KHF1ZXJ5LmFtb3VudCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IHBhcmVudCA9IGF3YWl0IHRoaXMucGFyZW50LmZpbmRPbmUoaWQpO1xuXG5cdFx0XHR0aGlzLmNoaWxkLnNldCh0aGlzLm5hbWUsIHBhcmVudCk7XG5cblx0XHRcdHJldHVybiBwYXJlbnQ7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xuXHRcdH1cblx0fVxuXG5cdHNldChwYXJlbnQ6IFQpIHtcblx0XHR0aGlzLmNoaWxkLnNldCh0aGlzLmdldEZvcmVpZ25LZXkoKSwgcGFyZW50LmdldCgnaWQnKSk7XG5cdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5uYW1lLCBwYXJlbnQpO1xuXHRcdHRoaXMuY2hpbGQuc2F2ZSgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXN5bmMgc2F2ZShwYXJlbnQ/OiBUKSB7XG5cdFx0aWYgKHBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCB0aGlzLnBhcmVudC5zYXZlKCk7XG5cdFx0XHR0aGlzLnNldCh0aGlzLnBhcmVudCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGlsZDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9XG5cblx0ZGVsZXRlKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZSBwYXJlbnQgbW9kZWwuJyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0Rm9yZWlnbktleSgpIHtcblx0XHRyZXR1cm4gKGlzU2luZ3VsYXIodGhpcy5uYW1lKSA/IHRoaXMubmFtZSA6IHNpbmd1bGFyKHRoaXMubmFtZSkgKyAnX2lkJykudG9Mb3dlckNhc2UoKTtcblx0fVxufVxuIl19