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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbC50cyJdLCJuYW1lcyI6WyJNb2RlbCIsImRhdGEiLCJib290aW5nIiwiZmlsbGFibGVzIiwiZmlsbGFibGUiLCJuYW1lIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJ0b0xvd2VyQ2FzZSIsImlkIiwidW5kZWZpbmVkIiwiZmlsbCIsImJvb3RlZCIsIk9iamVjdCIsImVudHJpZXMiLCJnZXREYXRhIiwidmFsdWVzIiwia2V5cyIsInBhZ2UiLCJwZXJQYWdlIiwiY29sbGVjdGlvbiIsImdldENvbGxlY3Rpb24iLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5IiwibGltaXQiLCJhbW91bnQiLCJzdGFydEF0IiwiZ2V0Iiwic25hcHNob3QiLCJDb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiaW5zdGFuY2UiLCJ0eXBlIiwiZm9yY2VGaWxsIiwicHVzaCIsImNsZWFyUXVlcmllcyIsImRvYyIsIkVycm9yIiwiZ2V0VGFibGVOYW1lIiwiZmluZCIsImZpbGxlciIsImluY2x1ZGVzIiwic2V0IiwiYWxsIiwiY2FsbEV2ZW50IiwidG9KU09OIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsImdldEFsbCIsInJlbGF0aW9ucyIsIm9wZXJhdGlvbnMiLCJyZWxhdGlvbiIsIlByb21pc2UiLCJyZXN1bHRzIiwiaW5kZXgiLCJEYXRlIiwicmVmIiwib2xkVXBkYXRlZEF0Iiwid2l0aG91dFJlbGF0aW9ucyIsImNyZWF0ZSIsInVwZGF0ZSIsIkhhc0V2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLEs7Ozs7O0FBS1osaUJBQVlDLElBQVosRUFBK0I7QUFBQTs7QUFBQTs7QUFDOUI7O0FBRDhCOztBQUFBLDJEQUhYLEVB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SUEsSUFBSixFQUFVO0FBQ1QsYUFBS1UsSUFBTCxDQUFVVixJQUFWO0FBQ0E7O0FBQ0QsYUFBTyxFQUFFLFFBQVEsS0FBS0EsSUFBZixLQUF3QixDQUFDLEtBQUtBLElBQUwsQ0FBVVEsRUFBbkMsSUFBeUMsS0FBS1IsSUFBTCxDQUFVUSxFQUFWLENBQWFILE1BQWIsS0FBd0IsQ0FBakUsR0FBcUUsS0FBSzhELE1BQUwsRUFBckUsR0FBcUYsS0FBS0MsTUFBTCxFQUE1RjtBQUNBOzs7V0FFRCxlQUF5QnhDLEdBQXpCLEVBQWlDO0FBQ2hDLGFBQU8sS0FBSzVCLElBQUwsQ0FBVTRCLEdBQVYsQ0FBUDtBQUNBLGFBQU8sSUFBUDtBQUNBOzs7V0FFRCxhQUF1QkEsR0FBdkIsRUFBK0I7QUFDOUIsYUFBTyxLQUFLSSxHQUFMLENBQVNKLEdBQVQsTUFBa0IsSUFBekI7QUFDQTs7OztFQWxab0R5QyxrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuL2NvbGxlY3Rpb24nO1xyXG5pbXBvcnQgeyBIYXNFdmVudCB9IGZyb20gJy4vaGFzLWV2ZW50JztcclxuaW1wb3J0IHBsdXJhbGl6ZSwgeyBpc1Npbmd1bGFyIH0gZnJvbSAncGx1cmFsaXplJztcclxuaW1wb3J0IHsgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcCwgTW9kZWxEYXRhIH0gZnJvbSAnLi9jb250cmFjdHMnO1xyXG5pbXBvcnQgeyBtYWtlQ29sbGVjdGlvbiB9IGZyb20gJy4vZGInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGVsPFQgZXh0ZW5kcyBNb2RlbERhdGEgPSBhbnk+IGV4dGVuZHMgSGFzRXZlbnQ8VD4ge1xyXG5cdHByb3RlY3RlZCBmaWxsYWJsZXM6IEFycmF5PHN0cmluZz47XHJcblx0cHJvdGVjdGVkIGRhdGE6IFQgPSB7fSBhcyBUO1xyXG5cdHR5cGU6IGFueSA9IE1vZGVsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhPzogUGFydGlhbDxUPikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYm9vdGluZygpO1xyXG5cdFx0dGhpcy5maWxsYWJsZXMgPSB0aGlzLmZpbGxhYmxlKCk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLm5hbWUgfHwgdGhpcy5uYW1lLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLm5hbWUgPSBwbHVyYWxpemUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghKCdpZCcgaW4gdGhpcy5kYXRhKSkge1xyXG5cdFx0XHR0aGlzLmRhdGEuaWQgPT09ICcnO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmJvb3RlZCgpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGZpbGxhYmxlKCk6IEFycmF5PHN0cmluZz4ge1xyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGJvb3RpbmcoKSB7fVxyXG5cclxuXHRwcm90ZWN0ZWQgYm9vdGVkKCkge31cclxuXHJcblx0ZW50cmllcygpIHtcclxuXHRcdHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLmdldERhdGEoKSk7XHJcblx0fVxyXG5cclxuXHR2YWx1ZXMoKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmdldERhdGEoKSk7XHJcblx0fVxyXG5cclxuXHRrZXlzKCkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2V0RGF0YSgpKTtcclxuXHR9XHJcblxyXG5cdGdldFRhYmxlTmFtZSgpIHtcclxuXHRcdGNvbnN0IG5hbWUgPSBpc1Npbmd1bGFyKHRoaXMubmFtZSkgPyBwbHVyYWxpemUodGhpcy5uYW1lKSA6IHRoaXMubmFtZTtcclxuXHRcdHJldHVybiBuYW1lLmxlbmd0aCA+IDAgPyBuYW1lIDogcGx1cmFsaXplKHRoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuXHR9XHJcblxyXG5cdHRvSlNPTigpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldERhdGEoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHBhZ2luYXRlKHBhZ2U6IG51bWJlciwgcGVyUGFnZTogbnVtYmVyKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbigpIGFzIGFueTtcclxuXHRcdFx0dGhpcy5xdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciwgdmFsdWUgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksIG9wZXJhdG9yLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgdmFsdWVzIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICc9PScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XHJcblx0XHRcdFx0XHRcdHF1ZXJ5LnZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnIT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0JzpcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ubGltaXQocXVlcnkuYW1vdW50KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3Qgc25hcHNob3QgPSBhd2FpdCBjb2xsZWN0aW9uXHJcblx0XHRcdFx0LmxpbWl0KHBlclBhZ2UpXHJcblx0XHRcdFx0LnN0YXJ0QXQocGVyUGFnZSAqIChwYWdlIC0gMSkpXHJcblx0XHRcdFx0LmdldCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgZGF0YSA9IG5ldyBDb2xsZWN0aW9uKCk7XHJcblx0XHRcdHNuYXBzaG90LmZvckVhY2goKGRvY3VtZW50OiB7IGRhdGE6ICgpID0+IFQ7IGlkOiBhbnkgfSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGJvZHkgPSB7XHJcblx0XHRcdFx0XHQuLi5kb2N1bWVudC5kYXRhKCksXHJcblx0XHRcdFx0XHRpZDogZG9jdW1lbnQuaWQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzLnR5cGUoKTtcclxuXHRcdFx0XHRpbnN0YW5jZS5mb3JjZUZpbGwoYm9keSk7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGluc3RhbmNlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZmluZE9uZShpZDogc3RyaW5nKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbigpIGFzIGFueTtcclxuXHRcdFx0dGhpcy5xdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciwgdmFsdWUgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksIG9wZXJhdG9yLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgdmFsdWVzIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICc9PScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XHJcblx0XHRcdFx0XHRcdHF1ZXJ5LnZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnIT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0JzpcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ubGltaXQocXVlcnkuYW1vdW50KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3QgZG9jdW1lbnQgPSBhd2FpdCBjb2xsZWN0aW9uLmRvYyhpZCkuZ2V0KCk7XHJcblx0XHRcdGlmICghZG9jdW1lbnQpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01vZGVsIGRvZXMgbm90IGV4aXN0LicpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGJvZHkgPSB7XHJcblx0XHRcdFx0Li4uZG9jdW1lbnQuZGF0YSgpLFxyXG5cdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy5mb3JjZUZpbGwoYm9keSk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0Q29sbGVjdGlvbigpIHtcclxuXHRcdHJldHVybiBtYWtlQ29sbGVjdGlvbih0aGlzLmdldFRhYmxlTmFtZSgpKTtcclxuXHR9XHJcblxyXG5cdGZpbGwoZGF0YTogUGFydGlhbDxUPikge1xyXG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcclxuXHRcdFx0aWYgKHRoaXMuZmlsbGFibGVzLmZpbmQoKGZpbGxlcikgPT4gZmlsbGVyID09PSBrZXkpICE9PSB1bmRlZmluZWQgfHwgdGhpcy5maWxsYWJsZXMuaW5jbHVkZXMoa2V5KSkge1xyXG5cdFx0XHRcdHRoaXMuc2V0KGtleSBhcyBrZXlvZiBULCB2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Zm9yY2VGaWxsKGRhdGE6IFBhcnRpYWw8VD4pIHtcclxuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcblx0XHRcdHRoaXMuc2V0KGtleSBhcyBhbnksIHZhbHVlKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgY291bnQoKSB7XHJcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgdGhpcy5hbGwoKTtcclxuXHRcdHJldHVybiBjb2xsZWN0aW9uLmxlbmd0aDtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGRlbGV0ZSgpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCdkZWxldGluZycpO1xyXG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbigpIGFzIGFueTtcclxuXHRcdFx0dGhpcy5xdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciwgdmFsdWUgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksIG9wZXJhdG9yLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgdmFsdWVzIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICc9PScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XHJcblx0XHRcdFx0XHRcdHF1ZXJ5LnZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnIT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0JzpcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ubGltaXQocXVlcnkuYW1vdW50KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0YXdhaXQgY29sbGVjdGlvbi5kb2ModGhpcy5kYXRhLmlkKS5kZWxldGUoKTtcclxuXHRcdFx0dGhpcy5jYWxsRXZlbnQoJ2RlbGV0ZWQnKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldDxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLLCB2YWx1ZTogVFtLXSkge1xyXG5cdFx0dGhpcy5kYXRhW2tleV0gPSB2YWx1ZTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Z2V0PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEspOiBUW0tdIHtcclxuXHRcdGlmICghKGtleSBpbiB0aGlzLmRhdGEpKSB7XHJcblx0XHRcdHJldHVybiBudWxsIGFzIHVua25vd24gYXMgVFtLXTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhW2tleV07XHJcblxyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kZWwpIHtcclxuXHRcdFx0cmV0dXJuIHZhbHVlLmdldERhdGEoKTtcclxuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBDb2xsZWN0aW9uKSB7XHJcblx0XHRcdHJldHVybiB2YWx1ZS50b0pTT04oKSBhcyBhbnk7XHJcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcblx0XHRcdHJldHVybiB2YWx1ZS5tYXAoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIE1vZGVsKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbS5nZXREYXRhKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBpdGVtO1xyXG5cdFx0XHR9KSBhcyBhbnk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YSgpOiBUIHtcclxuXHRcdGNvbnN0IGRhdGE6IGFueSA9IHt9O1xyXG5cclxuXHRcdGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YSkge1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YVtrZXldO1xyXG5cclxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kZWwpIHtcclxuXHRcdFx0XHRkYXRhW2tleV0gPSB2YWx1ZS5nZXREYXRhKCk7XHJcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBDb2xsZWN0aW9uKSB7XHJcblx0XHRcdFx0ZGF0YVtrZXldID0gdmFsdWUudG9KU09OKCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuXHRcdFx0XHRkYXRhW2tleV0gPSB2YWx1ZS5tYXAoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdGlmIChpdGVtIGluc3RhbmNlb2YgTW9kZWwpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0uZ2V0RGF0YSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW07XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YVtrZXldID0gdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZpcnN0KCkge1xyXG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMubGltaXQoMSkuZ2V0QWxsKCk7XHJcblxyXG5cdFx0aWYgKGNvbGxlY3Rpb24ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRyZXR1cm4gY29sbGVjdGlvblswXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGdldEFsbCgpOiBQcm9taXNlPENvbGxlY3Rpb248dGhpcz4+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkgYXMgYW55O1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJz09JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICchPScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNvbGxlY3Rpb24uZ2V0KCk7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBuZXcgQ29sbGVjdGlvbigpO1xyXG5cclxuXHRcdFx0c25hcHNob3QuZm9yRWFjaCgoZG9jdW1lbnQ6IGFueSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGJvZHkgPSB7XHJcblx0XHRcdFx0XHQuLi5kb2N1bWVudC5kYXRhKCksXHJcblx0XHRcdFx0XHRpZDogZG9jdW1lbnQuaWQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzLnR5cGUoKTtcclxuXHRcdFx0XHRpbnN0YW5jZS5mb3JjZUZpbGwoYm9keSk7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGluc3RhbmNlKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHdpdGhvdXRSZWxhdGlvbnMoKTogVCB7XHJcblx0XHRjb25zdCBkYXRhOiBhbnkgPSB7fTtcclxuXHJcblx0XHRmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRhdGEpIHtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmRhdGFba2V5XTtcclxuXHJcblx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGVsID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdGRhdGFba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2FkKHJlbGF0aW9uczogQXJyYXk8c3RyaW5nPikge1xyXG5cdFx0Y29uc3Qgb3BlcmF0aW9ucyA9IHJlbGF0aW9ucy5tYXAoKHJlbGF0aW9uKSA9PiAoKHRoaXMgYXMgYW55KVtyZWxhdGlvbl0oKSBhcyBJbnRlcmFjdHNXaXRoUmVsYXRpb25zaGlwPHRoaXM+KS5nZXQoKSk7XHJcblx0XHRjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwob3BlcmF0aW9ucyk7XHJcblx0XHRyZXN1bHRzLmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XHJcblx0XHRcdGNvbnN0IG5hbWUgPSByZWxhdGlvbnNbaW5kZXhdO1xyXG5cdFx0XHR0aGlzLnNldChuYW1lIGFzIGtleW9mIFQsIDxhbnk+ZGF0YSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0YWxsKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWxsKCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBjcmVhdGUoZGF0YT86IFQpIHtcclxuXHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdHRoaXMuZmlsbChkYXRhKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNldCgnY3JlYXRlZF9hdCcsIG5ldyBEYXRlKCkudG9KU09OKCkpO1xyXG5cdFx0dGhpcy5zZXQoJ3VwZGF0ZWRfYXQnLCBuZXcgRGF0ZSgpLnRvSlNPTigpKTtcclxuXHJcblx0XHR0aGlzLmNhbGxFdmVudCgnY3JlYXRpbmcnKS5jYWxsRXZlbnQoJ3NhdmluZycpO1xyXG5cclxuXHRcdGNvbnN0IHJlZiA9IHRoaXMuZ2V0Q29sbGVjdGlvbigpLmRvYygpO1xyXG5cclxuXHRcdGF3YWl0IHJlZi5zZXQoe1xyXG5cdFx0XHQuLi50aGlzLmRhdGEsXHJcblx0XHRcdGlkOiByZWYuaWQsXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmNhbGxFdmVudCgnY3JlYXRlZCcpLmNhbGxFdmVudCgnc2F2ZWQnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgdXBkYXRlKGRhdGE/OiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBvbGRVcGRhdGVkQXQgPSB0aGlzLmdldCgndXBkYXRlZF9hdCcpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dGhpcy5jYWxsRXZlbnQoJ3VwZGF0aW5nJykuY2FsbEV2ZW50KCdzYXZpbmcnKTtcclxuXHRcdFx0dGhpcy5zZXQoJ3VwZGF0ZWRfYXQnLCBuZXcgRGF0ZSgpLnRvSlNPTigpKTtcclxuXHJcblx0XHRcdGF3YWl0IHRoaXMuZ2V0Q29sbGVjdGlvbigpXHJcblx0XHRcdFx0LmRvYyh0aGlzLmRhdGEuaWQpXHJcblx0XHRcdFx0LnNldCh7XHJcblx0XHRcdFx0XHQuLi50aGlzLndpdGhvdXRSZWxhdGlvbnMoKSxcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCd1cGRhdGVkJykuY2FsbEV2ZW50KCdzYXZlZCcpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRoaXMuc2V0KCd1cGRhdGVkX2F0Jywgb2xkVXBkYXRlZEF0KTtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldCgnaWQnKSBhcyBzdHJpbmc7XHJcblx0fVxyXG5cclxuXHRzYXZlKGRhdGE/OiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gISgnaWQnIGluIHRoaXMuZGF0YSkgfHwgIXRoaXMuZGF0YS5pZCB8fCB0aGlzLmRhdGEuaWQubGVuZ3RoID09PSAwID8gdGhpcy5jcmVhdGUoKSA6IHRoaXMudXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldDxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLKSB7XHJcblx0XHRkZWxldGUgdGhpcy5kYXRhW2tleV07XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGhhczxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXQoa2V5KSAhPT0gbnVsbDtcclxuXHR9XHJcbn1cclxuIl19