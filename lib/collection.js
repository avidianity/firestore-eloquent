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
  }]);

  return Collection;
}( /*#__PURE__*/_wrapNativeSuper(Array));

exports.Collection = Collection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbIkNvbGxlY3Rpb24iLCJyZWxhdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbSIsImxvYWQiLCJyZXN1bHRzIiwiZm9yRWFjaCIsImluZGV4Iiwic3BsaWNlIiwidG9KU09OIiwic2F2ZSIsIm1vZGVsIiwibWF0Y2giLCJmaW5kIiwiZ2V0IiwiZmluZEluZGV4IiwibW9kZWxJbmRleCIsImluZGV4T2YiLCJpIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwicHVzaCIsIkFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLFU7Ozs7Ozs7Ozs7Ozs7OzBFQUNaLGlCQUFXQyxTQUFYO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3VCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLHlCQUFVQSxJQUFJLENBQUNDLElBQUwsQ0FBVUwsU0FBVixDQUFWO0FBQUEsaUJBQVQsQ0FBWixDQUR2Qjs7QUFBQTtBQUNPTSxnQkFBQUEsT0FEUDtBQUVDQSxnQkFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCLFVBQUNILElBQUQsRUFBT0ksS0FBUDtBQUFBLHlCQUFpQixLQUFJLENBQUNDLE1BQUwsQ0FBWUQsS0FBWixFQUFtQixDQUFuQixFQUFzQkosSUFBdEIsQ0FBakI7QUFBQSxpQkFBaEI7QUFGRCxpREFHUSxJQUhSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7V0FNQSxrQkFBUztBQUNSLGFBQU8sS0FBS0QsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNNLE1BQUwsRUFBVjtBQUFBLE9BQVQsQ0FBUDtBQUNBOzs7V0FFRCxnQkFBTztBQUNOLGFBQU9ULE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDTyxJQUFMLEVBQVY7QUFBQSxPQUFULENBQVosQ0FBUDtBQUNBOzs7OzZFQUVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNPVixPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLHlCQUFVQSxJQUFJLFVBQUosRUFBVjtBQUFBLGlCQUFULENBQVosQ0FEUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7O1dBSUEsa0JBQVNRLEtBQVQsRUFBbUI7QUFDbEIsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVSxVQUFDVixJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDVyxHQUFMLENBQVMsSUFBVCxNQUFtQkgsS0FBSyxDQUFDRyxHQUFOLENBQVUsSUFBVixDQUE3QjtBQUFBLE9BQVYsQ0FBZDtBQUNBLGFBQU9GLEtBQUssNkVBQW1CRCxLQUFuQixDQUFMLEdBQWlDLElBQWpDLEdBQXdDLEtBQS9DO0FBQ0E7OztXQUVELGlCQUFRQSxLQUFSLEVBQWtCO0FBQ2pCLFVBQU1KLEtBQUssR0FBRyxLQUFLUSxTQUFMLENBQWUsVUFBQ1osSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ1csR0FBTCxDQUFTLElBQVQsTUFBbUJILEtBQUssQ0FBQ0csR0FBTixDQUFVLElBQVYsQ0FBN0I7QUFBQSxPQUFmLENBQWQ7QUFDQSxhQUFPUCxLQUFQO0FBQ0E7OztXQUVELGlCQUFRSSxLQUFSLEVBQWtCSixLQUFsQixFQUFrQztBQUNqQyxVQUFJQSxLQUFKLEVBQVc7QUFDVixlQUFPLEtBQUtDLE1BQUwsQ0FBWUQsS0FBWixFQUFtQixDQUFuQixFQUFzQkksS0FBdEIsQ0FBUDtBQUNBOztBQUNELFVBQU1LLFVBQVUsR0FBRyxLQUFLQyxPQUFMLENBQWFOLEtBQWIsQ0FBbkI7QUFDQSxhQUFPLEtBQUtILE1BQUwsQ0FBWVEsVUFBWixFQUF3QixDQUF4QixFQUEyQkwsS0FBM0IsQ0FBUDtBQUNBOzs7V0FFRCxnQkFBT0osS0FBUCxFQUFzQjtBQUNyQixhQUFPLEtBQUtDLE1BQUwsQ0FBWUQsS0FBWixFQUFtQixDQUFuQixDQUFQO0FBQ0E7OztXQUVELGFBQUlKLElBQUosRUFBc0I7QUFDckIsVUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzdCLGVBQU8sS0FBS1UsSUFBTCxDQUFVLFVBQUNLLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDSixHQUFGLENBQU0sSUFBTixNQUFnQlgsSUFBdkI7QUFBQSxTQUFWLENBQVA7QUFDQTs7QUFFRCxhQUFPLEtBQUtVLElBQUwsQ0FBVSxVQUFDSyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxDQUFDSixHQUFGLENBQU0sSUFBTixNQUFnQlgsSUFBSSxDQUFDVyxHQUFMLENBQVMsSUFBVCxDQUF2QjtBQUFBLE9BQVYsQ0FBUDtBQUNBOzs7V0FFRCxhQUFJWCxJQUFKLEVBQWE7QUFDWixVQUFJLEtBQUtnQixRQUFMLENBQWNoQixJQUFkLENBQUosRUFBeUI7QUFDeEIsYUFBS2lCLE9BQUwsQ0FBYWpCLElBQWIsRUFBbUIsS0FBS2MsT0FBTCxDQUFhZCxJQUFiLENBQW5CO0FBQ0EsT0FGRCxNQUVPO0FBQ04sYUFBS2tCLElBQUwsQ0FBVWxCLElBQVY7QUFDQTs7QUFFRCxhQUFPLElBQVA7QUFDQTs7OztpQ0F6RHFEbUIsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbjxUIGV4dGVuZHMgTW9kZWwgPSBhbnk+IGV4dGVuZHMgQXJyYXk8VD4ge1xyXG5cdGFzeW5jIGxvYWQocmVsYXRpb25zOiBBcnJheTxzdHJpbmc+KSB7XHJcblx0XHRjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5tYXAoKGl0ZW0pID0+IGl0ZW0ubG9hZChyZWxhdGlvbnMpKSk7XHJcblx0XHRyZXN1bHRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB0aGlzLnNwbGljZShpbmRleCwgMSwgaXRlbSkpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHR0b0pTT04oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tYXAoKGl0ZW0pID0+IGl0ZW0udG9KU09OKCkpO1xyXG5cdH1cclxuXHJcblx0c2F2ZSgpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLmFsbCh0aGlzLm1hcCgoaXRlbSkgPT4gaXRlbS5zYXZlKCkpKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGRlbGV0ZSgpIHtcclxuXHRcdGF3YWl0IFByb21pc2UuYWxsKHRoaXMubWFwKChpdGVtKSA9PiBpdGVtLmRlbGV0ZSgpKSk7XHJcblx0fVxyXG5cclxuXHRpbmNsdWRlcyhtb2RlbDogVCkge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSB0aGlzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZ2V0KCdpZCcpID09PSBtb2RlbC5nZXQoJ2lkJykpO1xyXG5cdFx0cmV0dXJuIG1hdGNoIHx8IHN1cGVyLmluY2x1ZGVzKG1vZGVsKSA/IHRydWUgOiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGluZGV4T2YobW9kZWw6IFQpIHtcclxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uZ2V0KCdpZCcpID09PSBtb2RlbC5nZXQoJ2lkJykpO1xyXG5cdFx0cmV0dXJuIGluZGV4O1xyXG5cdH1cclxuXHJcblx0cmVwbGFjZShtb2RlbDogVCwgaW5kZXg/OiBudW1iZXIpIHtcclxuXHRcdGlmIChpbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEsIG1vZGVsKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IG1vZGVsSW5kZXggPSB0aGlzLmluZGV4T2YobW9kZWwpO1xyXG5cdFx0cmV0dXJuIHRoaXMuc3BsaWNlKG1vZGVsSW5kZXgsIDEsIG1vZGVsKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZShpbmRleDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdH1cclxuXHJcblx0Z2V0KGl0ZW06IHN0cmluZyB8IFQpIHtcclxuXHRcdGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZmluZCgoaSkgPT4gaS5nZXQoJ2lkJykgPT09IGl0ZW0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmZpbmQoKGkpID0+IGkuZ2V0KCdpZCcpID09PSBpdGVtLmdldCgnaWQnKSk7XHJcblx0fVxyXG5cclxuXHRzZXQoaXRlbTogVCkge1xyXG5cdFx0aWYgKHRoaXMuaW5jbHVkZXMoaXRlbSkpIHtcclxuXHRcdFx0dGhpcy5yZXBsYWNlKGl0ZW0sIHRoaXMuaW5kZXhPZihpdGVtKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnB1c2goaXRlbSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG59XHJcbiJdfQ==