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

        var parent;
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
                _context2.next = 4;
                return this.parent.findOne(this.child.get(this.getForeignKey()));

              case 4:
                parent = _context2.sent;
                this.child.set(this.name, parent);
                return _context2.abrupt("return", parent);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 12:
                _context2.prev = 12;
                this.clearQueries();
                return _context2.finish(12);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9, 12, 15]]);
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
                this.child.set(this.name, this.parent);
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
      return (0, _pluralize.singular)(this.parent.name.toLowerCase()) + '_id';
    }
  }]);

  return BelongsTo;
}(_queryBuilder.QueryBuilder);

exports.BelongsTo = BelongsTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvYmVsb25ncy10by50cyJdLCJuYW1lcyI6WyJCZWxvbmdzVG8iLCJjaGlsZCIsInBhcmVudCIsIm5hbWUiLCJFcnJvciIsIlByb21pc2UiLCJkYXRhIiwidXBkYXRlIiwic2V0IiwicXVlcmllcyIsImZvckVhY2giLCJxdWVyeSIsIm1ldGhvZCIsIm9wZXJhdG9yIiwidmFsdWUiLCJ3aGVyZSIsImtleSIsIndoZXJlSW4iLCJ2YWx1ZXMiLCJ3aGVyZU5vdEluIiwibGltaXQiLCJhbW91bnQiLCJmaW5kT25lIiwiZ2V0IiwiZ2V0Rm9yZWlnbktleSIsImNsZWFyUXVlcmllcyIsInNhdmUiLCJ0b0xvd2VyQ2FzZSIsIlF1ZXJ5QnVpbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsUzs7Ozs7QUFLWixxQkFBWUMsS0FBWixFQUFzQkMsTUFBdEIsRUFBaUNDLElBQWpDLEVBQWdEO0FBQUE7O0FBQUE7O0FBQy9DOztBQUQrQzs7QUFBQTs7QUFBQTs7QUFFL0MsVUFBS0YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFJLElBQUkseUJBQVNELE1BQU0sQ0FBQ0MsSUFBaEIsQ0FBcEI7QUFKK0M7QUFLL0M7Ozs7V0FFRCxrQkFBUztBQUNSLFlBQU0sSUFBSUMsS0FBSixDQUFVLHVCQUFWLENBQU47QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBZSxZQUFNLENBQUUsQ0FBdkIsQ0FBUDtBQUNBOzs7OzRFQUVELGlCQUFhQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3NCLEtBQUtKLE1BQUwsQ0FBWUssTUFBWixDQUFtQkQsSUFBbkIsQ0FEdEI7O0FBQUE7QUFDT0osZ0JBQUFBLE1BRFA7QUFFQyxxQkFBS0QsS0FBTCxDQUFXTyxHQUFYLENBQWUsS0FBS0wsSUFBcEIsRUFBMEJELE1BQTFCO0FBRkQsaURBR1FBLE1BSFI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7eUVBTUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRSxxQkFBS08sT0FBTCxDQUFhQyxPQUFiLENBQXFCLFVBQUNDLEtBQUQsRUFBVztBQUMvQiwwQkFBUUEsS0FBSyxDQUFDQyxNQUFkO0FBQ0MseUJBQUssT0FBTDtBQUNDLDBCQUFRQyxRQUFSLEdBQTRCRixLQUE1QixDQUFRRSxRQUFSO0FBQUEsMEJBQWtCQyxLQUFsQixHQUE0QkgsS0FBNUIsQ0FBa0JHLEtBQWxCOztBQUNBLHNCQUFBLE1BQUksQ0FBQ1osTUFBTCxDQUFZYSxLQUFaLENBQWtCSixLQUFLLENBQUNLLEdBQXhCLEVBQTZCSCxRQUE3QixFQUF1Q0MsS0FBdkM7O0FBQ0E7O0FBQ0QseUJBQUssU0FBTDtBQUNDLHNCQUFBLE1BQUksQ0FBQ1osTUFBTCxDQUFZZSxPQUFaLENBQW9CTixLQUFLLENBQUNLLEdBQTFCLEVBQStCTCxLQUFLLENBQUNPLE1BQXJDOztBQUNBOztBQUNELHlCQUFLLFlBQUw7QUFDQyxzQkFBQSxNQUFJLENBQUNoQixNQUFMLENBQVlpQixVQUFaLENBQXVCUixLQUFLLENBQUNLLEdBQTdCLEVBQWtDTCxLQUFLLENBQUNPLE1BQXhDOztBQUNBOztBQUNELHlCQUFLLE9BQUw7QUFDQyxzQkFBQSxNQUFJLENBQUNoQixNQUFMLENBQVlrQixLQUFaLENBQWtCVCxLQUFLLENBQUNVLE1BQXhCOztBQUNBO0FBYkY7QUFlQSxpQkFoQkQ7QUFGRjtBQUFBLHVCQW1CdUIsS0FBS25CLE1BQUwsQ0FBWW9CLE9BQVosQ0FBb0IsS0FBS3JCLEtBQUwsQ0FBV3NCLEdBQVgsQ0FBZSxLQUFLQyxhQUFMLEVBQWYsQ0FBcEIsQ0FuQnZCOztBQUFBO0FBbUJRdEIsZ0JBQUFBLE1BbkJSO0FBcUJFLHFCQUFLRCxLQUFMLENBQVdPLEdBQVgsQ0FBZSxLQUFLTCxJQUFwQixFQUEwQkQsTUFBMUI7QUFyQkYsa0RBc0JTQSxNQXRCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBMEJFLHFCQUFLdUIsWUFBTDtBQTFCRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7O1dBOEJBLGFBQUl2QixNQUFKLEVBQWU7QUFDZCxXQUFLRCxLQUFMLENBQVdPLEdBQVgsQ0FBZSxLQUFLZ0IsYUFBTCxFQUFmLEVBQXFDdEIsTUFBTSxDQUFDcUIsR0FBUCxDQUFXLElBQVgsQ0FBckM7QUFDQSxXQUFLdEIsS0FBTCxDQUFXTyxHQUFYLENBQWUsS0FBS0wsSUFBcEIsRUFBMEJELE1BQTFCO0FBQ0EsYUFBTyxJQUFQO0FBQ0E7Ozs7MEVBRUQsa0JBQVdBLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLG9CQUFJQSxNQUFKLEVBQVk7QUFDWCx1QkFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0E7O0FBSEY7QUFBQTtBQUFBLHVCQUtRLEtBQUtBLE1BQUwsQ0FBWXdCLElBQVosRUFMUjs7QUFBQTtBQU1FLHFCQUFLekIsS0FBTCxDQUFXTyxHQUFYLENBQWUsS0FBS0wsSUFBcEIsRUFBMEIsS0FBS0QsTUFBL0I7QUFORixrREFPUyxLQUFLRCxLQVBkOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7V0FhQSxtQkFBUztBQUNSLFlBQU0sSUFBSUcsS0FBSixDQUFVLDZCQUFWLENBQU47QUFDQTs7O1dBRUQseUJBQTBCO0FBQ3pCLGFBQU8seUJBQVMsS0FBS0YsTUFBTCxDQUFZQyxJQUFaLENBQWlCd0IsV0FBakIsRUFBVCxJQUEyQyxLQUFsRDtBQUNBOzs7O0VBOUVtRUMsMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaW5ndWxhciB9IGZyb20gJ3BsdXJhbGl6ZSc7XG5pbXBvcnQgeyBJbnRlcmFjdHNXaXRoUmVsYXRpb25zaGlwLCBNb2RlbERhdGEgfSBmcm9tICcuLi9jb250cmFjdHMnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgeyBRdWVyeUJ1aWxkZXIgfSBmcm9tICcuLi9xdWVyeS1idWlsZGVyJztcblxuZXhwb3J0IGNsYXNzIEJlbG9uZ3NUbzxUIGV4dGVuZHMgTW9kZWwsIEQgZXh0ZW5kcyBNb2RlbERhdGE+IGV4dGVuZHMgUXVlcnlCdWlsZGVyPEQ+IGltcGxlbWVudHMgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcDxUPiB7XG5cdHByb3RlY3RlZCBjaGlsZDogVDtcblx0cHJvdGVjdGVkIHBhcmVudDogVDtcblx0cHJvdGVjdGVkIG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihjaGlsZDogVCwgcGFyZW50OiBULCBuYW1lPzogc3RyaW5nKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmNoaWxkID0gY2hpbGQ7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZSB8fCBzaW5ndWxhcihwYXJlbnQubmFtZSk7XG5cdH1cblxuXHRjcmVhdGUoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIHBhcmVudC4nKTtcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8VD4oKCkgPT4ge30pO1xuXHR9XG5cblx0YXN5bmMgdXBkYXRlKGRhdGE6IEQpIHtcblx0XHRjb25zdCBwYXJlbnQgPSBhd2FpdCB0aGlzLnBhcmVudC51cGRhdGUoZGF0YSk7XG5cdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5uYW1lLCBwYXJlbnQpO1xuXHRcdHJldHVybiBwYXJlbnQ7XG5cdH1cblxuXHRhc3luYyBnZXQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnQud2hlcmVJbihxdWVyeS5rZXksIHF1ZXJ5LnZhbHVlcyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LndoZXJlTm90SW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnQubGltaXQocXVlcnkuYW1vdW50KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHBhcmVudCA9IGF3YWl0IHRoaXMucGFyZW50LmZpbmRPbmUodGhpcy5jaGlsZC5nZXQodGhpcy5nZXRGb3JlaWduS2V5KCkpKTtcblxuXHRcdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5uYW1lLCBwYXJlbnQpO1xuXHRcdFx0cmV0dXJuIHBhcmVudDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XG5cdFx0fVxuXHR9XG5cblx0c2V0KHBhcmVudDogVCkge1xuXHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpLCBwYXJlbnQuZ2V0KCdpZCcpKTtcblx0XHR0aGlzLmNoaWxkLnNldCh0aGlzLm5hbWUsIHBhcmVudCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhc3luYyBzYXZlKHBhcmVudD86IFQpIHtcblx0XHRpZiAocGFyZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHRoaXMucGFyZW50LnNhdmUoKTtcblx0XHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMubmFtZSwgdGhpcy5wYXJlbnQpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hpbGQ7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxuXG5cdGRlbGV0ZSgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgcGFyZW50IG1vZGVsLicpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldEZvcmVpZ25LZXkoKSB7XG5cdFx0cmV0dXJuIHNpbmd1bGFyKHRoaXMucGFyZW50Lm5hbWUudG9Mb3dlckNhc2UoKSkgKyAnX2lkJztcblx0fVxufVxuIl19