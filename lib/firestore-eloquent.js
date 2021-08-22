"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Model: true,
  HasRelationship: true,
  HasEvent: true,
  Collection: true
};
Object.defineProperty(exports, "Model", {
  enumerable: true,
  get: function () {
    return _model.Model;
  }
});
Object.defineProperty(exports, "HasRelationship", {
  enumerable: true,
  get: function () {
    return _hasRelationship.HasRelationship;
  }
});
Object.defineProperty(exports, "HasEvent", {
  enumerable: true,
  get: function () {
    return _hasEvent.HasEvent;
  }
});
Object.defineProperty(exports, "Collection", {
  enumerable: true,
  get: function () {
    return _collection.Collection;
  }
});

var _model = require("./model");

var _hasRelationship = require("./has-relationship");

var _hasEvent = require("./has-event");

var _contracts = require("./contracts");

Object.keys(_contracts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _contracts[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _contracts[key];
    }
  });
});

var _collection = require("./collection");

var _db = require("./db");

Object.keys(_db).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _db[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _db[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maXJlc3RvcmUtZWxvcXVlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcbmV4cG9ydCB7IEhhc1JlbGF0aW9uc2hpcCB9IGZyb20gJy4vaGFzLXJlbGF0aW9uc2hpcCc7XG5leHBvcnQgeyBIYXNFdmVudCB9IGZyb20gJy4vaGFzLWV2ZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3RzJztcbmV4cG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuL2NvbGxlY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9kYic7XG4iXX0=