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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvYmVsb25ncy10by50cyJdLCJuYW1lcyI6WyJCZWxvbmdzVG8iLCJjaGlsZCIsInBhcmVudCIsIm5hbWUiLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5Iiwid2hlcmVJbiIsInZhbHVlcyIsIndoZXJlTm90SW4iLCJsaW1pdCIsImFtb3VudCIsImZpbmRPbmUiLCJnZXQiLCJnZXRGb3JlaWduS2V5Iiwic2V0IiwiY2xlYXJRdWVyaWVzIiwic2F2ZSIsIkVycm9yIiwidG9Mb3dlckNhc2UiLCJRdWVyeUJ1aWxkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLFM7Ozs7O0FBS1oscUJBQVlDLEtBQVosRUFBc0JDLE1BQXRCLEVBQWlDQyxJQUFqQyxFQUFnRDtBQUFBOztBQUFBOztBQUMvQzs7QUFEK0M7O0FBQUE7O0FBQUE7O0FBRS9DLFVBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBSSxJQUFJLHlCQUFTRCxNQUFNLENBQUNDLElBQWhCLENBQXBCO0FBSitDO0FBSy9DOzs7Ozt5RUFFRDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVFLHFCQUFLQyxPQUFMLENBQWFDLE9BQWIsQ0FBcUIsVUFBQ0MsS0FBRCxFQUFXO0FBQy9CLDBCQUFRQSxLQUFLLENBQUNDLE1BQWQ7QUFDQyx5QkFBSyxPQUFMO0FBQ0MsMEJBQVFDLFFBQVIsR0FBNEJGLEtBQTVCLENBQVFFLFFBQVI7QUFBQSwwQkFBa0JDLEtBQWxCLEdBQTRCSCxLQUE1QixDQUFrQkcsS0FBbEI7O0FBQ0Esc0JBQUEsTUFBSSxDQUFDUCxNQUFMLENBQVlRLEtBQVosQ0FBa0JKLEtBQUssQ0FBQ0ssR0FBeEIsRUFBNkJILFFBQTdCLEVBQXVDQyxLQUF2Qzs7QUFDQTs7QUFDRCx5QkFBSyxTQUFMO0FBQ0Msc0JBQUEsTUFBSSxDQUFDUCxNQUFMLENBQVlVLE9BQVosQ0FBb0JOLEtBQUssQ0FBQ0ssR0FBMUIsRUFBK0JMLEtBQUssQ0FBQ08sTUFBckM7O0FBQ0E7O0FBQ0QseUJBQUssWUFBTDtBQUNDLHNCQUFBLE1BQUksQ0FBQ1gsTUFBTCxDQUFZWSxVQUFaLENBQXVCUixLQUFLLENBQUNLLEdBQTdCLEVBQWtDTCxLQUFLLENBQUNPLE1BQXhDOztBQUNBOztBQUNELHlCQUFLLE9BQUw7QUFDQyxzQkFBQSxNQUFJLENBQUNYLE1BQUwsQ0FBWWEsS0FBWixDQUFrQlQsS0FBSyxDQUFDVSxNQUF4Qjs7QUFDQTtBQWJGO0FBZUEsaUJBaEJEO0FBRkY7QUFBQSx1QkFtQnVCLEtBQUtkLE1BQUwsQ0FBWWUsT0FBWixDQUFvQixLQUFLaEIsS0FBTCxDQUFXaUIsR0FBWCxDQUFlLEtBQUtDLGFBQUwsRUFBZixDQUFwQixDQW5CdkI7O0FBQUE7QUFtQlFqQixnQkFBQUEsTUFuQlI7QUFxQkUscUJBQUtELEtBQUwsQ0FBV21CLEdBQVgsQ0FBZSxLQUFLakIsSUFBcEIsRUFBMEJELE1BQTFCO0FBckJGLGlEQXNCU0EsTUF0QlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQTBCRSxxQkFBS21CLFlBQUw7QUExQkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQThCQSxhQUFJbkIsTUFBSixFQUFlO0FBQ2QsV0FBS0QsS0FBTCxDQUFXbUIsR0FBWCxDQUFlLEtBQUtELGFBQUwsRUFBZixFQUFxQ2pCLE1BQU0sQ0FBQ2dCLEdBQVAsQ0FBVyxJQUFYLENBQXJDO0FBQ0EsV0FBS2pCLEtBQUwsQ0FBV21CLEdBQVgsQ0FBZSxLQUFLakIsSUFBcEIsRUFBMEJELE1BQTFCO0FBQ0EsYUFBTyxJQUFQO0FBQ0E7Ozs7MEVBRUQsa0JBQVdBLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLG9CQUFJQSxNQUFKLEVBQVk7QUFDWCx1QkFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0E7O0FBSEY7QUFBQTtBQUFBLHVCQUtRLEtBQUtBLE1BQUwsQ0FBWW9CLElBQVosRUFMUjs7QUFBQTtBQU1FLHFCQUFLckIsS0FBTCxDQUFXbUIsR0FBWCxDQUFlLEtBQUtqQixJQUFwQixFQUEwQixLQUFLRCxNQUEvQjtBQU5GLGtEQU9TLEtBQUtELEtBUGQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQWFBLG1CQUFTO0FBQ1IsWUFBTSxJQUFJc0IsS0FBSixDQUFVLDZCQUFWLENBQU47QUFDQTs7O1dBRUQseUJBQTBCO0FBQ3pCLGFBQU8seUJBQVMsS0FBS3JCLE1BQUwsQ0FBWUMsSUFBWixDQUFpQnFCLFdBQWpCLEVBQVQsSUFBMkMsS0FBbEQ7QUFDQTs7OztFQW5FbUVDLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2luZ3VsYXIgfSBmcm9tICdwbHVyYWxpemUnO1xuaW1wb3J0IHsgTW9kZWxEYXRhIH0gZnJvbSAnLi4vY29udHJhY3RzJztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgUXVlcnlCdWlsZGVyIH0gZnJvbSAnLi4vcXVlcnktYnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBCZWxvbmdzVG88VCBleHRlbmRzIE1vZGVsLCBEIGV4dGVuZHMgTW9kZWxEYXRhPiBleHRlbmRzIFF1ZXJ5QnVpbGRlcjxEPiB7XG5cdHByb3RlY3RlZCBjaGlsZDogVDtcblx0cHJvdGVjdGVkIHBhcmVudDogVDtcblx0cHJvdGVjdGVkIG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihjaGlsZDogVCwgcGFyZW50OiBULCBuYW1lPzogc3RyaW5nKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmNoaWxkID0gY2hpbGQ7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZSB8fCBzaW5ndWxhcihwYXJlbnQubmFtZSk7XG5cdH1cblxuXHRhc3luYyBnZXQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnQud2hlcmVJbihxdWVyeS5rZXksIHF1ZXJ5LnZhbHVlcyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50LndoZXJlTm90SW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnQubGltaXQocXVlcnkuYW1vdW50KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHBhcmVudCA9IGF3YWl0IHRoaXMucGFyZW50LmZpbmRPbmUodGhpcy5jaGlsZC5nZXQodGhpcy5nZXRGb3JlaWduS2V5KCkpKTtcblxuXHRcdFx0dGhpcy5jaGlsZC5zZXQodGhpcy5uYW1lLCBwYXJlbnQpO1xuXHRcdFx0cmV0dXJuIHBhcmVudDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XG5cdFx0fVxuXHR9XG5cblx0c2V0KHBhcmVudDogVCkge1xuXHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpLCBwYXJlbnQuZ2V0KCdpZCcpKTtcblx0XHR0aGlzLmNoaWxkLnNldCh0aGlzLm5hbWUsIHBhcmVudCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhc3luYyBzYXZlKHBhcmVudD86IFQpIHtcblx0XHRpZiAocGFyZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHRoaXMucGFyZW50LnNhdmUoKTtcblx0XHRcdHRoaXMuY2hpbGQuc2V0KHRoaXMubmFtZSwgdGhpcy5wYXJlbnQpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hpbGQ7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxuXG5cdGRlbGV0ZSgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgcGFyZW50IG1vZGVsLicpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldEZvcmVpZ25LZXkoKSB7XG5cdFx0cmV0dXJuIHNpbmd1bGFyKHRoaXMucGFyZW50Lm5hbWUudG9Mb3dlckNhc2UoKSkgKyAnX2lkJztcblx0fVxufVxuIl19