"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collection = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Collection = /*#__PURE__*/function (_Array) {
  _inherits(Collection, _Array);

  var _super = _createSuper(Collection);

  function Collection() {
    _classCallCheck(this, Collection);

    return _super.apply(this, arguments);
  }

  _createClass(Collection, [{
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(relations) {
        var _this = this;

        var results;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all(this.map(function (item) {
                  return item.load(relations);
                }));

              case 2:
                results = _context.sent;
                results.forEach(function (item, index) {
                  return _this.splice(index, 1, item);
                });
                return _context.abrupt("return", this);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load(_x) {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.map(function (item) {
        return item.toJSON();
      });
    }
  }, {
    key: "save",
    value: function save() {
      return Promise.all(this.map(function (item) {
        return item.save();
      }));
    }
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Promise.all(this.map(function (item) {
                  return item["delete"]();
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "includes",
    value: function includes(model) {
      var match = this.find(function (item) {
        return item.get('id') === model.get('id');
      });
      return match || _get(_getPrototypeOf(Collection.prototype), "includes", this).call(this, model) ? true : false;
    }
  }, {
    key: "indexOf",
    value: function indexOf(model) {
      var index = this.findIndex(function (item) {
        return item.get('id') === model.get('id');
      });
      return index;
    }
  }, {
    key: "replace",
    value: function replace(model, index) {
      if (index) {
        return this.splice(index, 1, model);
      }

      var modelIndex = this.indexOf(model);
      return this.splice(modelIndex, 1, model);
    }
  }, {
    key: "remove",
    value: function remove(index) {
      return this.splice(index, 1);
    }
  }, {
    key: "get",
    value: function get(item) {
      if (typeof item === 'string') {
        return this.find(function (i) {
          return i.get('id') === item;
        });
      }

      return this.find(function (i) {
        return i.get('id') === item.get('id');
      });
    }
  }, {
    key: "set",
    value: function set(item) {
      if (this.includes(item)) {
        this.replace(item, this.indexOf(item));
      } else {
        this.push(item);
      }

      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return Array.from(this);
    }
  }]);

  return Collection;
}( /*#__PURE__*/_wrapNativeSuper(Array));

exports.Collection = Collection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbIkNvbGxlY3Rpb24iLCJyZWxhdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbSIsImxvYWQiLCJyZXN1bHRzIiwiZm9yRWFjaCIsImluZGV4Iiwic3BsaWNlIiwidG9KU09OIiwic2F2ZSIsIm1vZGVsIiwibWF0Y2giLCJmaW5kIiwiZ2V0IiwiZmluZEluZGV4IiwibW9kZWxJbmRleCIsImluZGV4T2YiLCJpIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwicHVzaCIsIkFycmF5IiwiZnJvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhQSxVOzs7Ozs7Ozs7Ozs7OzswRUFDWixpQkFBV0MsU0FBWDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN1QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSx5QkFBVUEsSUFBSSxDQUFDQyxJQUFMLENBQVVMLFNBQVYsQ0FBVjtBQUFBLGlCQUFULENBQVosQ0FEdkI7O0FBQUE7QUFDT00sZ0JBQUFBLE9BRFA7QUFFQ0EsZ0JBQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFDSCxJQUFELEVBQU9JLEtBQVA7QUFBQSx5QkFBaUIsS0FBSSxDQUFDQyxNQUFMLENBQVlELEtBQVosRUFBbUIsQ0FBbkIsRUFBc0JKLElBQXRCLENBQWpCO0FBQUEsaUJBQWhCO0FBRkQsaURBR1EsSUFIUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7O1dBTUEsa0JBQVM7QUFDUixhQUFPLEtBQUtELEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDTSxNQUFMLEVBQVY7QUFBQSxPQUFULENBQVA7QUFDQTs7O1dBRUQsZ0JBQU87QUFDTixhQUFPVCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ08sSUFBTCxFQUFWO0FBQUEsT0FBVCxDQUFaLENBQVA7QUFDQTs7Ozs2RUFFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDT1YsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSx5QkFBVUEsSUFBSSxVQUFKLEVBQVY7QUFBQSxpQkFBVCxDQUFaLENBRFA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQUlBLGtCQUFTUSxLQUFULEVBQW1CO0FBQ2xCLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVUsVUFBQ1YsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ1csR0FBTCxDQUFTLElBQVQsTUFBbUJILEtBQUssQ0FBQ0csR0FBTixDQUFVLElBQVYsQ0FBN0I7QUFBQSxPQUFWLENBQWQ7QUFDQSxhQUFPRixLQUFLLDZFQUFtQkQsS0FBbkIsQ0FBTCxHQUFpQyxJQUFqQyxHQUF3QyxLQUEvQztBQUNBOzs7V0FFRCxpQkFBUUEsS0FBUixFQUFrQjtBQUNqQixVQUFNSixLQUFLLEdBQUcsS0FBS1EsU0FBTCxDQUFlLFVBQUNaLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNXLEdBQUwsQ0FBUyxJQUFULE1BQW1CSCxLQUFLLENBQUNHLEdBQU4sQ0FBVSxJQUFWLENBQTdCO0FBQUEsT0FBZixDQUFkO0FBQ0EsYUFBT1AsS0FBUDtBQUNBOzs7V0FFRCxpQkFBUUksS0FBUixFQUFrQkosS0FBbEIsRUFBa0M7QUFDakMsVUFBSUEsS0FBSixFQUFXO0FBQ1YsZUFBTyxLQUFLQyxNQUFMLENBQVlELEtBQVosRUFBbUIsQ0FBbkIsRUFBc0JJLEtBQXRCLENBQVA7QUFDQTs7QUFDRCxVQUFNSyxVQUFVLEdBQUcsS0FBS0MsT0FBTCxDQUFhTixLQUFiLENBQW5CO0FBQ0EsYUFBTyxLQUFLSCxNQUFMLENBQVlRLFVBQVosRUFBd0IsQ0FBeEIsRUFBMkJMLEtBQTNCLENBQVA7QUFDQTs7O1dBRUQsZ0JBQU9KLEtBQVAsRUFBc0I7QUFDckIsYUFBTyxLQUFLQyxNQUFMLENBQVlELEtBQVosRUFBbUIsQ0FBbkIsQ0FBUDtBQUNBOzs7V0FFRCxhQUFJSixJQUFKLEVBQXNCO0FBQ3JCLFVBQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM3QixlQUFPLEtBQUtVLElBQUwsQ0FBVSxVQUFDSyxDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQ0osR0FBRixDQUFNLElBQU4sTUFBZ0JYLElBQXZCO0FBQUEsU0FBVixDQUFQO0FBQ0E7O0FBRUQsYUFBTyxLQUFLVSxJQUFMLENBQVUsVUFBQ0ssQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ0osR0FBRixDQUFNLElBQU4sTUFBZ0JYLElBQUksQ0FBQ1csR0FBTCxDQUFTLElBQVQsQ0FBdkI7QUFBQSxPQUFWLENBQVA7QUFDQTs7O1dBRUQsYUFBSVgsSUFBSixFQUFhO0FBQ1osVUFBSSxLQUFLZ0IsUUFBTCxDQUFjaEIsSUFBZCxDQUFKLEVBQXlCO0FBQ3hCLGFBQUtpQixPQUFMLENBQWFqQixJQUFiLEVBQW1CLEtBQUtjLE9BQUwsQ0FBYWQsSUFBYixDQUFuQjtBQUNBLE9BRkQsTUFFTztBQUNOLGFBQUtrQixJQUFMLENBQVVsQixJQUFWO0FBQ0E7O0FBRUQsYUFBTyxJQUFQO0FBQ0E7OztXQUVELG1CQUFVO0FBQ1QsYUFBT21CLEtBQUssQ0FBQ0MsSUFBTixDQUFXLElBQVgsQ0FBUDtBQUNBOzs7O2lDQTdEcURELEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbjxUIGV4dGVuZHMgTW9kZWwgPSBhbnk+IGV4dGVuZHMgQXJyYXk8VD4ge1xuXHRhc3luYyBsb2FkKHJlbGF0aW9uczogQXJyYXk8c3RyaW5nPikge1xuXHRcdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLm1hcCgoaXRlbSkgPT4gaXRlbS5sb2FkKHJlbGF0aW9ucykpKTtcblx0XHRyZXN1bHRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB0aGlzLnNwbGljZShpbmRleCwgMSwgaXRlbSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9KU09OKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcCgoaXRlbSkgPT4gaXRlbS50b0pTT04oKSk7XG5cdH1cblxuXHRzYXZlKCkge1xuXHRcdHJldHVybiBQcm9taXNlLmFsbCh0aGlzLm1hcCgoaXRlbSkgPT4gaXRlbS5zYXZlKCkpKTtcblx0fVxuXG5cdGFzeW5jIGRlbGV0ZSgpIHtcblx0XHRhd2FpdCBQcm9taXNlLmFsbCh0aGlzLm1hcCgoaXRlbSkgPT4gaXRlbS5kZWxldGUoKSkpO1xuXHR9XG5cblx0aW5jbHVkZXMobW9kZWw6IFQpIHtcblx0XHRjb25zdCBtYXRjaCA9IHRoaXMuZmluZCgoaXRlbSkgPT4gaXRlbS5nZXQoJ2lkJykgPT09IG1vZGVsLmdldCgnaWQnKSk7XG5cdFx0cmV0dXJuIG1hdGNoIHx8IHN1cGVyLmluY2x1ZGVzKG1vZGVsKSA/IHRydWUgOiBmYWxzZTtcblx0fVxuXG5cdGluZGV4T2YobW9kZWw6IFQpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmdldCgnaWQnKSA9PT0gbW9kZWwuZ2V0KCdpZCcpKTtcblx0XHRyZXR1cm4gaW5kZXg7XG5cdH1cblxuXHRyZXBsYWNlKG1vZGVsOiBULCBpbmRleD86IG51bWJlcikge1xuXHRcdGlmIChpbmRleCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3BsaWNlKGluZGV4LCAxLCBtb2RlbCk7XG5cdFx0fVxuXHRcdGNvbnN0IG1vZGVsSW5kZXggPSB0aGlzLmluZGV4T2YobW9kZWwpO1xuXHRcdHJldHVybiB0aGlzLnNwbGljZShtb2RlbEluZGV4LCAxLCBtb2RlbCk7XG5cdH1cblxuXHRyZW1vdmUoaW5kZXg6IG51bWJlcikge1xuXHRcdHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMSk7XG5cdH1cblxuXHRnZXQoaXRlbTogc3RyaW5nIHwgVCkge1xuXHRcdGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmZpbmQoKGkpID0+IGkuZ2V0KCdpZCcpID09PSBpdGVtKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5maW5kKChpKSA9PiBpLmdldCgnaWQnKSA9PT0gaXRlbS5nZXQoJ2lkJykpO1xuXHR9XG5cblx0c2V0KGl0ZW06IFQpIHtcblx0XHRpZiAodGhpcy5pbmNsdWRlcyhpdGVtKSkge1xuXHRcdFx0dGhpcy5yZXBsYWNlKGl0ZW0sIHRoaXMuaW5kZXhPZihpdGVtKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHVzaChpdGVtKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvQXJyYXkoKSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG5cdH1cbn1cbiJdfQ==