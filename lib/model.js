"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = void 0;

var _collection = require("./collection");

var _hasEvent = require("./has-event");

var _pluralize = _interopRequireDefault(require("pluralize"));

var _db = require("./db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var Model = /*#__PURE__*/function (_HasEvent) {
  _inherits(Model, _HasEvent);

  var _super = _createSuper(Model);

  function Model(data) {
    var _this;

    _classCallCheck(this, Model);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "fillables", void 0);

    _defineProperty(_assertThisInitialized(_this), "data", {});

    _defineProperty(_assertThisInitialized(_this), "type", Model);

    _this.booting();

    _this.fillables = _this.fillable();
    _this.name = (0, _pluralize["default"])(_this.constructor.name.toLowerCase());

    if (!('id' in _this.data)) {
      _this.data.id === '';
    }

    if (data !== undefined) {
      _this.fill(data);
    }

    _this.booted();

    return _this;
  }

  _createClass(Model, [{
    key: "fillable",
    value: function fillable() {
      return [];
    }
  }, {
    key: "booting",
    value: function booting() {}
  }, {
    key: "booted",
    value: function booted() {}
  }, {
    key: "entries",
    value: function entries() {
      return Object.entries(this.getData());
    }
  }, {
    key: "values",
    value: function values() {
      return Object.values(this.getData());
    }
  }, {
    key: "keys",
    value: function keys() {
      return Object.keys(this.getData());
    }
  }, {
    key: "getTableName",
    value: function getTableName() {
      return this.name;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.getData();
    }
  }, {
    key: "paginate",
    value: function () {
      var _paginate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page, perPage) {
        var _this2 = this;

        var collection, snapshot, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                collection = this.getCollection();
                this.queries.forEach(function (query) {
                  switch (query.method) {
                    case 'where':
                      var operator = query.operator,
                          value = query.value;
                      collection = collection.where(query.key, operator, value);
                      break;

                    case 'whereIn':
                      var values = query.values;
                      values.forEach(function (value) {
                        collection = collection.where(query.key, '==', value);
                      });
                      break;

                    case 'whereNotIn':
                      query.values.forEach(function (value) {
                        collection = collection.where(query.key, '!=', value);
                      });
                      break;

                    case 'limit':
                      collection = collection.limit(query.amount);
                      break;
                  }
                });
                _context.next = 5;
                return collection.limit(perPage).startAt(perPage * (page - 1)).get();

              case 5:
                snapshot = _context.sent;
                data = new _collection.Collection();
                snapshot.forEach(function (document) {
                  var body = _objectSpread(_objectSpread({}, document.data()), {}, {
                    id: document.id
                  });

                  var instance = new _this2.type();
                  instance.forceFill(body);
                  data.push(instance);
                });
                return _context.abrupt("return", data);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 14:
                _context.prev = 14;
                this.clearQueries();
                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11, 14, 17]]);
      }));

      function paginate(_x, _x2) {
        return _paginate.apply(this, arguments);
      }

      return paginate;
    }()
  }, {
    key: "findOne",
    value: function () {
      var _findOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var collection, document, body;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                collection = this.getCollection();
                this.queries.forEach(function (query) {
                  switch (query.method) {
                    case 'where':
                      var operator = query.operator,
                          value = query.value;
                      collection = collection.where(query.key, operator, value);
                      break;

                    case 'whereIn':
                      var values = query.values;
                      values.forEach(function (value) {
                        collection = collection.where(query.key, '==', value);
                      });
                      break;

                    case 'whereNotIn':
                      query.values.forEach(function (value) {
                        collection = collection.where(query.key, '!=', value);
                      });
                      break;

                    case 'limit':
                      collection = collection.limit(query.amount);
                      break;
                  }
                });
                _context2.next = 5;
                return collection.doc(id).get();

              case 5:
                document = _context2.sent;

                if (document) {
                  _context2.next = 8;
                  break;
                }

                throw new Error('Model does not exist.');

              case 8:
                body = _objectSpread(_objectSpread({}, document.data()), {}, {
                  id: document.id
                });
                this.forceFill(body);
                return _context2.abrupt("return", this);

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 16:
                _context2.prev = 16;
                this.clearQueries();
                return _context2.finish(16);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 13, 16, 19]]);
      }));

      function findOne(_x3) {
        return _findOne.apply(this, arguments);
      }

      return findOne;
    }()
  }, {
    key: "getCollection",
    value: function getCollection() {
      return (0, _db.makeCollection)(this.name);
    }
  }, {
    key: "fill",
    value: function fill(data) {
      var _this3 = this;

      var _loop = function _loop() {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (_this3.fillables.find(function (filler) {
          return filler === key;
        }) !== undefined || _this3.fillables.includes(key)) {
          _this3.set(key, value);
        }
      };

      for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
        _loop();
      }

      return this;
    }
  }, {
    key: "forceFill",
    value: function forceFill(data) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(data); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            key = _Object$entries2$_i[0],
            value = _Object$entries2$_i[1];

        this.set(key, value);
      }

      return this;
    }
  }, {
    key: "count",
    value: function () {
      var _count = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var collection;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.all();

              case 2:
                collection = _context3.sent;
                return _context3.abrupt("return", collection.length);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function count() {
        return _count.apply(this, arguments);
      }

      return count;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var collection;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.callEvent('deleting');
                collection = this.getCollection();
                this.queries.forEach(function (query) {
                  switch (query.method) {
                    case 'where':
                      var operator = query.operator,
                          value = query.value;
                      collection = collection.where(query.key, operator, value);
                      break;

                    case 'whereIn':
                      var values = query.values;
                      values.forEach(function (value) {
                        collection = collection.where(query.key, '==', value);
                      });
                      break;

                    case 'whereNotIn':
                      query.values.forEach(function (value) {
                        collection = collection.where(query.key, '!=', value);
                      });
                      break;

                    case 'limit':
                      collection = collection.limit(query.amount);
                      break;
                  }
                });
                _context4.next = 6;
                return collection.doc(this.data.id)["delete"]();

              case 6:
                this.callEvent('deleted');
                return _context4.abrupt("return");

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 13:
                _context4.prev = 13;
                this.clearQueries();
                return _context4.finish(13);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 10, 13, 16]]);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "set",
    value: function set(key, value) {
      this.data[key] = value;
      return this;
    }
  }, {
    key: "get",
    value: function get(key) {
      if (!(key in this.data)) {
        return null;
      }

      var value = this.data[key];

      if (value instanceof Model) {
        return value.getData();
      }

      return value;
    }
  }, {
    key: "getData",
    value: function getData() {
      var data = {};

      for (var key in this.data) {
        var value = this.data[key];

        if (value instanceof Model) {
          data[key] = value.getData();
        } else if (value instanceof _collection.Collection) {
          data[key] = value.toJSON();
        } else if (Array.isArray(value)) {
          data[key] = value.map(function (item) {
            if (item instanceof Model) {
              return item.getData();
            }

            return item;
          });
        } else {
          data[key] = value;
        }
      }

      return data;
    }
  }, {
    key: "first",
    value: function () {
      var _first = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var collection;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.limit(1).getAll();

              case 2:
                collection = _context5.sent;

                if (!(collection.length > 0)) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", collection[0]);

              case 5:
                return _context5.abrupt("return", null);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function first() {
        return _first.apply(this, arguments);
      }

      return first;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this4 = this;

        var collection, snapshot, data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                collection = this.getCollection();
                this.queries.forEach(function (query) {
                  switch (query.method) {
                    case 'where':
                      var operator = query.operator,
                          value = query.value;
                      collection = collection.where(query.key, operator, value);
                      break;

                    case 'whereIn':
                      var values = query.values;
                      values.forEach(function (value) {
                        collection = collection.where(query.key, '==', value);
                      });
                      break;

                    case 'whereNotIn':
                      query.values.forEach(function (value) {
                        collection = collection.where(query.key, '!=', value);
                      });
                      break;

                    case 'limit':
                      collection = collection.limit(query.amount);
                      break;
                  }
                });
                _context6.next = 5;
                return collection.get();

              case 5:
                snapshot = _context6.sent;
                data = new _collection.Collection();
                snapshot.forEach(function (document) {
                  var body = _objectSpread(_objectSpread({}, document.data()), {}, {
                    id: document.id
                  });

                  var instance = new _this4.type();
                  instance.forceFill(body);
                  data.push(instance);
                });
                return _context6.abrupt("return", data);

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](0);
                throw _context6.t0;

              case 14:
                _context6.prev = 14;
                this.clearQueries();
                return _context6.finish(14);

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 11, 14, 17]]);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "withoutRelations",
    value: function withoutRelations() {
      var data = {};

      for (var key in this.data) {
        var value = this.data[key];

        if (value instanceof Model === false) {
          data[key] = value;
        }
      }

      return data;
    }
  }, {
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(relations) {
        var _this5 = this;

        var operations, results;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                operations = relations.map(function (relation) {
                  return _this5[relation]().get();
                });
                _context7.next = 3;
                return Promise.all(operations);

              case 3:
                results = _context7.sent;
                results.forEach(function (data, index) {
                  var name = relations[index];

                  _this5.set(name, data);
                });
                return _context7.abrupt("return", this);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function load(_x4) {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "all",
    value: function all() {
      return this.getAll();
    }
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(data) {
        var ref;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (data) {
                  this.fill(data);
                }

                this.set('created_at', new Date().toJSON());
                this.set('updated_at', new Date().toJSON());
                this.callEvent('creating').callEvent('saving');
                ref = this.getCollection().doc();
                _context8.next = 7;
                return ref.set(_objectSpread(_objectSpread({}, this.data), {}, {
                  id: ref.id
                }));

              case 7:
                this.callEvent('created').callEvent('saved');
                return _context8.abrupt("return", this);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function create(_x5) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(data) {
        var oldUpdatedAt;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (data) {
                  this.fill(data);
                }

                oldUpdatedAt = this.get('updated_at');
                _context9.prev = 2;
                this.callEvent('updating').callEvent('saving');
                this.set('updated_at', new Date().toJSON());
                _context9.next = 7;
                return this.getCollection().doc(this.data.id).set(_objectSpread({}, this.withoutRelations()));

              case 7:
                this.callEvent('updated').callEvent('saved');
                return _context9.abrupt("return", this);

              case 11:
                _context9.prev = 11;
                _context9.t0 = _context9["catch"](2);
                this.set('updated_at', oldUpdatedAt);
                throw _context9.t0;

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[2, 11]]);
      }));

      function update(_x6) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "id",
    value: function id() {
      return this.get('id');
    }
  }, {
    key: "save",
    value: function save(data) {
      if (data) {
        this.fill(data);
      }

      return !('id' in this.data) || !this.data.id || this.data.id.length === 0 ? this.create() : this.update();
    }
  }, {
    key: "unset",
    value: function unset(key) {
      delete this.data[key];
      return this;
    }
  }, {
    key: "has",
    value: function has(key) {
      return this.get(key) !== null;
    }
  }]);

  return Model;
}(_hasEvent.HasEvent);

