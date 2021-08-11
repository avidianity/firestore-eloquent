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

  function HasMany(relation, parent, name) {
    var _this;

    _classCallCheck(this, HasMany);

    _this = _super.call(this, relation, parent);
    _this.name = name || relation.getTableName();
    return _this;
  }

  _createClass(HasMany, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

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
        var _this3 = this;

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

                      _this3.relation.where(query.key, operator, value);

                      break;

                    case 'whereIn':
                      _this3.relation.whereIn(query.key, query.values);

                      break;

                    case 'whereNotIn':
                      _this3.relation.whereNotIn(query.key, query.values);

                      break;

                    case 'limit':
                      _this3.relation.limit(query.amount);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvaGFzLW1hbnkudHMiXSwibmFtZXMiOlsiSGFzTWFueSIsInJlbGF0aW9uIiwicGFyZW50IiwibmFtZSIsImdldFRhYmxlTmFtZSIsInF1ZXJpZXMiLCJmb3JFYWNoIiwicXVlcnkiLCJtZXRob2QiLCJvcGVyYXRvciIsInZhbHVlIiwid2hlcmUiLCJrZXkiLCJ3aGVyZUluIiwidmFsdWVzIiwid2hlcmVOb3RJbiIsImxpbWl0IiwiYW1vdW50IiwiZm9yZWlnbktleSIsImdldEZvcmVpZ25LZXkiLCJnZXQiLCJnZXRBbGwiLCJjb2xsZWN0aW9uIiwiY2xlYXJRdWVyaWVzIiwic2V0IiwiaWQiLCJmaW5kT25lIiwibW9kZWwiLCJsZW5ndGgiLCJIYXNPbmVPck1hbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhQSxPOzs7OztBQUNaLG1CQUFZQyxRQUFaLEVBQXlCQyxNQUF6QixFQUF3Q0MsSUFBeEMsRUFBdUQ7QUFBQTs7QUFBQTs7QUFDdEQsOEJBQU1GLFFBQU4sRUFBZ0JDLE1BQWhCO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFJLElBQUlGLFFBQVEsQ0FBQ0csWUFBVCxFQUFwQjtBQUZzRDtBQUd0RDs7Ozs7eUVBRUQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRSxxQkFBS0MsT0FBTCxDQUFhQyxPQUFiLENBQXFCLFVBQUNDLEtBQUQsRUFBVztBQUMvQiwwQkFBUUEsS0FBSyxDQUFDQyxNQUFkO0FBQ0MseUJBQUssT0FBTDtBQUNDLDBCQUFRQyxRQUFSLEdBQTRCRixLQUE1QixDQUFRRSxRQUFSO0FBQUEsMEJBQWtCQyxLQUFsQixHQUE0QkgsS0FBNUIsQ0FBa0JHLEtBQWxCOztBQUNBLHNCQUFBLE1BQUksQ0FBQ1QsUUFBTCxDQUFjVSxLQUFkLENBQW9CSixLQUFLLENBQUNLLEdBQTFCLEVBQStCSCxRQUEvQixFQUF5Q0MsS0FBekM7O0FBQ0E7O0FBQ0QseUJBQUssU0FBTDtBQUNDLHNCQUFBLE1BQUksQ0FBQ1QsUUFBTCxDQUFjWSxPQUFkLENBQXNCTixLQUFLLENBQUNLLEdBQTVCLEVBQWlDTCxLQUFLLENBQUNPLE1BQXZDOztBQUNBOztBQUNELHlCQUFLLFlBQUw7QUFDQyxzQkFBQSxNQUFJLENBQUNiLFFBQUwsQ0FBY2MsVUFBZCxDQUF5QlIsS0FBSyxDQUFDSyxHQUEvQixFQUFvQ0wsS0FBSyxDQUFDTyxNQUExQzs7QUFDQTs7QUFDRCx5QkFBSyxPQUFMO0FBQ0Msc0JBQUEsTUFBSSxDQUFDYixRQUFMLENBQWNlLEtBQWQsQ0FBb0JULEtBQUssQ0FBQ1UsTUFBMUI7O0FBQ0E7QUFiRjtBQWVBLGlCQWhCRDtBQWlCTUMsZ0JBQUFBLFVBbkJSLEdBbUJxQixLQUFLQyxhQUFMLEVBbkJyQjtBQUFBO0FBQUEsdUJBb0IyQixLQUFLbEIsUUFBTCxDQUFjVSxLQUFkLENBQW9CTyxVQUFwQixFQUFnQyxJQUFoQyxFQUFzQyxLQUFLaEIsTUFBTCxDQUFZa0IsR0FBWixDQUFnQixJQUFoQixDQUF0QyxFQUE2REMsTUFBN0QsRUFwQjNCOztBQUFBO0FBb0JRQyxnQkFBQUEsVUFwQlI7QUFxQkUscUJBQUtDLFlBQUw7QUFDQSxxQkFBS3JCLE1BQUwsQ0FBWXNCLEdBQVosQ0FBZ0IsS0FBS3JCLElBQXJCLEVBQTJCbUIsVUFBM0I7QUF0QkYsaURBdUJTQSxVQXZCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBMkJFLHFCQUFLQyxZQUFMO0FBM0JGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7OzBFQStCQSxrQkFBV0UsRUFBWDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVFLHFCQUFLcEIsT0FBTCxDQUFhQyxPQUFiLENBQXFCLFVBQUNDLEtBQUQsRUFBVztBQUMvQiwwQkFBUUEsS0FBSyxDQUFDQyxNQUFkO0FBQ0MseUJBQUssT0FBTDtBQUNDLDBCQUFRQyxRQUFSLEdBQTRCRixLQUE1QixDQUFRRSxRQUFSO0FBQUEsMEJBQWtCQyxLQUFsQixHQUE0QkgsS0FBNUIsQ0FBa0JHLEtBQWxCOztBQUNBLHNCQUFBLE1BQUksQ0FBQ1QsUUFBTCxDQUFjVSxLQUFkLENBQW9CSixLQUFLLENBQUNLLEdBQTFCLEVBQStCSCxRQUEvQixFQUF5Q0MsS0FBekM7O0FBQ0E7O0FBQ0QseUJBQUssU0FBTDtBQUNDLHNCQUFBLE1BQUksQ0FBQ1QsUUFBTCxDQUFjWSxPQUFkLENBQXNCTixLQUFLLENBQUNLLEdBQTVCLEVBQWlDTCxLQUFLLENBQUNPLE1BQXZDOztBQUNBOztBQUNELHlCQUFLLFlBQUw7QUFDQyxzQkFBQSxNQUFJLENBQUNiLFFBQUwsQ0FBY2MsVUFBZCxDQUF5QlIsS0FBSyxDQUFDSyxHQUEvQixFQUFvQ0wsS0FBSyxDQUFDTyxNQUExQzs7QUFDQTs7QUFDRCx5QkFBSyxPQUFMO0FBQ0Msc0JBQUEsTUFBSSxDQUFDYixRQUFMLENBQWNlLEtBQWQsQ0FBb0JULEtBQUssQ0FBQ1UsTUFBMUI7O0FBQ0E7QUFiRjtBQWVBLGlCQWhCRDtBQWlCTUMsZ0JBQUFBLFVBbkJSLEdBbUJxQixLQUFLQyxhQUFMLEVBbkJyQjtBQUFBO0FBQUEsdUJBb0JzQixLQUFLbEIsUUFBTCxDQUFjVSxLQUFkLENBQW9CTyxVQUFwQixFQUFnQyxJQUFoQyxFQUFzQyxLQUFLaEIsTUFBTCxDQUFZa0IsR0FBWixDQUFnQixJQUFoQixDQUF0QyxFQUE2RE0sT0FBN0QsQ0FBcUVELEVBQXJFLENBcEJ0Qjs7QUFBQTtBQW9CUUUsZ0JBQUFBLEtBcEJSO0FBQUEsa0RBcUJTQSxLQXJCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBeUJFLHFCQUFLSixZQUFMO0FBekJGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7OzJFQTZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRTJCLEtBQUtILEdBQUwsRUFGM0I7O0FBQUE7QUFFUUUsZ0JBQUFBLFVBRlI7QUFBQSxrREFHU0EsVUFBVSxDQUFDTSxNQUhwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7OztFQWxFa0VDLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHsgTW9kZWxEYXRhIH0gZnJvbSAnLi4vY29udHJhY3RzJztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgSGFzT25lT3JNYW55IH0gZnJvbSAnLi9oYXMtb25lLW9yLW1hbnknO1xuXG5leHBvcnQgY2xhc3MgSGFzTWFueTxUIGV4dGVuZHMgTW9kZWwsIEQgZXh0ZW5kcyBNb2RlbERhdGE+IGV4dGVuZHMgSGFzT25lT3JNYW55PFQsIEQ+IHtcblx0Y29uc3RydWN0b3IocmVsYXRpb246IFQsIHBhcmVudDogTW9kZWwsIG5hbWU/OiBzdHJpbmcpIHtcblx0XHRzdXBlcihyZWxhdGlvbiwgcGFyZW50KTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lIHx8IHJlbGF0aW9uLmdldFRhYmxlTmFtZSgpO1xuXHR9XG5cblx0YXN5bmMgZ2V0KCkge1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi53aGVyZUluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi53aGVyZU5vdEluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0Jzpcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ubGltaXQocXVlcnkuYW1vdW50KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGZvcmVpZ25LZXkgPSB0aGlzLmdldEZvcmVpZ25LZXkoKTtcblx0XHRcdGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCB0aGlzLnJlbGF0aW9uLndoZXJlKGZvcmVpZ25LZXksICc9PScsIHRoaXMucGFyZW50LmdldCgnaWQnKSkuZ2V0QWxsKCk7XG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xuXHRcdFx0dGhpcy5wYXJlbnQuc2V0KHRoaXMubmFtZSwgY29sbGVjdGlvbik7XG5cdFx0XHRyZXR1cm4gY29sbGVjdGlvbjtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgZmluZChpZDogc3RyaW5nKTogUHJvbWlzZTxUPiB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlSW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlTm90SW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgZm9yZWlnbktleSA9IHRoaXMuZ2V0Rm9yZWlnbktleSgpO1xuXHRcdFx0Y29uc3QgbW9kZWwgPSBhd2FpdCB0aGlzLnJlbGF0aW9uLndoZXJlKGZvcmVpZ25LZXksICc9PScsIHRoaXMucGFyZW50LmdldCgnaWQnKSkuZmluZE9uZShpZCk7XG5cdFx0XHRyZXR1cm4gbW9kZWw7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGNvdW50KCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgdGhpcy5nZXQoKTtcblx0XHRcdHJldHVybiBjb2xsZWN0aW9uLmxlbmd0aDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9XG59XG4iXX0=