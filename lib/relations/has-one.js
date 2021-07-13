"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasOne = void 0;

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

  function HasOne() {
    _classCallCheck(this, HasOne);

    return _super.apply(this, arguments);
  }

  _createClass(HasOne, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

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
                _context.next = 4;
                return this.relation.where(this.getForeignKey(), '==', this.parent.get('id')).first();

              case 4:
                child = _context.sent;
                this.clearQueries();
                this.parent.set(this.name, child);
                return _context.abrupt("return", child);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGlvbnMvaGFzLW9uZS50cyJdLCJuYW1lcyI6WyJIYXNPbmUiLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsInJlbGF0aW9uIiwid2hlcmUiLCJrZXkiLCJ3aGVyZUluIiwidmFsdWVzIiwid2hlcmVOb3RJbiIsImxpbWl0IiwiYW1vdW50IiwiZ2V0Rm9yZWlnbktleSIsInBhcmVudCIsImdldCIsImZpcnN0IiwiY2hpbGQiLCJjbGVhclF1ZXJpZXMiLCJzZXQiLCJuYW1lIiwiSGFzT25lT3JNYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsTTs7Ozs7Ozs7Ozs7Ozs7eUVBSVo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRSxxQkFBS0MsT0FBTCxDQUFhQyxPQUFiLENBQXFCLFVBQUNDLEtBQUQsRUFBVztBQUMvQiwwQkFBUUEsS0FBSyxDQUFDQyxNQUFkO0FBQ0MseUJBQUssT0FBTDtBQUNDLDBCQUFRQyxRQUFSLEdBQTRCRixLQUE1QixDQUFRRSxRQUFSO0FBQUEsMEJBQWtCQyxLQUFsQixHQUE0QkgsS0FBNUIsQ0FBa0JHLEtBQWxCOztBQUNBLHNCQUFBLEtBQUksQ0FBQ0MsUUFBTCxDQUFjQyxLQUFkLENBQW9CTCxLQUFLLENBQUNNLEdBQTFCLEVBQStCSixRQUEvQixFQUF5Q0MsS0FBekM7O0FBQ0E7O0FBQ0QseUJBQUssU0FBTDtBQUNDLHNCQUFBLEtBQUksQ0FBQ0MsUUFBTCxDQUFjRyxPQUFkLENBQXNCUCxLQUFLLENBQUNNLEdBQTVCLEVBQWlDTixLQUFLLENBQUNRLE1BQXZDOztBQUNBOztBQUNELHlCQUFLLFlBQUw7QUFDQyxzQkFBQSxLQUFJLENBQUNKLFFBQUwsQ0FBY0ssVUFBZCxDQUF5QlQsS0FBSyxDQUFDTSxHQUEvQixFQUFvQ04sS0FBSyxDQUFDUSxNQUExQzs7QUFDQTs7QUFDRCx5QkFBSyxPQUFMO0FBQ0Msc0JBQUEsS0FBSSxDQUFDSixRQUFMLENBQWNNLEtBQWQsQ0FBb0JWLEtBQUssQ0FBQ1csTUFBMUI7O0FBQ0E7QUFiRjtBQWVBLGlCQWhCRDtBQUZGO0FBQUEsdUJBbUJzQixLQUFLUCxRQUFMLENBQ2xCQyxLQURrQixDQUNaLEtBQUtPLGFBQUwsRUFEWSxFQUNVLElBRFYsRUFDZ0IsS0FBS0MsTUFBTCxDQUFZQyxHQUFaLENBQWdCLElBQWhCLENBRGhCLEVBRWxCQyxLQUZrQixFQW5CdEI7O0FBQUE7QUFtQlFDLGdCQUFBQSxLQW5CUjtBQXNCRSxxQkFBS0MsWUFBTDtBQUNBLHFCQUFLSixNQUFMLENBQVlLLEdBQVosQ0FBZ0IsS0FBS0MsSUFBckIsRUFBMkJILEtBQTNCO0FBdkJGLGlEQXdCU0EsS0F4QlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7RUFKaUVJLDBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxEYXRhIH0gZnJvbSAnLi4vY29udHJhY3RzJztcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9tb2RlbCc7XHJcbmltcG9ydCB7IEhhc09uZU9yTWFueSB9IGZyb20gJy4vaGFzLW9uZS1vci1tYW55JztcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXNPbmU8VCBleHRlbmRzIE1vZGVsLCBEIGV4dGVuZHMgTW9kZWxEYXRhPiBleHRlbmRzIEhhc09uZU9yTWFueTxcclxuXHRULFxyXG5cdERcclxuPiB7XHJcblx0YXN5bmMgZ2V0KCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dGhpcy5xdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciwgdmFsdWUgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbGF0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi53aGVyZUluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5yZWxhdGlvbi53aGVyZU5vdEluKHF1ZXJ5LmtleSwgcXVlcnkudmFsdWVzKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XHJcblx0XHRcdFx0XHRcdHRoaXMucmVsYXRpb24ubGltaXQocXVlcnkuYW1vdW50KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3QgY2hpbGQgPSBhd2FpdCB0aGlzLnJlbGF0aW9uXHJcblx0XHRcdFx0LndoZXJlKHRoaXMuZ2V0Rm9yZWlnbktleSgpLCAnPT0nLCB0aGlzLnBhcmVudC5nZXQoJ2lkJykpXHJcblx0XHRcdFx0LmZpcnN0KCk7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHRcdHRoaXMucGFyZW50LnNldCh0aGlzLm5hbWUsIGNoaWxkKTtcclxuXHRcdFx0cmV0dXJuIGNoaWxkO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==