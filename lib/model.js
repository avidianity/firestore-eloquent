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
                this.clearQueries();
                return _context4.abrupt("return");

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 11]]);
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
                _context5.prev = 0;
                _context5.next = 3;
                return this.limit(1).getAll();

              case 3:
                collection = _context5.sent;

                if (!(collection.length > 0)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", collection[0]);

              case 6:
                return _context5.abrupt("return", null);

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 9]]);
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
                this.clearQueries();
                return _context6.abrupt("return", data);

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6["catch"](0);
                throw _context6.t0;

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 12]]);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
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
        var newData, ref, document;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (data) {
                  this.fill(data);
                }

                this.set('created_at', new Date().toJSON());
                this.set('updated_at', new Date().toJSON());
                newData = _objectSpread({}, this.data);
                this.callEvent('creating').callEvent('saving');
                _context8.next = 7;
                return this.getCollection().add(newData);

              case 7:
                ref = _context8.sent;
                _context8.next = 10;
                return ref.get();

              case 10:
                document = _context8.sent;
                this.forceFill(_objectSpread(_objectSpread({}, document.data()), {}, {
                  id: document.id
                }));
                _context8.next = 14;
                return this.getCollection().doc(document.id).update(this.data);

              case 14:
                this.callEvent('created').callEvent('saved');
                return _context8.abrupt("return", this);

              case 16:
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
        var oldUpdatedAt, _data, document;

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
                _data = _objectSpread({}, this.data);
                delete _data.id;
                _context9.next = 9;
                return this.getCollection().doc(this.data.id).update(_data);

              case 9:
                _context9.next = 11;
                return this.getCollection().doc(this.data.id).get();

              case 11:
                document = _context9.sent;
                this.forceFill(_objectSpread(_objectSpread({}, document.data()), {}, {
                  id: document.id
                }));
                this.callEvent('updated').callEvent('saved');
                return _context9.abrupt("return", this);

              case 17:
                _context9.prev = 17;
                _context9.t0 = _context9["catch"](2);
                this.set('updated_at', oldUpdatedAt);
                throw _context9.t0;

              case 21:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[2, 17]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbC50cyJdLCJuYW1lcyI6WyJNb2RlbCIsImRhdGEiLCJib290aW5nIiwiZmlsbGFibGVzIiwiZmlsbGFibGUiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJ0b0xvd2VyQ2FzZSIsImlkIiwidW5kZWZpbmVkIiwiZmlsbCIsImJvb3RlZCIsIk9iamVjdCIsImVudHJpZXMiLCJnZXREYXRhIiwidmFsdWVzIiwia2V5cyIsInBhZ2UiLCJwZXJQYWdlIiwiY29sbGVjdGlvbiIsImdldENvbGxlY3Rpb24iLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5IiwibGltaXQiLCJhbW91bnQiLCJzdGFydEF0IiwiZ2V0Iiwic25hcHNob3QiLCJDb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiaW5zdGFuY2UiLCJ0eXBlIiwiZm9yY2VGaWxsIiwicHVzaCIsImNsZWFyUXVlcmllcyIsImRvYyIsIkVycm9yIiwiZmluZCIsImZpbGxlciIsImluY2x1ZGVzIiwic2V0IiwiYWxsIiwibGVuZ3RoIiwiY2FsbEV2ZW50IiwiZ2V0QWxsIiwicmVsYXRpb25zIiwib3BlcmF0aW9ucyIsIm1hcCIsInJlbGF0aW9uIiwiUHJvbWlzZSIsInJlc3VsdHMiLCJpbmRleCIsIkRhdGUiLCJ0b0pTT04iLCJuZXdEYXRhIiwiYWRkIiwicmVmIiwidXBkYXRlIiwib2xkVXBkYXRlZEF0IiwiY3JlYXRlIiwiSGFzRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR2FBLEs7Ozs7O0FBS1osaUJBQVlDLElBQVosRUFBK0I7QUFBQTs7QUFBQTs7QUFDOUI7O0FBRDhCOztBQUFBLDJEQUhYLEVBR1c7O0FBQUEsMkRBRm5CRCxLQUVtQjs7QUFFOUIsVUFBS0UsT0FBTDs7QUFD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QXVCa0IsWUFBdkI7QUFuQkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQXdCQSxjQUFLO0FBQ0osYUFBTyxLQUFLakMsR0FBTCxDQUFTLElBQVQsQ0FBUDtBQUNBOzs7V0FFRCxjQUFLL0IsSUFBTCxFQUF1QztBQUN0QyxVQUFJQSxJQUFKLEVBQVU7QUFDVCxhQUFLUyxJQUFMLENBQVVULElBQVY7QUFDQTs7QUFDRCxhQUFPLEVBQUUsUUFBUSxLQUFLQSxJQUFmLEtBQXdCLENBQUMsS0FBS0EsSUFBTCxDQUFVTyxFQUFuQyxJQUF5QyxLQUFLUCxJQUFMLENBQVVPLEVBQVYsQ0FBYXlDLE1BQWIsS0FBd0IsQ0FBakUsR0FBcUUsS0FBS2lCLE1BQUwsRUFBckUsR0FBcUYsS0FBS0YsTUFBTCxFQUE1RjtBQUNBOzs7V0FFRCxlQUF5QnBDLEdBQXpCLEVBQWlDO0FBQ2hDLGFBQU8sS0FBSzNCLElBQUwsQ0FBVTJCLEdBQVYsQ0FBUDtBQUNBLGFBQU8sSUFBUDtBQUNBOzs7V0FFRCxhQUF1QkEsR0FBdkIsRUFBK0I7QUFDOUIsYUFBTyxLQUFLSSxHQUFMLENBQVNKLEdBQVQsTUFBa0IsSUFBekI7QUFDQTs7OztFQTVXb0R1QyxrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuL2NvbGxlY3Rpb24nO1xyXG5pbXBvcnQgeyBIYXNFdmVudCB9IGZyb20gJy4vaGFzLWV2ZW50JztcclxuaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnO1xyXG5pbXBvcnQgeyBJbnRlcmFjdHNXaXRoUmVsYXRpb25zaGlwLCBNb2RlbERhdGEgfSBmcm9tICcuL2NvbnRyYWN0cyc7XHJcbmltcG9ydCB7IG1ha2VDb2xsZWN0aW9uIH0gZnJvbSAnLi9kYic7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kZWw8VCBleHRlbmRzIE1vZGVsRGF0YSA9IGFueT4gZXh0ZW5kcyBIYXNFdmVudDxUPiB7XHJcblx0cHJvdGVjdGVkIGZpbGxhYmxlczogQXJyYXk8c3RyaW5nPjtcclxuXHRwcm90ZWN0ZWQgZGF0YTogVCA9IHt9IGFzIFQ7XHJcblx0dHlwZTogYW55ID0gTW9kZWw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5ib290aW5nKCk7XHJcblx0XHR0aGlzLmZpbGxhYmxlcyA9IHRoaXMuZmlsbGFibGUoKTtcclxuXHRcdHRoaXMubmFtZSA9IHBsdXJhbGl6ZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcblx0XHRpZiAoISgnaWQnIGluIHRoaXMuZGF0YSkpIHtcclxuXHRcdFx0dGhpcy5kYXRhLmlkID09PSAnJztcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5maWxsKGRhdGEpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ib290ZWQoKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBmaWxsYWJsZSgpOiBBcnJheTxzdHJpbmc+IHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBib290aW5nKCkge31cclxuXHJcblx0cHJvdGVjdGVkIGJvb3RlZCgpIHt9XHJcblxyXG5cdGVudHJpZXMoKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5nZXREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0dmFsdWVzKCkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5nZXREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0a2V5cygpIHtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldERhdGEoKSk7XHJcblx0fVxyXG5cclxuXHRnZXRUYWJsZU5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0dG9KU09OKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGF0YSgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgcGFnaW5hdGUocGFnZTogbnVtYmVyLCBwZXJQYWdlOiBudW1iZXIpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkgYXMgYW55O1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJz09JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICchPScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNvbGxlY3Rpb25cclxuXHRcdFx0XHQubGltaXQocGVyUGFnZSlcclxuXHRcdFx0XHQuc3RhcnRBdChwZXJQYWdlICogKHBhZ2UgLSAxKSlcclxuXHRcdFx0XHQuZ2V0KCk7XHJcblxyXG5cdFx0XHRjb25zdCBkYXRhID0gbmV3IENvbGxlY3Rpb24oKTtcclxuXHRcdFx0c25hcHNob3QuZm9yRWFjaCgoZG9jdW1lbnQ6IHsgZGF0YTogKCkgPT4gVDsgaWQ6IGFueSB9KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgYm9keSA9IHtcclxuXHRcdFx0XHRcdC4uLmRvY3VtZW50LmRhdGEoKSxcclxuXHRcdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSgpO1xyXG5cdFx0XHRcdGluc3RhbmNlLmZvcmNlRmlsbChib2R5KTtcclxuXHRcdFx0XHRkYXRhLnB1c2goaW5zdGFuY2UpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBmaW5kT25lKGlkOiBzdHJpbmcpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkgYXMgYW55O1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJz09JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICchPScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBkb2N1bWVudCA9IGF3YWl0IGNvbGxlY3Rpb24uZG9jKGlkKS5nZXQoKTtcclxuXHRcdFx0aWYgKCFkb2N1bWVudCkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTW9kZWwgZG9lcyBub3QgZXhpc3QuJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgYm9keSA9IHtcclxuXHRcdFx0XHQuLi5kb2N1bWVudC5kYXRhKCksXHJcblx0XHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmZvcmNlRmlsbChib2R5KTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRDb2xsZWN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIG1ha2VDb2xsZWN0aW9uKHRoaXMubmFtZSk7XHJcblx0fVxyXG5cclxuXHRmaWxsKGRhdGE6IFBhcnRpYWw8VD4pIHtcclxuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcblx0XHRcdGlmICh0aGlzLmZpbGxhYmxlcy5maW5kKChmaWxsZXIpID0+IGZpbGxlciA9PT0ga2V5KSAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsbGFibGVzLmluY2x1ZGVzKGtleSkpIHtcclxuXHRcdFx0XHR0aGlzLnNldChrZXkgYXMga2V5b2YgVCwgdmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGZvcmNlRmlsbChkYXRhOiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xyXG5cdFx0XHR0aGlzLnNldChrZXkgYXMgYW55LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGFzeW5jIGNvdW50KCkge1xyXG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMuYWxsKCk7XHJcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHRhc3luYyBkZWxldGUoKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLmNhbGxFdmVudCgnZGVsZXRpbmcnKTtcclxuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oKSBhcyBhbnk7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IHZhbHVlcyB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnPT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHRxdWVyeS52YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJyE9JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGF3YWl0IGNvbGxlY3Rpb24uZG9jKHRoaXMuZGF0YS5pZCkuZGVsZXRlKCk7XHJcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCdkZWxldGVkJyk7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEssIHZhbHVlOiBUW0tdKSB7XHJcblx0XHR0aGlzLmRhdGFba2V5XSA9IHZhbHVlO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRnZXQ8SyBleHRlbmRzIGtleW9mIFQ+KGtleTogSykge1xyXG5cdFx0aWYgKCEoa2V5IGluIHRoaXMuZGF0YSkpIHtcclxuXHRcdFx0cmV0dXJuIG51bGwgYXMgdW5rbm93biBhcyBUW0tdO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmRhdGFba2V5XTtcclxuXHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RlbCkge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWUuZ2V0RGF0YSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoKSB7XHJcblx0XHRjb25zdCBkYXRhOiBhbnkgPSB7fTtcclxuXHJcblx0XHRmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRhdGEpIHtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmRhdGFba2V5XTtcclxuXHJcblx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGVsKSB7XHJcblx0XHRcdFx0ZGF0YVtrZXldID0gdmFsdWUuZ2V0RGF0YSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGFba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmaXJzdCgpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCB0aGlzLmxpbWl0KDEpLmdldEFsbCgpO1xyXG5cdFx0XHRpZiAoY29sbGVjdGlvbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNvbGxlY3Rpb25bMF07XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGdldEFsbCgpOiBQcm9taXNlPENvbGxlY3Rpb248dGhpcz4+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkgYXMgYW55O1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJz09JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICchPScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNvbGxlY3Rpb24uZ2V0KCk7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBuZXcgQ29sbGVjdGlvbigpO1xyXG5cdFx0XHRzbmFwc2hvdC5mb3JFYWNoKChkb2N1bWVudDogYW55KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgYm9keSA9IHtcclxuXHRcdFx0XHRcdC4uLmRvY3VtZW50LmRhdGEoKSxcclxuXHRcdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSgpO1xyXG5cdFx0XHRcdGluc3RhbmNlLmZvcmNlRmlsbChib2R5KTtcclxuXHRcdFx0XHRkYXRhLnB1c2goaW5zdGFuY2UpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGxvYWQocmVsYXRpb25zOiBBcnJheTxzdHJpbmc+KSB7XHJcblx0XHRjb25zdCBvcGVyYXRpb25zID0gcmVsYXRpb25zLm1hcCgocmVsYXRpb24pID0+ICgodGhpcyBhcyBhbnkpW3JlbGF0aW9uXSgpIGFzIEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXA8dGhpcz4pLmdldCgpKTtcclxuXHRcdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChvcGVyYXRpb25zKTtcclxuXHRcdHJlc3VsdHMuZm9yRWFjaCgoZGF0YSwgaW5kZXgpID0+IHtcclxuXHRcdFx0Y29uc3QgbmFtZSA9IHJlbGF0aW9uc1tpbmRleF07XHJcblx0XHRcdHRoaXMuc2V0KG5hbWUgYXMga2V5b2YgVCwgPGFueT5kYXRhKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRhbGwoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRBbGwoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGNyZWF0ZShkYXRhPzogVCkge1xyXG5cdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0dGhpcy5maWxsKGRhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2V0KCdjcmVhdGVkX2F0JywgbmV3IERhdGUoKS50b0pTT04oKSk7XHJcblx0XHR0aGlzLnNldCgndXBkYXRlZF9hdCcsIG5ldyBEYXRlKCkudG9KU09OKCkpO1xyXG5cclxuXHRcdGNvbnN0IG5ld0RhdGEgPSB7IC4uLnRoaXMuZGF0YSB9O1xyXG5cclxuXHRcdHRoaXMuY2FsbEV2ZW50KCdjcmVhdGluZycpLmNhbGxFdmVudCgnc2F2aW5nJyk7XHJcblx0XHRjb25zdCByZWYgPSBhd2FpdCB0aGlzLmdldENvbGxlY3Rpb24oKS5hZGQobmV3RGF0YSk7XHJcblx0XHRjb25zdCBkb2N1bWVudCA9IGF3YWl0IHJlZi5nZXQoKTtcclxuXHRcdHRoaXMuZm9yY2VGaWxsKHtcclxuXHRcdFx0Li4uKDxUPmRvY3VtZW50LmRhdGEoKSksXHJcblx0XHRcdGlkOiBkb2N1bWVudC5pZCxcclxuXHRcdH0pO1xyXG5cdFx0YXdhaXQgdGhpcy5nZXRDb2xsZWN0aW9uKCkuZG9jKGRvY3VtZW50LmlkKS51cGRhdGUodGhpcy5kYXRhKTtcclxuXHRcdHRoaXMuY2FsbEV2ZW50KCdjcmVhdGVkJykuY2FsbEV2ZW50KCdzYXZlZCcpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRhc3luYyB1cGRhdGUoZGF0YT86IFBhcnRpYWw8VD4pIHtcclxuXHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdHRoaXMuZmlsbChkYXRhKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IG9sZFVwZGF0ZWRBdCA9IHRoaXMuZ2V0KCd1cGRhdGVkX2F0Jyk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLmNhbGxFdmVudCgndXBkYXRpbmcnKS5jYWxsRXZlbnQoJ3NhdmluZycpO1xyXG5cdFx0XHR0aGlzLnNldCgndXBkYXRlZF9hdCcsIG5ldyBEYXRlKCkudG9KU09OKCkpO1xyXG5cdFx0XHRjb25zdCBkYXRhID0geyAuLi50aGlzLmRhdGEgfSBhcyBhbnk7XHJcblx0XHRcdGRlbGV0ZSBkYXRhLmlkO1xyXG5cdFx0XHRhd2FpdCB0aGlzLmdldENvbGxlY3Rpb24oKS5kb2ModGhpcy5kYXRhLmlkKS51cGRhdGUoZGF0YSk7XHJcblx0XHRcdGNvbnN0IGRvY3VtZW50ID0gYXdhaXQgdGhpcy5nZXRDb2xsZWN0aW9uKCkuZG9jKHRoaXMuZGF0YS5pZCkuZ2V0KCk7XHJcblx0XHRcdHRoaXMuZm9yY2VGaWxsKHtcclxuXHRcdFx0XHQuLi4oPFQ+ZG9jdW1lbnQuZGF0YSgpKSxcclxuXHRcdFx0XHRpZDogZG9jdW1lbnQuaWQsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmNhbGxFdmVudCgndXBkYXRlZCcpLmNhbGxFdmVudCgnc2F2ZWQnKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aGlzLnNldCgndXBkYXRlZF9hdCcsIG9sZFVwZGF0ZWRBdCk7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXQoJ2lkJykgYXMgc3RyaW5nO1xyXG5cdH1cclxuXHJcblx0c2F2ZShkYXRhPzogUGFydGlhbDxUPik6IFByb21pc2U8dGhpcz4ge1xyXG5cdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0dGhpcy5maWxsKGRhdGEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICEoJ2lkJyBpbiB0aGlzLmRhdGEpIHx8ICF0aGlzLmRhdGEuaWQgfHwgdGhpcy5kYXRhLmlkLmxlbmd0aCA9PT0gMCA/IHRoaXMuY3JlYXRlKCkgOiB0aGlzLnVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0dW5zZXQ8SyBleHRlbmRzIGtleW9mIFQ+KGtleTogSykge1xyXG5cdFx0ZGVsZXRlIHRoaXMuZGF0YVtrZXldO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRoYXM8SyBleHRlbmRzIGtleW9mIFQ+KGtleTogSykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0KGtleSkgIT09IG51bGw7XHJcblx0fVxyXG59XHJcbiJdfQ==