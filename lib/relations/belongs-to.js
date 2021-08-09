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
                this.child.set(this.name, parent);
                return _context.abrupt("return", parent);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 12:
                _context.prev = 12;
                this.clearQueries();
                return _context.finish(12);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9, 12, 15]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvYmVsb25ncy10by50cyJdLCJuYW1lcyI6WyJCZWxvbmdzVG8iLCJjaGlsZCIsInBhcmVudCIsIm5hbWUiLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5Iiwid2hlcmVJbiIsInZhbHVlcyIsIndoZXJlTm90SW4iLCJsaW1pdCIsImFtb3VudCIsImZpbmRPbmUiLCJnZXQiLCJnZXRGb3JlaWduS2V5Iiwic2V0IiwiY2xlYXJRdWVyaWVzIiwic2F2ZSIsIkVycm9yIiwidG9Mb3dlckNhc2UiLCJRdWVyeUJ1aWxkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLFM7Ozs7O0FBS1oscUJBQVlDLEtBQVosRUFBc0JDLE1BQXRCLEVBQWlDQyxJQUFqQyxFQUFnRDtBQUFBOztBQUFBOztBQUMvQzs7QUFEK0M7O0FBQUE7O0FBQUE7O0FBRS9DLFVBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBSSxJQUFJLHlCQUFTRCxNQUFNLENBQUNDLElBQWhCLENBQXBCO0FBSitDO0FBSy9DOzs7Ozt5RUFFRDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVFLHFCQUFLQyxPQUFMLENBQWFDLE9BQWIsQ0FBcUIsVUFBQ0MsS0FBRCxFQUFXO0FBQy9CLDBCQUFRQSxLQUFLLENBQUNDLE1BQWQ7QUFDQyx5QkFBSyxPQUFMO0FBQ0MsMEJBQVFDLFFBQVIsR0FBNEJGLEtBQTVCLENBQVFFLFFBQVI7QUFBQSwwQkFBa0JDLEtBQWxCLEdBQTRCSCxLQUE1QixDQUFrQkcsS0FBbEI7O0FBQ0Esc0JBQUEsTUFBSSxDQUFDUCxNQUFMLENBQVlRLEtBQVosQ0FBa0JKLEtBQUssQ0FBQ0ssR0FBeEIsRUFBNkJILFFBQTdCLEVBQXVDQyxLQUF2Qzs7QUFDQTs7QUFDRCx5QkFBSyxTQUFMO0FBQ0Msc0JBQUEsTUFBSSxDQUFDUCxNQUFMLENBQVlVLE9BQVosQ0FBb0JOLEtBQUssQ0FBQ0ssR0FBMUIsRUFBK0JMLEtBQUssQ0FBQ08sTUFBckM7O0FBQ0E7O0FBQ0QseUJBQUssWUFBTDtBQUNDLHNCQUFBLE1BQUksQ0FBQ1gsTUFBTCxDQUFZWSxVQUFaLENBQXVCUixLQUFLLENBQUNLLEdBQTdCLEVBQWtDTCxLQUFLLENBQUNPLE1BQXhDOztBQUNBOztBQUNELHlCQUFLLE9BQUw7QUFDQyxzQkFBQSxNQUFJLENBQUNYLE1BQUwsQ0FBWWEsS0FBWixDQUFrQlQsS0FBSyxDQUFDVSxNQUF4Qjs7QUFDQTtBQWJGO0FBZUEsaUJBaEJEO0FBRkY7QUFBQSx1QkFtQnVCLEtBQUtkLE1BQUwsQ0FBWWUsT0FBWixDQUFvQixLQUFLaEIsS0FBTCxDQUFXaUIsR0FBWCxDQUFlLEtBQUtDLGFBQUwsRUFBZixDQUFwQixDQW5CdkI7O0FBQUE7QUFtQlFqQixnQkFBQUEsTUFuQlI7QUFxQkUscUJBQUtELEtBQUwsQ0FBV21CLEdBQVgsQ0FBZSxLQUFLakIsSUFBcEIsRUFBMEJELE1BQTFCO0FBckJGLGlEQXNCU0EsTUF0QlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQTBCRSxxQkFBS21CLFlBQUw7QUExQkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQThCQSxhQUFJbkIsTUFBSixFQUFlO0FBQ2QsV0FBS0QsS0FBTCxDQUFXbUIsR0FBWCxDQUFlLEtBQUtELGFBQUwsRUFBZixFQUFxQ2pCLE1BQU0sQ0FBQ2dCLEdBQVAsQ0FBVyxJQUFYLENBQXJDO0FBQ0EsV0FBS2pCLEtBQUwsQ0FBV21CLEdBQVgsQ0FBZSxLQUFLakIsSUFBcEIsRUFBMEJELE1BQTFCO0FBQ0EsYUFBTyxJQUFQO0FBQ0E7Ozs7MEVBRUQsa0JBQVdBLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLG9CQUFJQSxNQUFKLEVBQVk7QUFDWCx1QkFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0E7O0FBSEY7QUFBQTtBQUFBLHVCQUtRLEtBQUtBLE1BQUwsQ0FBWW9CLElBQVosRUFMUjs7QUFBQTtBQU1FLHFCQUFLckIsS0FBTCxDQUFXbUIsR0FBWCxDQUFlLEtBQUtqQixJQUFwQixFQUEwQixLQUFLRCxNQUEvQjtBQU5GLGtEQU9TLEtBQUtELEtBUGQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQWFBLG1CQUFTO0FBQ1IsWUFBTSxJQUFJc0IsS0FBSixDQUFVLDZCQUFWLENBQU47QUFDQTs7O1dBRUQseUJBQTBCO0FBQ3pCLGFBQU8seUJBQVMsS0FBS3JCLE1BQUwsQ0FBWUMsSUFBWixDQUFpQnFCLFdBQWpCLEVBQVQsSUFBMkMsS0FBbEQ7QUFDQTs7OztFQW5FbUVDLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2luZ3VsYXIgfSBmcm9tICdwbHVyYWxpemUnO1xyXG5pbXBvcnQgeyBNb2RlbERhdGEgfSBmcm9tICcuLi9jb250cmFjdHMnO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4uL21vZGVsJztcclxuaW1wb3J0IHsgUXVlcnlCdWlsZGVyIH0gZnJvbSAnLi4vcXVlcnktYnVpbGRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmVsb25nc1RvPFQgZXh0ZW5kcyBNb2RlbCwgRCBleHRlbmRzIE1vZGVsRGF0YT4gZXh0ZW5kcyBRdWVyeUJ1aWxkZXI8RD4ge1xyXG5cdHByb3RlY3RlZCBjaGlsZDogVDtcclxuXHRwcm90ZWN0ZWQgcGFyZW50OiBUO1xyXG5cdHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNoaWxkOiBULCBwYXJlbnQ6IFQsIG5hbWU/OiBzdHJpbmcpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmNoaWxkID0gY2hpbGQ7XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWUgfHwgc2luZ3VsYXIocGFyZW50Lm5hbWUpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZ2V0KCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dGhpcy5xdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciwgdmFsdWUgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudC53aGVyZShxdWVyeS5rZXksIG9wZXJhdG9yLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XHJcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LndoZXJlSW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudC53aGVyZU5vdEluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XHJcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LmxpbWl0KHF1ZXJ5LmFtb3VudCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IHBhcmVudCA9IGF3YWl0IHRoaXMucGFyZW50LmZpbmRPbmUodGhpcy5jaGlsZC5nZXQodGhpcy5nZXRGb3JlaWduS2V5KCkpKTtcclxuXHJcblx0XHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMubmFtZSwgcGFyZW50KTtcclxuXHRcdFx0cmV0dXJuIHBhcmVudDtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldChwYXJlbnQ6IFQpIHtcclxuXHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpLCBwYXJlbnQuZ2V0KCdpZCcpKTtcclxuXHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMubmFtZSwgcGFyZW50KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgc2F2ZShwYXJlbnQ/OiBUKSB7XHJcblx0XHRpZiAocGFyZW50KSB7XHJcblx0XHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0fVxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgdGhpcy5wYXJlbnQuc2F2ZSgpO1xyXG5cdFx0XHR0aGlzLmNoaWxkLnNldCh0aGlzLm5hbWUsIHRoaXMucGFyZW50KTtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY2hpbGQ7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRlbGV0ZSgpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZSBwYXJlbnQgbW9kZWwuJyk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZ2V0Rm9yZWlnbktleSgpIHtcclxuXHRcdHJldHVybiBzaW5ndWxhcih0aGlzLnBhcmVudC5uYW1lLnRvTG93ZXJDYXNlKCkpICsgJ19pZCc7XHJcblx0fVxyXG59XHJcbiJdfQ==