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

function removeListener(collection, index) {
  var name = new collection().getTableName();

  if (!(name in listeners)) {
    return;
  }

  listeners[name].splice(index, 1, null);
}

function clearListeners(collection) {
  var name = new collection().getTableName();

  if (!(name in listeners)) {
    return;
  }

  listeners[name] = [];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi50cyJdLCJuYW1lcyI6WyJmaXJlc3RvcmUiLCJmaXJlYmFzZSIsImNvbGxlY3Rpb25zIiwibGlzdGVuZXJzIiwibWFrZUNvbGxlY3Rpb24iLCJuYW1lIiwiY29sbGVjdGlvbiIsImxpc3RlbmVkIiwibGlzdGVuIiwibW9kZWwiLCJnZXRUYWJsZU5hbWUiLCJpbmNsdWRlcyIsIm9uU25hcHNob3QiLCJzbmFwc2hvdCIsImRhdGEiLCJDb2xsZWN0aW9uIiwiZm9yRWFjaCIsImRvY3VtZW50Iiwic2VsZiIsImZvcmNlRmlsbCIsImlkIiwicHVzaCIsImxpc3RlbmVyIiwic3VjY2VzcyIsImVycm9yIiwib25FcnJvciIsInVuZGVmaW5lZCIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJpbmRleCIsInNwbGljZSIsImNsZWFyTGlzdGVuZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUlBLElBQU1BLFNBQVMsR0FBR0MsZ0JBQVNELFNBQVQsRUFBbEI7O0FBRU8sSUFBTUUsV0FJWixHQUFHLEVBSkc7O0FBTUEsSUFBTUMsU0FFWixHQUFHLEVBRkc7OztBQUlBLFNBQVNDLGNBQVQsQ0FBd0JDLElBQXhCLEVBQXNDO0FBQzVDLE1BQUksRUFBRUEsSUFBSSxJQUFJSCxXQUFWLENBQUosRUFBNEI7QUFDM0JBLElBQUFBLFdBQVcsQ0FBQ0csSUFBRCxDQUFYLEdBQW9CTCxTQUFTLENBQUNNLFVBQVYsQ0FBcUJELElBQXJCLENBQXBCO0FBQ0E7O0FBQ0QsU0FBT0gsV0FBVyxDQUFDRyxJQUFELENBQWxCO0FBQ0E7O0FBRU0sSUFBTUUsUUFBdUIsR0FBRyxFQUFoQzs7O0FBRUEsU0FBU0MsTUFBVCxDQUFpQ0MsS0FBakMsRUFBdUQ7QUFDN0QsTUFBTUosSUFBSSxHQUFHLElBQUlJLEtBQUosR0FBWUMsWUFBWixFQUFiOztBQUNBLE1BQUlILFFBQVEsQ0FBQ0ksUUFBVCxDQUFrQk4sSUFB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ZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi9jb2xsZWN0aW9uJztcclxuaW1wb3J0IHsgTGlzdGVuZXIgfSBmcm9tICcuL2NvbnRyYWN0cyc7XHJcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5jb25zdCBmaXJlc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uczoge1xyXG5cdFtcclxuXHRcdGtleTogc3RyaW5nXHJcblx0XTogZmlyZWJhc2UuZmlyZXN0b3JlLkNvbGxlY3Rpb25SZWZlcmVuY2U8ZmlyZWJhc2UuZmlyZXN0b3JlLkRvY3VtZW50RGF0YT47XHJcbn0gPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZW5lcnM6IHtcclxuXHRba2V5OiBzdHJpbmddOiBBcnJheTxMaXN0ZW5lciB8IG51bGw+O1xyXG59ID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbGxlY3Rpb24obmFtZTogc3RyaW5nKSB7XHJcblx0aWYgKCEobmFtZSBpbiBjb2xsZWN0aW9ucykpIHtcclxuXHRcdGNvbGxlY3Rpb25zW25hbWVdID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24obmFtZSk7XHJcblx0fVxyXG5cdHJldHVybiBjb2xsZWN0aW9uc1tuYW1lXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlbmVkOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuPFQgZXh0ZW5kcyBNb2RlbD4obW9kZWw6IHsgbmV3ICgpOiBUIH0pIHtcclxuXHRjb25zdCBuYW1lID0gbmV3IG1vZGVsKCkuZ2V0VGFibGVOYW1lKCk7XHJcblx0aWYgKGxpc3RlbmVkLmluY2x1ZGVzKG5hbWUpKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGlmICghKG5hbWUgaW4gY29sbGVjdGlvbnMpKSB7XHJcblx0XHRtYWtlQ29sbGVjdGlvbihuYW1lKTtcclxuXHR9XHJcblx0Y29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zW25hbWVdO1xyXG5cdGNvbGxlY3Rpb24ub25TbmFwc2hvdChcclxuXHRcdChzbmFwc2hvdCkgPT4ge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gbmV3IENvbGxlY3Rpb248YW55PigpO1xyXG5cdFx0XHRzbmFwc2hvdC5mb3JFYWNoKChkb2N1bWVudCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHNlbGYgPSBuZXcgbW9kZWwoKTtcclxuXHRcdFx0XHRzZWxmLmZvcmNlRmlsbCh7XHJcblx0XHRcdFx0XHQuLi5kb2N1bWVudC5kYXRhKCksXHJcblx0XHRcdFx0XHRpZDogZG9jdW1lbnQuaWQsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKHNlbGYpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYgKG5hbWUgaW4gbGlzdGVuZXJzKSB7XHJcblx0XHRcdFx0bGlzdGVuZXJzW25hbWVdLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAobGlzdGVuZXIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuc3VjY2VzcyhkYXRhKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRpZiAobmFtZSBpbiBsaXN0ZW5lcnMpIHtcclxuXHRcdFx0XHRsaXN0ZW5lcnNbbmFtZV0uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuXHRcdFx0XHRcdGlmIChsaXN0ZW5lciAhPT0gbnVsbCAmJiBsaXN0ZW5lci5vbkVycm9yICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0bGlzdGVuZXIub25FcnJvcihlcnJvcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHQpO1xyXG5cdGxpc3RlbmVkLnB1c2gobmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lcjxUIGV4dGVuZHMgTW9kZWw+KFxyXG5cdGNvbGxlY3Rpb246IHsgbmV3ICgpOiBUIH0sXHJcblx0c3VjY2VzczogKG1vZGVsczogQ29sbGVjdGlvbjxUPikgPT4gdm9pZCxcclxuXHRvbkVycm9yPzogRnVuY3Rpb25cclxuKSB7XHJcblx0Y29uc3QgbmFtZSA9IG5ldyBjb2xsZWN0aW9uKCkuZ2V0VGFibGVOYW1lKCk7XHJcblx0aWYgKCEobmFtZSBpbiBsaXN0ZW5lcnMpKSB7XHJcblx0XHRsaXN0ZW5lcnNbbmFtZV0gPSBbXTtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdGxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcclxuXHRcdFx0c3VjY2VzcyxcclxuXHRcdFx0b25FcnJvcixcclxuXHRcdH0pIC0gMVxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcjxUIGV4dGVuZHMgTW9kZWw+KFxyXG5cdGNvbGxlY3Rpb246IHsgbmV3ICgpOiBUIH0sXHJcblx0aW5kZXg6IG51bWJlclxyXG4pIHtcclxuXHRjb25zdCBuYW1lID0gbmV3IGNvbGxlY3Rpb24oKS5nZXRUYWJsZU5hbWUoKTtcclxuXHRpZiAoIShuYW1lIGluIGxpc3RlbmVycykpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0bGlzdGVuZXJzW25hbWVdLnNwbGljZShpbmRleCwgMSwgbnVsbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckxpc3RlbmVyczxUIGV4dGVuZHMgTW9kZWw+KGNvbGxlY3Rpb246IHsgbmV3ICgpOiBUIH0pIHtcclxuXHRjb25zdCBuYW1lID0gbmV3IGNvbGxlY3Rpb24oKS5nZXRUYWJsZU5hbWUoKTtcclxuXHRpZiAoIShuYW1lIGluIGxpc3RlbmVycykpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0bGlzdGVuZXJzW25hbWVdID0gW107XHJcbn1cclxuIl19