"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addListener = addListener;
exports.clearListeners = clearListeners;
exports.collections = void 0;
exports.getFirestore = getFirestore;
exports.listen = listen;
exports.listeners = exports.listened = void 0;
exports.makeCollection = makeCollection;
exports.removeListener = removeListener;
exports.setFirestore = setFirestore;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

var _collection = require("./collection");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const placeholder = {
  firestore: null
};

function getFirestore() {
  return placeholder.firestore || _app.default.firestore();
}

function setFirestore(firestore) {
  placeholder.firestore = firestore;
}

const collections = {};
exports.collections = collections;
const listeners = {};
exports.listeners = listeners;

function makeCollection(name) {
  if (!(name in collections)) {
    collections[name] = getFirestore().collection(name);
  }

  return collections[name];
}

const listened = [];
exports.listened = listened;

function listen(model) {
  const name = new model().getTableName();

  if (listened.includes(name)) {
    return;
  }

  if (!(name in collections)) {
    makeCollection(name);
  }

  const collection = collections[name];
  collection.onSnapshot(snapshot => {
    const data = new _collection.Collection();
    snapshot.forEach(document => {
      const self = new model();
      self.forceFill(_objectSpread(_objectSpread({}, document.data()), {}, {
        id: document.id
      }));
      data.push(self);
    });

    if (name in listeners) {
      listeners[name].forEach(listener => {
        if (listener !== null) {
          listener.success(data);
        }
      });
    }
  }, error => {
    if (name in listeners) {
      listeners[name].forEach(listener => {
        if (listener !== null && listener.onError !== undefined) {
          listener.onError(error);
        }
      });
    }
  });
  listened.push(name);
}

function addListener(collection, success, onError) {
  const name = new collection().getTableName();

  if (!(name in listeners)) {
    listeners[name] = [];
  }

  return listeners[name].push({
    success,
    onError
  }) - 1;
}

function removeListener(model, index) {
  const name = new model().getTableName();

  if (!(name in listeners)) {
    return;
  }

  listeners[name].splice(index, 1, null);
}

