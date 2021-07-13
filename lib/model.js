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

                this.set('created_at', _firebase["default"].firestore.FieldValue.serverTimestamp());
                this.set('updated_at', _firebase["default"].firestore.FieldValue.serverTimestamp());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbC50cyJdLCJuYW1lcyI6WyJNb2RlbCIsImRhdGEiLCJib290aW5nIiwiZmlsbGFibGVzIiwiZmlsbGFibGUiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJ0b0xvd2VyQ2FzZSIsImlkIiwidW5kZWZpbmVkIiwiZmlsbCIsImJvb3RlZCIsIk9iamVjdCIsImVudHJpZXMiLCJnZXREYXRhIiwidmFsdWVzIiwia2V5cyIsInBhZ2UiLCJwZXJQYWdlIiwiY29sbGVjdGlvbiIsImdldENvbGxlY3Rpb24iLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5IiwibGltaXQiLCJhbW91bnQiLCJzdGFydEF0IiwiZ2V0Iiwic25hcHNob3QiLCJDb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiaW5zdGFuY2UiLCJ0eXBlIiwiZm9yY2VGaWxsIiwicHVzaCIsImNsZWFyUXVlcmllcyIsImRvYyIsIkVycm9yIiwiZmluZCIsImZpbGxlciIsImluY2x1ZGVzIiwic2V0IiwiYWxsIiwibGVuZ3RoIiwiY2FsbEV2ZW50IiwiZ2V0RGF0ZXMiLCJnZXRBbGwiLCJyZWxhdGlvbnMiLCJvcGVyYXRpb25zIiwibWFwIiwicmVsYXRpb24iLCJQcm9taXNlIiwicmVzdWx0cyIsImluZGV4IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwibmV3RGF0YSIsImFkZCIsInJlZiIsInVwZGF0ZSIsIm9sZFVwZGF0ZWRBdCIsImNyZWF0ZSIsImNyZWF0ZWRfYXQiLCJoYXMiLCJEYXRlIiwic2Vjb25kcyIsInVwZGF0ZWRfYXQiLCJIYXNFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsSzs7Ozs7QUFL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S0FBS0EsSUFBZixLQUF3QixDQUFDLEtBQUtBLElBQUwsQ0FBVU8sRUFBbkMsSUFBeUMsS0FBS1AsSUFBTCxDQUFVTyxFQUFWLENBQWF5QyxNQUFiLEtBQXdCLENBQWpFLEdBQXFFLEtBQUtvQixNQUFMLEVBQXJFLEdBQXFGLEtBQUtGLE1BQUwsRUFBNUY7QUFDQTs7O1dBRUQsZUFBeUJ2QyxHQUF6QixFQUFpQztBQUNoQyxhQUFPLEtBQUszQixJQUFMLENBQVUyQixHQUFWLENBQVA7QUFDQSxhQUFPLElBQVA7QUFDQTs7O1dBRUQsYUFBdUJBLEdBQXZCLEVBQStCO0FBQzlCLGFBQU8sS0FBS0ksR0FBTCxDQUFTSixHQUFULE1BQWtCLElBQXpCO0FBQ0E7OztXQUVELG9CQUFXO0FBQ1YsYUFBTztBQUNOMEMsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLEdBQUwsQ0FBUyxZQUFULElBQXlCLElBQUlDLElBQUosQ0FBZSxLQUFLeEMsR0FBTCxDQUFTLFlBQVQsQ0FBTixDQUE4QnlDLE9BQTlCLEdBQXdDLElBQWpELENBQXpCLEdBQWtGLElBRHhGO0FBRU5DLFFBQUFBLFVBQVUsRUFBRSxLQUFLSCxHQUFMLENBQVMsWUFBVCxJQUF5QixJQUFJQyxJQUFKLENBQWUsS0FBS3hDLEdBQUwsQ0FBUyxZQUFULENBQU4sQ0FBOEJ5QyxPQUE5QixHQUF3QyxJQUFqRCxDQUF6QixHQUFrRjtBQUZ4RixPQUFQO0FBSUE7Ozs7RUFwV29ERSxrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuL2NvbGxlY3Rpb24nO1xyXG5pbXBvcnQgeyBIYXNFdmVudCB9IGZyb20gJy4vaGFzLWV2ZW50JztcclxuaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnO1xyXG5pbXBvcnQgeyBJbnRlcmFjdHNXaXRoUmVsYXRpb25zaGlwLCBNb2RlbERhdGEgfSBmcm9tICcuL2NvbnRyYWN0cyc7XHJcbmltcG9ydCB7IG1ha2VDb2xsZWN0aW9uIH0gZnJvbSAnLi9kYic7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kZWw8VCBleHRlbmRzIE1vZGVsRGF0YSA9IGFueT4gZXh0ZW5kcyBIYXNFdmVudDxUPiB7XHJcblx0cHJvdGVjdGVkIGZpbGxhYmxlczogQXJyYXk8c3RyaW5nPjtcclxuXHRwcm90ZWN0ZWQgZGF0YTogVCA9IHt9IGFzIFQ7XHJcblx0dHlwZTogYW55ID0gTW9kZWw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5ib290aW5nKCk7XHJcblx0XHR0aGlzLmZpbGxhYmxlcyA9IHRoaXMuZmlsbGFibGUoKTtcclxuXHRcdHRoaXMubmFtZSA9IHBsdXJhbGl6ZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcblx0XHRpZiAoISgnaWQnIGluIHRoaXMuZGF0YSkpIHtcclxuXHRcdFx0dGhpcy5kYXRhLmlkID09PSAnJztcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5maWxsKGRhdGEpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ib290ZWQoKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBmaWxsYWJsZSgpOiBBcnJheTxzdHJpbmc+IHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBib290aW5nKCkge31cclxuXHJcblx0cHJvdGVjdGVkIGJvb3RlZCgpIHt9XHJcblxyXG5cdGVudHJpZXMoKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5nZXREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0dmFsdWVzKCkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5nZXREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0a2V5cygpIHtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldERhdGEoKSk7XHJcblx0fVxyXG5cclxuXHRnZXRUYWJsZU5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0dG9KU09OKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGF0YSgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgcGFnaW5hdGUocGFnZTogbnVtYmVyLCBwZXJQYWdlOiBudW1iZXIpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkgYXMgYW55O1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJz09JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICchPScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNvbGxlY3Rpb25cclxuXHRcdFx0XHQubGltaXQocGVyUGFnZSlcclxuXHRcdFx0XHQuc3RhcnRBdChwZXJQYWdlICogKHBhZ2UgLSAxKSlcclxuXHRcdFx0XHQuZ2V0KCk7XHJcblxyXG5cdFx0XHRjb25zdCBkYXRhID0gbmV3IENvbGxlY3Rpb24oKTtcclxuXHRcdFx0c25hcHNob3QuZm9yRWFjaCgoZG9jdW1lbnQ6IHsgZGF0YTogKCkgPT4gVDsgaWQ6IGFueSB9KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgYm9keSA9IHtcclxuXHRcdFx0XHRcdC4uLmRvY3VtZW50LmRhdGEoKSxcclxuXHRcdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMudHlwZSgpO1xyXG5cdFx0XHRcdGluc3RhbmNlLmZvcmNlRmlsbChib2R5KTtcclxuXHRcdFx0XHRkYXRhLnB1c2goaW5zdGFuY2UpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBmaW5kT25lKGlkOiBzdHJpbmcpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkgYXMgYW55O1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJz09JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICchPScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBkb2N1bWVudCA9IGF3YWl0IGNvbGxlY3Rpb24uZG9jKGlkKS5nZXQoKTtcclxuXHRcdFx0aWYgKCFkb2N1bWVudCkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTW9kZWwgZG9lcyBub3QgZXhpc3QuJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgYm9keSA9IHtcclxuXHRcdFx0XHQuLi5kb2N1bWVudC5kYXRhKCksXHJcblx0XHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmZvcmNlRmlsbChib2R5KTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRDb2xsZWN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIG1ha2VDb2xsZWN0aW9uKHRoaXMubmFtZSk7XHJcblx0fVxyXG5cclxuXHRmaWxsKGRhdGE6IFBhcnRpYWw8VD4pIHtcclxuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcblx0XHRcdGlmICh0aGlzLmZpbGxhYmxlcy5maW5kKChmaWxsZXIpID0+IGZpbGxlciA9PT0ga2V5KSAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsbGFibGVzLmluY2x1ZGVzKGtleSkpIHtcclxuXHRcdFx0XHR0aGlzLnNldChrZXkgYXMga2V5b2YgVCwgdmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGZvcmNlRmlsbChkYXRhOiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xyXG5cdFx0XHR0aGlzLnNldChrZXkgYXMgYW55LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGFzeW5jIGNvdW50KCkge1xyXG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMuYWxsKCk7XHJcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHRhc3luYyBkZWxldGUoKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLmNhbGxFdmVudCgnZGVsZXRpbmcnKTtcclxuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oKSBhcyBhbnk7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IHZhbHVlcyB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnPT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHRxdWVyeS52YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJyE9JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGF3YWl0IGNvbGxlY3Rpb24uZG9jKHRoaXMuZGF0YS5pZCkuZGVsZXRlKCk7XHJcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCdkZWxldGVkJyk7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEssIHZhbHVlOiBUW0tdKSB7XHJcblx0XHR0aGlzLmRhdGFba2V5XSA9IHZhbHVlO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRnZXQ8SyBleHRlbmRzIGtleW9mIFQ+KGtleTogSykge1xyXG5cdFx0aWYgKCEoa2V5IGluIHRoaXMuZGF0YSkpIHtcclxuXHRcdFx0cmV0dXJuIG51bGwgYXMgdW5rbm93biBhcyBUW0tdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YVtrZXldO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdC4uLnRoaXMuZGF0YSxcclxuXHRcdFx0Li4udGhpcy5nZXREYXRlcygpLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZpcnN0KCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMubGltaXQoMSkuZ2V0QWxsKCk7XHJcblx0XHRcdGlmIChjb2xsZWN0aW9uLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gY29sbGVjdGlvblswXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8Q29sbGVjdGlvbjx0aGlzPj4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oKSBhcyBhbnk7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IHZhbHVlcyB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnPT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHRxdWVyeS52YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJyE9JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgY29sbGVjdGlvbi5nZXQoKTtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IG5ldyBDb2xsZWN0aW9uKCk7XHJcblx0XHRcdHNuYXBzaG90LmZvckVhY2goKGRvY3VtZW50OiBhbnkpID0+IHtcclxuXHRcdFx0XHRjb25zdCBib2R5ID0ge1xyXG5cdFx0XHRcdFx0Li4uZG9jdW1lbnQuZGF0YSgpLFxyXG5cdFx0XHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgdGhpcy50eXBlKCk7XHJcblx0XHRcdFx0aW5zdGFuY2UuZm9yY2VGaWxsKGJvZHkpO1xyXG5cdFx0XHRcdGRhdGEucHVzaChpbnN0YW5jZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgbG9hZChyZWxhdGlvbnM6IEFycmF5PHN0cmluZz4pIHtcclxuXHRcdGNvbnN0IG9wZXJhdGlvbnMgPSByZWxhdGlvbnMubWFwKChyZWxhdGlvbikgPT4gKCh0aGlzIGFzIGFueSlbcmVsYXRpb25dKCkgYXMgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcDx0aGlzPikuZ2V0KCkpO1xyXG5cdFx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKG9wZXJhdGlvbnMpO1xyXG5cdFx0cmVzdWx0cy5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRjb25zdCBuYW1lID0gcmVsYXRpb25zW2luZGV4XTtcclxuXHRcdFx0dGhpcy5zZXQobmFtZSBhcyBrZXlvZiBULCA8YW55PmRhdGEpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGFsbCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldEFsbCgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgY3JlYXRlKGRhdGE/OiBUKSB7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zZXQoJ2NyZWF0ZWRfYXQnLCA8YW55PmZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpKTtcclxuXHRcdHRoaXMuc2V0KCd1cGRhdGVkX2F0JywgPGFueT5maXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSk7XHJcblxyXG5cdFx0Y29uc3QgbmV3RGF0YSA9IHsgLi4udGhpcy5kYXRhIH07XHJcblxyXG5cdFx0dGhpcy5jYWxsRXZlbnQoJ2NyZWF0aW5nJykuY2FsbEV2ZW50KCdzYXZpbmcnKTtcclxuXHRcdGNvbnN0IHJlZiA9IGF3YWl0IHRoaXMuZ2V0Q29sbGVjdGlvbigpLmFkZChuZXdEYXRhKTtcclxuXHRcdGNvbnN0IGRvY3VtZW50ID0gYXdhaXQgcmVmLmdldCgpO1xyXG5cdFx0dGhpcy5mb3JjZUZpbGwoe1xyXG5cdFx0XHQuLi4oPFQ+ZG9jdW1lbnQuZGF0YSgpKSxcclxuXHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxyXG5cdFx0fSk7XHJcblx0XHRhd2FpdCB0aGlzLmdldENvbGxlY3Rpb24oKS5kb2MoZG9jdW1lbnQuaWQpLnVwZGF0ZSh0aGlzLmRhdGEpO1xyXG5cdFx0dGhpcy5jYWxsRXZlbnQoJ2NyZWF0ZWQnKS5jYWxsRXZlbnQoJ3NhdmVkJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGFzeW5jIHVwZGF0ZShkYXRhPzogUGFydGlhbDxUPikge1xyXG5cdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0dGhpcy5maWxsKGRhdGEpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgb2xkVXBkYXRlZEF0ID0gdGhpcy5nZXQoJ3VwZGF0ZWRfYXQnKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCd1cGRhdGluZycpLmNhbGxFdmVudCgnc2F2aW5nJyk7XHJcblx0XHRcdHRoaXMuc2V0KCd1cGRhdGVkX2F0JywgPGFueT5maXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSk7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSB7IC4uLnRoaXMuZGF0YSB9IGFzIGFueTtcclxuXHRcdFx0ZGVsZXRlIGRhdGEuaWQ7XHJcblx0XHRcdGF3YWl0IHRoaXMuZ2V0Q29sbGVjdGlvbigpLmRvYyh0aGlzLmRhdGEuaWQpLnVwZGF0ZShkYXRhKTtcclxuXHRcdFx0Y29uc3QgZG9jdW1lbnQgPSBhd2FpdCB0aGlzLmdldENvbGxlY3Rpb24oKS5kb2ModGhpcy5kYXRhLmlkKS5nZXQoKTtcclxuXHRcdFx0dGhpcy5mb3JjZUZpbGwoe1xyXG5cdFx0XHRcdC4uLig8VD5kb2N1bWVudC5kYXRhKCkpLFxyXG5cdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCd1cGRhdGVkJykuY2FsbEV2ZW50KCdzYXZlZCcpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRoaXMuc2V0KCd1cGRhdGVkX2F0Jywgb2xkVXBkYXRlZEF0KTtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldCgnaWQnKSBhcyBzdHJpbmc7XHJcblx0fVxyXG5cclxuXHRzYXZlKGRhdGE/OiBQYXJ0aWFsPFQ+KTogUHJvbWlzZTx0aGlzPiB7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gISgnaWQnIGluIHRoaXMuZGF0YSkgfHwgIXRoaXMuZGF0YS5pZCB8fCB0aGlzLmRhdGEuaWQubGVuZ3RoID09PSAwID8gdGhpcy5jcmVhdGUoKSA6IHRoaXMudXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldDxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLKSB7XHJcblx0XHRkZWxldGUgdGhpcy5kYXRhW2tleV07XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGhhczxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXQoa2V5KSAhPT0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGdldERhdGVzKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Y3JlYXRlZF9hdDogdGhpcy5oYXMoJ2NyZWF0ZWRfYXQnKSA/IG5ldyBEYXRlKCg8YW55PnRoaXMuZ2V0KCdjcmVhdGVkX2F0JykpLnNlY29uZHMgKiAxMDAwKSA6IG51bGwsXHJcblx0XHRcdHVwZGF0ZWRfYXQ6IHRoaXMuaGFzKCd1cGRhdGVkX2F0JykgPyBuZXcgRGF0ZSgoPGFueT50aGlzLmdldCgndXBkYXRlZF9hdCcpKS5zZWNvbmRzICogMTAwMCkgOiBudWxsLFxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuIl19