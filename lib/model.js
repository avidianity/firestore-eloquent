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
                if (!(!id || id.length === 0)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", null);

              case 2:
                _context2.prev = 2;
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
                _context2.next = 7;
                return collection.doc(id).get();

              case 7:
                document = _context2.sent;

                if (document) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", null);

              case 10:
                body = _objectSpread(_objectSpread({}, document.data()), {}, {
                  id: document.id
                });
                this.forceFill(body);
                return _context2.abrupt("return", this);

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](2);
                throw _context2.t0;

              case 18:
                _context2.prev = 18;
                this.clearQueries();
                return _context2.finish(18);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 15, 18, 21]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbC50cyJdLCJuYW1lcyI6WyJNb2RlbCIsImRhdGEiLCJib290aW5nIiwiZmlsbGFibGVzIiwiZmlsbGFibGUiLCJuYW1lIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJ0b0xvd2VyQ2FzZSIsImlkIiwidW5kZWZpbmVkIiwiZmlsbCIsImJvb3RlZCIsIk9iamVjdCIsImVudHJpZXMiLCJnZXREYXRhIiwidmFsdWVzIiwia2V5cyIsInBhZ2UiLCJwZXJQYWdlIiwiY29sbGVjdGlvbiIsImdldENvbGxlY3Rpb24iLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5IiwibGltaXQiLCJhbW91bnQiLCJzdGFydEF0IiwiZ2V0Iiwic25hcHNob3QiLCJDb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiaW5zdGFuY2UiLCJ0eXBlIiwiZm9yY2VGaWxsIiwicHVzaCIsImNsZWFyUXVlcmllcyIsImRvYyIsImdldFRhYmxlTmFtZSIsImZpbmQiLCJmaWxsZXIiLCJpbmNsdWRlcyIsInNldCIsImFsbCIsImNhbGxFdmVudCIsInRvSlNPTiIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIml0ZW0iLCJnZXRBbGwiLCJyZWxhdGlvbnMiLCJvcGVyYXRpb25zIiwicmVsYXRpb24iLCJQcm9taXNlIiwicmVzdWx0cyIsImluZGV4IiwiRGF0ZSIsInJlZiIsIm9sZFVwZGF0ZWRBdCIsIndpdGhvdXRSZWxhdGlvbnMiLCJjcmVhdGUiLCJ1cGRhdGUiLCJIYXNFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhQSxLOzs7OztBQUtaLGlCQUFZQyxJQUFaLEVBQStCO0FBQUE7O0FBQUE7O0FBQzlCOztBQUQ4Qjs7QUFBQSwyREFIWCxFQUdXOztBQUFB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S2hDLEdBQUwsQ0FBUyxJQUFULENBQVA7QUFDQTs7O1dBRUQsY0FBS2hDLElBQUwsRUFBd0I7QUFDdkIsVUFBSUEsSUFBSixFQUFVO0FBQ1QsYUFBS1UsSUFBTCxDQUFVVixJQUFWO0FBQ0E7O0FBQ0QsYUFBTyxFQUFFLFFBQVEsS0FBS0EsSUFBZixLQUF3QixDQUFDLEtBQUtBLElBQUwsQ0FBVVEsRUFBbkMsSUFBeUMsS0FBS1IsSUFBTCxDQUFVUSxFQUFWLENBQWFILE1BQWIsS0FBd0IsQ0FBakUsR0FBcUUsS0FBSzZELE1BQUwsRUFBckUsR0FBcUYsS0FBS0MsTUFBTCxFQUE1RjtBQUNBOzs7V0FFRCxlQUF5QnZDLEdBQXpCLEVBQWlDO0FBQ2hDLGFBQU8sS0FBSzVCLElBQUwsQ0FBVTRCLEdBQVYsQ0FBUDtBQUNBLGFBQU8sSUFBUDtBQUNBOzs7V0FFRCxhQUF1QkEsR0FBdkIsRUFBK0I7QUFDOUIsYUFBTyxLQUFLSSxHQUFMLENBQVNKLEdBQVQsTUFBa0IsSUFBekI7QUFDQTs7OztFQXRab0R3QyxrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHsgSGFzRXZlbnQgfSBmcm9tICcuL2hhcy1ldmVudCc7XG5pbXBvcnQgcGx1cmFsaXplLCB7IGlzU2luZ3VsYXIgfSBmcm9tICdwbHVyYWxpemUnO1xuaW1wb3J0IHsgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcCwgTW9kZWxEYXRhIH0gZnJvbSAnLi9jb250cmFjdHMnO1xuaW1wb3J0IHsgbWFrZUNvbGxlY3Rpb24gfSBmcm9tICcuL2RiJztcblxuZXhwb3J0IGNsYXNzIE1vZGVsPFQgZXh0ZW5kcyBNb2RlbERhdGEgPSBhbnk+IGV4dGVuZHMgSGFzRXZlbnQ8VD4ge1xuXHRwcm90ZWN0ZWQgZmlsbGFibGVzOiBBcnJheTxzdHJpbmc+O1xuXHRwcm90ZWN0ZWQgZGF0YTogVCA9IHt9IGFzIFQ7XG5cdHR5cGU6IGFueSA9IE1vZGVsO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFQ+KSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmJvb3RpbmcoKTtcblx0XHR0aGlzLmZpbGxhYmxlcyA9IHRoaXMuZmlsbGFibGUoKTtcblxuXHRcdGlmICghdGhpcy5uYW1lIHx8IHRoaXMubmFtZS5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMubmFtZSA9IHBsdXJhbGl6ZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKCEoJ2lkJyBpbiB0aGlzLmRhdGEpKSB7XG5cdFx0XHR0aGlzLmRhdGEuaWQgPT09ICcnO1xuXHRcdH1cblx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XG5cdFx0fVxuXHRcdHRoaXMuYm9vdGVkKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZmlsbGFibGUoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cHJvdGVjdGVkIGJvb3RpbmcoKSB7fVxuXG5cdHByb3RlY3RlZCBib290ZWQoKSB7fVxuXG5cdGVudHJpZXMoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuZ2V0RGF0YSgpKTtcblx0fVxuXG5cdHZhbHVlcygpIHtcblx0XHRyZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmdldERhdGEoKSk7XG5cdH1cblxuXHRrZXlzKCkge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldERhdGEoKSk7XG5cdH1cblxuXHRnZXRUYWJsZU5hbWUoKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGlzU2luZ3VsYXIodGhpcy5uYW1lKSA/IHBsdXJhbGl6ZSh0aGlzLm5hbWUpIDogdGhpcy5uYW1lO1xuXHRcdHJldHVybiBuYW1lLmxlbmd0aCA+IDAgPyBuYW1lIDogcGx1cmFsaXplKHRoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpKTtcblx0fVxuXG5cdHRvSlNPTigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKCk7XG5cdH1cblxuXHRhc3luYyBwYWdpbmF0ZShwYWdlOiBudW1iZXIsIHBlclBhZ2U6IG51bWJlcikge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbigpIGFzIGFueTtcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnPT0nLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnIT0nLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0Jzpcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNvbGxlY3Rpb25cblx0XHRcdFx0LmxpbWl0KHBlclBhZ2UpXG5cdFx0XHRcdC5zdGFydEF0KHBlclBhZ2UgKiAocGFnZSAtIDEpKVxuXHRcdFx0XHQuZ2V0KCk7XG5cblx0XHRcdGNvbnN0IGRhdGEgPSBuZXcgQ29sbGVjdGlvbigpO1xuXHRcdFx0c25hcHNob3QuZm9yRWFjaCgoZG9jdW1lbnQ6IHsgZGF0YTogKCkgPT4gVDsgaWQ6IGFueSB9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGJvZHkgPSB7XG5cdFx0XHRcdFx0Li4uZG9jdW1lbnQuZGF0YSgpLFxuXHRcdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgdGhpcy50eXBlKCk7XG5cdFx0XHRcdGluc3RhbmNlLmZvcmNlRmlsbChib2R5KTtcblx0XHRcdFx0ZGF0YS5wdXNoKGluc3RhbmNlKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGZpbmRPbmUoaWQ6IHN0cmluZykge1xuXHRcdGlmICghaWQgfHwgaWQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oKSBhcyBhbnk7XG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksIG9wZXJhdG9yLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgdmFsdWVzIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJz09JywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcblx0XHRcdFx0XHRcdHF1ZXJ5LnZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJyE9JywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgZG9jdW1lbnQgPSBhd2FpdCBjb2xsZWN0aW9uLmRvYyhpZCkuZ2V0KCk7XG5cdFx0XHRpZiAoIWRvY3VtZW50KSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgYm9keSA9IHtcblx0XHRcdFx0Li4uZG9jdW1lbnQuZGF0YSgpLFxuXHRcdFx0XHRpZDogZG9jdW1lbnQuaWQsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5mb3JjZUZpbGwoYm9keSk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q29sbGVjdGlvbigpIHtcblx0XHRyZXR1cm4gbWFrZUNvbGxlY3Rpb24odGhpcy5nZXRUYWJsZU5hbWUoKSk7XG5cdH1cblxuXHRmaWxsKGRhdGE6IFBhcnRpYWw8VD4pIHtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xuXHRcdFx0aWYgKHRoaXMuZmlsbGFibGVzLmZpbmQoKGZpbGxlcikgPT4gZmlsbGVyID09PSBrZXkpICE9PSB1bmRlZmluZWQgfHwgdGhpcy5maWxsYWJsZXMuaW5jbHVkZXMoa2V5KSkge1xuXHRcdFx0XHR0aGlzLnNldChrZXkgYXMga2V5b2YgVCwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGZvcmNlRmlsbChkYXRhOiBQYXJ0aWFsPFQ+KSB7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcblx0XHRcdHRoaXMuc2V0KGtleSBhcyBhbnksIHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhc3luYyBjb3VudCgpIHtcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgdGhpcy5hbGwoKTtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5sZW5ndGg7XG5cdH1cblxuXHRhc3luYyBkZWxldGUoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCdkZWxldGluZycpO1xuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oKSBhcyBhbnk7XG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksIG9wZXJhdG9yLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcblx0XHRcdFx0XHRcdGNvbnN0IHsgdmFsdWVzIH0gPSBxdWVyeTtcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJz09JywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcblx0XHRcdFx0XHRcdHF1ZXJ5LnZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJyE9JywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgY29sbGVjdGlvbi5kb2ModGhpcy5kYXRhLmlkKS5kZWxldGUoKTtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCdkZWxldGVkJyk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XG5cdFx0fVxuXHR9XG5cblx0c2V0PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEssIHZhbHVlOiBUW0tdKSB7XG5cdFx0dGhpcy5kYXRhW2tleV0gPSB2YWx1ZTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldDxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLKTogVFtLXSB7XG5cdFx0aWYgKCEoa2V5IGluIHRoaXMuZGF0YSkpIHtcblx0XHRcdHJldHVybiBudWxsIGFzIHVua25vd24gYXMgVFtLXTtcblx0XHR9XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmRhdGFba2V5XTtcblxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGVsKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUuZ2V0RGF0YSgpO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBDb2xsZWN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUudG9KU09OKCkgYXMgYW55O1xuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiB2YWx1ZS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBNb2RlbCkge1xuXHRcdFx0XHRcdHJldHVybiBpdGVtLmdldERhdGEoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdH0pIGFzIGFueTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRnZXREYXRhKCk6IFQge1xuXHRcdGNvbnN0IGRhdGE6IGFueSA9IHt9O1xuXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gdGhpcy5kYXRhKSB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YVtrZXldO1xuXG5cdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RlbCkge1xuXHRcdFx0XHRkYXRhW2tleV0gPSB2YWx1ZS5nZXREYXRhKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ29sbGVjdGlvbikge1xuXHRcdFx0XHRkYXRhW2tleV0gPSB2YWx1ZS50b0pTT04oKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdFx0ZGF0YVtrZXldID0gdmFsdWUubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBNb2RlbCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0uZ2V0RGF0YSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkYXRhW2tleV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fVxuXG5cdGFzeW5jIGZpcnN0KCkge1xuXHRcdGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCB0aGlzLmxpbWl0KDEpLmdldEFsbCgpO1xuXG5cdFx0aWYgKGNvbGxlY3Rpb24ubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGNvbGxlY3Rpb25bMF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRhc3luYyBnZXRBbGwoKTogUHJvbWlzZTxDb2xsZWN0aW9uPHRoaXM+PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkgYXMgYW55O1xuXHRcdFx0dGhpcy5xdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxuXHRcdFx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciwgdmFsdWUgfSA9IHF1ZXJ5O1xuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XG5cdFx0XHRcdFx0XHRjb25zdCB7IHZhbHVlcyB9ID0gcXVlcnk7XG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICc9PScsIHZhbHVlKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XG5cdFx0XHRcdFx0XHRxdWVyeS52YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICchPScsIHZhbHVlKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ubGltaXQocXVlcnkuYW1vdW50KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgY29sbGVjdGlvbi5nZXQoKTtcblx0XHRcdGNvbnN0IGRhdGEgPSBuZXcgQ29sbGVjdGlvbigpO1xuXG5cdFx0XHRzbmFwc2hvdC5mb3JFYWNoKChkb2N1bWVudDogYW55KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGJvZHkgPSB7XG5cdFx0XHRcdFx0Li4uZG9jdW1lbnQuZGF0YSgpLFxuXHRcdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgdGhpcy50eXBlKCk7XG5cdFx0XHRcdGluc3RhbmNlLmZvcmNlRmlsbChib2R5KTtcblx0XHRcdFx0ZGF0YS5wdXNoKGluc3RhbmNlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XG5cdFx0fVxuXHR9XG5cblx0d2l0aG91dFJlbGF0aW9ucygpOiBUIHtcblx0XHRjb25zdCBkYXRhOiBhbnkgPSB7fTtcblxuXHRcdGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YSkge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmRhdGFba2V5XTtcblxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTW9kZWwgPT09IGZhbHNlKSB7XG5cdFx0XHRcdGRhdGFba2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0YXN5bmMgbG9hZChyZWxhdGlvbnM6IEFycmF5PHN0cmluZz4pIHtcblx0XHRjb25zdCBvcGVyYXRpb25zID0gcmVsYXRpb25zLm1hcCgocmVsYXRpb24pID0+ICgodGhpcyBhcyBhbnkpW3JlbGF0aW9uXSgpIGFzIEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXA8dGhpcz4pLmdldCgpKTtcblx0XHRjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwob3BlcmF0aW9ucyk7XG5cdFx0cmVzdWx0cy5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3QgbmFtZSA9IHJlbGF0aW9uc1tpbmRleF07XG5cdFx0XHR0aGlzLnNldChuYW1lIGFzIGtleW9mIFQsIDxhbnk+ZGF0YSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhbGwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWxsKCk7XG5cdH1cblxuXHRhc3luYyBjcmVhdGUoZGF0YT86IFQpIHtcblx0XHRpZiAoZGF0YSkge1xuXHRcdFx0dGhpcy5maWxsKGRhdGEpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0KCdjcmVhdGVkX2F0JywgbmV3IERhdGUoKS50b0pTT04oKSk7XG5cdFx0dGhpcy5zZXQoJ3VwZGF0ZWRfYXQnLCBuZXcgRGF0ZSgpLnRvSlNPTigpKTtcblxuXHRcdHRoaXMuY2FsbEV2ZW50KCdjcmVhdGluZycpLmNhbGxFdmVudCgnc2F2aW5nJyk7XG5cblx0XHRjb25zdCByZWYgPSB0aGlzLmdldENvbGxlY3Rpb24oKS5kb2MoKTtcblxuXHRcdGF3YWl0IHJlZi5zZXQoe1xuXHRcdFx0Li4udGhpcy5kYXRhLFxuXHRcdFx0aWQ6IHJlZi5pZCxcblx0XHR9KTtcblxuXHRcdHRoaXMuY2FsbEV2ZW50KCdjcmVhdGVkJykuY2FsbEV2ZW50KCdzYXZlZCcpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXN5bmMgdXBkYXRlKGRhdGE/OiBQYXJ0aWFsPFQ+KSB7XG5cdFx0aWYgKGRhdGEpIHtcblx0XHRcdHRoaXMuZmlsbChkYXRhKTtcblx0XHR9XG5cdFx0Y29uc3Qgb2xkVXBkYXRlZEF0ID0gdGhpcy5nZXQoJ3VwZGF0ZWRfYXQnKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5jYWxsRXZlbnQoJ3VwZGF0aW5nJykuY2FsbEV2ZW50KCdzYXZpbmcnKTtcblx0XHRcdHRoaXMuc2V0KCd1cGRhdGVkX2F0JywgbmV3IERhdGUoKS50b0pTT04oKSk7XG5cblx0XHRcdGF3YWl0IHRoaXMuZ2V0Q29sbGVjdGlvbigpXG5cdFx0XHRcdC5kb2ModGhpcy5kYXRhLmlkKVxuXHRcdFx0XHQuc2V0KHtcblx0XHRcdFx0XHQuLi50aGlzLndpdGhvdXRSZWxhdGlvbnMoKSxcblx0XHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY2FsbEV2ZW50KCd1cGRhdGVkJykuY2FsbEV2ZW50KCdzYXZlZCcpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRoaXMuc2V0KCd1cGRhdGVkX2F0Jywgb2xkVXBkYXRlZEF0KTtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxuXG5cdGlkKCkge1xuXHRcdHJldHVybiB0aGlzLmdldCgnaWQnKSBhcyBzdHJpbmc7XG5cdH1cblxuXHRzYXZlKGRhdGE/OiBQYXJ0aWFsPFQ+KSB7XG5cdFx0aWYgKGRhdGEpIHtcblx0XHRcdHRoaXMuZmlsbChkYXRhKTtcblx0XHR9XG5cdFx0cmV0dXJuICEoJ2lkJyBpbiB0aGlzLmRhdGEpIHx8ICF0aGlzLmRhdGEuaWQgfHwgdGhpcy5kYXRhLmlkLmxlbmd0aCA9PT0gMCA/IHRoaXMuY3JlYXRlKCkgOiB0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0dW5zZXQ8SyBleHRlbmRzIGtleW9mIFQ+KGtleTogSykge1xuXHRcdGRlbGV0ZSB0aGlzLmRhdGFba2V5XTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGhhczxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KGtleSkgIT09IG51bGw7XG5cdH1cbn1cbiJdfQ==