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
                console.error(_context2.t0);
                return _context2.abrupt("return", null);

              case 16:
                _context2.prev = 16;
                this.clearQueries();
                return _context2.finish(16);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 12, 16, 19]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvYmVsb25ncy10by50cyJdLCJuYW1lcyI6WyJCZWxvbmdzVG8iLCJjaGlsZCIsInBhcmVudCIsIm5hbWUiLCJFcnJvciIsIlByb21pc2UiLCJkYXRhIiwidXBkYXRlIiwic2V0IiwicXVlcmllcyIsImZvckVhY2giLCJxdWVyeSIsIm1ldGhvZCIsIm9wZXJhdG9yIiwidmFsdWUiLCJ3aGVyZSIsImtleSIsIndoZXJlSW4iLCJ2YWx1ZXMiLCJ3aGVyZU5vdEluIiwibGltaXQiLCJhbW91bnQiLCJpZCIsImdldCIsImdldEZvcmVpZ25LZXkiLCJmaW5kT25lIiwiY29uc29sZSIsImVycm9yIiwiY2xlYXJRdWVyaWVzIiwic2F2ZSIsInRvTG93ZXJDYXNlIiwiUXVlcnlCdWlsZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhQSxTOzs7OztBQUtaLHFCQUFZQyxLQUFaLEVBQXNCQyxNQUF0QixFQUFpQ0MsSUFBakMsRUFBZ0Q7QUFBQTs7QUFBQTs7QUFDL0M7O0FBRCtDOztBQUFBOztBQUFBOztBQUUvQyxVQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQUksSUFBSSx5QkFBU0QsTUFBTSxDQUFDQyxJQUFoQixDQUFwQjtBQUorQztBQUsvQzs7OztXQUVELGtCQUFTO0FBQ1IsWUFBTSxJQUFJQyxLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNBLGFBQU8sSUFBSUMsT0FBSixDQUFlLFlBQU0sQ0FBRSxDQUF2QixDQUFQO0FBQ0E7Ozs7NEVBRUQsaUJBQWFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDc0IsS0FBS0osTUFBTCxDQUFZSyxNQUFaLENBQW1CRCxJQUFuQixDQUR0Qjs7QUFBQTtBQUNPSixnQkFBQUEsTUFEUDtBQUVDLHFCQUFL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LGFBQU8sQ0FBQywyQkFBVyxLQUFLRCxJQUFoQixJQUF3QixLQUFLQSxJQUE3QixHQUFvQyx5QkFBUyxLQUFLQSxJQUFkLElBQXNCLEtBQTNELEVBQWtFMkIsV0FBbEUsRUFBUDtBQUNBOzs7O0VBdkZtRUMsMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1Npbmd1bGFyLCBzaW5ndWxhciB9IGZyb20gJ3BsdXJhbGl6ZSc7XG5pbXBvcnQgeyBJbnRlcmFjdHNXaXRoUmVsYXRpb25zaGlwLCBNb2RlbERhdGEgfSBmcm9tICcuLi9jb250cmFjdHMnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgeyBRdWVyeUJ1aWxkZXIgfSBmcm9tICcuLi9xdWVyeS1idWlsZGVyJztcblxuZXhwb3J0IGNsYXNzIEJlbG9uZ3NUbzxUIGV4dGVuZHMgTW9kZWwsIEQgZXh0ZW5kcyBNb2RlbERhdGE+IGV4dGVuZHMgUXVlcnlCdWlsZGVyPEQ+IGltcGxlbWVudHMgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcDxUPiB7XG5cdHByb3RlY3RlZCBjaGlsZDogVDtcblx0cHJvdGVjdGVkIHBhcmVudDogVDtcblx0cHJvdGVjdGVkIG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihjaGlsZDogVCwgcGFyZW50OiBULCBuYW1lPzogc3RyaW5nKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmNoaWxkID0gY2hpbGQ7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZSB8fCBzaW5ndWxhcihwYXJlbnQubmFtZSk7XG5cdH1cblxuXHRjcmVhdGUoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIHBhcmVudC4nKTtcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8VD4oKCkgPT4ge30pO1xuXHR9XG5cblx0YXN5bmMgdXBkYXRlKGRhdGE6IEQpIHtcblx0XHRjb25zdCBwYXJlbnQgPSBhd2FpdCB0aGlzLnBhcmVudC51cGRhdGUoZGF0YSk7XG5cdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5uYW1lLCBwYXJlbnQpO1xuXHRcdHJldHVybiBwYXJlbnQ7XG5cdH1cblxuXHRhc3luYyBnZXQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnQud2hlcmVJbihxdWVyeS5rZXksIHF1ZXJ5LnZhbHVlcyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LndoZXJlTm90SW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnQubGltaXQocXVlcnkuYW1vdW50KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGlkID0gdGhpcy5jaGlsZC5nZXQodGhpcy5nZXRGb3JlaWduS2V5KCkpO1xuXG5cdFx0XHRpZiAoIWlkKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJlbnQgPSBhd2FpdCB0aGlzLnBhcmVudC5maW5kT25lKGlkKTtcblxuXHRcdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5uYW1lLCBwYXJlbnQpO1xuXG5cdFx0XHRyZXR1cm4gcGFyZW50O1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xuXHRcdH1cblx0fVxuXG5cdHNldChwYXJlbnQ6IFQpIHtcblx0XHR0aGlzLmNoaWxkLnNldCh0aGlzLmdldEZvcmVpZ25LZXkoKSwgcGFyZW50LmdldCgnaWQnKSk7XG5cdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5uYW1lLCBwYXJlbnQpO1xuXHRcdHRoaXMuY2hpbGQuc2F2ZSgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXN5bmMgc2F2ZShwYXJlbnQ/OiBUKSB7XG5cdFx0aWYgKHBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCB0aGlzLnBhcmVudC5zYXZlKCk7XG5cdFx0XHR0aGlzLnNldCh0aGlzLnBhcmVudCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGlsZDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9XG5cblx0ZGVsZXRlKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZSBwYXJlbnQgbW9kZWwuJyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0Rm9yZWlnbktleSgpIHtcblx0XHRyZXR1cm4gKGlzU2luZ3VsYXIodGhpcy5uYW1lKSA/IHRoaXMubmFtZSA6IHNpbmd1bGFyKHRoaXMubmFtZSkgKyAnX2lkJykudG9Mb3dlckNhc2UoKTtcblx0fVxufVxuIl19