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

      return this.data[key];
    }
  }, {
    key: "getData",
    value: function getData() {
      return _objectSpread({}, this.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbC50cyJdLCJuYW1lcyI6WyJNb2RlbCIsImRhdGEiLCJib290aW5nIiwiZmlsbGFibGVzIiwiZmlsbGFibGUiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJ0b0xvd2VyQ2FzZSIsImlkIiwidW5kZWZpbmVkIiwiZmlsbCIsImJvb3RlZCIsIk9iamVjdCIsImVudHJpZXMiLCJnZXREYXRhIiwidmFsdWVzIiwia2V5cyIsInBhZ2UiLCJwZXJQYWdlIiwiY29sbGVjdGlvbiIsImdldENvbGxlY3Rpb24iLCJxdWVyaWVzIiwiZm9yRWFjaCIsInF1ZXJ5IiwibWV0aG9kIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIndoZXJlIiwia2V5IiwibGltaXQiLCJhbW91bnQiLCJzdGFydEF0IiwiZ2V0Iiwic25hcHNob3QiLCJDb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiaW5zdGFuY2UiLCJ0eXBlIiwiZm9yY2VGaWxsIiwicHVzaCIsImNsZWFyUXVlcmllcyIsImRvYyIsIkVycm9yIiwiZmluZCIsImZpbGxlciIsImluY2x1ZGVzIiwic2V0IiwiYWxsIiwibGVuZ3RoIiwiY2FsbEV2ZW50IiwiZ2V0QWxsIiwicmVsYXRpb25zIiwib3BlcmF0aW9ucyIsIm1hcCIsInJlbGF0aW9uIiwiUHJvbWlzZSIsInJlc3VsdHMiLCJpbmRleCIsIkRhdGUiLCJ0b0pTT04iLCJuZXdEYXRhIiwiYWRkIiwicmVmIiwidXBkYXRlIiwib2xkVXBkYXRlZEF0IiwiY3JlYXRlIiwiSGFzRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR2FBLEs7Ozs7O0FBS1osaUJBQVlDLElBQVosRUFBK0I7QUFBQTs7QUFBQTs7QUFDOUI7O0FBRDhCOztBQUFBLDJEQUhYLEVBR1c7O0FBQUEsMkRBRm5CRCxLQUVtQjs7QUFFOUIsVUFBS0UsT0FBTDs7QUFD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QUNoQyxhQUFPLEtBQUszQixJQUFMLENBQVUyQixHQUFWLENBQVA7QUFDQSxhQUFPLElBQVA7QUFDQTs7O1dBRUQsYUFBdUJBLEdBQXZCLEVBQStCO0FBQzlCLGFBQU8sS0FBS0ksR0FBTCxDQUFTSixHQUFULE1BQWtCLElBQXpCO0FBQ0E7Ozs7RUExVm9EdUMsa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi9jb2xsZWN0aW9uJztcclxuaW1wb3J0IHsgSGFzRXZlbnQgfSBmcm9tICcuL2hhcy1ldmVudCc7XHJcbmltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJztcclxuaW1wb3J0IHsgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcCwgTW9kZWxEYXRhIH0gZnJvbSAnLi9jb250cmFjdHMnO1xyXG5pbXBvcnQgeyBtYWtlQ29sbGVjdGlvbiB9IGZyb20gJy4vZGInO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGVsPFQgZXh0ZW5kcyBNb2RlbERhdGEgPSBhbnk+IGV4dGVuZHMgSGFzRXZlbnQ8VD4ge1xyXG5cdHByb3RlY3RlZCBmaWxsYWJsZXM6IEFycmF5PHN0cmluZz47XHJcblx0cHJvdGVjdGVkIGRhdGE6IFQgPSB7fSBhcyBUO1xyXG5cdHR5cGU6IGFueSA9IE1vZGVsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhPzogUGFydGlhbDxUPikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYm9vdGluZygpO1xyXG5cdFx0dGhpcy5maWxsYWJsZXMgPSB0aGlzLmZpbGxhYmxlKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBwbHVyYWxpemUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG5cdFx0aWYgKCEoJ2lkJyBpbiB0aGlzLmRhdGEpKSB7XHJcblx0XHRcdHRoaXMuZGF0YS5pZCA9PT0gJyc7XHJcblx0XHR9XHJcblx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuZmlsbChkYXRhKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuYm9vdGVkKCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgZmlsbGFibGUoKTogQXJyYXk8c3RyaW5nPiB7XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgYm9vdGluZygpIHt9XHJcblxyXG5cdHByb3RlY3RlZCBib290ZWQoKSB7fVxyXG5cclxuXHRlbnRyaWVzKCkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuZ2V0RGF0YSgpKTtcclxuXHR9XHJcblxyXG5cdHZhbHVlcygpIHtcclxuXHRcdHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuZ2V0RGF0YSgpKTtcclxuXHR9XHJcblxyXG5cdGtleXMoKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0Z2V0VGFibGVOYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdHRvSlNPTigpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldERhdGEoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHBhZ2luYXRlKHBhZ2U6IG51bWJlciwgcGVyUGFnZTogbnVtYmVyKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbigpIGFzIGFueTtcclxuXHRcdFx0dGhpcy5xdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciwgdmFsdWUgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksIG9wZXJhdG9yLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgdmFsdWVzIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICc9PScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XHJcblx0XHRcdFx0XHRcdHF1ZXJ5LnZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnIT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0JzpcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ubGltaXQocXVlcnkuYW1vdW50KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3Qgc25hcHNob3QgPSBhd2FpdCBjb2xsZWN0aW9uXHJcblx0XHRcdFx0LmxpbWl0KHBlclBhZ2UpXHJcblx0XHRcdFx0LnN0YXJ0QXQocGVyUGFnZSAqIChwYWdlIC0gMSkpXHJcblx0XHRcdFx0LmdldCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgZGF0YSA9IG5ldyBDb2xsZWN0aW9uKCk7XHJcblx0XHRcdHNuYXBzaG90LmZvckVhY2goKGRvY3VtZW50OiB7IGRhdGE6ICgpID0+IFQ7IGlkOiBhbnkgfSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGJvZHkgPSB7XHJcblx0XHRcdFx0XHQuLi5kb2N1bWVudC5kYXRhKCksXHJcblx0XHRcdFx0XHRpZDogZG9jdW1lbnQuaWQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzLnR5cGUoKTtcclxuXHRcdFx0XHRpbnN0YW5jZS5mb3JjZUZpbGwoYm9keSk7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGluc3RhbmNlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZmluZE9uZShpZDogc3RyaW5nKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgY29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbigpIGFzIGFueTtcclxuXHRcdFx0dGhpcy5xdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoIChxdWVyeS5tZXRob2QpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciwgdmFsdWUgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksIG9wZXJhdG9yLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVJbic6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgdmFsdWVzIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0dmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICc9PScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmVOb3RJbic6XHJcblx0XHRcdFx0XHRcdHF1ZXJ5LnZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnIT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xpbWl0JzpcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ubGltaXQocXVlcnkuYW1vdW50KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3QgZG9jdW1lbnQgPSBhd2FpdCBjb2xsZWN0aW9uLmRvYyhpZCkuZ2V0KCk7XHJcblx0XHRcdGlmICghZG9jdW1lbnQpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01vZGVsIGRvZXMgbm90IGV4aXN0LicpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGJvZHkgPSB7XHJcblx0XHRcdFx0Li4uZG9jdW1lbnQuZGF0YSgpLFxyXG5cdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy5mb3JjZUZpbGwoYm9keSk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0Q29sbGVjdGlvbigpIHtcclxuXHRcdHJldHVybiBtYWtlQ29sbGVjdGlvbih0aGlzLm5hbWUpO1xyXG5cdH1cclxuXHJcblx0ZmlsbChkYXRhOiBQYXJ0aWFsPFQ+KSB7XHJcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xyXG5cdFx0XHRpZiAodGhpcy5maWxsYWJsZXMuZmluZCgoZmlsbGVyKSA9PiBmaWxsZXIgPT09IGtleSkgIT09IHVuZGVmaW5lZCB8fCB0aGlzLmZpbGxhYmxlcy5pbmNsdWRlcyhrZXkpKSB7XHJcblx0XHRcdFx0dGhpcy5zZXQoa2V5IGFzIGtleW9mIFQsIHZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRmb3JjZUZpbGwoZGF0YTogUGFydGlhbDxUPikge1xyXG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcclxuXHRcdFx0dGhpcy5zZXQoa2V5IGFzIGFueSwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRhc3luYyBjb3VudCgpIHtcclxuXHRcdGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCB0aGlzLmFsbCgpO1xyXG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24ubGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZGVsZXRlKCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dGhpcy5jYWxsRXZlbnQoJ2RlbGV0aW5nJyk7XHJcblx0XHRcdGxldCBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkgYXMgYW55O1xyXG5cdFx0XHR0aGlzLnF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHF1ZXJ5Lm1ldGhvZCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnd2hlcmUnOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IG9wZXJhdG9yLCB2YWx1ZSB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZUluJzpcclxuXHRcdFx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHF1ZXJ5O1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJz09JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZU5vdEluJzpcclxuXHRcdFx0XHRcdFx0cXVlcnkudmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi53aGVyZShxdWVyeS5rZXksICchPScsIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGltaXQnOlxyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5saW1pdChxdWVyeS5hbW91bnQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRhd2FpdCBjb2xsZWN0aW9uLmRvYyh0aGlzLmRhdGEuaWQpLmRlbGV0ZSgpO1xyXG5cdFx0XHR0aGlzLmNhbGxFdmVudCgnZGVsZXRlZCcpO1xyXG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldDxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLLCB2YWx1ZTogVFtLXSkge1xyXG5cdFx0dGhpcy5kYXRhW2tleV0gPSB2YWx1ZTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Z2V0PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEspIHtcclxuXHRcdGlmICghKGtleSBpbiB0aGlzLmRhdGEpKSB7XHJcblx0XHRcdHJldHVybiBudWxsIGFzIHVua25vd24gYXMgVFtLXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLmRhdGFba2V5XTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoKSB7XHJcblx0XHRyZXR1cm4geyAuLi50aGlzLmRhdGEgfTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZpcnN0KCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMubGltaXQoMSkuZ2V0QWxsKCk7XHJcblx0XHRcdGlmIChjb2xsZWN0aW9uLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gY29sbGVjdGlvblswXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8Q29sbGVjdGlvbjx0aGlzPj4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oKSBhcyBhbnk7XHJcblx0XHRcdHRoaXMucXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdHN3aXRjaCAocXVlcnkubWV0aG9kKSB7XHJcblx0XHRcdFx0XHRjYXNlICd3aGVyZSc6XHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlIH0gPSBxdWVyeTtcclxuXHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCBvcGVyYXRvciwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlSW4nOlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IHZhbHVlcyB9ID0gcXVlcnk7XHJcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ud2hlcmUocXVlcnkua2V5LCAnPT0nLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3doZXJlTm90SW4nOlxyXG5cdFx0XHRcdFx0XHRxdWVyeS52YWx1ZXMuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLndoZXJlKHF1ZXJ5LmtleSwgJyE9JywgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsaW1pdCc6XHJcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpbWl0KHF1ZXJ5LmFtb3VudCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgY29sbGVjdGlvbi5nZXQoKTtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IG5ldyBDb2xsZWN0aW9uKCk7XHJcblx0XHRcdHNuYXBzaG90LmZvckVhY2goKGRvY3VtZW50OiBhbnkpID0+IHtcclxuXHRcdFx0XHRjb25zdCBib2R5ID0ge1xyXG5cdFx0XHRcdFx0Li4uZG9jdW1lbnQuZGF0YSgpLFxyXG5cdFx0XHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgdGhpcy50eXBlKCk7XHJcblx0XHRcdFx0aW5zdGFuY2UuZm9yY2VGaWxsKGJvZHkpO1xyXG5cdFx0XHRcdGRhdGEucHVzaChpbnN0YW5jZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmNsZWFyUXVlcmllcygpO1xyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgbG9hZChyZWxhdGlvbnM6IEFycmF5PHN0cmluZz4pIHtcclxuXHRcdGNvbnN0IG9wZXJhdGlvbnMgPSByZWxhdGlvbnMubWFwKChyZWxhdGlvbikgPT4gKCh0aGlzIGFzIGFueSlbcmVsYXRpb25dKCkgYXMgSW50ZXJhY3RzV2l0aFJlbGF0aW9uc2hpcDx0aGlzPikuZ2V0KCkpO1xyXG5cdFx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKG9wZXJhdGlvbnMpO1xyXG5cdFx0cmVzdWx0cy5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRjb25zdCBuYW1lID0gcmVsYXRpb25zW2luZGV4XTtcclxuXHRcdFx0dGhpcy5zZXQobmFtZSBhcyBrZXlvZiBULCA8YW55PmRhdGEpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGFsbCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldEFsbCgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgY3JlYXRlKGRhdGE/OiBUKSB7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zZXQoJ2NyZWF0ZWRfYXQnLCBuZXcgRGF0ZSgpLnRvSlNPTigpKTtcclxuXHRcdHRoaXMuc2V0KCd1cGRhdGVkX2F0JywgbmV3IERhdGUoKS50b0pTT04oKSk7XHJcblxyXG5cdFx0Y29uc3QgbmV3RGF0YSA9IHsgLi4udGhpcy5kYXRhIH07XHJcblxyXG5cdFx0dGhpcy5jYWxsRXZlbnQoJ2NyZWF0aW5nJykuY2FsbEV2ZW50KCdzYXZpbmcnKTtcclxuXHRcdGNvbnN0IHJlZiA9IGF3YWl0IHRoaXMuZ2V0Q29sbGVjdGlvbigpLmFkZChuZXdEYXRhKTtcclxuXHRcdGNvbnN0IGRvY3VtZW50ID0gYXdhaXQgcmVmLmdldCgpO1xyXG5cdFx0dGhpcy5mb3JjZUZpbGwoe1xyXG5cdFx0XHQuLi4oPFQ+ZG9jdW1lbnQuZGF0YSgpKSxcclxuXHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxyXG5cdFx0fSk7XHJcblx0XHRhd2FpdCB0aGlzLmdldENvbGxlY3Rpb24oKS5kb2MoZG9jdW1lbnQuaWQpLnVwZGF0ZSh0aGlzLmRhdGEpO1xyXG5cdFx0dGhpcy5jYWxsRXZlbnQoJ2NyZWF0ZWQnKS5jYWxsRXZlbnQoJ3NhdmVkJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGFzeW5jIHVwZGF0ZShkYXRhPzogUGFydGlhbDxUPikge1xyXG5cdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0dGhpcy5maWxsKGRhdGEpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgb2xkVXBkYXRlZEF0ID0gdGhpcy5nZXQoJ3VwZGF0ZWRfYXQnKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCd1cGRhdGluZycpLmNhbGxFdmVudCgnc2F2aW5nJyk7XHJcblx0XHRcdHRoaXMuc2V0KCd1cGRhdGVkX2F0JywgbmV3IERhdGUoKS50b0pTT04oKSk7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSB7IC4uLnRoaXMuZGF0YSB9IGFzIGFueTtcclxuXHRcdFx0ZGVsZXRlIGRhdGEuaWQ7XHJcblx0XHRcdGF3YWl0IHRoaXMuZ2V0Q29sbGVjdGlvbigpLmRvYyh0aGlzLmRhdGEuaWQpLnVwZGF0ZShkYXRhKTtcclxuXHRcdFx0Y29uc3QgZG9jdW1lbnQgPSBhd2FpdCB0aGlzLmdldENvbGxlY3Rpb24oKS5kb2ModGhpcy5kYXRhLmlkKS5nZXQoKTtcclxuXHRcdFx0dGhpcy5mb3JjZUZpbGwoe1xyXG5cdFx0XHRcdC4uLig8VD5kb2N1bWVudC5kYXRhKCkpLFxyXG5cdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuY2FsbEV2ZW50KCd1cGRhdGVkJykuY2FsbEV2ZW50KCdzYXZlZCcpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRoaXMuc2V0KCd1cGRhdGVkX2F0Jywgb2xkVXBkYXRlZEF0KTtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldCgnaWQnKSBhcyBzdHJpbmc7XHJcblx0fVxyXG5cclxuXHRzYXZlKGRhdGE/OiBQYXJ0aWFsPFQ+KTogUHJvbWlzZTx0aGlzPiB7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHR0aGlzLmZpbGwoZGF0YSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gISgnaWQnIGluIHRoaXMuZGF0YSkgfHwgIXRoaXMuZGF0YS5pZCB8fCB0aGlzLmRhdGEuaWQubGVuZ3RoID09PSAwID8gdGhpcy5jcmVhdGUoKSA6IHRoaXMudXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldDxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLKSB7XHJcblx0XHRkZWxldGUgdGhpcy5kYXRhW2tleV07XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGhhczxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXQoa2V5KSAhPT0gbnVsbDtcclxuXHR9XHJcbn1cclxuIl19