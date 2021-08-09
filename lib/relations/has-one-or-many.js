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
      return this.parent.name.toLowerCase() + '_id';
    }
  }]);

  return HasOneOrMany;
}(_queryBuilder.QueryBuilder);

exports.HasOneOrMany = HasOneOrMany;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvaGFzLW9uZS1vci1tYW55LnRzIl0sIm5hbWVzIjpbIkhhc09uZU9yTWFueSIsInJlbGF0aW9uIiwicGFyZW50IiwibmFtZSIsIkVycm9yIiwiUHJvbWlzZSIsImRhdGEiLCJtb2RlbCIsInR5cGUiLCJmaWxsIiwic2V0IiwiZ2V0Rm9yZWlnbktleSIsImdldCIsInNhdmUiLCJpbnN0YW5jZSIsImdldERhdGEiLCJjcmVhdGUiLCJ1cGRhdGUiLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5Iiwid2hlcmVJbiIsInZhbHVlcyIsIndoZXJlTm90SW4iLCJsaW1pdCIsImFtb3VudCIsImZpcnN0IiwiY2hpbGQiLCJjbGVhclF1ZXJpZXMiLCJtb2RlbHNPck1vZGVsIiwidW5zZXQiLCJ0b0xvd2VyQ2FzZSIsIlF1ZXJ5QnVpbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFc0JBLFk7Ozs7O0FBS3JCLHdCQUFZQyxRQUFaLEVBQXlCQyxNQUF6QixFQUF3Q0MsSUFBeEMsRUFBc0Q7QUFBQTs7QUFBQTs7QUFDckQ7O0FBRHFEOztBQUFBOztBQUFBOztBQUVyRCxVQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUpxRDtBQUtyRDs7OztXQUVELGVBQU07QUFDTCxZQUFNLElBQUlDLEtBQUosQ0FBVSwrQ0FBVixDQUFOO0FBQ0EsYUFBTyxJQUFJQyxPQUFKLENBQXFDLFlBQU0sQ0FBRSxDQUE3QyxDQUFQO0FBQ0E7Ozs7NEVBRUQsaUJBQWFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUUMsZ0JBQUFBLEtBRlIsR0FFZ0IsSUFBSSxLQUFLTixRQUFMLENBQWNPLElBQWxCLEVB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LEVBQTJCNkIsS0FBM0I7QUFwQkYsa0RBcUJTQSxLQXJCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBeUJFLHFCQUFLQyxZQUFMO0FBekJGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7OzZFQTZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRThCLEtBQUtyQixHQUFMLEVBRjlCOztBQUFBO0FBRVFzQixnQkFBQUEsYUFGUjs7QUFBQSxxQkFHTUEsYUFITjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUlTQSxhQUFhLFVBQWIsRUFKVDs7QUFBQTtBQU1FLHFCQUFLaEMsTUFBTCxDQUFZaUMsS0FBWixDQUFrQixLQUFLaEMsSUFBdkI7QUFORjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7O1dBYUEseUJBQTBCO0FBQ3pCLGFBQU8sS0FBS0QsTUFBTCxDQUFZQyxJQUFaLENBQWlCaUMsV0FBakIsS0FBaUMsS0FBeEM7QUFDQTs7OztFQTNGK0VDLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvbGxlY3Rpb24nO1xyXG5pbXBvcnQgeyBJbnRlcmFjdHNXaXRoUmVsYXRpb25zaGlwLCBNb2RlbERhdGEgfSBmcm9tICcuLi9jb250cmFjdHMnO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4uL21vZGVsJztcclxuaW1wb3J0IHsgUXVlcnlCdWlsZGVyIH0gZnJvbSAnLi4vcXVlcnktYnVpbGRlcic7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGFzT25lT3JNYW55PFQgZXh0ZW5kcyBNb2RlbCwgRCBleHRlbmRzIE1vZGVsRGF0YT4gZXh0ZW5kcyBRdWVyeUJ1aWxkZXI8RD4gaW1wbGVtZW50cyBJbnRlcmFjdHNXaXRoUmVsYXRpb25zaGlwPFQ+IHtcclxuXHRwcm90ZWN0ZWQgcmVsYXRpb246IFQ7XHJcblx0cHJvdGVjdGVkIHBhcmVudDogTW9kZWw8YW55PjtcclxuXHRwcm90ZWN0ZWQgbmFtZTogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihyZWxhdGlvbjogVCwgcGFyZW50OiBNb2RlbCwgbmFtZTogc3RyaW5nKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5yZWxhdGlvbiA9IHJlbGF0aW9uO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0Z2V0KCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdnZXQoKSBuZWVkcyB0byBiZSBkZWZpbmVkIG9uIHRoZSBjaGlsZCBjbGFzcy4nKTtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxUIHwgQ29sbGVjdGlvbjxUPiB8IGFueT4oKCkgPT4ge30pO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgY3JlYXRlKGRhdGE6IGFueSkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgbW9kZWwgPSBuZXcgdGhpcy5yZWxhdGlvbi50eXBlKCk7XHJcblx0XHRcdG1vZGVsLmZpbGwoZGF0YSk7XHJcblx0XHRcdG1vZGVsLnNldCh0aGlzLmdldEZvcmVpZ25LZXkoKSwgdGhpcy5wYXJlbnQuZ2V0KCdpZCcpKTtcclxuXHRcdFx0YXdhaXQgbW9kZWwuc2F2ZSgpO1xyXG5cdFx0XHRyZXR1cm4gbW9kZWw7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIHVwZGF0ZShkYXRhOiBhbnkpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRoaXMucmVsYXRpb24uZmlsbChkYXRhKTtcclxuXHRcdFx0dGhpcy5yZWxhdGlvbi5zZXQodGhpcy5nZXRGb3JlaWduS2V5KCksIHRoaXMucGFyZW50LmdldCgnaWQnKSk7XHJcblx0XHRcdGF3YWl0IHRoaXMucmVsYXRpb24uc2F2ZSgpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5yZWxhdGlvbjtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2F2ZShpbnN0YW5jZT86IFQpIHtcclxuXHRcdGNvbnN0IHJlbGF0aW9uID0gaW5zdGFuY2UgfHwgdGhpcy5yZWxhdGlvbjtcclxuXHRcdGNvbnN0IGRhdGEgPSByZWxhdGlvbi5nZXREYXRhKCk7XHJcblx0XHRyZWxhdGlvbi5zZXQodGhpcy5nZXRGb3JlaWduS2V5KCksIHRoaXMucGFyZW50LmdldCgnaWQnKSk7XHJcblx0XHRyZXR1cm4gcmVsYXRpb24uZ2V0KCdpZCcpID09PSBudWxsID8gcmVsYXRpb24uY3JlYXRlKGRhdGEpIDogcmVsYXRpb24udXBkYXRlKGRhdGEpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZmlyc3QoKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlSW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlTm90SW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0JzpcclxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBjaGlsZCA9IGF3YWl0IHRoaXMucmVsYXRpb24ud2hlcmUodGhpcy5nZXRGb3JlaWduS2V5KCksICc9PScsIHRoaXMucGFyZW50LmdldCgnaWQnKSkuZmlyc3QoKTtcclxuXHRcdFx0dGhpcy5wYXJlbnQuc2V0KHRoaXMubmFtZSwgY2hpbGQpO1xyXG5cdFx0XHRyZXR1cm4gY2hpbGQ7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBkZWxldGUoKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBtb2RlbHNPck1vZGVsID0gYXdhaXQgdGhpcy5nZXQoKTtcclxuXHRcdFx0aWYgKG1vZGVsc09yTW9kZWwpIHtcclxuXHRcdFx0XHRhd2FpdCBtb2RlbHNPck1vZGVsLmRlbGV0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucGFyZW50LnVuc2V0KHRoaXMubmFtZSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGdldEZvcmVpZ25LZXkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQubmFtZS50b0xvd2VyQ2FzZSgpICsgJ19pZCc7XHJcblx0fVxyXG59XHJcbiJdfQ==