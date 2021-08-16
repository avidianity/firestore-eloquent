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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbIkNvbGxlY3Rpb24iLCJyZWxhdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbSIsImxvYWQiLCJyZXN1bHRzIiwiZm9yRWFjaCIsImluZGV4Iiwic3BsaWNlIiwidG9BcnJheSIsInRvSlNPTiIsInNhdmUiLCJtb2RlbCIsIm1hdGNoIiwiZmluZCIsImdldCIsImZpbmRJbmRleCIsIm1vZGVsSW5kZXgiLCJpbmRleE9mIiwiaSIsImluY2x1ZGVzIiwicmVwbGFjZSIsInB1c2giLCJBcnJheSIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsVTs7Ozs7Ozs7Ozs7Ozs7MEVBQ1osaUJBQVdDLFNBQVg7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDdUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEseUJBQVVBLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxTQUFWLENBQVY7QUFBQSxpQkFBVCxDQUFaLENBRHZCOztBQUFBO0FBQ09NLGdCQUFBQSxPQURQO0FBRUNBLGdCQUFBQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsVUFBQ0gsSUFBRCxFQUFPSSxLQUFQO0FBQUEseUJBQWlCLEtBQUksQ0FBQ0MsTUFBTCxDQUFZRCxLQUFaLEVBQW1CLENBQW5CLEVBQXNCSixJQUF0QixDQUFqQjtBQUFBLGlCQUFoQjtBQUZELGlEQUdRLElBSFI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQU1BLGtCQUFTO0FBQ1IsYUFBTyxLQUFLTSxPQUFMLEdBQWVQLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ08sTUFBTCxFQUFWO0FBQUEsT0FBbkIsQ0FBUDtBQUNBOzs7V0FFRCxnQkFBTztBQUNOLGFBQU9WLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDUSxJQUFMLEVBQVY7QUFBQSxPQUFULENBQVosQ0FBUDtBQUNBOzs7OzZFQUVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNPWCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLHlCQUFVQSxJQUFJLFVBQUosRUFBVjtBQUFBLGlCQUFULENBQVosQ0FEUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7O1dBSUEsa0JBQVNTLEtBQVQsRUFBbUI7QUFDbEIsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVSxVQUFDWCxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDWSxHQUFMLENBQVMsSUFBVCxNQUFtQkgsS0FBSyxDQUFDRyxHQUFOLENBQVUsSUFBVixDQUE3QjtBQUFBLE9BQVYsQ0FBZDtBQUNBLGFBQU9GLEtBQUssNkVBQW1CRCxLQUFuQixDQUFMLEdBQWlDLElBQWpDLEdBQXdDLEtBQS9DO0FBQ0E7OztXQUVELGlCQUFRQSxLQUFSLEVBQWtCO0FBQ2pCLFVBQU1MLEtBQUssR0FBRyxLQUFLUyxTQUFMLENBQWUsVUFBQ2IsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ1ksR0FBTCxDQUFTLElBQVQsTUFBbUJILEtBQUssQ0FBQ0csR0FBTixDQUFVLElBQVYsQ0FBN0I7QUFBQSxPQUFmLENBQWQ7QUFDQSxhQUFPUixLQUFQO0FBQ0E7OztXQUVELGlCQUFRSyxLQUFSLEVBQWtCTCxLQUFsQixFQUFrQztBQUNqQyxVQUFJQSxLQUFKLEVBQVc7QUFDVixlQUFPLEtBQUtDLE1BQUwsQ0FBWUQsS0FBWixFQUFtQixDQUFuQixFQUFzQkssS0FBdEIsQ0FBUDtBQUNBOztBQUNELFVBQU1LLFVBQVUsR0FBRyxLQUFLQyxPQUFMLENBQWFOLEtBQWIsQ0FBbkI7QUFDQSxhQUFPLEtBQUtKLE1BQUwsQ0FBWVMsVUFBWixFQUF3QixDQUF4QixFQUEyQkwsS0FBM0IsQ0FBUDtBQUNBOzs7V0FFRCxnQkFBT0wsS0FBUCxFQUFzQjtBQUNyQixhQUFPLEtBQUtDLE1BQUwsQ0FBWUQsS0FBWixFQUFtQixDQUFuQixDQUFQO0FBQ0E7OztXQUVELGFBQUlKLElBQUosRUFBc0I7QUFDckIsVUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzdCLGVBQU8sS0FBS1csSUFBTCxDQUFVLFVBQUNLLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDSixHQUFGLENBQU0sSUFBTixNQUFnQlosSUFBdkI7QUFBQSxTQUFWLENBQVA7QUFDQTs7QUFFRCxhQUFPLEtBQUtXLElBQUwsQ0FBVSxVQUFDSyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxDQUFDSixHQUFGLENBQU0sSUFBTixNQUFnQlosSUFBSSxDQUFDWSxHQUFMLENBQVMsSUFBVCxDQUF2QjtBQUFBLE9BQVYsQ0FBUDtBQUNBOzs7V0FFRCxhQUFJWixJQUFKLEVBQWE7QUFDWixVQUFJLEtBQUtpQixRQUFMLENBQWNqQixJQUFkLENBQUosRUFBeUI7QUFDeEIsYUFBS2tCLE9BQUwsQ0FBYWxCLElBQWIsRUFBbUIsS0FBS2UsT0FBTCxDQUFhZixJQUFiLENBQW5CO0FBQ0EsT0FGRCxNQUVPO0FBQ04sYUFBS21CLElBQUwsQ0FBVW5CLElBQVY7QUFDQTs7QUFFRCxhQUFPLElBQVA7QUFDQTs7O1dBRUQsbUJBQVU7QUFDVCxhQUFPb0IsS0FBSyxDQUFDQyxJQUFOLENBQVcsSUFBWCxDQUFQO0FBQ0E7Ozs7aUNBN0RxREQsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uPFQgZXh0ZW5kcyBNb2RlbCA9IGFueT4gZXh0ZW5kcyBBcnJheTxUPiB7XG5cdGFzeW5jIGxvYWQocmVsYXRpb25zOiBBcnJheTxzdHJpbmc+KSB7XG5cdFx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHRoaXMubWFwKChpdGVtKSA9PiBpdGVtLmxvYWQocmVsYXRpb25zKSkpO1xuXHRcdHJlc3VsdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHRoaXMuc3BsaWNlKGluZGV4LCAxLCBpdGVtKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b0pTT04oKSB7XG5cdFx0cmV0dXJuIHRoaXMudG9BcnJheSgpLm1hcCgoaXRlbSkgPT4gaXRlbS50b0pTT04oKSk7XG5cdH1cblxuXHRzYXZlKCkge1xuXHRcdHJldHVybiBQcm9taXNlLmFsbCh0aGlzLm1hcCgoaXRlbSkgPT4gaXRlbS5zYXZlKCkpKTtcblx0fVxuXG5cdGFzeW5jIGRlbGV0ZSgpIHtcblx0XHRhd2FpdCBQcm9taXNlLmFsbCh0aGlzLm1hcCgoaXRlbSkgPT4gaXRlbS5kZWxldGUoKSkpO1xuXHR9XG5cblx0aW5jbHVkZXMobW9kZWw6IFQpIHtcblx0XHRjb25zdCBtYXRjaCA9IHRoaXMuZmluZCgoaXRlbSkgPT4gaXRlbS5nZXQoJ2lkJykgPT09IG1vZGVsLmdldCgnaWQnKSk7XG5cdFx0cmV0dXJuIG1hdGNoIHx8IHN1cGVyLmluY2x1ZGVzKG1vZGVsKSA/IHRydWUgOiBmYWxzZTtcblx0fVxuXG5cdGluZGV4T2YobW9kZWw6IFQpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmdldCgnaWQnKSA9PT0gbW9kZWwuZ2V0KCdpZCcpKTtcblx0XHRyZXR1cm4gaW5kZXg7XG5cdH1cblxuXHRyZXBsYWNlKG1vZGVsOiBULCBpbmRleD86IG51bWJlcikge1xuXHRcdGlmIChpbmRleCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3BsaWNlKGluZGV4LCAxLCBtb2RlbCk7XG5cdFx0fVxuXHRcdGNvbnN0IG1vZGVsSW5kZXggPSB0aGlzLmluZGV4T2YobW9kZWwpO1xuXHRcdHJldHVybiB0aGlzLnNwbGljZShtb2RlbEluZGV4LCAxLCBtb2RlbCk7XG5cdH1cblxuXHRyZW1vdmUoaW5kZXg6IG51bWJlcikge1xuXHRcdHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMSk7XG5cdH1cblxuXHRnZXQoaXRlbTogc3RyaW5nIHwgVCkge1xuXHRcdGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmZpbmQoKGkpID0+IGkuZ2V0KCdpZCcpID09PSBpdGVtKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5maW5kKChpKSA9PiBpLmdldCgnaWQnKSA9PT0gaXRlbS5nZXQoJ2lkJykpO1xuXHR9XG5cblx0c2V0KGl0ZW06IFQpIHtcblx0XHRpZiAodGhpcy5pbmNsdWRlcyhpdGVtKSkge1xuXHRcdFx0dGhpcy5yZXBsYWNlKGl0ZW0sIHRoaXMuaW5kZXhPZihpdGVtKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHVzaChpdGVtKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvQXJyYXkoKSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG5cdH1cbn1cbiJdfQ==