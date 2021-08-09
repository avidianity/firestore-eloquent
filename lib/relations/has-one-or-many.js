"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasOneOrMany = void 0;

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
      return (0, _pluralize.singular)(this.parent.name.toLowerCase()) + '_id';
    }
  }]);

  return HasOneOrMany;
}(_queryBuilder.QueryBuilder);

exports.HasOneOrMany = HasOneOrMany;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvaGFzLW9uZS1vci1tYW55LnRzIl0sIm5hbWVzIjpbIkhhc09uZU9yTWFueSIsInJlbGF0aW9uIiwicGFyZW50IiwibmFtZSIsIkVycm9yIiwiUHJvbWlzZSIsImRhdGEiLCJtb2RlbCIsInR5cGUiLCJmaWxsIiwic2V0IiwiZ2V0Rm9yZWlnbktleSIsImdldCIsInNhdmUiLCJpbnN0YW5jZSIsImdldERhdGEiLCJjcmVhdGUiLCJ1cGRhdGUiLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5Iiwid2hlcmVJbiIsInZhbHVlcyIsIndoZXJlTm90SW4iLCJsaW1pdCIsImFtb3VudCIsImZpcnN0IiwiY2hpbGQiLCJjbGVhclF1ZXJpZXMiLCJtb2RlbHNPck1vZGVsIiwidW5zZXQiLCJ0b0xvd2VyQ2FzZSIsIlF1ZXJ5QnVpbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFc0JBLFk7Ozs7O0FBS3JCLHdCQUFZQyxRQUFaLEVBQXlCQyxNQUF6QixFQUF3Q0MsSUFBeEMsRUFBc0Q7QUFBQTs7QUFBQTs7QUFDckQ7O0FBRHFEOztBQUFBOztBQUFBOztBQUVyRCxVQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUpxRDtBQUtyRDs7OztXQUVELGVBQU07QUFDTCxZQUFNLElBQUlDLEtBQUosQ0FBVSwrQ0FBVixDQUFOO0FBQ0EsYUFBTyxJQUFJQyxPQUFKLENBQXFDLFlBQU0sQ0FBRSxDQUE3QyxDQUFQO0FBQ0E7Ozs7NEVBRUQsaUJBQWFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUUMsZ0JBQUFBLEtBRlIsR0FFZ0IsSUFBSSxLQUFLTixRQUFMLENBQWNPLElB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LElBQXJCLEVBQTJCNkIsS0FBM0I7QUFwQkYsa0RBcUJTQSxLQXJCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBeUJFLHFCQUFLQyxZQUFMO0FBekJGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7OzZFQTZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRThCLEtBQUtyQixHQUFMLEVBRjlCOztBQUFBO0FBRVFzQixnQkFBQUEsYUFGUjs7QUFBQSxxQkFHTUEsYUFITjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUlTQSxhQUFhLFVBQWIsRUFKVDs7QUFBQTtBQU1FLHFCQUFLaEMsTUFBTCxDQUFZaUMsS0FBWixDQUFrQixLQUFLaEMsSUFBdkI7QUFORjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7O1dBYUEseUJBQTBCO0FBQ3pCLGFBQU8seUJBQVMsS0FBS0QsTUFBTCxDQUFZQyxJQUFaLENBQWlCaUMsV0FBakIsRUFBVCxJQUEyQyxLQUFsRDtBQUNBOzs7O0VBM0YrRUMsMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaW5ndWxhciB9IGZyb20gJ3BsdXJhbGl6ZSc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi9jb2xsZWN0aW9uJztcclxuaW1wb3J0IHsgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcCwgTW9kZWxEYXRhIH0gZnJvbSAnLi4vY29udHJhY3RzJztcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9tb2RlbCc7XHJcbmltcG9ydCB7IFF1ZXJ5QnVpbGRlciB9IGZyb20gJy4uL3F1ZXJ5LWJ1aWxkZXInO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEhhc09uZU9yTWFueTxUIGV4dGVuZHMgTW9kZWwsIEQgZXh0ZW5kcyBNb2RlbERhdGE+IGV4dGVuZHMgUXVlcnlCdWlsZGVyPEQ+IGltcGxlbWVudHMgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcDxUPiB7XHJcblx0cHJvdGVjdGVkIHJlbGF0aW9uOiBUO1xyXG5cdHByb3RlY3RlZCBwYXJlbnQ6IE1vZGVsPGFueT47XHJcblx0cHJvdGVjdGVkIG5hbWU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocmVsYXRpb246IFQsIHBhcmVudDogTW9kZWwsIG5hbWU6IHN0cmluZykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMucmVsYXRpb24gPSByZWxhdGlvbjtcclxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cdGdldCgpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcignZ2V0KCkgbmVlZHMgdG8gYmUgZGVmaW5lZCBvbiB0aGUgY2hpbGQgY2xhc3MuJyk7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8VCB8IENvbGxlY3Rpb248VD4gfCBhbnk+KCgpID0+IHt9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGNyZWF0ZShkYXRhOiBhbnkpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IG1vZGVsID0gbmV3IHRoaXMucmVsYXRpb24udHlwZSgpO1xyXG5cdFx0XHRtb2RlbC5maWxsKGRhdGEpO1xyXG5cdFx0XHRtb2RlbC5zZXQodGhpcy5nZXRGb3JlaWduS2V5KCksIHRoaXMucGFyZW50LmdldCgnaWQnKSk7XHJcblx0XHRcdGF3YWl0IG1vZGVsLnNhdmUoKTtcclxuXHRcdFx0cmV0dXJuIG1vZGVsO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyB1cGRhdGUoZGF0YTogYW55KSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLnJlbGF0aW9uLmZpbGwoZGF0YSk7XHJcblx0XHRcdHRoaXMucmVsYXRpb24uc2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpLCB0aGlzLnBhcmVudC5nZXQoJ2lkJykpO1xyXG5cdFx0XHRhd2FpdCB0aGlzLnJlbGF0aW9uLnNhdmUoKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMucmVsYXRpb247XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNhdmUoaW5zdGFuY2U/OiBUKSB7XHJcblx0XHRjb25zdCByZWxhdGlvbiA9IGluc3RhbmNlIHx8IHRoaXMucmVsYXRpb247XHJcblx0XHRjb25zdCBkYXRhID0gcmVsYXRpb24uZ2V0RGF0YSgpO1xyXG5cdFx0cmVsYXRpb24uc2V0KHRoaXMuZ2V0Rm9yZWlnbktleSgpLCB0aGlzLnBhcmVudC5nZXQoJ2lkJykpO1xyXG5cdFx0cmV0dXJuIHJlbGF0aW9uLmdldCgnaWQnKSA9PT0gbnVsbCA/IHJlbGF0aW9uLmNyZWF0ZShkYXRhKSA6IHJlbGF0aW9uLnVwZGF0ZShkYXRhKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZpcnN0KCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dGhpcy5xdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciwgdmFsdWUgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi53aGVyZUluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi53aGVyZU5vdEluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XHJcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ubGltaXQocXVlcnkuYW1vdW50KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3QgY2hpbGQgPSBhd2FpdCB0aGlzLnJlbGF0aW9uLndoZXJlKHRoaXMuZ2V0Rm9yZWlnbktleSgpLCAnPT0nLCB0aGlzLnBhcmVudC5nZXQoJ2lkJykpLmZpcnN0KCk7XHJcblx0XHRcdHRoaXMucGFyZW50LnNldCh0aGlzLm5hbWUsIGNoaWxkKTtcclxuXHRcdFx0cmV0dXJuIGNoaWxkO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZGVsZXRlKCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgbW9kZWxzT3JNb2RlbCA9IGF3YWl0IHRoaXMuZ2V0KCk7XHJcblx0XHRcdGlmIChtb2RlbHNPck1vZGVsKSB7XHJcblx0XHRcdFx0YXdhaXQgbW9kZWxzT3JNb2RlbC5kZWxldGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnBhcmVudC51bnNldCh0aGlzLm5hbWUpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBnZXRGb3JlaWduS2V5KCkge1xyXG5cdFx0cmV0dXJuIHNpbmd1bGFyKHRoaXMucGFyZW50Lm5hbWUudG9Mb3dlckNhc2UoKSkgKyAnX2lkJztcclxuXHR9XHJcbn1cclxuIl19