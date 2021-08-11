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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvaGFzLW9uZS1vci1tYW55LnRzIl0sIm5hbWVzIjpbIkhhc09uZU9yTWFueSIsInJlbGF0aW9uIiwicGFyZW50IiwiRXJyb3IiLCJQcm9taXNlIiwiZGF0YSIsIm1vZGVsIiwidHlwZSIsImZpbGwiLCJzZXQiLCJnZXRGb3JlaWduS2V5IiwiZ2V0Iiwic2F2ZSIsImluc3RhbmNlIiwiZ2V0RGF0YSIsImNyZWF0ZSIsInVwZGF0ZSIsInF1ZXJpZXMiLCJmb3JFYWNoIiwicXVlcnkiLCJtZXRob2QiLCJvcGVyYXRvciIsInZhbHVlIiwid2hlcmUiLCJrZXkiLCJ3aGVyZUluIiwidmFsdWVzIiwid2hlcmVOb3RJbiIsImxpbWl0IiwiYW1vdW50IiwiZmlyc3QiLCJjaGlsZCIsIm5hbWUiLCJjbGVhclF1ZXJpZXMiLCJtb2RlbHNPck1vZGVsIiwidW5zZXQiLCJ0b0xvd2VyQ2FzZSIsIlF1ZXJ5QnVpbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFc0JBLFk7Ozs7O0FBS3JCLHdCQUFZQyxRQUFaLEVBQXlCQyxNQUF6QixFQUF3QztBQUFBOztBQUFBOztBQUN2Qzs7QUFEdUM7O0FBQUE7O0FBQUE7O0FBRXZDLFVBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBSHVDO0FBSXZDOzs7O1dBRUQsZUFBTTtBQUNMLFlBQU0sSUFBSUMsS0FBSixDQUFVLCtDQUFWLENBQU47QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBcUMsWUFBTSxDQUFFLENBQTdDLENBQVA7QUFDQTs7Ozs0RUFFRCxpQkFBYUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVRQyxnQkFBQUEsS0FGUixHQUVnQixJQUFJLEtBQUtMLFFBQUwsQ0FBY00sSUFBbEIsRUFGaEI7QUFHRUQsZ0JBQUFBLEtBQUssQ0FBQ0UsSUFBTixD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQXlCRSxxQkFBS0UsWUFBTDtBQXpCRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7Ozs2RUE2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUU4QixLQUFLdEIsR0FBTCxFQUY5Qjs7QUFBQTtBQUVRdUIsZ0JBQUFBLGFBRlI7O0FBQUEscUJBR01BLGFBSE47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1QkFJU0EsYUFBYSxVQUFiLEVBSlQ7O0FBQUE7QUFNRSxxQkFBS2hDLE1BQUwsQ0FBWWlDLEtBQVosQ0FBa0IsS0FBS0gsSUFBdkI7QUFORjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7O1dBYUEseUJBQTBCO0FBQ3pCLGFBQU8seUJBQVMsS0FBSzlCLE1BQUwsQ0FBWThCLElBQVosQ0FBaUJJLFdBQWpCLEVBQVQsSUFBMkMsS0FBbEQ7QUFDQTs7OztFQTFGK0VDLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2luZ3VsYXIgfSBmcm9tICdwbHVyYWxpemUnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHsgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcCwgTW9kZWxEYXRhIH0gZnJvbSAnLi4vY29udHJhY3RzJztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgUXVlcnlCdWlsZGVyIH0gZnJvbSAnLi4vcXVlcnktYnVpbGRlcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIYXNPbmVPck1hbnk8VCBleHRlbmRzIE1vZGVsLCBEIGV4dGVuZHMgTW9kZWxEYXRhPiBleHRlbmRzIFF1ZXJ5QnVpbGRlcjxEPiBpbXBsZW1lbnRzIEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXA8VD4ge1xuXHRwcm90ZWN0ZWQgcmVsYXRpb246IFQ7XG5cdHByb3RlY3RlZCBwYXJlbnQ6IE1vZGVsPGFueT47XG5cdHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocmVsYXRpb246IFQsIHBhcmVudDogTW9kZWwpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucmVsYXRpb24gPSByZWxhdGlvbjtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGdldCgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2dldCgpIG5lZWRzIHRvIGJlIGRlZmluZWQgb24gdGhlIGNoaWxkIGNsYXNzLicpO1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxUIHwgQ29sbGVjdGlvbjxUPiB8IGFueT4oKCkgPT4ge30pO1xuXHR9XG5cblx0YXN5bmMgY3JlYXRlKGRhdGE6IGFueSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBtb2RlbCA9IG5ldyB0aGlzLnJlbGF0aW9uLnR5cGUoKTtcblx0XHRcdG1vZGVsLmZpbGwoZGF0YSk7XG5cdFx0XHRtb2RlbC5zZXQodGhpcy5nZXRGb3JlaWduS2V5KCksIHRoaXMucGFyZW50LmdldCgnaWQnKSk7XG5cdFx0XHRhd2FpdCBtb2RlbC5zYXZlKCk7XG5cdFx0XHRyZXR1cm4gbW9kZWw7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIHVwZGF0ZShkYXRhOiBhbnkpIHtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5yZWxhdGlvbi5maWxsKGRhdGEpO1xuXHRcdFx0dGhpcy5yZWxhdGlvbi5zZXQodGhpcy5nZXRGb3JlaWduS2V5KCksIHRoaXMucGFyZW50LmdldCgnaWQnKSk7XG5cdFx0XHRhd2FpdCB0aGlzLnJlbGF0aW9uLnNhdmUoKTtcblx0XHRcdHJldHVybiB0aGlzLnJlbGF0aW9uO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH1cblxuXHRzYXZlKGluc3RhbmNlPzogVCkge1xuXHRcdGNvbnN0IHJlbGF0aW9uID0gaW5zdGFuY2UgfHwgdGhpcy5yZWxhdGlvbjtcblx0XHRjb25zdCBkYXRhID0gcmVsYXRpb24uZ2V0RGF0YSgpO1xuXHRcdHJlbGF0aW9uLnNldCh0aGlzLmdldEZvcmVpZ25LZXkoKSwgdGhpcy5wYXJlbnQuZ2V0KCdpZCcpKTtcblx0XHRyZXR1cm4gcmVsYXRpb24uZ2V0KCdpZCcpID09PSBudWxsID8gcmVsYXRpb24uY3JlYXRlKGRhdGEpIDogcmVsYXRpb24udXBkYXRlKGRhdGEpO1xuXHR9XG5cblx0YXN5bmMgZmlyc3QoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlSW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlTm90SW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgY2hpbGQgPSBhd2FpdCB0aGlzLnJlbGF0aW9uLndoZXJlKHRoaXMuZ2V0Rm9yZWlnbktleSgpLCAnPT0nLCB0aGlzLnBhcmVudC5nZXQoJ2lkJykpLmZpcnN0KCk7XG5cdFx0XHR0aGlzLnBhcmVudC5zZXQodGhpcy5uYW1lLCBjaGlsZCk7XG5cdFx0XHRyZXR1cm4gY2hpbGQ7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGRlbGV0ZSgpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgbW9kZWxzT3JNb2RlbCA9IGF3YWl0IHRoaXMuZ2V0KCk7XG5cdFx0XHRpZiAobW9kZWxzT3JNb2RlbCkge1xuXHRcdFx0XHRhd2FpdCBtb2RlbHNPck1vZGVsLmRlbGV0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5wYXJlbnQudW5zZXQodGhpcy5uYW1lKTtcblx0XHRcdHJldHVybjtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldEZvcmVpZ25LZXkoKSB7XG5cdFx0cmV0dXJuIHNpbmd1bGFyKHRoaXMucGFyZW50Lm5hbWUudG9Mb3dlckNhc2UoKSkgKyAnX2lkJztcblx0fVxufVxuIl19