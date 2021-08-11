"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = void 0;

var _collection = require("./collection");

var _hasEvent = require("./has-event");

var _pluralize = _interopRequireWildcard(require("pluralize"));

var _db = require("./db");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

    if (!_this.name || _this.name.length === 0) {
      _this.name = (0, _pluralize["default"])(_this.constructor.name.toLowerCase());
    }

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
      var name = (0, _pluralize.isSingular)(this.name) ? (0, _pluralize["default"])(this.name) : this.name;
      return name.length > 0 ? name : (0, _pluralize["default"])(this.constructor.name.toLowerCase());
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
      return (0, _db.makeCollection)(this.getTableName());
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
      } else if (value instanceof _collection.Collection) {
        return value.toJSON();
      } else if (Array.isArray(value)) {
        return value.map(function (item) {
          if (item instanceof Model) {
            return item.getData();
          }

          return item;
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbC50cyJdLCJuYW1lcyI6WyJNb2RlbCIsImRhdGEiLCJib290aW5nIiwiZmlsbGFibGVzIiwiZmlsbGFibGUiLCJuYW1lIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJ0b0xvd2VyQ2FzZSIsImlkIiwidW5kZWZpbmVkIiwiZmlsbCIsImJvb3RlZCIsIk9iamVjdCIsImVudHJpZXMiLCJnZXREYXRhIiwidmFsdWVzIiwia2V5cyIsInBhZ2UiLCJwZXJQYWdlIiwiY29sbGVjdGlvbiIsImdldENvbGxlY3Rpb24iLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5IiwibGltaXQiLCJhbW91bnQiLCJzdGFydEF0IiwiZ2V0Iiwic25hcHNob3QiLCJDb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiaW5zdGFuY2UiLCJ0eXBlIiwiZm9yY2VGaWxsIiwicHVzaCIsImNsZWFyUXVlcmllcyIsImRvYyIsIkVycm9yIiwiZ2V0VGFibGVOYW1lIiwiZmluZCIsImZpbGxlciIsImluY2x1ZGVzIiwic2V0IiwiYWxsIiwiY2FsbEV2ZW50IiwidG9KU09OIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsImdldEFsbCIsInJlbGF0aW9ucyIsIm9wZXJhdGlvbnMiLCJyZWxhdGlvbiIsIlByb21pc2UiLCJyZXN1bHRzIiwiaW5kZXgiLCJEYXRlIiwicmVmIiwib2xkVXBkYXRlZEF0Iiwid2l0aG91dFJlbGF0aW9ucyIsImNyZWF0ZSIsInVwZGF0ZSIsIkhhc0V2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLEs7Ozs7O0FBS1osaUJBQVlDLElBQVosRUFBK0I7QUFBQTs7QUFBQTs7QUFDOUI7O0FBRDhCOztBQUFBLDJEQUhYLEVB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SUEsSUFBSixFQUFVO0FBQ1QsYUFBS1UsSUFBTCxDQUFVVixJQUFWO0FBQ0E7O0FBQ0QsYUFBTyxFQUFFLFFBQVEsS0FBS0EsSUFBZixLQUF3QixDQUFDLEtBQUtBLElBQUwsQ0FBVVEsRUFBbkMsSUFBeUMsS0FBS1IsSUFBTCxDQUFVUSxFQUFWLENBQWFILE1BQWIsS0FBd0IsQ0FBakUsR0FBcUUsS0FBSzhELE1BQUwsRUFBckUsR0FBcUYsS0FBS0MsTUFBTCxFQUE1RjtBQUNBOzs7V0FFRCxlQUF5QnhDLEdBQXpCLEVBQWlDO0FBQ2hDLGFBQU8sS0FBSzVCLElBQUwsQ0FBVTRCLEdBQVYsQ0FBUDtBQUNBLGFBQU8sSUFBUDtBQUNBOzs7V0FFRCxhQUF1QkEsR0FBdkIsRUFBK0I7QUFDOUIsYUFBTyxLQUFLSSxHQUFMLENBQVNKLEdBQVQsTUFBa0IsSUFBekI7QUFDQTs7OztFQWxab0R5QyxrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHsgSGFzRXZlbnQgfSBmcm9tICcuL2hhcy1ldmVudCc7XG5pbXBvcnQgcGx1cmFsaXplLCB7IGlzU2luZ3VsYXIgfSBmcm9tICdwbHVyYWxpemUnO1xuaW1wb3J0IHsgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcCwgTW9kZWxEYXRhIH0gZnJvbSAnLi9jb250cmFjdHMnO1xuaW1wb3J0IHsgbWFrZUNvbGxlY3Rpb24gfSBmcm9tICcuL2RiJztcblxuZXhwb3J0IGNsYXNzIE1vZGVsPFQgZXh0ZW5kcyBNb2RlbERhdGEgPSBhbnk+IGV4dGVuZHMgSGFzRXZlbnQ8VD4ge1xuXHRwcm90ZWN0ZWQgZmlsbGFibGVzOiBBcnJheTxzdHJpbmc+O1xuXHRwcm90ZWN0ZWQgZGF0YTogVCA9IHt9IGFzIFQ7XG5cdHR5cGU6IGFueSA9IE1vZGVsO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFQ+KSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmJvb3RpbmcoKTtcblx0XHR0aGlzLmZpbGxhYmxlcyA9IHRoaXMuZmlsbGFibGUoKTtcblxuXHRcdGlmICghdGhpcy5uYW1lIHx8IHRoaXMubmFtZS5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMubmFtZSA9IHBsdXJhbGl6ZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKCEoJ2lkJyBpbiB0aGlzLmRhdGEpKSB7XG5cdFx0XHR0aGlzLmRhdGEuaWQgPT09ICcnO1xuXHRcdH1cblx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XG5cdFx0fVxuXHRcdHRoaXMuYm9vdGVkKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZmlsbGFibGUoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cHJvdGVjdGVkIGJvb3RpbmcoKSB7fVxuXG5cdHByb3RlY3RlZCBib290ZWQoKSB7fVxuXG5cdGVudHJpZXMoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuZ2V0RGF0YSgpKTtcblx0fVxuXG5cdHZhbHVlcygpIHtcblx0XHRyZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmdldERhdGEoKSk7XG5cdH1cblxuXHRrZXlzKCkge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldERhdGEoKSk7XG5cdH1cblxuXHRnZXRUYWJsZU5hbWUoKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGlzU2luZ3VsYXIodGhpcy5uYW1lKSA/IHBsdXJhbGl6ZSh0aGlzLm5hbWUpIDogdGhpcy5uYW1lO1xuXHRcdHJldHVybiBuYW1lLmxlbmd0aCA+IDAgPyBuYW1lIDogcGx1cmFsaXplKHRoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpKTtcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKCk7XG5cdH1cblxuXHRhc3luYyBwYWdpbmF0ZShwYWdlOiBudW1iZXIsIHBlclBhZ2U6IG51bWJlcikge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbigpIGFzIGFueTtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnPT0nLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnIT0nLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0Jzpcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNvbGxlY3Rpb25cblx0XHRcdFx0LmxpbWl0KHBlclBhZ2UpXG5cdFx0XHRcdC5zdGFydEF0KHBlclBhZ2UgKiAocGFnZSAtIDEpKVxuXHRcdFx0XHQuZ2V0KCk7XG5cblx0XHRcdGNvbnN0IGRhdGEgPSBuZXcgQ29sbGVjdGlvbigpO1xuXHRcdFx0c25hcHNob3QuZm9yRWFjaCgoZG9jdW1lbnQ6IHsgZGF0YTogKCkgPT4gVDsgaWQ6IGFueSB9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGJvZHkgPSB7XG5cdFx0XHRcdFx0Li4uZG9jdW1lbnQuZGF0YSgpLFxuXHRcdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgdGhpcy50eXBlKCk7XG5cdFx0XHRcdGluc3RhbmNlLmZvcmNlRmlsbChib2R5KTtcblx0XHRcdFx0ZGF0YS5wdXNoKGluc3RhbmNlKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGZpbmRPbmUoaWQ6IHN0cmluZykge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbigpIGFzIGFueTtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnPT0nLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnIT0nLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0Jzpcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBkb2N1bWVudCA9IGF3YWl0IGNvbGxlY3Rpb24uZG9jKGlkKS5nZXQoKTtcblx0XHRcdGlmICghZG9jdW1lbnQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNb2RlbCBkb2VzIG5vdCBleGlzdC4nKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGJvZHkgPSB7XG5cdFx0XHRcdC4uLmRvY3VtZW50LmRhdGEoKSxcblx0XHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxuXHRcdFx0fTtcblx0XHRcdHRoaXMuZm9yY2VGaWxsKGJvZHkpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xuXHRcdH1cblx0fVxuXG5cdGdldENvbGxlY3Rpb24oKSB7XG5cdFx0cmV0dXJuIG1ha2VDb2xsZWN0aW9uKHRoaXMuZ2V0VGFibGVOYW1lKCkpO1xuXHR9XG5cblx0ZmlsbChkYXRhOiBQYXJ0aWFsPFQ+KSB7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcblx0XHRcdGlmICh0aGlzLmZpbGxhYmxlcy5maW5kKChmaWxsZXIpID0+IGZpbGxlciA9PT0ga2V5KSAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsbGFibGVzLmluY2x1ZGVzKGtleSkpIHtcblx0XHRcdFx0dGhpcy5zZXQoa2V5IGFzIGtleW9mIFQsIHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRmb3JjZUZpbGwoZGF0YTogUGFydGlhbDxUPikge1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG5cdFx0XHR0aGlzLnNldChrZXkgYXMgYW55LCB2YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXN5bmMgY291bnQoKSB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMuYWxsKCk7XG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24ubGVuZ3RoO1xuXHR9XG5cblx0YXN5bmMgZGVsZXRlKCkge1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmNhbGxFdmVudCgnZGVsZXRpbmcnKTtcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkgYXMgYW55O1xuXHRcdFx0dGhpcy5xdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxuXHRcdFx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciwgdmFsdWUgfSA9IHF1ZXJ5O1xuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XG5cdFx0XHRcdFx0XHRjb25zdCB7IHZhbHVlcyB9ID0gcXVlcnk7XG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICc9PScsIHZhbHVlKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XG5cdFx0XHRcdFx0XHRxdWVyeS52YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICchPScsIHZhbHVlKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ubGltaXQocXVlcnkuYW1vdW50KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IGNvbGxlY3Rpb24uZG9jKHRoaXMuZGF0YS5pZCkuZGVsZXRlKCk7XG5cdFx0XHR0aGlzLmNhbGxFdmVudCgnZGVsZXRlZCcpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xuXHRcdH1cblx0fVxuXG5cdHNldDxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLLCB2YWx1ZTogVFtLXSkge1xuXHRcdHRoaXMuZGF0YVtrZXldID0gdmFsdWU7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQ8SyBleHRlbmRzIGtleW9mIFQ+KGtleTogSyk6IFRbS10ge1xuXHRcdGlmICghKGtleSBpbiB0aGlzLmRhdGEpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbCBhcyB1bmtub3duIGFzIFRbS107XG5cdFx0fVxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhW2tleV07XG5cblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RlbCkge1xuXHRcdFx0cmV0dXJuIHZhbHVlLmdldERhdGEoKTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ29sbGVjdGlvbikge1xuXHRcdFx0cmV0dXJuIHZhbHVlLnRvSlNPTigpIGFzIGFueTtcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdGlmIChpdGVtIGluc3RhbmNlb2YgTW9kZWwpIHtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbS5nZXREYXRhKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHR9KSBhcyBhbnk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0Z2V0RGF0YSgpOiBUIHtcblx0XHRjb25zdCBkYXRhOiBhbnkgPSB7fTtcblxuXHRcdGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YSkge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmRhdGFba2V5XTtcblxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kZWwpIHtcblx0XHRcdFx0ZGF0YVtrZXldID0gdmFsdWUuZ2V0RGF0YSgpO1xuXHRcdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIENvbGxlY3Rpb24pIHtcblx0XHRcdFx0ZGF0YVtrZXldID0gdmFsdWUudG9KU09OKCk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRcdGRhdGFba2V5XSA9IHZhbHVlLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdGlmIChpdGVtIGluc3RhbmNlb2YgTW9kZWwpIHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLmdldERhdGEoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF0YVtrZXldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblxuXHRhc3luYyBmaXJzdCgpIHtcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgdGhpcy5saW1pdCgxKS5nZXRBbGwoKTtcblxuXHRcdGlmIChjb2xsZWN0aW9uLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBjb2xsZWN0aW9uWzBdO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0YXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8Q29sbGVjdGlvbjx0aGlzPj4ge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbigpIGFzIGFueTtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnPT0nLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnIT0nLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0Jzpcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNvbGxlY3Rpb24uZ2V0KCk7XG5cdFx0XHRjb25zdCBkYXRhID0gbmV3IENvbGxlY3Rpb24oKTtcblxuXHRcdFx0c25hcHNob3QuZm9yRWFjaCgoZG9jdW1lbnQ6IGFueSkgPT4ge1xuXHRcdFx0XHRjb25zdCBib2R5ID0ge1xuXHRcdFx0XHRcdC4uLmRvY3VtZW50LmRhdGEoKSxcblx0XHRcdFx0XHRpZDogZG9jdW1lbnQuaWQsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSgpO1xuXHRcdFx0XHRpbnN0YW5jZS5mb3JjZUZpbGwoYm9keSk7XG5cdFx0XHRcdGRhdGEucHVzaChpbnN0YW5jZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xuXHRcdH1cblx0fVxuXG5cdHdpdGhvdXRSZWxhdGlvbnMoKTogVCB7XG5cdFx0Y29uc3QgZGF0YTogYW55ID0ge307XG5cblx0XHRmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRhdGEpIHtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhW2tleV07XG5cblx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGVsID09PSBmYWxzZSkge1xuXHRcdFx0XHRkYXRhW2tleV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fVxuXG5cdGFzeW5jIGxvYWQocmVsYXRpb25zOiBBcnJheTxzdHJpbmc+KSB7XG5cdFx0Y29uc3Qgb3BlcmF0aW9ucyA9IHJlbGF0aW9ucy5tYXAoKHJlbGF0aW9uKSA9PiAoKHRoaXMgYXMgYW55KVtyZWxhdGlvbl0oKSBhcyBJbnRlcmFjdHNXaXRoUmVsYXRpb25zaGlwPHRoaXM+KS5nZXQoKSk7XG5cdFx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKG9wZXJhdGlvbnMpO1xuXHRcdHJlc3VsdHMuZm9yRWFjaCgoZGF0YSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IG5hbWUgPSByZWxhdGlvbnNbaW5kZXhdO1xuXHRcdFx0dGhpcy5zZXQobmFtZSBhcyBrZXlvZiBULCA8YW55PmRhdGEpO1xuXHRcdH0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YWxsKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEFsbCgpO1xuXHR9XG5cblx0YXN5bmMgY3JlYXRlKGRhdGE/OiBUKSB7XG5cdFx0aWYgKGRhdGEpIHtcblx0XHRcdHRoaXMuZmlsbChkYXRhKTtcblx0XHR9XG5cblx0XHR0aGlzLnNldCgnY3JlYXRlZF9hdCcsIG5ldyBEYXRlKCkudG9KU09OKCkpO1xuXHRcdHRoaXMuc2V0KCd1cGRhdGVkX2F0JywgbmV3IERhdGUoKS50b0pTT04oKSk7XG5cblx0XHR0aGlzLmNhbGxFdmVudCgnY3JlYXRpbmcnKS5jYWxsRXZlbnQoJ3NhdmluZycpO1xuXG5cdFx0Y29uc3QgcmVmID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkuZG9jKCk7XG5cblx0XHRhd2FpdCByZWYuc2V0KHtcblx0XHRcdC4uLnRoaXMuZGF0YSxcblx0XHRcdGlkOiByZWYuaWQsXG5cdFx0fSk7XG5cblx0XHR0aGlzLmNhbGxFdmVudCgnY3JlYXRlZCcpLmNhbGxFdmVudCgnc2F2ZWQnKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFzeW5jIHVwZGF0ZShkYXRhPzogUGFydGlhbDxUPikge1xuXHRcdGlmIChkYXRhKSB7XG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XG5cdFx0fVxuXHRcdGNvbnN0IG9sZFVwZGF0ZWRBdCA9IHRoaXMuZ2V0KCd1cGRhdGVkX2F0Jyk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCd1cGRhdGluZycpLmNhbGxFdmVudCgnc2F2aW5nJyk7XG5cdFx0XHR0aGlzLnNldCgndXBkYXRlZF9hdCcsIG5ldyBEYXRlKCkudG9KU09OKCkpO1xuXG5cdFx0XHRhd2FpdCB0aGlzLmdldENvbGxlY3Rpb24oKVxuXHRcdFx0XHQuZG9jKHRoaXMuZGF0YS5pZClcblx0XHRcdFx0LnNldCh7XG5cdFx0XHRcdFx0Li4udGhpcy53aXRob3V0UmVsYXRpb25zKCksXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmNhbGxFdmVudCgndXBkYXRlZCcpLmNhbGxFdmVudCgnc2F2ZWQnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aGlzLnNldCgndXBkYXRlZF9hdCcsIG9sZFVwZGF0ZWRBdCk7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH1cblxuXHRpZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXQoJ2lkJykgYXMgc3RyaW5nO1xuXHR9XG5cblx0c2F2ZShkYXRhPzogUGFydGlhbDxUPikge1xuXHRcdGlmIChkYXRhKSB7XG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XG5cdFx0fVxuXHRcdHJldHVybiAhKCdpZCcgaW4gdGhpcy5kYXRhKSB8fCAhdGhpcy5kYXRhLmlkIHx8IHRoaXMuZGF0YS5pZC5sZW5ndGggPT09IDAgPyB0aGlzLmNyZWF0ZSgpIDogdGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdHVuc2V0PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEspIHtcblx0XHRkZWxldGUgdGhpcy5kYXRhW2tleV07XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRoYXM8SyBleHRlbmRzIGtleW9mIFQ+KGtleTogSykge1xuXHRcdHJldHVybiB0aGlzLmdldChrZXkpICE9PSBudWxsO1xuXHR9XG59XG4iXX0=