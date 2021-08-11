"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasOne = void 0;

var _pluralize = require("pluralize");

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

var HasOne = /*#__PURE__*/function (_HasOneOrMany) {
  _inherits(HasOne, _HasOneOrMany);

  var _super = _createSuper(HasOne);

  function HasOne(relation, parent, name) {
    var _this;

    _classCallCheck(this, HasOne);

    _this = _super.call(this, relation, parent);
    _this.name = name || (0, _pluralize.singular)(relation.name);
    return _this;
  }

  _createClass(HasOne, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var child;
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
                _context.next = 4;
                return this.relation.where(this.getForeignKey(), '==', this.parent.get('id')).first();

              case 4:
                child = _context.sent;
                this.parent.set(this.name, child);
                return _context.abrupt("return", child);

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
  }]);

  return HasOne;
}(_hasOneOrMany.HasOneOrMany);

exports.HasOne = HasOne;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvaGFzLW9uZS50cyJdLCJuYW1lcyI6WyJIYXNPbmUiLCJyZWxhdGlvbiIsInBhcmVudCIsIm5hbWUiLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5Iiwid2hlcmVJbiIsInZhbHVlcyIsIndoZXJlTm90SW4iLCJsaW1pdCIsImFtb3VudCIsImdldEZvcmVpZ25LZXkiLCJnZXQiLCJmaXJzdCIsImNoaWxkIiwic2V0IiwiY2xlYXJRdWVyaWVzIiwiSGFzT25lT3JNYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsTTs7Ozs7QUFDWixrQkFBWUMsUUFBWixFQUF5QkMsTUFBekIsRUFBd0NDLElBQXhDLEVBQXVEO0FBQUE7O0FBQUE7O0FBQ3RELDhCQUFNRixRQUFOLEVBQWdCQyxNQUFoQjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBSSxJQUFJLHlCQUFTRixRQUFRLENBQUNFLElBQWxCLENBQXBCO0FBRnNEO0FBR3REOzs7Ozt5RUFFRDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVFLHFCQUFLQyxPQUFMLENBQWFDLE9BQWIsQ0FBcUIsVUFBQ0MsS0FBRCxFQUFXO0FBQy9CLDBCQUFRQSxLQUFLLENBQUNDLE1BQWQ7QUFDQyx5QkFBSyxPQUFMO0FBQ0MsMEJBQVFDLFFBQVIsR0FBNEJGLEtBQTVCLENBQVFFLFFBQVI7QUFBQSwwQkFBa0JDLEtBQWxCLEdBQTRCSCxLQUE1QixDQUFrQkcsS0FBbEI7O0FBQ0Esc0JBQUEsTUFBSSxDQUFDUixRQUFMLENBQWNTLEtBQWQsQ0FBb0JKLEtBQUssQ0FBQ0ssR0FBMUIsRUFBK0JILFFBQS9CLEVBQXlDQyxLQUF6Qzs7QUFDQTs7QUFDRCx5QkFBSyxTQUFMO0FBQ0Msc0JBQUEsTUFBSSxDQUFDUixRQUFMLENBQWNXLE9BQWQsQ0FBc0JOLEtBQUssQ0FBQ0ssR0FBNUIsRUFBaUNMLEtBQUssQ0FBQ08sTUFBdkM7O0FBQ0E7O0FBQ0QseUJBQUssWUFBTDtBQUNDLHNCQUFBLE1BQUksQ0FBQ1osUUFBTCxDQUFjYSxVQUFkLENBQXlCUixLQUFLLENBQUNLLEdBQS9CLEVBQW9DTCxLQUFLLENBQUNPLE1BQTFDOztBQUNBOztBQUNELHlCQUFLLE9BQUw7QUFDQyxzQkFBQSxNQUFJLENBQUNaLFFBQUwsQ0FBY2MsS0FBZCxDQUFvQlQsS0FBSyxDQUFDVSxNQUExQjs7QUFDQTtBQWJGO0FBZUEsaUJBaEJEO0FBRkY7QUFBQSx1QkFvQnNCLEtBQUtmLFFBQUwsQ0FBY1MsS0FBZCxDQUFvQixLQUFLTyxhQUFMLEVBQXBCLEVBQTBDLElBQTFDLEVBQWdELEtBQUtmLE1BQUwsQ0FBWWdCLEdBQVosQ0FBZ0IsSUFBaEIsQ0FBaEQsRUFBdUVDLEtBQXZFLEVBcEJ0Qjs7QUFBQTtBQW9CUUMsZ0JBQUFBLEtBcEJSO0FBc0JFLHFCQUFLbEIsTUFBTCxDQUFZbUIsR0FBWixDQUFnQixLQUFLbEIsSUFBckIsRUFBMkJpQixLQUEzQjtBQXRCRixpREF1QlNBLEtBdkJUOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUEyQkUscUJBQUtFLFlBQUw7QUEzQkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7RUFOaUVDLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2luZ3VsYXIgfSBmcm9tICdwbHVyYWxpemUnO1xuaW1wb3J0IHsgTW9kZWxEYXRhIH0gZnJvbSAnLi4vY29udHJhY3RzJztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgSGFzT25lT3JNYW55IH0gZnJvbSAnLi9oYXMtb25lLW9yLW1hbnknO1xuXG5leHBvcnQgY2xhc3MgSGFzT25lPFQgZXh0ZW5kcyBNb2RlbCwgRCBleHRlbmRzIE1vZGVsRGF0YT4gZXh0ZW5kcyBIYXNPbmVPck1hbnk8VCwgRD4ge1xuXHRjb25zdHJ1Y3RvcihyZWxhdGlvbjogVCwgcGFyZW50OiBNb2RlbCwgbmFtZT86IHN0cmluZykge1xuXHRcdHN1cGVyKHJlbGF0aW9uLCBwYXJlbnQpO1xuXHRcdHRoaXMubmFtZSA9IG5hbWUgfHwgc2luZ3VsYXIocmVsYXRpb24ubmFtZSk7XG5cdH1cblxuXHRhc3luYyBnZXQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlSW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlTm90SW4ocXVlcnkua2V5LCBxdWVyeS52YWx1ZXMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBjaGlsZCA9IGF3YWl0IHRoaXMucmVsYXRpb24ud2hlcmUodGhpcy5nZXRGb3JlaWduS2V5KCksICc9PScsIHRoaXMucGFyZW50LmdldCgnaWQnKSkuZmlyc3QoKTtcblxuXHRcdFx0dGhpcy5wYXJlbnQuc2V0KHRoaXMubmFtZSwgY2hpbGQpO1xuXHRcdFx0cmV0dXJuIGNoaWxkO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==