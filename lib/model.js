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

var _firebase = _interopRequireDefault(require("firebase"));

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

      return this.data[key];
    }
  }, {
    key: "getData",
    value: function getData() {
      return _objectSpread(_objectSpread({}, this.data), this.getDates());
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

                newData = _objectSpread({}, this.data);
                this.fill(newData);
                this.set('created_at', _firebase["default"].firestore.FieldValue.serverTimestamp());
                this.set('updated_at', _firebase["default"].firestore.FieldValue.serverTimestamp());
                this.callEvent('creating').callEvent('saving');
                _context8.next = 8;
                return this.getCollection().add(newData);

              case 8:
                ref = _context8.sent;
                _context8.next = 11;
                return ref.get();

              case 11:
                document = _context8.sent;
                this.forceFill(_objectSpread(_objectSpread({}, document.data()), {}, {
                  id: document.id
                }));
                this.callEvent('created').callEvent('saved');
                return _context8.abrupt("return", this);

              case 15:
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
                this.set('updated_at', _firebase["default"].firestore.FieldValue.serverTimestamp());
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
  }, {
    key: "getDates",
    value: function getDates() {
      return {
        created_at: this.has('created_at') ? new Date(this.get('created_at').seconds * 1000) : null,
        updated_at: this.has('updated_at') ? new Date(this.get('updated_at').seconds * 1000) : null
      };
    }
  }]);

  return Model;
}(_hasEvent.HasEvent);

