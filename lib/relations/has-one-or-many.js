"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasOneOrMany = void 0;

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

var HasOneOrMany = /*#__PURE__*/function (_QueryBuilder) {
  _inherits(HasOneOrMany, _QueryBuilder);

  var _super = _createSuper(HasOneOrMany);

  function HasOneOrMany(relation, parent, name) {
    var _this;

    _classCallCheck(this, HasOneOrMany);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "relation", void 0);

    _defineProperty(_assertThisInitialized(_this), "parent", void 0);

    _defineProperty(_assertThisInitialized(_this), "name", void 0);

    _this.relation = relation;
    _this.parent = parent;
    _this.name = name;
    return _this;
  }

  _createClass(HasOneOrMany, [{
    key: "get",
    value: function get() {
      throw new Error('get() needs to be defined on the child class.');
      return new Promise(function () {});
    }
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var model;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                model = new this.relation.type();
                model.fill(data);
                model.set(this.getForeignKey(), this.parent.get('id'));
                _context.next = 6;
                return model.save();

              case 6:
                return _context.abrupt("return", model);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.relation.fill(data);
                this.relation.set(this.getForeignKey(), this.parent.get('id'));
                _context2.next = 5;
                return this.relation.save();

              case 5:
                return _context2.abrupt("return", this.relation);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function update(_x2) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "save",
    value: function save(instance) {
      var relation = instance || this.relation;
      var data = relation.getData();
      relation.set(this.getForeignKey(), this.parent.get('id'));
      return relation.get('id') === null ? relation.create(data) : relation.update(data);
    }
  }, {
    key: "first",
    value: function () {
      var _first = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this2 = this;

        var child;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
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
                _context3.next = 4;
                return this.relation.where(this.getForeignKey(), '==', this.parent.get('id')).first();

              case 4:
                child = _context3.sent;
                this.parent.set(this.name, child);
                return _context3.abrupt("return", child);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 12:
                _context3.prev = 12;
                this.clearQueries();
                return _context3.finish(12);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9, 12, 15]]);
      }));

      function first() {
        return _first.apply(this, arguments);
      }

      return first;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var modelsOrModel;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.get();

              case 3:
                modelsOrModel = _context4.sent;

                if (!modelsOrModel) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 7;
                return modelsOrModel["delete"]();

              case 7:
                this.parent.unset(this.name);
                return _context4.abrupt("return");

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 11]]);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "getForeignKey",
    value: function getForeignKey() {
      return this.parent.constructor.name.toLowerCase() + '_id';
    }
  }]);

  return HasOneOrMany;
}(_queryBuilder.QueryBuilder);

