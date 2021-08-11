"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCollection = makeCollection;
exports.listen = listen;
exports.addListener = addListener;
exports.removeListener = removeListener;
exports.clearListeners = clearListeners;
exports.listened = exports.listeners = exports.collections = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

var _collection = require("./collection");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firestore = _app["default"].firestore();

var collections = {};
exports.collections = collections;
var listeners = {};
exports.listeners = listeners;

function makeCollection(name) {
  if (!(name in collections)) {
    collections[name] = firestore.collection(name);
  }

  return collections[name];
}

var listened = [];
exports.listened = listened;

function listen(model) {
  var name = new model().getTableName();

  if (listened.includes(name)) {
    return;
  }

  if (!(name in collections)) {
    makeCollection(name);
  }

  var collection = collections[name];
  collection.onSnapshot(function (snapshot) {
    var data = new _collection.Collection();
    snapshot.forEach(function (document) {
      var self = new model();
      self.forceFill(_objectSpread(_objectSpread({}, document.data()), {}, {
        id: document.id
      }));
      data.push(self);
    });

    if (name in listeners) {
      listeners[name].forEach(function (listener) {
        if (listener !== null) {
          listener.success(data);
        }
      });
    }
  }, function (error) {
    if (name in listeners) {
      listeners[name].forEach(function (listener) {
        if (listener !== null && listener.onError !== undefined) {
          listener.onError(error);
        }
      });
    }
  });
  listened.push(name);
}

function addListener(collection, success, onError) {
  var name = new collection().getTableName();

  if (!(name in listeners)) {
    listeners[name] = [];
  }

  return listeners[name].push({
    success: success,
    onError: onError
  }) - 1;
}

function removeListener(model, index) {
  var name = new model().getTableName();

  if (!(name in listeners)) {
    return;
  }

  listeners[name].splice(index, 1, null);
}

