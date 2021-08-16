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
      return this.toArray().map(function (item) {
        return item.toJSON ? item.toJSON() : item;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbIkNvbGxlY3Rpb24iLCJyZWxhdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbSIsImxvYWQiLCJyZXN1bHRzIiwiZm9yRWFjaCIsImluZGV4Iiwic3BsaWNlIiwidG9BcnJheSIsInRvSlNPTiIsInNhdmUiLCJtb2RlbCIsIm1hdGNoIiwiZmluZCIsImdldCIsImZpbmRJbmRleCIsIm1vZGVsSW5kZXgiLCJpbmRleE9mIiwiaSIsImluY2x1ZGVzIiwicmVwbGFjZSIsInB1c2giLCJBcnJheSIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsVTs7Ozs7Ozs7Ozs7Ozs7MEVBQ1osaUJBQVdDLFNBQVg7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDdUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEseUJBQVVBLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxTQUFWLENBQVY7QUFBQSxpQkFBVCxDQUFaLENBRHZCOztBQUFBO0FBQ09NLGdCQUFBQSxPQURQO0FBRUNBLGdCQUFBQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsVUFBQ0gsSUFBRCxFQUFPSSxLQUFQO0FBQUEseUJBQWlCLEtBQUksQ0FBQ0MsTUFBTCxDQUFZRCxLQUFaLEVBQW1CLENBQW5CLEVBQXNCSixJQUF0QixDQUFqQjtBQUFBLGlCQUFoQjtBQUZELGlEQUdRLElBSFI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQU1BLGtCQUFTO0FBQ1IsYUFBTyxLQUFLTSxPQUFMLEdBQWVQLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRDtBQUFBLGVBQVdBLElBQUksQ0FBQ08sTUFBTCxHQUFjUCxJQUFJLENBQUNPLE1BQUwsRUFBZCxHQUE4QlAsSUFBekM7QUFBQSxPQUFuQixDQUFQO0FBQ0E7OztXQUVELGdCQUFPO0FBQ04sYUFBT0gsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNRLElBQUwsRUFBVjtBQUFBLE9BQVQsQ0FBWixDQUFQO0FBQ0E7Ozs7NkVBRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ09YLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEseUJBQVVBLElBQUksVUFBSixFQUFWO0FBQUEsaUJBQVQsQ0FBWixDQURQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7V0FJQSxrQkFBU1MsS0FBVCxFQUFtQjtBQUNsQixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVLFVBQUNYLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNZLEdBQUwsQ0FBUyxJQUFULE1BQW1CSCxLQUFLLENBQUNHLEdBQU4sQ0FBVSxJQUFWLENBQTdCO0FBQUEsT0FBVixDQUFkO0FBQ0EsYUFBT0YsS0FBSyw2RUFBbUJELEtBQW5CLENBQUwsR0FBaUMsSUFBakMsR0FBd0MsS0FBL0M7QUFDQTs7O1dBRUQsaUJBQVFBLEtBQVIsRUFBa0I7QUFDakIsVUFBTUwsS0FBSyxHQUFHLEtBQUtTLFNBQUwsQ0FBZSxVQUFDYixJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDWSxHQUFMLENBQVMsSUFBVCxNQUFtQkgsS0FBSyxDQUFDRyxHQUFOLENBQVUsSUFBVixDQUE3QjtBQUFBLE9BQWYsQ0FBZDtBQUNBLGFBQU9SLEtBQVA7QUFDQTs7O1dBRUQsaUJBQVFLLEtBQVIsRUFBa0JMLEtBQWxCLEVBQWtDO0FBQ2pDLFVBQUlBLEtBQUosRUFBVztBQUNWLGVBQU8sS0FBS0MsTUFBTCxDQUFZRCxLQUFaLEVBQW1CLENBQW5CLEVBQXNCSyxLQUF0QixDQUFQO0FBQ0E7O0FBQ0QsVUFBTUssVUFBVSxHQUFHLEtBQUtDLE9BQUwsQ0FBYU4sS0FBYixDQUFuQjtBQUNBLGFBQU8sS0FBS0osTUFBTCxDQUFZUyxVQUFaLEVBQXdCLENBQXhCLEVBQTJCTCxLQUEzQixDQUFQO0FBQ0E7OztXQUVELGdCQUFPTCxLQUFQLEVBQXNCO0FBQ3JCLGFBQU8sS0FBS0MsTUFBTCxDQUFZRCxLQUFaLEVBQW1CLENBQW5CLENBQVA7QUFDQTs7O1dBRUQsYUFBSUosSUFBSixFQUFzQjtBQUNyQixVQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDN0IsZUFBTyxLQUFLVyxJQUFMLENBQVUsVUFBQ0ssQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNKLEdBQUYsQ0FBTSxJQUFOLE1BQWdCWixJQUF2QjtBQUFBLFNBQVYsQ0FBUDtBQUNBOztBQUVELGFBQU8sS0FBS1csSUFBTCxDQUFVLFVBQUNLLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNKLEdBQUYsQ0FBTSxJQUFOLE1BQWdCWixJQUFJLENBQUNZLEdBQUwsQ0FBUyxJQUFULENBQXZCO0FBQUEsT0FBVixDQUFQO0FBQ0E7OztXQUVELGFBQUlaLElBQUosRUFBYTtBQUNaLFVBQUksS0FBS2lCLFFBQUwsQ0FBY2pCLElBQWQsQ0FBSixFQUF5QjtBQUN4QixhQUFLa0IsT0FBTCxDQUFhbEIsSUFBYixFQUFtQixLQUFLZSxPQUFMLENBQWFmLElBQWIsQ0FBbkI7QUFDQSxPQUZELE1BRU87QUFDTixhQUFLbUIsSUFBTCxDQUFVbkIsSUFBVjtBQUNBOztBQUVELGFBQU8sSUFBUDtBQUNBOzs7V0FFRCxtQkFBVTtBQUNULGFBQU9vQixLQUFLLENBQUNDLElBQU4sQ0FBVyxJQUFYLENBQVA7QUFDQTs7OztpQ0E3RHFERCxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb248VCBleHRlbmRzIE1vZGVsID0gYW55PiBleHRlbmRzIEFycmF5PFQ+IHtcblx0YXN5bmMgbG9hZChyZWxhdGlvbnM6IEFycmF5PHN0cmluZz4pIHtcblx0XHRjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5tYXAoKGl0ZW0pID0+IGl0ZW0ubG9hZChyZWxhdGlvbnMpKSk7XG5cdFx0cmVzdWx0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gdGhpcy5zcGxpY2UoaW5kZXgsIDEsIGl0ZW0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRyZXR1cm4gdGhpcy50b0FycmF5KCkubWFwKChpdGVtKSA9PiAoaXRlbS50b0pTT04gPyBpdGVtLnRvSlNPTigpIDogaXRlbSkpO1xuXHR9XG5cblx0c2F2ZSgpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5tYXAoKGl0ZW0pID0+IGl0ZW0uc2F2ZSgpKSk7XG5cdH1cblxuXHRhc3luYyBkZWxldGUoKSB7XG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwodGhpcy5tYXAoKGl0ZW0pID0+IGl0ZW0uZGVsZXRlKCkpKTtcblx0fVxuXG5cdGluY2x1ZGVzKG1vZGVsOiBUKSB7XG5cdFx0Y29uc3QgbWF0Y2ggPSB0aGlzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZ2V0KCdpZCcpID09PSBtb2RlbC5nZXQoJ2lkJykpO1xuXHRcdHJldHVybiBtYXRjaCB8fCBzdXBlci5pbmNsdWRlcyhtb2RlbCkgPyB0cnVlIDogZmFsc2U7XG5cdH1cblxuXHRpbmRleE9mKG1vZGVsOiBUKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5nZXQoJ2lkJykgPT09IG1vZGVsLmdldCgnaWQnKSk7XG5cdFx0cmV0dXJuIGluZGV4O1xuXHR9XG5cblx0cmVwbGFjZShtb2RlbDogVCwgaW5kZXg/OiBudW1iZXIpIHtcblx0XHRpZiAoaW5kZXgpIHtcblx0XHRcdHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMSwgbW9kZWwpO1xuXHRcdH1cblx0XHRjb25zdCBtb2RlbEluZGV4ID0gdGhpcy5pbmRleE9mKG1vZGVsKTtcblx0XHRyZXR1cm4gdGhpcy5zcGxpY2UobW9kZWxJbmRleCwgMSwgbW9kZWwpO1xuXHR9XG5cblx0cmVtb3ZlKGluZGV4OiBudW1iZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0Z2V0KGl0ZW06IHN0cmluZyB8IFQpIHtcblx0XHRpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5maW5kKChpKSA9PiBpLmdldCgnaWQnKSA9PT0gaXRlbSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZmluZCgoaSkgPT4gaS5nZXQoJ2lkJykgPT09IGl0ZW0uZ2V0KCdpZCcpKTtcblx0fVxuXG5cdHNldChpdGVtOiBUKSB7XG5cdFx0aWYgKHRoaXMuaW5jbHVkZXMoaXRlbSkpIHtcblx0XHRcdHRoaXMucmVwbGFjZShpdGVtLCB0aGlzLmluZGV4T2YoaXRlbSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnB1c2goaXRlbSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b0FycmF5KCkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMpO1xuXHR9XG59XG4iXX0=