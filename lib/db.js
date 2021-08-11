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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi50cyJdLCJuYW1lcyI6WyJmaXJlc3RvcmUiLCJmaXJlYmFzZSIsImNvbGxlY3Rpb25zIiwibGlzdGVuZXJzIiwibWFrZUNvbGxlY3Rpb24iLCJuYW1lIiwiY29sbGVjdGlvbiIsImxpc3RlbmVkIiwibGlzdGVuIiwibW9kZWwiLCJnZXRUYWJsZU5hbWUiLCJpbmNsdWRlcyIsIm9uU25hcHNob3QiLCJzbmFwc2hvdCIsImRhdGEiLCJDb2xsZWN0aW9uIiwiZm9yRWFjaCIsImRvY3VtZW50Iiwic2VsZiIsImZvcmNlRmlsbCIsImlkIiwicHVzaCIsImxpc3RlbmVyIiwic3VjY2VzcyIsImVycm9yIiwib25FcnJvciIsInVuZGVmaW5lZCIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJpbmRleCIsInNwbGljZSIsImNsZWFyTGlzdGVuZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUlBLElBQU1BLFNBQVMsR0FBR0MsZ0JBQVNELFNBQVQsRUFBbEI7O0FBRU8sSUFBTUUsV0FFWixHQUFHLEVBRkc7O0FBSUEsSUFBTUMsU0FFWixHQUFHLEVBRkc7OztBQUlBLFNBQVNDLGNBQVQsQ0FBd0JDLElBQXhCLEVBQXNDO0FBQzVDLE1BQUksRUFBRUEsSUFBSSxJQUFJSCxXQUFWLENBQUosRUFBNEI7QUFDM0JBLElBQUFBLFdBQVcsQ0FBQ0csSUFBRCxDQUFYLEdBQW9CTCxTQUFTLENBQUNNLFVBQVYsQ0FBcUJELElBQXJCLENBQXBCO0FBQ0E7O0FBQ0QsU0FBT0gsV0FBVyxDQUFDRyxJQUFELENBQWxCO0FBQ0E7O0FBRU0sSUFBTUUsUUFBdUIsR0FBRyxFQUFoQzs7O0FBRUEsU0FBU0MsTUFBVCxDQUFpQ0MsS0FBakMsRUFBdUQ7QUFDN0QsTUFBTUosSUFBSSxHQUFHLElBQUlJLEtBQUosR0FBWUMsWUFBWixFQUFiOztBQUNBLE1BQUlILFFBQVEsQ0FBQ0ksUUFBVCxDQUFrQk4sSUFB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aW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4vY29sbGVjdGlvbic7XHJcbmltcG9ydCB7IExpc3RlbmVyIH0gZnJvbSAnLi9jb250cmFjdHMnO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xyXG5cclxuY29uc3QgZmlyZXN0b3JlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcblxyXG5leHBvcnQgY29uc3QgY29sbGVjdGlvbnM6IHtcclxuXHRba2V5OiBzdHJpbmddOiBmaXJlYmFzZS5maXJlc3RvcmUuQ29sbGVjdGlvblJlZmVyZW5jZTxmaXJlYmFzZS5maXJlc3RvcmUuRG9jdW1lbnREYXRhPjtcclxufSA9IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlbmVyczoge1xyXG5cdFtrZXk6IHN0cmluZ106IEFycmF5PExpc3RlbmVyIHwgbnVsbD47XHJcbn0gPSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29sbGVjdGlvbihuYW1lOiBzdHJpbmcpIHtcclxuXHRpZiAoIShuYW1lIGluIGNvbGxlY3Rpb25zKSkge1xyXG5cdFx0Y29sbGVjdGlvbnNbbmFtZV0gPSBmaXJlc3RvcmUuY29sbGVjdGlvbihuYW1lKTtcclxuXHR9XHJcblx0cmV0dXJuIGNvbGxlY3Rpb25zW25hbWVdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVuZWQ6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW48VCBleHRlbmRzIE1vZGVsPihtb2RlbDogeyBuZXcgKCk6IFQgfSkge1xyXG5cdGNvbnN0IG5hbWUgPSBuZXcgbW9kZWwoKS5nZXRUYWJsZU5hbWUoKTtcclxuXHRpZiAobGlzdGVuZWQuaW5jbHVkZXMobmFtZSkpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0aWYgKCEobmFtZSBpbiBjb2xsZWN0aW9ucykpIHtcclxuXHRcdG1ha2VDb2xsZWN0aW9uKG5hbWUpO1xyXG5cdH1cclxuXHRjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnNbbmFtZV07XHJcblx0Y29sbGVjdGlvbi5vblNuYXBzaG90KFxyXG5cdFx0KHNuYXBzaG90KSA9PiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBuZXcgQ29sbGVjdGlvbjxhbnk+KCk7XHJcblx0XHRcdHNuYXBzaG90LmZvckVhY2goKGRvY3VtZW50KSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgc2VsZiA9IG5ldyBtb2RlbCgpO1xyXG5cdFx0XHRcdHNlbGYuZm9yY2VGaWxsKHtcclxuXHRcdFx0XHRcdC4uLmRvY3VtZW50LmRhdGEoKSxcclxuXHRcdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRkYXRhLnB1c2goc2VsZik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpZiAobmFtZSBpbiBsaXN0ZW5lcnMpIHtcclxuXHRcdFx0XHRsaXN0ZW5lcnNbbmFtZV0uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuXHRcdFx0XHRcdGlmIChsaXN0ZW5lciAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5zdWNjZXNzKGRhdGEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdGlmIChuYW1lIGluIGxpc3RlbmVycykge1xyXG5cdFx0XHRcdGxpc3RlbmVyc1tuYW1lXS5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGxpc3RlbmVyICE9PSBudWxsICYmIGxpc3RlbmVyLm9uRXJyb3IgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5vbkVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdCk7XHJcblx0bGlzdGVuZWQucHVzaChuYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RlbmVyPFQgZXh0ZW5kcyBNb2RlbD4oY29sbGVjdGlvbjogeyBuZXcgKCk6IFQgfSwgc3VjY2VzczogKG1vZGVsczogQ29sbGVjdGlvbjxUPikgPT4gdm9pZCwgb25FcnJvcj86IEZ1bmN0aW9uKSB7XHJcblx0Y29uc3QgbmFtZSA9IG5ldyBjb2xsZWN0aW9uKCkuZ2V0VGFibGVOYW1lKCk7XHJcblx0aWYgKCEobmFtZSBpbiBsaXN0ZW5lcnMpKSB7XHJcblx0XHRsaXN0ZW5lcnNbbmFtZV0gPSBbXTtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdGxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcclxuXHRcdFx0c3VjY2VzcyxcclxuXHRcdFx0b25FcnJvcixcclxuXHRcdH0pIC0gMVxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcjxUIGV4dGVuZHMgTW9kZWw+KG1vZGVsOiB7IG5ldyAoKTogVCB9LCBpbmRleDogbnVtYmVyKSB7XHJcblx0Y29uc3QgbmFtZSA9IG5ldyBtb2RlbCgpLmdldFRhYmxlTmFtZSgpO1xyXG5cdGlmICghKG5hbWUgaW4gbGlzdGVuZXJzKSkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRsaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGluZGV4LCAxLCBudWxsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTGlzdGVuZXJzPFQgZXh0ZW5kcyBNb2RlbD4obW9kZWw6IHsgbmV3ICgpOiBUIH0pIHtcclxuXHRjb25zdCBuYW1lID0gbmV3IG1vZGVsKCkuZ2V0VGFibGVOYW1lKCk7XHJcblx0aWYgKCEobmFtZSBpbiBsaXN0ZW5lcnMpKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGxpc3RlbmVyc1tuYW1lXSA9IFtdO1xyXG59XHJcbiJdfQ==