exports.Model = Model;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbC50cyJdLCJuYW1lcyI6WyJNb2RlbCIsImRhdGEiLCJib290aW5nIiwiZmlsbGFibGVzIiwiZmlsbGFibGUiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJ0b0xvd2VyQ2FzZSIsImlkIiwidW5kZWZpbmVkIiwiZmlsbCIsImJvb3RlZCIsIk9iamVjdCIsImVudHJpZXMiLCJnZXREYXRhIiwidmFsdWVzIiwia2V5cyIsInBhZ2UiLCJwZXJQYWdlIiwiY29sbGVjdGlvbiIsImdldENvbGxlY3Rpb24iLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5IiwibGltaXQiLCJhbW91bnQiLCJzdGFydEF0IiwiZ2V0Iiwic25hcHNob3QiLCJDb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiaW5zdGFuY2UiLCJ0eXBlIiwiZm9yY2VGaWxsIiwicHVzaCIsImNsZWFyUXVlcmllcyIsImRvYyIsIkVycm9yIiwiZmluZCIsImZpbGxlciIsImluY2x1ZGVzIiwic2V0IiwiYWxsIiwibGVuZ3RoIiwiY2FsbEV2ZW50IiwidG9KU09OIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsImdldEFsbCIsInJlbGF0aW9ucyIsIm9wZXJhdGlvbnMiLCJyZWxhdGlvbiIsIlByb21pc2UiLCJyZXN1bHRzIiwiaW5kZXgiLCJEYXRlIiwicmVmIiwib2xkVXBkYXRlZEF0Iiwid2l0aG91dFJlbGF0aW9ucyIsImNyZWF0ZSIsInVwZGF0ZSIsIkhhc0V2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhQSxLOzs7OztBQUtaLGlCQUFZQyxJQUFaLEVBQStCO0FBQUE7O0FBQUE7O0FBQzlCOztBQUQ4Qjs7QUFBQSwyREFIWCxFQUdXOztBQUFBLDJEQUZuQkQs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TCxDQUFVTyxFQURWLEVBRUp1QyxHQUZJLG1CQUdELEtBQUttQixnQkFBTCxFQUhDLEVBVFI7O0FBQUE7QUFlRSxxQkFBS2hCLFNBQUwsQ0FBZSxTQUFmLEVBQTBCQSxTQUExQixDQUFvQyxPQUFwQztBQWZGLGtEQWdCUyxJQWhCVDs7QUFBQTtBQUFBO0FBQUE7QUFrQkUscUJBQUtILEdBQUwsQ0FBUyxZQUFULEVBQXVCa0IsWUFBdkI7QUFsQkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQXVCQSxjQUFLO0FBQ0osYUFBTyxLQUFLakMsR0FBTCxDQUFTLElBQVQsQ0FBUDtBQUNBOzs7V0FFRCxjQUFLL0IsSUFBTCxFQUF3QjtBQUN2QixVQUFJQSxJQUFKLEVBQVU7QUFDVCxhQUFLUyxJQUFMLENBQVVULElBQVY7QUFDQTs7QUFDRCxhQUFPLEVBQUUsUUFBUSxLQUFLQSxJQUFmLEtBQXdCLENBQUMsS0FBS0EsSUFBTCxDQUFVTyxFQUFuQyxJQUF5QyxLQUFLUCxJQUFMLENBQVVPLEVBQVYsQ0FBYXlDLE1BQWIsS0FBd0IsQ0FBakUsR0FBcUUsS0FBS2tCLE1BQUwsRUFBckUsR0FBcUYsS0FBS0MsTUFBTCxFQUE1RjtBQUNBOzs7V0FFRCxlQUF5QnhDLEdBQXpCLEVBQWlDO0FBQ2hDLGFBQU8sS0FBSzNCLElBQUwsQ0FBVTJCLEdBQVYsQ0FBUDtBQUNBLGFBQU8sSUFBUDtBQUNBOzs7V0FFRCxhQUF1QkEsR0FBdkIsRUFBK0I7QUFDOUIsYUFBTyxLQUFLSSxHQUFMLENBQVNKLEdBQVQsTUFBa0IsSUFBekI7QUFDQTs7OztFQXBZb0R5QyxrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuL2NvbGxlY3Rpb24nO1xyXG5pbXBvcnQgeyBIYXNFdmVudCB9IGZyb20gJy4vaGFzLWV2ZW50JztcclxuaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnO1xyXG5pbXBvcnQgeyBJbnRlcmFjdHNXaXRoUmVsYXRpb25zaGlwLCBNb2RlbERhdGEgfSBmcm9tICcuL2NvbnRyYWN0cyc7XHJcbmltcG9ydCB7IG1ha2VDb2xsZWN0aW9uIH0gZnJvbSAnLi9kYic7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kZWw8VCBleHRlbmRzIE1vZGVsRGF0YSA9IGFueT4gZXh0ZW5kcyBIYXNFdmVudDxUPiB7XHJcblx0cHJvdGVjdGVkIGZpbGxhYmxlczogQXJyYXk8c3RyaW5nPjtcclxuXHRwcm90ZWN0ZWQgZGF0YTogVCA9IHt9IGFzIFQ7XHJcblx0dHlwZTogYW55ID0gTW9kZWw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5ib290aW5nKCk7XHJcblx0XHR0aGlzLmZpbGxhYmxlcyA9IHRoaXMuZmlsbGFibGUoKTtcclxuXHRcdHRoaXMubmFtZSA9IHBsdXJhbGl6ZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcblx0XHRpZiAoISgnaWQnIGluIHRoaXMuZGF0YSkpIHtcclxuXHRcdFx0dGhpcy5kYXRhLmlkID09PSAnJztcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5maWxsKGRhdGEpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ib290ZWQoKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBmaWxsYWJsZSgpOiBBcnJheTxzdHJpbmc+IHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBib290aW5nKCkge31cclxuXHJcblx0cHJvdGVjdGVkIGJvb3RlZCgpIHt9XHJcblxyXG5cdGVudHJpZXMoKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5nZXREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0dmFsdWVzKCkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5nZXREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0a2V5cygpIHtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldERhdGEoKSk7XHJcblx0fVxyXG5cclxuXHRnZXRUYWJsZU5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0dG9KU09OKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGF0YSgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgcGFnaW5hdGUocGFnZTogbnVtYmVyLCBwZXJQYWdlOiBudW1iZXIpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkgYXMgYW55O1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJz09JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICchPScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNvbGxlY3Rpb25cclxuXHRcdFx0XHQubGltaXQocGVyUGFnZSlcclxuXHRcdFx0XHQuc3RhcnRBdChwZXJQYWdlICogKHBhZ2UgLSAxKSlcclxuXHRcdFx0XHQuZ2V0KCk7XHJcblxyXG5cdFx0XHRjb25zdCBkYXRhID0gbmV3IENvbGxlY3Rpb24oKTtcclxuXHRcdFx0c25hcHNob3QuZm9yRWFjaCgoZG9jdW1lbnQ6IHsgZGF0YTogKCkgPT4gVDsgaWQ6IGFueSB9KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgYm9keSA9IHtcclxuXHRcdFx0XHRcdC4uLmRvY3VtZW50LmRhdGEoKSxcclxuXHRcdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSgpO1xyXG5cdFx0XHRcdGluc3RhbmNlLmZvcmNlRmlsbChib2R5KTtcclxuXHRcdFx0XHRkYXRhLnB1c2goaW5zdGFuY2UpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBmaW5kT25lKGlkOiBzdHJpbmcpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkgYXMgYW55O1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJz09JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICchPScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBkb2N1bWVudCA9IGF3YWl0IGNvbGxlY3Rpb24uZG9jKGlkKS5nZXQoKTtcclxuXHRcdFx0aWYgKCFkb2N1bWVudCkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTW9kZWwgZG9lcyBub3QgZXhpc3QuJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgYm9keSA9IHtcclxuXHRcdFx0XHQuLi5kb2N1bWVudC5kYXRhKCksXHJcblx0XHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmZvcmNlRmlsbChib2R5KTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRDb2xsZWN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIG1ha2VDb2xsZWN0aW9uKHRoaXMubmFtZSk7XHJcblx0fVxyXG5cclxuXHRmaWxsKGRhdGE6IFBhcnRpYWw8VD4pIHtcclxuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcblx0XHRcdGlmICh0aGlzLmZpbGxhYmxlcy5maW5kKChmaWxsZXIpID0+IGZpbGxlciA9PT0ga2V5KSAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsbGFibGVzLmluY2x1ZGVzKGtleSkpIHtcclxuXHRcdFx0XHR0aGlzLnNldChrZXkgYXMga2V5b2YgVCwgdmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGZvcmNlRmlsbChkYXRhOiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xyXG5cdFx0XHR0aGlzLnNldChrZXkgYXMgYW55LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGFzeW5jIGNvdW50KCkge1xyXG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMuYWxsKCk7XHJcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHRhc3luYyBkZWxldGUoKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLmNhbGxFdmVudCgnZGVsZXRpbmcnKTtcclxuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oKSBhcyBhbnk7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IHZhbHVlcyB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnPT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHRxdWVyeS52YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJyE9JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGF3YWl0IGNvbGxlY3Rpb24uZG9jKHRoaXMuZGF0YS5pZCkuZGVsZXRlKCk7XHJcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCdkZWxldGVkJyk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXQ8SyBleHRlbmRzIGtleW9mIFQ+KGtleTogSywgdmFsdWU6IFRbS10pIHtcclxuXHRcdHRoaXMuZGF0YVtrZXldID0gdmFsdWU7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGdldDxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLKTogVFtLXSB7XHJcblx0XHRpZiAoIShrZXkgaW4gdGhpcy5kYXRhKSkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbCBhcyB1bmtub3duIGFzIFRbS107XHJcblx0XHR9XHJcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YVtrZXldO1xyXG5cclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGVsKSB7XHJcblx0XHRcdHJldHVybiB2YWx1ZS5nZXREYXRhKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YSgpOiBUIHtcclxuXHRcdGNvbnN0IGRhdGE6IGFueSA9IHt9O1xyXG5cclxuXHRcdGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YSkge1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YVtrZXldO1xyXG5cclxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kZWwpIHtcclxuXHRcdFx0XHRkYXRhW2tleV0gPSB2YWx1ZS5nZXREYXRhKCk7XHJcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBDb2xsZWN0aW9uKSB7XHJcblx0XHRcdFx0ZGF0YVtrZXldID0gdmFsdWUudG9KU09OKCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuXHRcdFx0XHRkYXRhW2tleV0gPSB2YWx1ZS5tYXAoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdGlmIChpdGVtIGluc3RhbmNlb2YgTW9kZWwpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0uZ2V0RGF0YSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW07XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YVtrZXldID0gdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZpcnN0KCkge1xyXG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMubGltaXQoMSkuZ2V0QWxsKCk7XHJcblxyXG5cdFx0aWYgKGNvbGxlY3Rpb24ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRyZXR1cm4gY29sbGVjdGlvblswXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGdldEFsbCgpOiBQcm9taXNlPENvbGxlY3Rpb248dGhpcz4+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkgYXMgYW55O1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJz09JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICchPScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNvbGxlY3Rpb24uZ2V0KCk7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBuZXcgQ29sbGVjdGlvbigpO1xyXG5cclxuXHRcdFx0c25hcHNob3QuZm9yRWFjaCgoZG9jdW1lbnQ6IGFueSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGJvZHkgPSB7XHJcblx0XHRcdFx0XHQuLi5kb2N1bWVudC5kYXRhKCksXHJcblx0XHRcdFx0XHRpZDogZG9jdW1lbnQuaWQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzLnR5cGUoKTtcclxuXHRcdFx0XHRpbnN0YW5jZS5mb3JjZUZpbGwoYm9keSk7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGluc3RhbmNlKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHdpdGhvdXRSZWxhdGlvbnMoKTogVCB7XHJcblx0XHRjb25zdCBkYXRhOiBhbnkgPSB7fTtcclxuXHJcblx0XHRmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRhdGEpIHtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmRhdGFba2V5XTtcclxuXHJcblx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGVsID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdGRhdGFba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2FkKHJlbGF0aW9uczogQXJyYXk8c3RyaW5nPikge1xyXG5cdFx0Y29uc3Qgb3BlcmF0aW9ucyA9IHJlbGF0aW9ucy5tYXAoKHJlbGF0aW9uKSA9PiAoKHRoaXMgYXMgYW55KVtyZWxhdGlvbl0oKSBhcyBJbnRlcmFjdHNXaXRoUmVsYXRpb25zaGlwPHRoaXM+KS5nZXQoKSk7XHJcblx0XHRjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwob3BlcmF0aW9ucyk7XHJcblx0XHRyZXN1bHRzLmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XHJcblx0XHRcdGNvbnN0IG5hbWUgPSByZWxhdGlvbnNbaW5kZXhdO1xyXG5cdFx0XHR0aGlzLnNldChuYW1lIGFzIGtleW9mIFQsIDxhbnk+ZGF0YSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0YWxsKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWxsKCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBjcmVhdGUoZGF0YT86IFQpIHtcclxuXHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdHRoaXMuZmlsbChkYXRhKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNldCgnY3JlYXRlZF9hdCcsIG5ldyBEYXRlKCkudG9KU09OKCkpO1xyXG5cdFx0dGhpcy5zZXQoJ3VwZGF0ZWRfYXQnLCBuZXcgRGF0ZSgpLnRvSlNPTigpKTtcclxuXHJcblx0XHR0aGlzLmNhbGxFdmVudCgnY3JlYXRpbmcnKS5jYWxsRXZlbnQoJ3NhdmluZycpO1xyXG5cclxuXHRcdGNvbnN0IHJlZiA9IHRoaXMuZ2V0Q29sbGVjdGlvbigpLmRvYygpO1xyXG5cclxuXHRcdGF3YWl0IHJlZi5zZXQoe1xyXG5cdFx0XHQuLi50aGlzLmRhdGEsXHJcblx0XHRcdGlkOiByZWYuaWQsXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmNhbGxFdmVudCgnY3JlYXRlZCcpLmNhbGxFdmVudCgnc2F2ZWQnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgdXBkYXRlKGRhdGE/OiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBvbGRVcGRhdGVkQXQgPSB0aGlzLmdldCgndXBkYXRlZF9hdCcpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dGhpcy5jYWxsRXZlbnQoJ3VwZGF0aW5nJykuY2FsbEV2ZW50KCdzYXZpbmcnKTtcclxuXHRcdFx0dGhpcy5zZXQoJ3VwZGF0ZWRfYXQnLCBuZXcgRGF0ZSgpLnRvSlNPTigpKTtcclxuXHJcblx0XHRcdGF3YWl0IHRoaXMuZ2V0Q29sbGVjdGlvbigpXHJcblx0XHRcdFx0LmRvYyh0aGlzLmRhdGEuaWQpXHJcblx0XHRcdFx0LnNldCh7XHJcblx0XHRcdFx0XHQuLi50aGlzLndpdGhvdXRSZWxhdGlvbnMoKSxcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCd1cGRhdGVkJykuY2FsbEV2ZW50KCdzYXZlZCcpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRoaXMuc2V0KCd1cGRhdGVkX2F0Jywgb2xkVXBkYXRlZEF0KTtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldCgnaWQnKSBhcyBzdHJpbmc7XHJcblx0fVxyXG5cclxuXHRzYXZlKGRhdGE/OiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gISgnaWQnIGluIHRoaXMuZGF0YSkgfHwgIXRoaXMuZGF0YS5pZCB8fCB0aGlzLmRhdGEuaWQubGVuZ3RoID09PSAwID8gdGhpcy5jcmVhdGUoKSA6IHRoaXMudXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldDxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLKSB7XHJcblx0XHRkZWxldGUgdGhpcy5kYXRhW2tleV07XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGhhczxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXQoa2V5KSAhPT0gbnVsbDtcclxuXHR9XHJcbn1cclxuIl19