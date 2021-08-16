"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFirestore = getFirestore;
exports.setFirestore = setFirestore;
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

var placeholder = {
  firestore: null
};

function getFirestore() {
  return placeholder.firestore || _app["default"].firestore();
}

function setFirestore(firestore) {
  placeholder.firestore = firestore;
}

var collections = {};
exports.collections = collections;
var listeners = {};
exports.listeners = listeners;

function makeCollection(name) {
  if (!(name in collections)) {
    collections[name] = getFirestore().collection(name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi50cyJdLCJuYW1lcyI6WyJwbGFjZWhvbGRlciIsImZpcmVzdG9yZSIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlIiwic2V0RmlyZXN0b3JlIiwiY29sbGVjdGlvbnMiLCJsaXN0ZW5lcnMiLCJtYWtlQ29sbGVjdGlvbiIsIm5hbWUiLCJjb2xsZWN0aW9uIiwibGlzdGVuZWQiLCJsaXN0ZW4iLCJtb2RlbCIsImdldFRhYmxlTmFtZSIsImluY2x1ZGVzIiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiZGF0YSIsIkNvbGxlY3Rpb24iLCJmb3JFYWNoIiwiZG9jdW1lbnQiLCJzZWxmIiwiZm9yY2VGaWxsIiwiaWQiLCJwdXNoIiwibGlzdGVuZXIiLCJzdWNjZXNzIiwiZXJyb3IiLCJvbkVycm9yIiwidW5kZWZpbmVkIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImluZGV4Iiwic3BsaWNlIiwiY2xlYXJMaXN0ZW5lcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFJQSxJQUFNQSxXQUErRCxHQUFHO0FBQ3ZFQyxFQUFBQSxTQUFTLEVBQUU7QUFENEQsQ0FBeEU7O0FBSU8sU0FBU0MsWUFBVCxHQUF3QjtBQUM5QixTQUFPRixXQUFXLENBQUNDLFNBQVosSUFBeUJFLGdCQUFTRixTQUFULEVBQWhDO0FBQ0E7O0FBRU0sU0FBU0csWUFBVCxDQUFzQkgsU0FBdEIsRUFBK0Q7QUFDckVELEVBQUFBLFdBQVcsQ0FBQ0MsU0FBWixHQUF3QkEsU0FBeEI7QUFDQTs7QUFFTSxJQUFNSSxXQUVaLEdBQUcsRUFGRzs7QUFJQSxJQUFNQyxTQUVaLEdBQUcsRUFGRzs7O0FBSUEsU0FBU0MsY0FBVCxDQUF3QkMsSUFBeEIsRUFBc0M7QUFDNUMsTUFBSSxFQUFFQSxJQUFJLElBQUlILFdBQVYsQ0FBSixFQUE0QjtBQUMzQkEsSUFBQUEsV0FBVyxDQUFDRyxJQUFELENBQVgsR0FBb0JOLFlBQVks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QWlDLElBQWpDO0FBQ0E7O0FBRU0sU0FBU0UsY0FBVCxDQUF5Q3RCLEtBQXpDLEVBQStEO0FBQ3JFLE1BQU1KLElBQUksR0FBRyxJQUFJSSxLQUFKLEdBQVlDLFlBQVosRUFBYjs7QUFDQSxNQUFJLEVBQUVMLElBQUksSUFBSUYsU0FBVixDQUFKLEVBQTBCO0FBQ3pCO0FBQ0E7O0FBQ0RBLEVBQUFBLFNBQVMsQ0FBQ0UsSUFBRCxDQUFULEdBQWtCLEVBQWxCO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHsgTGlzdGVuZXIgfSBmcm9tICcuL2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xuXG5jb25zdCBwbGFjZWhvbGRlcjogeyBmaXJlc3RvcmU6IGZpcmViYXNlLmZpcmVzdG9yZS5GaXJlc3RvcmUgfCBudWxsIH0gPSB7XG5cdGZpcmVzdG9yZTogbnVsbCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJlc3RvcmUoKSB7XG5cdHJldHVybiBwbGFjZWhvbGRlci5maXJlc3RvcmUgfHwgZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaXJlc3RvcmUoZmlyZXN0b3JlOiBmaXJlYmFzZS5maXJlc3RvcmUuRmlyZXN0b3JlKSB7XG5cdHBsYWNlaG9sZGVyLmZpcmVzdG9yZSA9IGZpcmVzdG9yZTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb25zOiB7XG5cdFtrZXk6IHN0cmluZ106IGZpcmViYXNlLmZpcmVzdG9yZS5Db2xsZWN0aW9uUmVmZXJlbmNlPGZpcmViYXNlLmZpcmVzdG9yZS5Eb2N1bWVudERhdGE+O1xufSA9IHt9O1xuXG5leHBvcnQgY29uc3QgbGlzdGVuZXJzOiB7XG5cdFtrZXk6IHN0cmluZ106IEFycmF5PExpc3RlbmVyIHwgbnVsbD47XG59ID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29sbGVjdGlvbihuYW1lOiBzdHJpbmcpIHtcblx0aWYgKCEobmFtZSBpbiBjb2xsZWN0aW9ucykpIHtcblx0XHRjb2xsZWN0aW9uc1tuYW1lXSA9IGdldEZpcmVzdG9yZSgpLmNvbGxlY3Rpb24obmFtZSk7XG5cdH1cblx0cmV0dXJuIGNvbGxlY3Rpb25zW25hbWVdO1xufVxuXG5leHBvcnQgY29uc3QgbGlzdGVuZWQ6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlbjxUIGV4dGVuZHMgTW9kZWw+KG1vZGVsOiB7IG5ldyAoKTogVCB9KSB7XG5cdGNvbnN0IG5hbWUgPSBuZXcgbW9kZWwoKS5nZXRUYWJsZU5hbWUoKTtcblx0aWYgKGxpc3RlbmVkLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmICghKG5hbWUgaW4gY29sbGVjdGlvbnMpKSB7XG5cdFx0bWFrZUNvbGxlY3Rpb24obmFtZSk7XG5cdH1cblx0Y29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zW25hbWVdO1xuXHRjb2xsZWN0aW9uLm9uU25hcHNob3QoXG5cdFx0KHNuYXBzaG90KSA9PiB7XG5cdFx0XHRjb25zdCBkYXRhID0gbmV3IENvbGxlY3Rpb248YW55PigpO1xuXHRcdFx0c25hcHNob3QuZm9yRWFjaCgoZG9jdW1lbnQpID0+IHtcblx0XHRcdFx0Y29uc3Qgc2VsZiA9IG5ldyBtb2RlbCgpO1xuXHRcdFx0XHRzZWxmLmZvcmNlRmlsbCh7XG5cdFx0XHRcdFx0Li4uZG9jdW1lbnQuZGF0YSgpLFxuXHRcdFx0XHRcdGlkOiBkb2N1bWVudC5pZCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGRhdGEucHVzaChzZWxmKTtcblx0XHRcdH0pO1xuXHRcdFx0aWYgKG5hbWUgaW4gbGlzdGVuZXJzKSB7XG5cdFx0XHRcdGxpc3RlbmVyc1tuYW1lXS5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuXHRcdFx0XHRcdGlmIChsaXN0ZW5lciAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0bGlzdGVuZXIuc3VjY2VzcyhkYXRhKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRpZiAobmFtZSBpbiBsaXN0ZW5lcnMpIHtcblx0XHRcdFx0bGlzdGVuZXJzW25hbWVdLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGxpc3RlbmVyICE9PSBudWxsICYmIGxpc3RlbmVyLm9uRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0bGlzdGVuZXIub25FcnJvcihlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdCk7XG5cdGxpc3RlbmVkLnB1c2gobmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lcjxUIGV4dGVuZHMgTW9kZWw+KGNvbGxlY3Rpb246IHsgbmV3ICgpOiBUIH0sIHN1Y2Nlc3M6IChtb2RlbHM6IENvbGxlY3Rpb248VD4pID0+IHZvaWQsIG9uRXJyb3I/OiBGdW5jdGlvbikge1xuXHRjb25zdCBuYW1lID0gbmV3IGNvbGxlY3Rpb24oKS5nZXRUYWJsZU5hbWUoKTtcblx0aWYgKCEobmFtZSBpbiBsaXN0ZW5lcnMpKSB7XG5cdFx0bGlzdGVuZXJzW25hbWVdID0gW107XG5cdH1cblx0cmV0dXJuIChcblx0XHRsaXN0ZW5lcnNbbmFtZV0ucHVzaCh7XG5cdFx0XHRzdWNjZXNzLFxuXHRcdFx0b25FcnJvcixcblx0XHR9KSAtIDFcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyPFQgZXh0ZW5kcyBNb2RlbD4obW9kZWw6IHsgbmV3ICgpOiBUIH0sIGluZGV4OiBudW1iZXIpIHtcblx0Y29uc3QgbmFtZSA9IG5ldyBtb2RlbCgpLmdldFRhYmxlTmFtZSgpO1xuXHRpZiAoIShuYW1lIGluIGxpc3RlbmVycykpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0bGlzdGVuZXJzW25hbWVdLnNwbGljZShpbmRleCwgMSwgbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckxpc3RlbmVyczxUIGV4dGVuZHMgTW9kZWw+KG1vZGVsOiB7IG5ldyAoKTogVCB9KSB7XG5cdGNvbnN0IG5hbWUgPSBuZXcgbW9kZWwoKS5nZXRUYWJsZU5hbWUoKTtcblx0aWYgKCEobmFtZSBpbiBsaXN0ZW5lcnMpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGxpc3RlbmVyc1tuYW1lXSA9IFtdO1xufVxuIl19