exports.HasOneOrMany = HasOneOrMany;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvaGFzLW9uZS1vci1tYW55LnRzIl0sIm5hbWVzIjpbIkhhc09uZU9yTWFueSIsInJlbGF0aW9uIiwicGFyZW50IiwibmFtZSIsIkVycm9yIiwiUHJvbWlzZSIsImRhdGEiLCJtb2RlbCIsInR5cGUiLCJmaWxsIiwic2V0IiwiZ2V0Rm9yZWlnbktleSIsImdldCIsInNhdmUiLCJpbnN0YW5jZSIsImdldERhdGEiLCJjcmVhdGUiLCJ1cGRhdGUiLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5Iiwid2hlcmVJbiIsInZhbHVlcyIsIndoZXJlTm90SW4iLCJsaW1pdCIsImFtb3VudCIsImZpcnN0IiwiY2hpbGQiLCJjbGVhclF1ZXJpZXMiLCJtb2RlbHNPck1vZGVsIiwidW5zZXQiLCJjb25zdHJ1Y3RvciIsInRvTG93ZXJDYXNlIiwiUXVlcnlCdWlsZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVzQkEsWTs7Ozs7QUFLckIsd0JBQVlDLFFBQVosRUFBeUJDLE1BQXpCLEVBQXdDQyxJQUF4QyxFQUFzRDtBQUFBOztBQUFBOztBQUNyRDs7QUFEcUQ7O0FBQUE7O0FBQUE7O0FBRXJELFVBQUtGLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBSnFEO0FBS3JEOzs7O1dBRUQsZUFBTTtBQUNMLFlBQU0sSUFBSUMsS0FBSixDQUFVLCtDQUFWLENBQU47QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBcUMsWUFBTSxDQUFFLENBQTdDLENBQVA7QUFDQTs7Ozs0RUFFRCxpQkFBYUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVRQyxnQkFBQUEsS0FGUixHQUVnQixJQUFJLEtBQUtOLFFBQUws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Z0IsS0FBS1AsSUFBckIsRUFBMkI2QixLQUEzQjtBQXBCRixrREFxQlNBLEtBckJUOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUF5QkUscUJBQUtDLFlBQUw7QUF6QkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7NkVBNkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFOEIsS0FBS3JCLEdBQUwsRUFGOUI7O0FBQUE7QUFFUXNCLGdCQUFBQSxhQUZSOztBQUFBLHFCQUdNQSxhQUhOO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBSVNBLGFBQWEsVUFBYixFQUpUOztBQUFBO0FBTUUscUJBQUtoQyxNQUFMLENBQVlpQyxLQUFaLENBQWtCLEtBQUtoQyxJQUF2QjtBQU5GOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7V0FhQSx5QkFBMEI7QUFDekIsYUFBTyxLQUFLRCxNQUFMLENBQVlrQyxXQUFaLENBQXdCakMsSUFBeEIsQ0FBNkJrQyxXQUE3QixLQUE2QyxLQUFwRDtBQUNBOzs7O0VBM0YrRUMsMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vY29sbGVjdGlvbic7XHJcbmltcG9ydCB7IEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXAsIE1vZGVsRGF0YSB9IGZyb20gJy4uL2NvbnRyYWN0cyc7XHJcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwnO1xyXG5pbXBvcnQgeyBRdWVyeUJ1aWxkZXIgfSBmcm9tICcuLi9xdWVyeS1idWlsZGVyJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIYXNPbmVPck1hbnk8VCBleHRlbmRzIE1vZGVsLCBEIGV4dGVuZHMgTW9kZWxEYXRhPiBleHRlbmRzIFF1ZXJ5QnVpbGRlcjxEPiBpbXBsZW1lbnRzIEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXA8VD4ge1xyXG5cdHByb3RlY3RlZCByZWxhdGlvbjogVDtcclxuXHRwcm90ZWN0ZWQgcGFyZW50OiBNb2RlbDxhbnk+O1xyXG5cdHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHJlbGF0aW9uOiBULCBwYXJlbnQ6IE1vZGVsLCBuYW1lOiBzdHJpbmcpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnJlbGF0aW9uID0gcmVsYXRpb247XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHRnZXQoKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2dldCgpIG5lZWRzIHRvIGJlIGRlZmluZWQgb24gdGhlIGNoaWxkIGNsYXNzLicpO1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPFQgfCBDb2xsZWN0aW9uPFQ+IHwgYW55PigoKSA9PiB7fSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBjcmVhdGUoZGF0YTogYW55KSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBtb2RlbCA9IG5ldyB0aGlzLnJlbGF0aW9uLnR5cGUoKTtcclxuXHRcdFx0bW9kZWwuZmlsbChkYXRhKTtcclxuXHRcdFx0bW9kZWwuc2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpLCB0aGlzLnBhcmVudC5nZXQoJ2lkJykpO1xyXG5cdFx0XHRhd2FpdCBtb2RlbC5zYXZlKCk7XHJcblx0XHRcdHJldHVybiBtb2RlbDtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgdXBkYXRlKGRhdGE6IGFueSkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dGhpcy5yZWxhdGlvbi5maWxsKGRhdGEpO1xyXG5cdFx0XHR0aGlzLnJlbGF0aW9uLnNldCh0aGlzLmdldEZvcmVpZ25LZXkoKSwgdGhpcy5wYXJlbnQuZ2V0KCdpZCcpKTtcclxuXHRcdFx0YXdhaXQgdGhpcy5yZWxhdGlvbi5zYXZlKCk7XHJcblx0XHRcdHJldHVybiB0aGlzLnJlbGF0aW9uO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzYXZlKGluc3RhbmNlPzogVCkge1xyXG5cdFx0Y29uc3QgcmVsYXRpb24gPSBpbnN0YW5jZSB8fCB0aGlzLnJlbGF0aW9uO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHJlbGF0aW9uLmdldERhdGEoKTtcclxuXHRcdHJlbGF0aW9uLnNldCh0aGlzLmdldEZvcmVpZ25LZXkoKSwgdGhpcy5wYXJlbnQuZ2V0KCdpZCcpKTtcclxuXHRcdHJldHVybiByZWxhdGlvbi5nZXQoJ2lkJykgPT09IG51bGwgPyByZWxhdGlvbi5jcmVhdGUoZGF0YSkgOiByZWxhdGlvbi51cGRhdGUoZGF0YSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmaXJzdCgpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi53aGVyZShxdWVyeS5rZXksIG9wZXJhdG9yLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XHJcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmVJbihxdWVyeS5rZXksIHF1ZXJ5LnZhbHVlcyk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XHJcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmVOb3RJbihxdWVyeS5rZXksIHF1ZXJ5LnZhbHVlcyk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IGNoaWxkID0gYXdhaXQgdGhpcy5yZWxhdGlvbi53aGVyZSh0aGlzLmdldEZvcmVpZ25LZXkoKSwgJz09JywgdGhpcy5wYXJlbnQuZ2V0KCdpZCcpKS5maXJzdCgpO1xyXG5cdFx0XHR0aGlzLnBhcmVudC5zZXQodGhpcy5uYW1lLCBjaGlsZCk7XHJcblx0XHRcdHJldHVybiBjaGlsZDtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGRlbGV0ZSgpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IG1vZGVsc09yTW9kZWwgPSBhd2FpdCB0aGlzLmdldCgpO1xyXG5cdFx0XHRpZiAobW9kZWxzT3JNb2RlbCkge1xyXG5cdFx0XHRcdGF3YWl0IG1vZGVsc09yTW9kZWwuZGVsZXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5wYXJlbnQudW5zZXQodGhpcy5uYW1lKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZ2V0Rm9yZWlnbktleSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBhcmVudC5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnX2lkJztcclxuXHR9XHJcbn1cclxuIl19