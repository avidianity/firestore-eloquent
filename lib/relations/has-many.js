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
                _context.prev = 14;
                this.clearQueries();
                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11, 14, 17]]);
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
                return _context2.abrupt("return", model);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvaGFzLW1hbnkudHMiXSwibmFtZXMiOlsiSGFzTWFueSIsInF1ZXJpZXMiLCJmb3JFYWNoIiwicXVlcnkiLCJtZXRob2QiLCJvcGVyYXRvciIsInZhbHVlIiwicmVsYXRpb24iLCJ3aGVyZSIsImtleSIsIndoZXJlSW4iLCJ2YWx1ZXMiLCJ3aGVyZU5vdEluIiwibGltaXQiLCJhbW91bnQiLCJmb3JlaWduS2V5IiwiZ2V0Rm9yZWlnbktleSIsInBhcmVudCIsImdldCIsImdldEFsbCIsImNvbGxlY3Rpb24iLCJjbGVhclF1ZXJpZXMiLCJzZXQiLCJuYW1lIiwiaWQiLCJmaW5kT25lIiwibW9kZWwiLCJsZW5ndGgiLCJIYXNPbmVPck1hbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhQSxPOzs7Ozs7Ozs7Ozs7Ozt5RUFDWjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVFLHFCQUFLQyxPQUFMLENBQWFDLE9BQWIsQ0FBcUIsVUFBQ0MsS0FBRCxFQUFXO0FBQy9CLDBCQUFRQSxLQUFLLENBQUNDLE1BQWQ7QUFDQyx5QkFBSyxPQUFMO0FBQ0MsMEJBQVFDLFFBQVIsR0FBNEJGLEtBQTVCLENBQVFFLFFBQVI7QUFBQSwwQkFBa0JDLEtBQWxCLEdBQTRCSCxLQUE1QixDQUFrQkcsS0FBbEI7O0FBQ0Esc0JBQUEsS0FBSSxDQUFDQyxRQUFMLENBQWNDLEtBQWQsQ0FBb0JMLEtBQUssQ0FBQ00sR0FBMUIsRUFBK0JKLFFBQS9CLEVBQXlDQyxLQUF6Qzs7QUFDQTs7QUFDRCx5QkFBSyxTQUFMO0FBQ0Msc0JBQUEsS0FBSSxDQUFDQyxRQUFMLENBQWNHLE9BQWQsQ0FBc0JQLEtBQUssQ0FBQ00sR0FBNUIsRUFBaUNOLEtBQUssQ0FBQ1EsTUFBdkM7O0FBQ0E7O0FBQ0QseUJBQUssWUFBTDtBQUNDLHNCQUFBLEtBQUksQ0FBQ0osUUFBTCxDQUFjSyxV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cm9tICcuLi9jb2xsZWN0aW9uJztcclxuaW1wb3J0IHsgTW9kZWxEYXRhIH0gZnJvbSAnLi4vY29udHJhY3RzJztcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9tb2RlbCc7XHJcbmltcG9ydCB7IEhhc09uZU9yTWFueSB9IGZyb20gJy4vaGFzLW9uZS1vci1tYW55JztcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXNNYW55PFQgZXh0ZW5kcyBNb2RlbCwgRCBleHRlbmRzIE1vZGVsRGF0YT4gZXh0ZW5kcyBIYXNPbmVPck1hbnk8VCwgRD4ge1xyXG5cdGFzeW5jIGdldCgpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi53aGVyZShxdWVyeS5rZXksIG9wZXJhdG9yLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XHJcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmVJbihxdWVyeS5rZXksIHF1ZXJ5LnZhbHVlcyk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XHJcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmVOb3RJbihxdWVyeS5rZXksIHF1ZXJ5LnZhbHVlcyk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IGZvcmVpZ25LZXkgPSB0aGlzLmdldEZvcmVpZ25LZXkoKTtcclxuXHRcdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMucmVsYXRpb24ud2hlcmUoZm9yZWlnbktleSwgJz09JywgdGhpcy5wYXJlbnQuZ2V0KCdpZCcpKS5nZXRBbGwoKTtcclxuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcclxuXHRcdFx0dGhpcy5wYXJlbnQuc2V0KHRoaXMubmFtZSwgY29sbGVjdGlvbik7XHJcblx0XHRcdHJldHVybiBjb2xsZWN0aW9uO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZmluZChpZDogc3RyaW5nKTogUHJvbWlzZTxUPiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlSW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlTm90SW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0JzpcclxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBmb3JlaWduS2V5ID0gdGhpcy5nZXRGb3JlaWduS2V5KCk7XHJcblx0XHRcdGNvbnN0IG1vZGVsID0gYXdhaXQgdGhpcy5yZWxhdGlvbi53aGVyZShmb3JlaWduS2V5LCAnPT0nLCB0aGlzLnBhcmVudC5nZXQoJ2lkJykpLmZpbmRPbmUoaWQpO1xyXG5cdFx0XHRyZXR1cm4gbW9kZWw7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBjb3VudCgpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCB0aGlzLmdldCgpO1xyXG5cdFx0XHRyZXR1cm4gY29sbGVjdGlvbi5sZW5ndGg7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19