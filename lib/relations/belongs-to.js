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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvYmVsb25ncy10by50cyJdLCJuYW1lcyI6WyJCZWxvbmdzVG8iLCJjaGlsZCIsInBhcmVudCIsIm5hbWUiLCJFcnJvciIsIlByb21pc2UiLCJkYXRhIiwidXBkYXRlIiwic2V0IiwicXVlcmllcyIsImZvckVhY2giLCJxdWVyeSIsIm1ldGhvZCIsIm9wZXJhdG9yIiwidmFsdWUiLCJ3aGVyZSIsImtleSIsIndoZXJlSW4iLCJ2YWx1ZXMiLCJ3aGVyZU5vdEluIiwibGltaXQiLCJhbW91bnQiLCJmaW5kT25lIiwiZ2V0IiwiZ2V0Rm9yZWlnbktleSIsImNsZWFyUXVlcmllcyIsInNhdmUiLCJ0b0xvd2VyQ2FzZSIsIlF1ZXJ5QnVpbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsUzs7Ozs7QUFLWixxQkFBWUMsS0FBWixFQUFzQkMsTUFBdEIsRUFBaUNDLElBQWpDLEVBQWdEO0FBQUE7O0FBQUE7O0FBQy9DOztBQUQrQzs7QUFBQTs7QUFBQTs7QUFFL0MsVUFBS0YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFJLElBQUkseUJBQVNELE1BQU0sQ0FBQ0MsSUFBaEIsQ0FBcEI7QUFKK0M7QUFLL0M7Ozs7V0FFRCxrQkFBUztBQUNSLFlBQU0sSUFBSUMsS0FBSixDQUFVLHVCQUFWLENBQU47QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBZSxZQUFNLENBQUUsQ0FBdkIsQ0FBUDtBQUNBOzs7OzRFQUVELGlCQUFhQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3NCLEtBQUtKLE1BQUwsQ0FBWUssTUFBWixDQUFtQkQsSUFBbkIsQ0FEdEI7O0FBQUE7QUFDT0osZ0JBQUFBLE1BRFA7QUFFQyxxQkFBS0QsS0FBTCxDQUFXTyxHQUFYLENBQWUsS0FBS0wsSUFBcEIsRUFBMEJELE1BQTFCO0FBRkQsaURBR1FBLE1BSFI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7eUVBTUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRSxxQkFBS08sT0FBTCxDQUFhQyxPQUFiLENBQXFCLFVBQUNDLEtBQUQsRUFBVztBQUMvQiwwQkFBUUEsS0FBSyxDQUFDQyxNQUFkO0FBQ0MseUJBQUssT0FBTDtBQUNDLDBCQUFRQyxRQUFSLEdBQTRCRixLQUE1QixDQUFRRSxRQUFSO0FBQUEsMEJBQWtCQyxLQUFsQixHQUE0QkgsS0FBNUIsQ0FBa0JHLEtBQWxCOztBQUNBLHNCQUFBLE1BQUksQ0FBQ1osTUFBTCxDQUFZYSxLQUFaLENBQWtCSixLQUFLLENBQUNLLEdBQXhCLEVBQTZCSCxRQUE3QixFQUF1Q0MsS0FBdkM7O0FBQ0E7O0FBQ0QseUJBQUssU0FBTDtBQUNDLHNCQUFBLE1BQUksQ0FBQ1osTUFBTCxDQUFZZSxPQUFaLENBQW9CTixLQUFLLENBQUNLLEdBQTFCLEVBQStCTCxLQUFLLENBQUNPLE1BQXJDOztBQUNBOztBQUNELHlCQUFLLFlBQUw7QUFDQyxzQkFBQSxNQUFJLENBQUNoQixNQUFMLENBQVlpQixVQUFaLENBQXVCUixLQUFLLENBQUNLLEdBQTdCLEVBQWtDTCxLQUFLLENBQUNPLE1BQXhDOztBQUNBOztBQUNELHlCQUFLLE9BQUw7QUFDQyxzQkFBQSxNQUFJLENBQUNoQixNQUFMLENBQVlrQixLQUFaLENBQWtCVCxLQUFLLENBQUNVLE1BQXhCOztBQUNBO0FBYkY7QUFlQSxpQkFoQkQ7QUFGRjtBQUFBLHVCQW1CdUIsS0FBS25CLE1BQUwsQ0FBWW9CLE9BQVosQ0FBb0IsS0FBS3JCLEtBQUwsQ0FBV3NCLEdBQVgsQ0FBZSxLQUFLQyxhQUFMLEVBQWYsQ0FBcEIsQ0FuQnZCOztBQUFBO0FBbUJRdEIsZ0JBQUFBLE1BbkJSO0FBcUJFLHFCQUFLRCxLQUFMLENBQVdPLEdBQVgsQ0FBZSxLQUFLTCxJQUFwQixFQUEwQkQsTUFBMUI7QUFyQkYsa0RBc0JTQSxNQXRCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBMEJFLHFCQUFLdUIsWUFBTDtBQTFCRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7O1dBOEJBLGFBQUl2QixNQUFKLEVBQWU7QUFDZCxXQUFLRCxLQUFMLENBQVdPLEdBQVgsQ0FBZSxLQUFLZ0IsYUFBTCxFQUFmLEVBQXFDdEIsTUFBTSxDQUFDcUIsR0FBUCxDQUFXLElBQVgsQ0FBckM7QUFDQSxXQUFLdEIsS0FBTCxDQUFXTyxHQUFYLENBQWUsS0FBS0wsSUFBcEIsRUFBMEJELE1BQTFCO0FBQ0EsYUFBTyxJQUFQO0FBQ0E7Ozs7MEVBRUQsa0JBQVdBLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLG9CQUFJQSxNQUFKLEVBQVk7QUFDWCx1QkFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0E7O0FBSEY7QUFBQTtBQUFBLHVCQUtRLEtBQUtBLE1BQUwsQ0FBWXdCLElBQVosRUFMUjs7QUFBQTtBQU1FLHFCQUFLekIsS0FBTCxDQUFXTyxHQUFYLENBQWUsS0FBS0wsSUFBcEIsRUFBMEIsS0FBS0QsTUFBL0I7QUFORixrREFPUyxLQUFLRCxLQVBkOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7V0FhQSxtQkFBUztBQUNSLFlBQU0sSUFBSUcsS0FBSixDQUFVLDZCQUFWLENBQU47QUFDQTs7O1dBRUQseUJBQTBCO0FBQ3pCLGFBQU8seUJBQVMsS0FBS0YsTUFBTCxDQUFZQyxJQUFaLENBQWlCd0IsV0FBakIsRUFBVCxJQUEyQyxLQUFsRDtBQUNBOzs7O0VBOUVtRUMsMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaW5ndWxhciB9IGZyb20gJ3BsdXJhbGl6ZSc7XHJcbmltcG9ydCB7IEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXAsIE1vZGVsRGF0YSB9IGZyb20gJy4uL2NvbnRyYWN0cyc7XHJcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwnO1xyXG5pbXBvcnQgeyBRdWVyeUJ1aWxkZXIgfSBmcm9tICcuLi9xdWVyeS1idWlsZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCZWxvbmdzVG88VCBleHRlbmRzIE1vZGVsLCBEIGV4dGVuZHMgTW9kZWxEYXRhPiBleHRlbmRzIFF1ZXJ5QnVpbGRlcjxEPiBpbXBsZW1lbnRzIEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXA8VD4ge1xyXG5cdHByb3RlY3RlZCBjaGlsZDogVDtcclxuXHRwcm90ZWN0ZWQgcGFyZW50OiBUO1xyXG5cdHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNoaWxkOiBULCBwYXJlbnQ6IFQsIG5hbWU/OiBzdHJpbmcpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmNoaWxkID0gY2hpbGQ7XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWUgfHwgc2luZ3VsYXIocGFyZW50Lm5hbWUpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlKCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIHBhcmVudC4nKTtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxUPigoKSA9PiB7fSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyB1cGRhdGUoZGF0YTogRCkge1xyXG5cdFx0Y29uc3QgcGFyZW50ID0gYXdhaXQgdGhpcy5wYXJlbnQudXBkYXRlKGRhdGEpO1xyXG5cdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5uYW1lLCBwYXJlbnQpO1xyXG5cdFx0cmV0dXJuIHBhcmVudDtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGdldCgpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnQud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudC53aGVyZUluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnQud2hlcmVOb3RJbihxdWVyeS5rZXksIHF1ZXJ5LnZhbHVlcyk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudC5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBwYXJlbnQgPSBhd2FpdCB0aGlzLnBhcmVudC5maW5kT25lKHRoaXMuY2hpbGQuZ2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpKSk7XHJcblxyXG5cdFx0XHR0aGlzLmNoaWxkLnNldCh0aGlzLm5hbWUsIHBhcmVudCk7XHJcblx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXQocGFyZW50OiBUKSB7XHJcblx0XHR0aGlzLmNoaWxkLnNldCh0aGlzLmdldEZvcmVpZ25LZXkoKSwgcGFyZW50LmdldCgnaWQnKSk7XHJcblx0XHR0aGlzLmNoaWxkLnNldCh0aGlzLm5hbWUsIHBhcmVudCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGFzeW5jIHNhdmUocGFyZW50PzogVCkge1xyXG5cdFx0aWYgKHBhcmVudCkge1xyXG5cdFx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHRcdH1cclxuXHRcdHRyeSB7XHJcblx0XHRcdGF3YWl0IHRoaXMucGFyZW50LnNhdmUoKTtcclxuXHRcdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5uYW1lLCB0aGlzLnBhcmVudCk7XHJcblx0XHRcdHJldHVybiB0aGlzLmNoaWxkO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZWxldGUoKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgcGFyZW50IG1vZGVsLicpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGdldEZvcmVpZ25LZXkoKSB7XHJcblx0XHRyZXR1cm4gc2luZ3VsYXIodGhpcy5wYXJlbnQubmFtZS50b0xvd2VyQ2FzZSgpKSArICdfaWQnO1xyXG5cdH1cclxufVxyXG4iXX0=