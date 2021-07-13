"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasMany = void 0;

var _hasOneOrMany = require("./has-one-or-many");

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

var HasMany = /*#__PURE__*/function (_HasOneOrMany) {
  _inherits(HasMany, _HasOneOrMany);

  var _super = _createSuper(HasMany);

  function HasMany() {
    _classCallCheck(this, HasMany);

    return _super.apply(this, arguments);
  }

  _createClass(HasMany, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var foreignKey, collection;
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

                      _this.relation.where(query.key, operator, value);

                      break;

                    case 'whereIn':
                      _this.relation.whereIn(query.key, query.values);

                      break;

                    case 'whereNotIn':
                      _this.relation.whereNotIn(query.key, query.values);

                      break;

                    case 'limit':
                      _this.relation.limit(query.amount);

                      break;
                  }
                });
                foreignKey = this.getForeignKey();
                _context.next = 5;
                return this.relation.where(foreignKey, '==', this.parent.get('id')).getAll();

              case 5:
                collection = _context.sent;
                this.clearQueries();
                this.parent.set(this.name, collection);
                return _context.abrupt("return", collection);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "find",
    value: function () {
      var _find = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var _this2 = this;

        var foreignKey, model;
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

                      _this2.relation.where(query.key, operator, value);

                      break;

                    case 'whereIn':
                      _this2.relation.whereIn(query.key, query.values);

                      break;

                    case 'whereNotIn':
                      _this2.relation.whereNotIn(query.key, query.values);

                      break;

                    case 'limit':
                      _this2.relation.limit(query.amount);

                      break;
                  }
                });
                foreignKey = this.getForeignKey();
                _context2.next = 5;
                return this.relation.where(foreignKey, '==', this.parent.get('id')).findOne(id);

              case 5:
                model = _context2.sent;
                this.clearQueries();
                return _context2.abrupt("return", model);

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function find(_x) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: "count",
    value: function () {
      var _count = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var collection;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.get();

              case 3:
                collection = _context3.sent;
                return _context3.abrupt("return", collection.length);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function count() {
        return _count.apply(this, arguments);
      }

      return count;
    }()
  }]);

  return HasMany;
}(_hasOneOrMany.HasOneOrMany);

