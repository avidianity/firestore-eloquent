"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasOneOrMany = void 0;

var _pluralize = require("pluralize");

var _model = require("../model");

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

  function HasOneOrMany(relation, parent) {
    var _this;

    _classCallCheck(this, HasOneOrMany);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "relation", void 0);

    _defineProperty(_assertThisInitialized(_this), "parent", void 0);

    _defineProperty(_assertThisInitialized(_this), "name", void 0);

    _this.relation = relation;
    _this.parent = parent;
    return _this;
  }

  _createClass(HasOneOrMany, [{
    key: "get",
    value: function get() {
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
      if (instance) {
        this.relation.fill(instance instanceof _model.Model ? instance.getData() : instance);
      }

      var relation = this.relation;
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
      return ((0, _pluralize.isSingular)(this.name) ? this.name : (0, _pluralize.singular)(this.name) + '_id').toLowerCase();
    }
  }]);

  return HasOneOrMany;
}(_queryBuilder.QueryBuilder);

exports.HasOneOrMany = HasOneOrMany;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvaGFzLW9uZS1vci1tYW55LnRzIl0sIm5hbWVzIjpbIkhhc09uZU9yTWFueSIsInJlbGF0aW9uIiwicGFyZW50IiwiUHJvbWlzZSIsImRhdGEiLCJtb2RlbCIsInR5cGUiLCJmaWxsIiwic2V0IiwiZ2V0Rm9yZWlnbktleSIsImdldCIsInNhdmUiLCJpbnN0YW5jZSIsIk1vZGVsIiwiZ2V0RGF0YSIsImNyZWF0ZSIsInVwZGF0ZSIsInF1ZXJpZXMiLCJmb3JFYWNoIiwicXVlcnkiLCJtZXRob2QiLCJvcGVyYXRvciIsInZhbHVlIiwid2hlcmUiLCJrZXkiLCJ3aGVyZUluIiwidmFsdWVzIiwid2hlcmVOb3RJbiIsImxpbWl0IiwiYW1vdW50IiwiZmlyc3QiLCJjaGlsZCIsIm5hbWUiLCJjbGVhclF1ZXJpZXMiLCJtb2RlbHNPck1vZGVsIiwidW5zZXQiLCJ0b0xvd2VyQ2FzZSIsIlF1ZXJ5QnVpbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFc0JBLFk7Ozs7O0FBS3JCLHdCQUFZQyxRQUFaLEVBQXlCQyxNQUF6QixFQUF3QztBQUFBOztBQUFBOztBQUN2Qzs7QUFEdUM7O0FBQUE7O0FBQUE7O0FBRXZDLFVBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBSHVDO0FBSXZDOzs7O1dBRUQsZUFBTTtBQUNMLGFBQU8sSUFBSUMsT0FBSixDQUFxQyxZQUFNLENBQUUsQ0FBN0MsQ0FBUDtBQUNBOzs7OzRFQUVELGlCQUFhQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVFDLGdCQUFBQSxLQUZSLEdBRWdCLElBQUksS0FBS0osUUFBTCxDQUFjSyxJQUFsQixFQUZoQjtBQUdFRCxnQkFBQUEsS0FBSyxDQUFDRSxJQUFOLENBQVdILElBQVg7QUFDQUMsZ0JBQUFBLEtBQUssQ0FB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RSxxQkFBSzdCLE1BQUwsQ0FBWU0sR0FBWixDQUFnQixLQUFLd0IsSUFBckIsRUFBMkJELEtBQTNCO0FBcEJGLGtEQXFCU0EsS0FyQlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQXlCRSxxQkFBS0UsWUFBTDtBQXpCRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7Ozs2RUE2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUU4QixLQUFLdkIsR0FBTCxFQUY5Qjs7QUFBQTtBQUVRd0IsZ0JBQUFBLGFBRlI7O0FBQUEscUJBR01BLGFBSE47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1QkFJU0EsYUFBYSxVQUFiLEVBSlQ7O0FBQUE7QUFNRSxxQkFBS2hDLE1BQUwsQ0FBWWlDLEtBQVosQ0FBa0IsS0FBS0gsSUFBdkI7QUFORjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7O1dBYUEseUJBQTBCO0FBQ3pCLGFBQU8sQ0FBQywyQkFBVyxLQUFLQSxJQUFoQixJQUF3QixLQUFLQSxJQUE3QixHQUFvQyx5QkFBUyxLQUFLQSxJQUFkLElBQXNCLEtBQTNELEVBQWtFSSxXQUFsRSxFQUFQO0FBQ0E7Ozs7RUE1RitFQywwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzU2luZ3VsYXIsIHNpbmd1bGFyIH0gZnJvbSAncGx1cmFsaXplJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi9jb2xsZWN0aW9uJztcbmltcG9ydCB7IEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXAsIE1vZGVsRGF0YSB9IGZyb20gJy4uL2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7IFF1ZXJ5QnVpbGRlciB9IGZyb20gJy4uL3F1ZXJ5LWJ1aWxkZXInO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGFzT25lT3JNYW55PFQgZXh0ZW5kcyBNb2RlbCwgRCBleHRlbmRzIE1vZGVsRGF0YT4gZXh0ZW5kcyBRdWVyeUJ1aWxkZXI8RD4gaW1wbGVtZW50cyBJbnRlcmFjdHNXaXRoUmVsYXRpb25zaGlwPFQ+IHtcblx0cHJvdGVjdGVkIHJlbGF0aW9uOiBUO1xuXHRwcm90ZWN0ZWQgcGFyZW50OiBNb2RlbDxhbnk+O1xuXHRwcm90ZWN0ZWQgbmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHJlbGF0aW9uOiBULCBwYXJlbnQ6IE1vZGVsKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnJlbGF0aW9uID0gcmVsYXRpb247XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblxuXHRnZXQoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPFQgfCBDb2xsZWN0aW9uPFQ+IHwgYW55PigoKSA9PiB7fSk7XG5cdH1cblxuXHRhc3luYyBjcmVhdGUoZGF0YTogUGFydGlhbDxEPikge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBtb2RlbCA9IG5ldyB0aGlzLnJlbGF0aW9uLnR5cGUoKTtcblx0XHRcdG1vZGVsLmZpbGwoZGF0YSk7XG5cdFx0XHRtb2RlbC5zZXQodGhpcy5nZXRGb3JlaWduS2V5KCksIHRoaXMucGFyZW50LmdldCgnaWQnKSk7XG5cdFx0XHRhd2FpdCBtb2RlbC5zYXZlKCk7XG5cdFx0XHRyZXR1cm4gbW9kZWw7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIHVwZGF0ZShkYXRhOiBQYXJ0aWFsPEQ+KSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMucmVsYXRpb24uZmlsbChkYXRhKTtcblx0XHRcdHRoaXMucmVsYXRpb24uc2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpLCB0aGlzLnBhcmVudC5nZXQoJ2lkJykpO1xuXHRcdFx0YXdhaXQgdGhpcy5yZWxhdGlvbi5zYXZlKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZWxhdGlvbjtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9XG5cblx0c2F2ZShpbnN0YW5jZT86IFQpIHtcblx0XHRpZiAoaW5zdGFuY2UpIHtcblx0XHRcdHRoaXMucmVsYXRpb24uZmlsbChpbnN0YW5jZSBpbnN0YW5jZW9mIE1vZGVsID8gaW5zdGFuY2UuZ2V0RGF0YSgpIDogaW5zdGFuY2UpO1xuXHRcdH1cblx0XHRjb25zdCByZWxhdGlvbiA9IHRoaXMucmVsYXRpb247XG5cdFx0Y29uc3QgZGF0YSA9IHJlbGF0aW9uLmdldERhdGEoKTtcblx0XHRyZWxhdGlvbi5zZXQodGhpcy5nZXRGb3JlaWduS2V5KCksIHRoaXMucGFyZW50LmdldCgnaWQnKSk7XG5cdFx0cmV0dXJuIHJlbGF0aW9uLmdldCgnaWQnKSA9PT0gbnVsbCA/IHJlbGF0aW9uLmNyZWF0ZShkYXRhKSA6IHJlbGF0aW9uLnVwZGF0ZShkYXRhKTtcblx0fVxuXG5cdGFzeW5jIGZpcnN0KCkge1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi53aGVyZUluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi53aGVyZU5vdEluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0Jzpcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ubGltaXQocXVlcnkuYW1vdW50KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGNoaWxkID0gYXdhaXQgdGhpcy5yZWxhdGlvbi53aGVyZSh0aGlzLmdldEZvcmVpZ25LZXkoKSwgJz09JywgdGhpcy5wYXJlbnQuZ2V0KCdpZCcpKS5maXJzdCgpO1xuXHRcdFx0dGhpcy5wYXJlbnQuc2V0KHRoaXMubmFtZSwgY2hpbGQpO1xuXHRcdFx0cmV0dXJuIGNoaWxkO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyBkZWxldGUoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IG1vZGVsc09yTW9kZWwgPSBhd2FpdCB0aGlzLmdldCgpO1xuXHRcdFx0aWYgKG1vZGVsc09yTW9kZWwpIHtcblx0XHRcdFx0YXdhaXQgbW9kZWxzT3JNb2RlbC5kZWxldGUoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMucGFyZW50LnVuc2V0KHRoaXMubmFtZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRGb3JlaWduS2V5KCkge1xuXHRcdHJldHVybiAoaXNTaW5ndWxhcih0aGlzLm5hbWUpID8gdGhpcy5uYW1lIDogc2luZ3VsYXIodGhpcy5uYW1lKSArICdfaWQnKS50b0xvd2VyQ2FzZSgpO1xuXHR9XG59XG4iXX0=