function clearListeners(model) {
  var name = new model().getTableName();

  if (!(name in listeners)) {
    return;
  }

  listeners[name] = [];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi50cyJdLCJuYW1lcyI6WyJmaXJlc3RvcmUiLCJmaXJlYmFzZSIsImNvbGxlY3Rpb25zIiwibGlzdGVuZXJzIiwibWFrZUNvbGxlY3Rpb24iLCJuYW1lIiwiY29sbGVjdGlvbiIsImxpc3RlbmVkIiwibGlzdGVuIiwibW9kZWwiLCJnZXRUYWJsZU5hbWUiLCJpbmNsdWRlcyIsIm9uU25hcHNob3QiLCJzbmFwc2hvdCIsImRhdGEiLCJDb2xsZWN0aW9uIiwiZm9yRWFjaCIsImRvY3VtZW50Iiwic2VsZiIsImZvcmNlRmlsbCIsImlkIiwicHVzaCIsImxpc3RlbmVyIiwic3VjY2VzcyIsImVycm9yIiwib25FcnJvciIsInVuZGVmaW5lZCIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJpbmRleCIsInNwbGljZSIsImNsZWFyTGlzdGVuZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUlBLElBQU1BLFNBQVMsR0FBR0MsZ0JBQVNELFNBQVQsRUFBbEI7O0FBRU8sSUFBTUUsV0FFWixHQUFHLEVBRkc7O0FBSUEsSUFBTUMsU0FFWixHQUFHLEVBRkc7OztBQUlBLFNBQVNDLGNBQVQsQ0FBd0JDLElBQXhCLEVBQXNDO0FBQzVDLE1BQUksRUFBRUEsSUFBSSxJQUFJSCxXQUFWLENBQUosRUFBNEI7QUFDM0JBLElBQUFBLFdBQVcsQ0FBQ0csSUFBRCxDQUFYLEdBQW9CTCxTQUFTLENBQUNNLFVBQVYsQ0FBcUJELElBQXJCLENBQXBCO0FBQ0E7O0FBQ0QsU0FBT0gsV0FBVyxDQUFDRyxJQUFELENBQWxCO0FBQ0E7O0FBRU0sSUFBTUUsUUFBdUIsR0FBRyxFQUFoQzs7O0FBRUEsU0FBU0MsTUFBVCxDQUFpQ0MsS0FBakMsRUFBdUQ7QUFDN0QsTUFBTUosSUFBSSxHQUFHLElBQUlJLEtBQUosR0FBWUMsWUFBWixFQUFiOztBQUNBLE1BQUlILFFBQVEsQ0FBQ0ksUUFBVCxDQUFrQk4sSUFB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aW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi9jb2xsZWN0aW9uJztcbmltcG9ydCB7IExpc3RlbmVyIH0gZnJvbSAnLi9jb250cmFjdHMnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcblxuY29uc3QgZmlyZXN0b3JlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG5cbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uczoge1xuXHRba2V5OiBzdHJpbmddOiBmaXJlYmFzZS5maXJlc3RvcmUuQ29sbGVjdGlvblJlZmVyZW5jZTxmaXJlYmFzZS5maXJlc3RvcmUuRG9jdW1lbnREYXRhPjtcbn0gPSB7fTtcblxuZXhwb3J0IGNvbnN0IGxpc3RlbmVyczoge1xuXHRba2V5OiBzdHJpbmddOiBBcnJheTxMaXN0ZW5lciB8IG51bGw+O1xufSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbGxlY3Rpb24obmFtZTogc3RyaW5nKSB7XG5cdGlmICghKG5hbWUgaW4gY29sbGVjdGlvbnMpKSB7XG5cdFx0Y29sbGVjdGlvbnNbbmFtZV0gPSBmaXJlc3RvcmUuY29sbGVjdGlvbihuYW1lKTtcblx0fVxuXHRyZXR1cm4gY29sbGVjdGlvbnNbbmFtZV07XG59XG5cbmV4cG9ydCBjb25zdCBsaXN0ZW5lZDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuPFQgZXh0ZW5kcyBNb2RlbD4obW9kZWw6IHsgbmV3ICgpOiBUIH0pIHtcblx0Y29uc3QgbmFtZSA9IG5ldyBtb2RlbCgpLmdldFRhYmxlTmFtZSgpO1xuXHRpZiAobGlzdGVuZWQuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKCEobmFtZSBpbiBjb2xsZWN0aW9ucykpIHtcblx0XHRtYWtlQ29sbGVjdGlvbihuYW1lKTtcblx0fVxuXHRjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnNbbmFtZV07XG5cdGNvbGxlY3Rpb24ub25TbmFwc2hvdChcblx0XHQoc25hcHNob3QpID0+IHtcblx0XHRcdGNvbnN0IGRhdGEgPSBuZXcgQ29sbGVjdGlvbjxhbnk+KCk7XG5cdFx0XHRzbmFwc2hvdC5mb3JFYWNoKChkb2N1bWVudCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzZWxmID0gbmV3IG1vZGVsKCk7XG5cdFx0XHRcdHNlbGYuZm9yY2VGaWxsKHtcblx0XHRcdFx0XHQuLi5kb2N1bWVudC5kYXRhKCksXG5cdFx0XHRcdFx0aWQ6IGRvY3VtZW50LmlkLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZGF0YS5wdXNoKHNlbGYpO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAobmFtZSBpbiBsaXN0ZW5lcnMpIHtcblx0XHRcdFx0bGlzdGVuZXJzW25hbWVdLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGxpc3RlbmVyICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5zdWNjZXNzKGRhdGEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQoZXJyb3IpID0+IHtcblx0XHRcdGlmIChuYW1lIGluIGxpc3RlbmVycykge1xuXHRcdFx0XHRsaXN0ZW5lcnNbbmFtZV0uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcblx0XHRcdFx0XHRpZiAobGlzdGVuZXIgIT09IG51bGwgJiYgbGlzdGVuZXIub25FcnJvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5vbkVycm9yKGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0KTtcblx0bGlzdGVuZWQucHVzaChuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RlbmVyPFQgZXh0ZW5kcyBNb2RlbD4oY29sbGVjdGlvbjogeyBuZXcgKCk6IFQgfSwgc3VjY2VzczogKG1vZGVsczogQ29sbGVjdGlvbjxUPikgPT4gdm9pZCwgb25FcnJvcj86IEZ1bmN0aW9uKSB7XG5cdGNvbnN0IG5hbWUgPSBuZXcgY29sbGVjdGlvbigpLmdldFRhYmxlTmFtZSgpO1xuXHRpZiAoIShuYW1lIGluIGxpc3RlbmVycykpIHtcblx0XHRsaXN0ZW5lcnNbbmFtZV0gPSBbXTtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdGxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcblx0XHRcdHN1Y2Nlc3MsXG5cdFx0XHRvbkVycm9yLFxuXHRcdH0pIC0gMVxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXI8VCBleHRlbmRzIE1vZGVsPihtb2RlbDogeyBuZXcgKCk6IFQgfSwgaW5kZXg6IG51bWJlcikge1xuXHRjb25zdCBuYW1lID0gbmV3IG1vZGVsKCkuZ2V0VGFibGVOYW1lKCk7XG5cdGlmICghKG5hbWUgaW4gbGlzdGVuZXJzKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRsaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGluZGV4LCAxLCBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTGlzdGVuZXJzPFQgZXh0ZW5kcyBNb2RlbD4obW9kZWw6IHsgbmV3ICgpOiBUIH0pIHtcblx0Y29uc3QgbmFtZSA9IG5ldyBtb2RlbCgpLmdldFRhYmxlTmFtZSgpO1xuXHRpZiAoIShuYW1lIGluIGxpc3RlbmVycykpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0bGlzdGVuZXJzW25hbWVdID0gW107XG59XG4iXX0=