exports.HasMany = HasMany;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvaGFzLW1hbnkudHMiXSwibmFtZXMiOlsiSGFzTWFueSIsInF1ZXJpZXMiLCJmb3JFYWNoIiwicXVlcnkiLCJtZXRob2QiLCJvcGVyYXRvciIsInZhbHVlIiwicmVsYXRpb24iLCJ3aGVyZSIsImtleSIsIndoZXJlSW4iLCJ2YWx1ZXMiLCJ3aGVyZU5vdEluIiwibGltaXQiLCJhbW91bnQiLCJmb3JlaWduS2V5IiwiZ2V0Rm9yZWlnbktleSIsInBhcmVudCIsImdldCIsImdldEFsbCIsImNvbGxlY3Rpb24iLCJjbGVhclF1ZXJpZXMiLCJzZXQiLCJuYW1lIiwiaWQiLCJmaW5kT25lIiwibW9kZWwiLCJsZW5ndGgiLCJIYXNPbmVPck1hbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhQSxPOzs7Ozs7Ozs7Ozs7Ozt5RUFJWjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVFLHFCQUFLQyxPQUFMLENBQWFDLE9BQWIsQ0FBcUIsVUFBQ0MsS0FBRCxFQUFXO0FBQy9CLDBCQUFRQSxLQUFLLENBQUNDLE1BQWQ7QUFDQyx5QkFBSyxPQUFMO0FBQ0MsMEJBQVFDLFFBQVIsR0FBNEJGLEtBQTVCLENBQVFFLFFBQVI7QUFBQSwwQkFBa0JDLEtBQWxCLEdBQTRCSCxLQUE1QixDQUFrQkcsS0FBbEI7O0FBQ0Esc0JBQUEsS0FBSSxDQUFDQyxRQUFMLENBQWNDLEtBQWQsQ0FBb0JMLEtBQUssQ0FBQ00sR0FBMUIsRUFBK0JKLFFBQS9CLEVBQXlDQyxLQUF6Qzs7QUFDQTs7QUFDRCx5QkFBSyxTQUFMO0FBQ0Msc0JBQUEsS0FBSSxDQUFDQyxRQUFMLENBQWNHLE9BQWQsQ0FBc0JQLEtBQUssQ0FBQ00sR0FBNUIsRUFBaUNOLEtBQUssQ0FBQ1EsTUFBdkM7O0FBQ0E7O0FBQ0QseUJBQUssWUFBTDtBQUNDLHNCQUFBLEtBQUksQ0FBQ0osUUFBTCxDQUFjSyxVQUFkLENBQXlCVCxLQUFLLENBQUNNLEdBQS9CLEVBQW9DTixLQUFLLENBQUNRLE1BQTFDOztBQUNBOztBQUNELHlCQUFLLE9BQUw7QUFDQyxzQkFBQSxLQUFJLENBQUNKLFFBQUwsQ0FBY00sS0FBZCxDQUFvQlYsS0FBSyxDQUFDVyxNQUExQjs7QUFDQTtBQWJGO0FBZUEsaUJBaEJEO0FBaUJNQyxnQkFBQUEsVUFuQlIsR0FtQnFCLEtBQUtDLGFBQUwsRUFuQnJCO0FBQUE7QUFBQSx1QkFvQjJCLEtBQUtULFFBQUwsQ0FDdkJDLEtBRHVCLENBQ2pCTyxVQURpQixFQUNMLElBREssRUFDQyxLQUFLRSxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsSUFBaEIsQ0FERCxFQUV2QkMsTUFGdUIsRUFwQjNCOztBQUFBO0FBb0JRQyxnQkFBQUEsVUFwQlI7QUF1QkUscUJBQUtDLFlBQUw7QUFDQSxxQkFBS0osTUFBTCxDQUFZSyxHQUFaLENBQWdCLEtBQUtDLElBQXJCLEVBQTJCSCxVQUEzQjtBQXhCRixpREF5QlNBLFVBekJUOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7OzBFQStCQSxrQkFBV0ksRUFBWDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVFLHFCQUFLdkIsT0FBTCxDQUFhQyxPQUFiLENBQXFCLFVBQUNDLEtBQUQsRUFBVztBQUMvQiwwQkFBUUEsS0FBSyxDQUFDQyxNQUFkO0FBQ0MseUJBQUssT0FBTDtBQUNDLDBCQUFRQyxRQUFSLEdBQTRCRixLQUE1QixDQUFRRSxRQUFSO0FBQUEsMEJBQWtCQyxLQUFsQixHQUE0QkgsS0FBNUIsQ0FBa0JHLEtBQWxCOztBQUNBLHNCQUFBLE1BQUksQ0FBQ0MsUUFBTCxDQUFjQyxLQUFkLENBQW9CTCxLQUFLLENBQUNNLEdBQTFCLEVBQStCSixRQUEvQixFQUF5Q0MsS0FBekM7O0FBQ0E7O0FBQ0QseUJBQUssU0FBTDtBQUNDLHNCQUFBLE1BQUksQ0FBQ0MsUUFBTCxDQUFjRyxPQUFkLENBQXNCUCxLQUFLLENBQUNNLEdBQTVCLEVBQWlDTixLQUFLLENBQUNRLE1BQXZDOztBQUNBOztBQUNELHlCQUFLLFlBQUw7QUFDQyxzQkFBQSxNQUFJLENBQUNKLFFBQUwsQ0FBY0ssVUFBZCxDQUF5QlQsS0FBSyxDQUFDTSxHQUEvQixFQUFvQ04sS0FBSyxDQUFDUSxNQUExQzs7QUFDQTs7QUFDRCx5QkFBSyxPQUFMO0FBQ0Msc0JBQUEsTUFBSSxDQUFDSixRQUFMLENBQWNNLEtBQWQsQ0FBb0JWLEtBQUssQ0FBQ1csTUFBMUI7O0FBQ0E7QUFiRjtBQWVBLGlCQWhCRDtBQWlCTUMsZ0JBQUFBLFVBbkJSLEdBbUJxQixLQUFLQyxhQUFMLEVBbkJyQjtBQUFBO0FBQUEsdUJBb0JzQixLQUFLVCxRQUFMLENBQ2xCQyxLQURrQixDQUNaTyxVQURZLEVBQ0EsSUFEQSxFQUNNLEtBQUtFLE1BQUwsQ0FBWUMsR0FBWixDQUFnQixJQUFoQixDQUROLEVBRWxCTyxPQUZrQixDQUVWRCxFQUZVLENBcEJ0Qjs7QUFBQTtBQW9CUUUsZ0JBQUFBLEtBcEJSO0FBdUJFLHFCQUFLTCxZQUFMO0FBdkJGLGtEQXdCU0ssS0F4QlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7MkVBOEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFMkIsS0FBS1IsR0FBTCxFQUYzQjs7QUFBQTtBQUVRRSxnQkFBQUEsVUFGUjtBQUFBLGtEQUdTQSxVQUFVLENBQUNPLE1BSHBCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7O0VBakVrRUMsMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vY29sbGVjdGlvbic7XHJcbmltcG9ydCB7IE1vZGVsRGF0YSB9IGZyb20gJy4uL2NvbnRyYWN0cyc7XHJcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwnO1xyXG5pbXBvcnQgeyBIYXNPbmVPck1hbnkgfSBmcm9tICcuL2hhcy1vbmUtb3ItbWFueSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGFzTWFueTxUIGV4dGVuZHMgTW9kZWwsIEQgZXh0ZW5kcyBNb2RlbERhdGE+IGV4dGVuZHMgSGFzT25lT3JNYW55PFxyXG5cdFQsXHJcblx0RFxyXG4+IHtcclxuXHRhc3luYyBnZXQoKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlSW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlTm90SW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0JzpcclxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBmb3JlaWduS2V5ID0gdGhpcy5nZXRGb3JlaWduS2V5KCk7XHJcblx0XHRcdGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCB0aGlzLnJlbGF0aW9uXHJcblx0XHRcdFx0LndoZXJlKGZvcmVpZ25LZXksICc9PScsIHRoaXMucGFyZW50LmdldCgnaWQnKSlcclxuXHRcdFx0XHQuZ2V0QWxsKCk7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHRcdHRoaXMucGFyZW50LnNldCh0aGlzLm5hbWUsIGNvbGxlY3Rpb24pO1xyXG5cdFx0XHRyZXR1cm4gY29sbGVjdGlvbjtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZmluZChpZDogc3RyaW5nKTogUHJvbWlzZTxUPiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlSW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlTm90SW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0JzpcclxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBmb3JlaWduS2V5ID0gdGhpcy5nZXRGb3JlaWduS2V5KCk7XHJcblx0XHRcdGNvbnN0IG1vZGVsID0gYXdhaXQgdGhpcy5yZWxhdGlvblxyXG5cdFx0XHRcdC53aGVyZShmb3JlaWduS2V5LCAnPT0nLCB0aGlzLnBhcmVudC5nZXQoJ2lkJykpXHJcblx0XHRcdFx0LmZpbmRPbmUoaWQpO1xyXG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xyXG5cdFx0XHRyZXR1cm4gbW9kZWw7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGNvdW50KCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMuZ2V0KCk7XHJcblx0XHRcdHJldHVybiBjb2xsZWN0aW9uLmxlbmd0aDtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=