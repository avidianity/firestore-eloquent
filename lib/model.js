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
      return (0, _pluralize["default"])(this.name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbC50cyJdLCJuYW1lcyI6WyJNb2RlbCIsImRhdGEiLCJib290aW5nIiwiZmlsbGFibGVzIiwiZmlsbGFibGUiLCJuYW1lIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJ0b0xvd2VyQ2FzZSIsImlkIiwidW5kZWZpbmVkIiwiZmlsbCIsImJvb3RlZCIsIk9iamVjdCIsImVudHJpZXMiLCJnZXREYXRhIiwidmFsdWVzIiwia2V5cyIsInBhZ2UiLCJwZXJQYWdlIiwiY29sbGVjdGlvbiIsImdldENvbGxlY3Rpb24iLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5IiwibGltaXQiLCJhbW91bnQiLCJzdGFydEF0IiwiZ2V0Iiwic25hcHNob3QiLCJDb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiaW5zdGFuY2UiLCJ0eXBlIiwiZm9yY2VGaWxsIiwicHVzaCIsImNsZWFyUXVlcmllcyIsImRvYyIsIkVycm9yIiwiZ2V0VGFibGVOYW1lIiwiZmluZCIsImZpbGxlciIsImluY2x1ZGVzIiwic2V0IiwiYWxsIiwiY2FsbEV2ZW50IiwidG9KU09OIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsImdldEFsbCIsInJlbGF0aW9ucyIsIm9wZXJhdGlvbnMiLCJyZWxhdGlvbiIsIlByb21pc2UiLCJyZXN1bHRzIiwiaW5kZXgiLCJEYXRlIiwicmVmIiwib2xkVXBkYXRlZEF0Iiwid2l0aG91dFJlbGF0aW9ucyIsImNyZWF0ZSIsInVwZGF0ZSIsIkhhc0V2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhQSxLOzs7OztBQUtaLGlCQUFZQyxJQUFaLEVBQStCO0FBQUE7O0FBQUE7O0FBQzlCOztBQUQ4Qjs7QUFBQSwyREFIWCxFQUdX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RSxLQUFLOEQsTUFBTCxFQUFyRSxHQUFxRixLQUFLQyxNQUFMLEVBQTVGO0FBQ0E7OztXQUVELGVBQXlCeEMsR0FBekIsRUFBaUM7QUFDaEMsYUFBTyxLQUFLNUIsSUFBTCxDQUFVNEIsR0FBVixDQUFQO0FBQ0EsYUFBTyxJQUFQO0FBQ0E7OztXQUVELGFBQXVCQSxHQUF2QixFQUErQjtBQUM5QixhQUFPLEtBQUtJLEdBQUwsQ0FBU0osR0FBVCxNQUFrQixJQUF6QjtBQUNBOzs7O0VBalpvRHlDLGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4vY29sbGVjdGlvbic7XHJcbmltcG9ydCB7IEhhc0V2ZW50IH0gZnJvbSAnLi9oYXMtZXZlbnQnO1xyXG5pbXBvcnQgcGx1cmFsaXplIGZyb20gJ3BsdXJhbGl6ZSc7XHJcbmltcG9ydCB7IEludGVyYWN0c1dpdGhSZWxhdGlvbnNoaXAsIE1vZGVsRGF0YSB9IGZyb20gJy4vY29udHJhY3RzJztcclxuaW1wb3J0IHsgbWFrZUNvbGxlY3Rpb24gfSBmcm9tICcuL2RiJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RlbDxUIGV4dGVuZHMgTW9kZWxEYXRhID0gYW55PiBleHRlbmRzIEhhc0V2ZW50PFQ+IHtcclxuXHRwcm90ZWN0ZWQgZmlsbGFibGVzOiBBcnJheTxzdHJpbmc+O1xyXG5cdHByb3RlY3RlZCBkYXRhOiBUID0ge30gYXMgVDtcclxuXHR0eXBlOiBhbnkgPSBNb2RlbDtcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8VD4pIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmJvb3RpbmcoKTtcclxuXHRcdHRoaXMuZmlsbGFibGVzID0gdGhpcy5maWxsYWJsZSgpO1xyXG5cclxuXHRcdGlmICghdGhpcy5uYW1lIHx8IHRoaXMubmFtZS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0dGhpcy5uYW1lID0gcGx1cmFsaXplKHRoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoISgnaWQnIGluIHRoaXMuZGF0YSkpIHtcclxuXHRcdFx0dGhpcy5kYXRhLmlkID09PSAnJztcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5maWxsKGRhdGEpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ib290ZWQoKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBmaWxsYWJsZSgpOiBBcnJheTxzdHJpbmc+IHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBib290aW5nKCkge31cclxuXHJcblx0cHJvdGVjdGVkIGJvb3RlZCgpIHt9XHJcblxyXG5cdGVudHJpZXMoKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5nZXREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0dmFsdWVzKCkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5nZXREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0a2V5cygpIHtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldERhdGEoKSk7XHJcblx0fVxyXG5cclxuXHRnZXRUYWJsZU5hbWUoKSB7XHJcblx0XHRyZXR1cm4gcGx1cmFsaXplKHRoaXMubmFtZSk7XHJcblx0fVxyXG5cclxuXHR0b0pTT04oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBwYWdpbmF0ZShwYWdlOiBudW1iZXIsIHBlclBhZ2U6IG51bWJlcikge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oKSBhcyBhbnk7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IHZhbHVlcyB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnPT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHRxdWVyeS52YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJyE9JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgY29sbGVjdGlvblxyXG5cdFx0XHRcdC5saW1pdChwZXJQYWdlKVxyXG5cdFx0XHRcdC5zdGFydEF0KHBlclBhZ2UgKiAocGFnZSAtIDEpKVxyXG5cdFx0XHRcdC5nZXQoKTtcclxuXHJcblx0XHRcdGNvbnN0IGRhdGEgPSBuZXcgQ29sbGVjdGlvbigpO1xyXG5cdFx0XHRzbmFwc2hvdC5mb3JFYWNoKChkb2N1bWVudDogeyBkYXRhOiAoKSA9PiBUOyBpZDogYW55IH0pID0+IHtcclxuXHRcdFx0XHRjb25zdCBib2R5ID0ge1xyXG5cdFx0XHRcdFx0Li4uZG9jdW1lbnQuZGF0YSgpLFxyXG5cdFx0XHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgdGhpcy50eXBlKCk7XHJcblx0XHRcdFx0aW5zdGFuY2UuZm9yY2VGaWxsKGJvZHkpO1xyXG5cdFx0XHRcdGRhdGEucHVzaChpbnN0YW5jZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGZpbmRPbmUoaWQ6IHN0cmluZykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oKSBhcyBhbnk7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IHZhbHVlcyB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnPT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHRxdWVyeS52YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJyE9JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IGRvY3VtZW50ID0gYXdhaXQgY29sbGVjdGlvbi5kb2MoaWQpLmdldCgpO1xyXG5cdFx0XHRpZiAoIWRvY3VtZW50KSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNb2RlbCBkb2VzIG5vdCBleGlzdC4nKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBib2R5ID0ge1xyXG5cdFx0XHRcdC4uLmRvY3VtZW50LmRhdGEoKSxcclxuXHRcdFx0XHRpZDogZG9jdW1lbnQuaWQsXHJcblx0XHRcdH07XHJcblx0XHRcdHRoaXMuZm9yY2VGaWxsKGJvZHkpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0dGhpcy5jbGVhclF1ZXJpZXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldENvbGxlY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gbWFrZUNvbGxlY3Rpb24odGhpcy5nZXRUYWJsZU5hbWUoKSk7XHJcblx0fVxyXG5cclxuXHRmaWxsKGRhdGE6IFBhcnRpYWw8VD4pIHtcclxuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcblx0XHRcdGlmICh0aGlzLmZpbGxhYmxlcy5maW5kKChmaWxsZXIpID0+IGZpbGxlciA9PT0ga2V5KSAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsbGFibGVzLmluY2x1ZGVzKGtleSkpIHtcclxuXHRcdFx0XHR0aGlzLnNldChrZXkgYXMga2V5b2YgVCwgdmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGZvcmNlRmlsbChkYXRhOiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xyXG5cdFx0XHR0aGlzLnNldChrZXkgYXMgYW55LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGFzeW5jIGNvdW50KCkge1xyXG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMuYWxsKCk7XHJcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHRhc3luYyBkZWxldGUoKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLmNhbGxFdmVudCgnZGVsZXRpbmcnKTtcclxuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oKSBhcyBhbnk7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IHZhbHVlcyB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnPT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHRxdWVyeS52YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJyE9JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGF3YWl0IGNvbGxlY3Rpb24uZG9jKHRoaXMuZGF0YS5pZCkuZGVsZXRlKCk7XHJcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCdkZWxldGVkJyk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXQ8SyBleHRlbmRzIGtleW9mIFQ+KGtleTogSywgdmFsdWU6IFRbS10pIHtcclxuXHRcdHRoaXMuZGF0YVtrZXldID0gdmFsdWU7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGdldDxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLKTogVFtLXSB7XHJcblx0XHRpZiAoIShrZXkgaW4gdGhpcy5kYXRhKSkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbCBhcyB1bmtub3duIGFzIFRbS107XHJcblx0XHR9XHJcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YVtrZXldO1xyXG5cclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGVsKSB7XHJcblx0XHRcdHJldHVybiB2YWx1ZS5nZXREYXRhKCk7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ29sbGVjdGlvbikge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWUudG9KU09OKCkgYXMgYW55O1xyXG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWUubWFwKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBNb2RlbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW0uZ2V0RGF0YSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gaXRlbTtcclxuXHRcdFx0fSkgYXMgYW55O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoKTogVCB7XHJcblx0XHRjb25zdCBkYXRhOiBhbnkgPSB7fTtcclxuXHJcblx0XHRmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRhdGEpIHtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmRhdGFba2V5XTtcclxuXHJcblx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1vZGVsKSB7XHJcblx0XHRcdFx0ZGF0YVtrZXldID0gdmFsdWUuZ2V0RGF0YSgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ29sbGVjdGlvbikge1xyXG5cdFx0XHRcdGRhdGFba2V5XSA9IHZhbHVlLnRvSlNPTigpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcblx0XHRcdFx0ZGF0YVtrZXldID0gdmFsdWUubWFwKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIE1vZGVsKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLmdldERhdGEoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBpdGVtO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGFba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmaXJzdCgpIHtcclxuXHRcdGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCB0aGlzLmxpbWl0KDEpLmdldEFsbCgpO1xyXG5cclxuXHRcdGlmIChjb2xsZWN0aW9uLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0cmV0dXJuIGNvbGxlY3Rpb25bMF07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRhc3luYyBnZXRBbGwoKTogUHJvbWlzZTxDb2xsZWN0aW9uPHRoaXM+PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbigpIGFzIGFueTtcclxuXHRcdFx0dGhpcy5xdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciwgdmFsdWUgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksIG9wZXJhdG9yLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgdmFsdWVzIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICc9PScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XHJcblx0XHRcdFx0XHRcdHF1ZXJ5LnZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnIT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0JzpcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ubGltaXQocXVlcnkuYW1vdW50KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3Qgc25hcHNob3QgPSBhd2FpdCBjb2xsZWN0aW9uLmdldCgpO1xyXG5cdFx0XHRjb25zdCBkYXRhID0gbmV3IENvbGxlY3Rpb24oKTtcclxuXHJcblx0XHRcdHNuYXBzaG90LmZvckVhY2goKGRvY3VtZW50OiBhbnkpID0+IHtcclxuXHRcdFx0XHRjb25zdCBib2R5ID0ge1xyXG5cdFx0XHRcdFx0Li4uZG9jdW1lbnQuZGF0YSgpLFxyXG5cdFx0XHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgdGhpcy50eXBlKCk7XHJcblx0XHRcdFx0aW5zdGFuY2UuZm9yY2VGaWxsKGJvZHkpO1xyXG5cdFx0XHRcdGRhdGEucHVzaChpbnN0YW5jZSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuY2xlYXJRdWVyaWVzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR3aXRob3V0UmVsYXRpb25zKCk6IFQge1xyXG5cdFx0Y29uc3QgZGF0YTogYW55ID0ge307XHJcblxyXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gdGhpcy5kYXRhKSB7XHJcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhW2tleV07XHJcblxyXG5cdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBNb2RlbCA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRkYXRhW2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgbG9hZChyZWxhdGlvbnM6IEFycmF5PHN0cmluZz4pIHtcclxuXHRcdGNvbnN0IG9wZXJhdGlvbnMgPSByZWxhdGlvbnMubWFwKChyZWxhdGlvbikgPT4gKCh0aGlzIGFzIGFueSlbcmVsYXRpb25dKCkgYXMgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcDx0aGlzPikuZ2V0KCkpO1xyXG5cdFx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKG9wZXJhdGlvbnMpO1xyXG5cdFx0cmVzdWx0cy5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRjb25zdCBuYW1lID0gcmVsYXRpb25zW2luZGV4XTtcclxuXHRcdFx0dGhpcy5zZXQobmFtZSBhcyBrZXlvZiBULCA8YW55PmRhdGEpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGFsbCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldEFsbCgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgY3JlYXRlKGRhdGE/OiBUKSB7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zZXQoJ2NyZWF0ZWRfYXQnLCBuZXcgRGF0ZSgpLnRvSlNPTigpKTtcclxuXHRcdHRoaXMuc2V0KCd1cGRhdGVkX2F0JywgbmV3IERhdGUoKS50b0pTT04oKSk7XHJcblxyXG5cdFx0dGhpcy5jYWxsRXZlbnQoJ2NyZWF0aW5nJykuY2FsbEV2ZW50KCdzYXZpbmcnKTtcclxuXHJcblx0XHRjb25zdCByZWYgPSB0aGlzLmdldENvbGxlY3Rpb24oKS5kb2MoKTtcclxuXHJcblx0XHRhd2FpdCByZWYuc2V0KHtcclxuXHRcdFx0Li4udGhpcy5kYXRhLFxyXG5cdFx0XHRpZDogcmVmLmlkLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5jYWxsRXZlbnQoJ2NyZWF0ZWQnKS5jYWxsRXZlbnQoJ3NhdmVkJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGFzeW5jIHVwZGF0ZShkYXRhPzogUGFydGlhbDxUPikge1xyXG5cdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0dGhpcy5maWxsKGRhdGEpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgb2xkVXBkYXRlZEF0ID0gdGhpcy5nZXQoJ3VwZGF0ZWRfYXQnKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCd1cGRhdGluZycpLmNhbGxFdmVudCgnc2F2aW5nJyk7XHJcblx0XHRcdHRoaXMuc2V0KCd1cGRhdGVkX2F0JywgbmV3IERhdGUoKS50b0pTT04oKSk7XHJcblxyXG5cdFx0XHRhd2FpdCB0aGlzLmdldENvbGxlY3Rpb24oKVxyXG5cdFx0XHRcdC5kb2ModGhpcy5kYXRhLmlkKVxyXG5cdFx0XHRcdC5zZXQoe1xyXG5cdFx0XHRcdFx0Li4udGhpcy53aXRob3V0UmVsYXRpb25zKCksXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmNhbGxFdmVudCgndXBkYXRlZCcpLmNhbGxFdmVudCgnc2F2ZWQnKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aGlzLnNldCgndXBkYXRlZF9hdCcsIG9sZFVwZGF0ZWRBdCk7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXQoJ2lkJykgYXMgc3RyaW5nO1xyXG5cdH1cclxuXHJcblx0c2F2ZShkYXRhPzogUGFydGlhbDxUPikge1xyXG5cdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0dGhpcy5maWxsKGRhdGEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICEoJ2lkJyBpbiB0aGlzLmRhdGEpIHx8ICF0aGlzLmRhdGEuaWQgfHwgdGhpcy5kYXRhLmlkLmxlbmd0aCA9PT0gMCA/IHRoaXMuY3JlYXRlKCkgOiB0aGlzLnVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0dW5zZXQ8SyBleHRlbmRzIGtleW9mIFQ+KGtleTogSykge1xyXG5cdFx0ZGVsZXRlIHRoaXMuZGF0YVtrZXldO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRoYXM8SyBleHRlbmRzIGtleW9mIFQ+KGtleTogSykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0KGtleSkgIT09IG51bGw7XHJcblx0fVxyXG59XHJcbiJdfQ==