function clearListeners(model) {
  const name = new model().getTableName();

  if (!(name in listeners)) {
    return;
  }

  listeners[name] = [];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi50cyJdLCJuYW1lcyI6WyJwbGFjZWhvbGRlciIsImZpcmVzdG9yZSIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlIiwic2V0RmlyZXN0b3JlIiwiY29sbGVjdGlvbnMiLCJsaXN0ZW5lcnMiLCJtYWtlQ29sbGVjdGlvbiIsIm5hbWUiLCJjb2xsZWN0aW9uIiwibGlzdGVuZWQiLCJsaXN0ZW4iLCJtb2RlbCIsImdldFRhYmxlTmFtZSIsImluY2x1ZGVzIiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiZGF0YSIsIkNvbGxlY3Rpb24iLCJmb3JFYWNoIiwiZG9jdW1lbnQiLCJzZWxmIiwiZm9yY2VGaWxsIiwiaWQiLCJwdXNoIiwibGlzdGVuZXIiLCJzdWNjZXNzIiwiZXJyb3IiLCJvbkVycm9yIiwidW5kZWZpbmVkIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImluZGV4Iiwic3BsaWNlIiwiY2xlYXJMaXN0ZW5lcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBSUEsTUFBTUEsV0FBK0QsR0FBRztBQUN2RUMsRUFBQUEsU0FBUyxFQUFFO0FBRDRELENBQXhFOztBQUlPLFNBQVNDLFlBQVQsR0FBd0I7QUFDOUIsU0FBT0YsV0FBVyxDQUFDQyxTQUFaLElBQXlCRSxhQUFTRixTQUFULEVBQWhDO0FBQ0E7O0FBRU0sU0FBU0csWUFBVCxDQUFzQkgsU0FBdEIsRUFBK0Q7QUFDckVELEVBQUFBLFdBQVcsQ0FBQ0MsU0FBWixHQUF3QkEsU0FBeEI7QUFDQTs7QUFFTSxNQUFNSSxXQUVaLEdBQUcsRUFGRzs7QUFJQSxNQUFNQyxTQUVaLEdBQUcsRUFGRzs7O0FBSUEsU0FBU0MsY0FBVCxDQUF3QkMsSUFBeEIsRUFBc0M7QUFDNUMsTUFBSSxFQUFFQSxJQUFJLElBQUlILFdBQVYsQ0FBSixFQUE0QjtBQUMzQkEsSUFBQUEsV0FBVyxDQUFDRyxJQUFELENBQVgsR0FBb0JOLFlBQVks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QUErRDtBQUNyRSxRQUFNSixJQUFJLEdBQUcsSUFBSUksS0FBSixHQUFZQyxZQUFaLEVBQWI7O0FBQ0EsTUFBSSxFQUFFTCxJQUFJLElBQUlGLFNBQVYsQ0FBSixFQUEwQjtBQUN6QjtBQUNBOztBQUNEQSxFQUFBQSxTQUFTLENBQUNFLElBQUQsQ0FBVCxHQUFrQixFQUFsQjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi9jb2xsZWN0aW9uJztcbmltcG9ydCB7IExpc3RlbmVyIH0gZnJvbSAnLi9jb250cmFjdHMnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcblxuY29uc3QgcGxhY2Vob2xkZXI6IHsgZmlyZXN0b3JlOiBmaXJlYmFzZS5maXJlc3RvcmUuRmlyZXN0b3JlIHwgbnVsbCB9ID0ge1xuXHRmaXJlc3RvcmU6IG51bGwsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlyZXN0b3JlKCkge1xuXHRyZXR1cm4gcGxhY2Vob2xkZXIuZmlyZXN0b3JlIHx8IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlyZXN0b3JlKGZpcmVzdG9yZTogZmlyZWJhc2UuZmlyZXN0b3JlLkZpcmVzdG9yZSkge1xuXHRwbGFjZWhvbGRlci5maXJlc3RvcmUgPSBmaXJlc3RvcmU7XG59XG5cbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uczoge1xuXHRba2V5OiBzdHJpbmddOiBmaXJlYmFzZS5maXJlc3RvcmUuQ29sbGVjdGlvblJlZmVyZW5jZTxmaXJlYmFzZS5maXJlc3RvcmUuRG9jdW1lbnREYXRhPjtcbn0gPSB7fTtcblxuZXhwb3J0IGNvbnN0IGxpc3RlbmVyczoge1xuXHRba2V5OiBzdHJpbmddOiBBcnJheTxMaXN0ZW5lciB8IG51bGw+O1xufSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbGxlY3Rpb24obmFtZTogc3RyaW5nKSB7XG5cdGlmICghKG5hbWUgaW4gY29sbGVjdGlvbnMpKSB7XG5cdFx0Y29sbGVjdGlvbnNbbmFtZV0gPSBnZXRGaXJlc3RvcmUoKS5jb2xsZWN0aW9uKG5hbWUpO1xuXHR9XG5cdHJldHVybiBjb2xsZWN0aW9uc1tuYW1lXTtcbn1cblxuZXhwb3J0IGNvbnN0IGxpc3RlbmVkOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW48VCBleHRlbmRzIE1vZGVsPihtb2RlbDogeyBuZXcgKCk6IFQgfSkge1xuXHRjb25zdCBuYW1lID0gbmV3IG1vZGVsKCkuZ2V0VGFibGVOYW1lKCk7XG5cdGlmIChsaXN0ZW5lZC5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoIShuYW1lIGluIGNvbGxlY3Rpb25zKSkge1xuXHRcdG1ha2VDb2xsZWN0aW9uKG5hbWUpO1xuXHR9XG5cdGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uc1tuYW1lXTtcblx0Y29sbGVjdGlvbi5vblNuYXBzaG90KFxuXHRcdChzbmFwc2hvdCkgPT4ge1xuXHRcdFx0Y29uc3QgZGF0YSA9IG5ldyBDb2xsZWN0aW9uPGFueT4oKTtcblx0XHRcdHNuYXBzaG90LmZvckVhY2goKGRvY3VtZW50KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHNlbGYgPSBuZXcgbW9kZWwoKTtcblx0XHRcdFx0c2VsZi5mb3JjZUZpbGwoe1xuXHRcdFx0XHRcdC4uLmRvY3VtZW50LmRhdGEoKSxcblx0XHRcdFx0XHRpZDogZG9jdW1lbnQuaWQsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRkYXRhLnB1c2goc2VsZik7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChuYW1lIGluIGxpc3RlbmVycykge1xuXHRcdFx0XHRsaXN0ZW5lcnNbbmFtZV0uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcblx0XHRcdFx0XHRpZiAobGlzdGVuZXIgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyLnN1Y2Nlc3MoZGF0YSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdChlcnJvcikgPT4ge1xuXHRcdFx0aWYgKG5hbWUgaW4gbGlzdGVuZXJzKSB7XG5cdFx0XHRcdGxpc3RlbmVyc1tuYW1lXS5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuXHRcdFx0XHRcdGlmIChsaXN0ZW5lciAhPT0gbnVsbCAmJiBsaXN0ZW5lci5vbkVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyLm9uRXJyb3IoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHQpO1xuXHRsaXN0ZW5lZC5wdXNoKG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTGlzdGVuZXI8VCBleHRlbmRzIE1vZGVsPihjb2xsZWN0aW9uOiB7IG5ldyAoKTogVCB9LCBzdWNjZXNzOiAobW9kZWxzOiBDb2xsZWN0aW9uPFQ+KSA9PiB2b2lkLCBvbkVycm9yPzogRnVuY3Rpb24pIHtcblx0Y29uc3QgbmFtZSA9IG5ldyBjb2xsZWN0aW9uKCkuZ2V0VGFibGVOYW1lKCk7XG5cdGlmICghKG5hbWUgaW4gbGlzdGVuZXJzKSkge1xuXHRcdGxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0bGlzdGVuZXJzW25hbWVdLnB1c2goe1xuXHRcdFx0c3VjY2Vzcyxcblx0XHRcdG9uRXJyb3IsXG5cdFx0fSkgLSAxXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcjxUIGV4dGVuZHMgTW9kZWw+KG1vZGVsOiB7IG5ldyAoKTogVCB9LCBpbmRleDogbnVtYmVyKSB7XG5cdGNvbnN0IG5hbWUgPSBuZXcgbW9kZWwoKS5nZXRUYWJsZU5hbWUoKTtcblx0aWYgKCEobmFtZSBpbiBsaXN0ZW5lcnMpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGxpc3RlbmVyc1tuYW1lXS5zcGxpY2UoaW5kZXgsIDEsIG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJMaXN0ZW5lcnM8VCBleHRlbmRzIE1vZGVsPihtb2RlbDogeyBuZXcgKCk6IFQgfSkge1xuXHRjb25zdCBuYW1lID0gbmV3IG1vZGVsKCkuZ2V0VGFibGVOYW1lKCk7XG5cdGlmICghKG5hbWUgaW4gbGlzdGVuZXJzKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRsaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbn1cbiJdfQ==