exports.Model = Model;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbC50cyJdLCJuYW1lcyI6WyJNb2RlbCIsImRhdGEiLCJib290aW5nIiwiZmlsbGFibGVzIiwiZmlsbGFibGUiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJ0b0xvd2VyQ2FzZSIsImlkIiwidW5kZWZpbmVkIiwiZmlsbCIsImJvb3RlZCIsIk9iamVjdCIsImVudHJpZXMiLCJnZXREYXRhIiwidmFsdWVzIiwia2V5cyIsInBhZ2UiLCJwZXJQYWdlIiwiY29sbGVjdGlvbiIsImdldENvbGxlY3Rpb24iLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5IiwibGltaXQiLCJhbW91bnQiLCJzdGFydEF0IiwiZ2V0Iiwic25hcHNob3QiLCJDb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiaW5zdGFuY2UiLCJ0eXBlIiwiZm9yY2VGaWxsIiwicHVzaCIsImNsZWFyUXVlcmllcyIsImRvYyIsIkVycm9yIiwiZmluZCIsImZpbGxlciIsImluY2x1ZGVzIiwic2V0IiwiYWxsIiwibGVuZ3RoIiwiY2FsbEV2ZW50IiwiZ2V0RGF0ZXMiLCJnZXRBbGwiLCJyZWxhdGlvbnMiLCJvcGVyYXRpb25zIiwibWFwIiwicmVsYXRpb24iLCJQcm9taXNlIiwicmVzdWx0cyIsImluZGV4IiwibmV3RGF0YSIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsImFkZCIsInJlZiIsIm9sZFVwZGF0ZWRBdCIsInVwZGF0ZSIsImNyZWF0ZSIsImNyZWF0ZWRfYXQiLCJoYXMiLCJEYXRlIiwic2Vjb25kcyIsInVwZGF0ZWRfYXQiLCJIYXNFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsSzs7Ozs7QUFL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QixFQUFpQztBQUNoQyxhQUFPLEtBQUszQixJQUFMLENBQVUyQixHQUFWLENBQVA7QUFDQSxhQUFPLElBQVA7QUFDQTs7O1dBRUQsYUFBdUJBLEdBQXZCLEVBQStCO0FBQzlCLGFBQU8sS0FBS0ksR0FBTCxDQUFTSixHQUFULE1BQWtCLElBQXpCO0FBQ0E7OztXQUVELG9CQUFXO0FBQ1YsYUFBTztBQUNOMEMsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLEdBQUwsQ0FBUyxZQUFULElBQ1QsSUFBSUMsSUFBSixDQUFlLEtBQUt4QyxHQUFMLENBQVMsWUFBVCxDQUFOLENBQThCeUMsT0FBOUIsR0FBd0MsSUFBakQsQ0FEUyxHQUVULElBSEc7QUFJTkMsUUFBQUEsVUFBVSxFQUFFLEtBQUtILEdBQUwsQ0FBUyxZQUFULElBQ1QsSUFBSUMsSUFBSixDQUFlLEtBQUt4QyxHQUFMLENBQVMsWUFBVCxDQUFOLENBQThCeUMsT0FBOUIsR0FBd0MsSUFBakQsQ0FEUyxHQUVUO0FBTkcsT0FBUDtBQVFBOzs7O0VBdmFvREUsa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi9jb2xsZWN0aW9uJztcclxuaW1wb3J0IHsgSGFzRXZlbnQgfSBmcm9tICcuL2hhcy1ldmVudCc7XHJcbmltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJztcclxuaW1wb3J0IHsgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcCwgTW9kZWxEYXRhIH0gZnJvbSAnLi9jb250cmFjdHMnO1xyXG5pbXBvcnQgeyBtYWtlQ29sbGVjdGlvbiB9IGZyb20gJy4vZGInO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGVsPFQgZXh0ZW5kcyBNb2RlbERhdGEgPSBhbnk+IGV4dGVuZHMgSGFzRXZlbnQ8VD4ge1xyXG5cdHByb3RlY3RlZCBmaWxsYWJsZXM6IEFycmF5PHN0cmluZz47XHJcblx0cHJvdGVjdGVkIGRhdGE6IFQgPSB7fSBhcyBUO1xyXG5cdHR5cGU6IGFueSA9IE1vZGVsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhPzogUGFydGlhbDxUPikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYm9vdGluZygpO1xyXG5cdFx0dGhpcy5maWxsYWJsZXMgPSB0aGlzLmZpbGxhYmxlKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBwbHVyYWxpemUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG5cdFx0aWYgKCEoJ2lkJyBpbiB0aGlzLmRhdGEpKSB7XHJcblx0XHRcdHRoaXMuZGF0YS5pZCA9PT0gJyc7XHJcblx0XHR9XHJcblx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuZmlsbChkYXRhKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuYm9vdGVkKCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZmlsbGFibGUoKTogQXJyYXk8c3RyaW5nPiB7XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgYm9vdGluZygpIHt9XHJcblxyXG5cdHByb3RlY3RlZCBib290ZWQoKSB7fVxyXG5cclxuXHRlbnRyaWVzKCkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuZ2V0RGF0YSgpKTtcclxuXHR9XHJcblxyXG5cdHZhbHVlcygpIHtcclxuXHRcdHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuZ2V0RGF0YSgpKTtcclxuXHR9XHJcblxyXG5cdGtleXMoKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0Z2V0VGFibGVOYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdHRvSlNPTigpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldERhdGEoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHBhZ2luYXRlKHBhZ2U6IG51bWJlciwgcGVyUGFnZTogbnVtYmVyKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbigpIGFzIGFueTtcclxuXHRcdFx0dGhpcy5xdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciwgdmFsdWUgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShcclxuXHRcdFx0XHRcdFx0XHRxdWVyeS5rZXksXHJcblx0XHRcdFx0XHRcdFx0b3BlcmF0b3IsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWVcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKFxyXG5cdFx0XHRcdFx0XHRcdFx0cXVlcnkua2V5LFxyXG5cdFx0XHRcdFx0XHRcdFx0Jz09JyxcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XHJcblx0XHRcdFx0XHRcdHF1ZXJ5LnZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUoXHJcblx0XHRcdFx0XHRcdFx0XHRxdWVyeS5rZXksXHJcblx0XHRcdFx0XHRcdFx0XHQnIT0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWVcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgY29sbGVjdGlvblxyXG5cdFx0XHRcdC5saW1pdChwZXJQYWdlKVxyXG5cdFx0XHRcdC5zdGFydEF0KHBlclBhZ2UgKiAocGFnZSAtIDEpKVxyXG5cdFx0XHRcdC5nZXQoKTtcclxuXHJcblx0XHRcdGNvbnN0IGRhdGEgPSBuZXcgQ29sbGVjdGlvbigpO1xyXG5cdFx0XHRzbmFwc2hvdC5mb3JFYWNoKChkb2N1bWVudDogeyBkYXRhOiAoKSA9PiBUOyBpZDogYW55IH0pID0+IHtcclxuXHRcdFx0XHRjb25zdCBib2R5ID0ge1xyXG5cdFx0XHRcdFx0Li4uZG9jdW1lbnQuZGF0YSgpLFxyXG5cdFx0XHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgdGhpcy50eXBlKCk7XHJcblx0XHRcdFx0aW5zdGFuY2UuZm9yY2VGaWxsKGJvZHkpO1xyXG5cdFx0XHRcdGRhdGEucHVzaChpbnN0YW5jZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGZpbmRPbmUoaWQ6IHN0cmluZykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oKSBhcyBhbnk7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUoXHJcblx0XHRcdFx0XHRcdFx0cXVlcnkua2V5LFxyXG5cdFx0XHRcdFx0XHRcdG9wZXJhdG9yLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgdmFsdWVzIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShcclxuXHRcdFx0XHRcdFx0XHRcdHF1ZXJ5LmtleSxcclxuXHRcdFx0XHRcdFx0XHRcdCc9PScsXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHRxdWVyeS52YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKFxyXG5cdFx0XHRcdFx0XHRcdFx0cXVlcnkua2V5LFxyXG5cdFx0XHRcdFx0XHRcdFx0JyE9JyxcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBkb2N1bWVudCA9IGF3YWl0IGNvbGxlY3Rpb24uZG9jKGlkKS5nZXQoKTtcclxuXHRcdFx0aWYgKCFkb2N1bWVudCkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTW9kZWwgZG9lcyBub3QgZXhpc3QuJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgYm9keSA9IHtcclxuXHRcdFx0XHQuLi5kb2N1bWVudC5kYXRhKCksXHJcblx0XHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmZvcmNlRmlsbChib2R5KTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRDb2xsZWN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIG1ha2VDb2xsZWN0aW9uKHRoaXMubmFtZSk7XHJcblx0fVxyXG5cclxuXHRmaWxsKGRhdGE6IFBhcnRpYWw8VD4pIHtcclxuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHR0aGlzLmZpbGxhYmxlcy5maW5kKChmaWxsZXIpID0+IGZpbGxlciA9PT0ga2V5KSAhPT0gdW5kZWZpbmVkIHx8XHJcblx0XHRcdFx0dGhpcy5maWxsYWJsZXMuaW5jbHVkZXMoa2V5KVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLnNldChrZXkgYXMga2V5b2YgVCwgdmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGZvcmNlRmlsbChkYXRhOiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xyXG5cdFx0XHR0aGlzLnNldChrZXkgYXMgYW55LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGFzeW5jIGNvdW50KCkge1xyXG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMuYWxsKCk7XHJcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHRhc3luYyBkZWxldGUoKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLmNhbGxFdmVudCgnZGVsZXRpbmcnKTtcclxuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oKSBhcyBhbnk7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUoXHJcblx0XHRcdFx0XHRcdFx0cXVlcnkua2V5LFxyXG5cdFx0XHRcdFx0XHRcdG9wZXJhdG9yLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgdmFsdWVzIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShcclxuXHRcdFx0XHRcdFx0XHRcdHF1ZXJ5LmtleSxcclxuXHRcdFx0XHRcdFx0XHRcdCc9PScsXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHRxdWVyeS52YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKFxyXG5cdFx0XHRcdFx0XHRcdFx0cXVlcnkua2V5LFxyXG5cdFx0XHRcdFx0XHRcdFx0JyE9JyxcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRhd2FpdCBjb2xsZWN0aW9uLmRvYyh0aGlzLmRhdGEuaWQpLmRlbGV0ZSgpO1xyXG5cdFx0XHR0aGlzLmNhbGxFdmVudCgnZGVsZXRlZCcpO1xyXG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldDxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLLCB2YWx1ZTogVFtLXSkge1xyXG5cdFx0dGhpcy5kYXRhW2tleV0gPSB2YWx1ZTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Z2V0PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEspIHtcclxuXHRcdGlmICghKGtleSBpbiB0aGlzLmRhdGEpKSB7XHJcblx0XHRcdHJldHVybiAobnVsbCBhcyB1bmtub3duKSBhcyBUW0tdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YVtrZXldO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdC4uLnRoaXMuZGF0YSxcclxuXHRcdFx0Li4udGhpcy5nZXREYXRlcygpLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZpcnN0KCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMubGltaXQoMSkuZ2V0QWxsKCk7XHJcblx0XHRcdGlmIChjb2xsZWN0aW9uLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gY29sbGVjdGlvblswXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8Q29sbGVjdGlvbjx0aGlzPj4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oKSBhcyBhbnk7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUoXHJcblx0XHRcdFx0XHRcdFx0cXVlcnkua2V5LFxyXG5cdFx0XHRcdFx0XHRcdG9wZXJhdG9yLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgdmFsdWVzIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShcclxuXHRcdFx0XHRcdFx0XHRcdHF1ZXJ5LmtleSxcclxuXHRcdFx0XHRcdFx0XHRcdCc9PScsXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHRxdWVyeS52YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKFxyXG5cdFx0XHRcdFx0XHRcdFx0cXVlcnkua2V5LFxyXG5cdFx0XHRcdFx0XHRcdFx0JyE9JyxcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNvbGxlY3Rpb24uZ2V0KCk7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBuZXcgQ29sbGVjdGlvbigpO1xyXG5cdFx0XHRzbmFwc2hvdC5mb3JFYWNoKChkb2N1bWVudDogYW55KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgYm9keSA9IHtcclxuXHRcdFx0XHRcdC4uLmRvY3VtZW50LmRhdGEoKSxcclxuXHRcdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSgpO1xyXG5cdFx0XHRcdGluc3RhbmNlLmZvcmNlRmlsbChib2R5KTtcclxuXHRcdFx0XHRkYXRhLnB1c2goaW5zdGFuY2UpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGxvYWQocmVsYXRpb25zOiBBcnJheTxzdHJpbmc+KSB7XHJcblx0XHRjb25zdCBvcGVyYXRpb25zID0gcmVsYXRpb25zLm1hcCgocmVsYXRpb24pID0+XHJcblx0XHRcdCgodGhpcyBhcyBhbnkpW3JlbGF0aW9uXSgpIGFzIEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXA8dGhpcz4pLmdldCgpXHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKG9wZXJhdGlvbnMpO1xyXG5cdFx0cmVzdWx0cy5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRjb25zdCBuYW1lID0gcmVsYXRpb25zW2luZGV4XTtcclxuXHRcdFx0dGhpcy5zZXQobmFtZSBhcyBrZXlvZiBULCA8YW55PmRhdGEpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGFsbCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldEFsbCgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgY3JlYXRlKGRhdGE/OiBUKSB7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBuZXdEYXRhID0geyAuLi50aGlzLmRhdGEgfTtcclxuXHRcdHRoaXMuZmlsbChuZXdEYXRhKTtcclxuXHRcdHRoaXMuc2V0KFxyXG5cdFx0XHQnY3JlYXRlZF9hdCcsXHJcblx0XHRcdDxhbnk+ZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKClcclxuXHRcdCk7XHJcblx0XHR0aGlzLnNldChcclxuXHRcdFx0J3VwZGF0ZWRfYXQnLFxyXG5cdFx0XHQ8YW55PmZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jYWxsRXZlbnQoJ2NyZWF0aW5nJykuY2FsbEV2ZW50KCdzYXZpbmcnKTtcclxuXHRcdGNvbnN0IHJlZiA9IGF3YWl0IHRoaXMuZ2V0Q29sbGVjdGlvbigpLmFkZChuZXdEYXRhKTtcclxuXHRcdGNvbnN0IGRvY3VtZW50ID0gYXdhaXQgcmVmLmdldCgpO1xyXG5cdFx0dGhpcy5mb3JjZUZpbGwoe1xyXG5cdFx0XHQuLi4oPFQ+ZG9jdW1lbnQuZGF0YSgpKSxcclxuXHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmNhbGxFdmVudCgnY3JlYXRlZCcpLmNhbGxFdmVudCgnc2F2ZWQnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgdXBkYXRlKGRhdGE/OiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBvbGRVcGRhdGVkQXQgPSB0aGlzLmdldCgndXBkYXRlZF9hdCcpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dGhpcy5jYWxsRXZlbnQoJ3VwZGF0aW5nJykuY2FsbEV2ZW50KCdzYXZpbmcnKTtcclxuXHRcdFx0dGhpcy5zZXQoXHJcblx0XHRcdFx0J3VwZGF0ZWRfYXQnLFxyXG5cdFx0XHRcdDxhbnk+ZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKClcclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHsgLi4udGhpcy5kYXRhIH0gYXMgYW55O1xyXG5cdFx0XHRkZWxldGUgZGF0YS5pZDtcclxuXHRcdFx0YXdhaXQgdGhpcy5nZXRDb2xsZWN0aW9uKCkuZG9jKHRoaXMuZGF0YS5pZCkudXBkYXRlKGRhdGEpO1xyXG5cdFx0XHRjb25zdCBkb2N1bWVudCA9IGF3YWl0IHRoaXMuZ2V0Q29sbGVjdGlvbigpLmRvYyh0aGlzLmRhdGEuaWQpLmdldCgpO1xyXG5cdFx0XHR0aGlzLmZvcmNlRmlsbCh7XHJcblx0XHRcdFx0Li4uKDxUPmRvY3VtZW50LmRhdGEoKSksXHJcblx0XHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5jYWxsRXZlbnQoJ3VwZGF0ZWQnKS5jYWxsRXZlbnQoJ3NhdmVkJyk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhpcy5zZXQoJ3VwZGF0ZWRfYXQnLCBvbGRVcGRhdGVkQXQpO1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0KCdpZCcpIGFzIHN0cmluZztcclxuXHR9XHJcblxyXG5cdHNhdmUoZGF0YT86IFBhcnRpYWw8VD4pOiBQcm9taXNlPHRoaXM+IHtcclxuXHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdHRoaXMuZmlsbChkYXRhKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAhKCdpZCcgaW4gdGhpcy5kYXRhKSB8fFxyXG5cdFx0XHQhdGhpcy5kYXRhLmlkIHx8XHJcblx0XHRcdHRoaXMuZGF0YS5pZC5sZW5ndGggPT09IDBcclxuXHRcdFx0PyB0aGlzLmNyZWF0ZSgpXHJcblx0XHRcdDogdGhpcy51cGRhdGUoKTtcclxuXHR9XHJcblxyXG5cdHVuc2V0PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEspIHtcclxuXHRcdGRlbGV0ZSB0aGlzLmRhdGFba2V5XTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0aGFzPEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEspIHtcclxuXHRcdHJldHVybiB0aGlzLmdldChrZXkpICE9PSBudWxsO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0ZXMoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRjcmVhdGVkX2F0OiB0aGlzLmhhcygnY3JlYXRlZF9hdCcpXHJcblx0XHRcdFx0PyBuZXcgRGF0ZSgoPGFueT50aGlzLmdldCgnY3JlYXRlZF9hdCcpKS5zZWNvbmRzICogMTAwMClcclxuXHRcdFx0XHQ6IG51bGwsXHJcblx0XHRcdHVwZGF0ZWRfYXQ6IHRoaXMuaGFzKCd1cGRhdGVkX2F0JylcclxuXHRcdFx0XHQ/IG5ldyBEYXRlKCg8YW55PnRoaXMuZ2V0KCd1cGRhdGVkX2F0JykpLnNlY29uZHMgKiAxMDAwKVxyXG5cdFx0XHRcdDogbnVsbCxcclxuXHRcdH07XHJcblx0fVxyXG59XHJcbiJdfQ==