"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasEvent = void 0;

var _hasRelationship = require("./has-relationship");

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

var events = {
  creating: {},
  created: {},
  updating: {},
  updated: {},
  deleting: {},
  deleted: {},
  saving: {},
  saved: {}
};

var HasEvent = /*#__PURE__*/function (_HasRelationship) {
  _inherits(HasEvent, _HasRelationship);

  var _super = _createSuper(HasEvent);

  function HasEvent() {
    var _this;

    _classCallCheck(this, HasEvent);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "name", void 0);

    _this.name = '';
    return _this;
  }

  _createClass(HasEvent, [{
    key: "creating",
    value: function creating(callback) {
      return this.registerEvent('creating', callback);
    }
  }, {
    key: "created",
    value: function created(callback) {
      return this.registerEvent('created', callback);
    }
  }, {
    key: "updating",
    value: function updating(callback) {
      return this.registerEvent('updating', callback);
    }
  }, {
    key: "updated",
    value: function updated(callback) {
      return this.registerEvent('updated', callback);
    }
  }, {
    key: "deleting",
    value: function deleting(callback) {
      return this.registerEvent('deleting', callback);
    }
  }, {
    key: "deleted",
    value: function deleted(callback) {
      return this.registerEvent('deleted', callback);
    }
  }, {
    key: "saving",
    value: function saving(callback) {
      return this.registerEvent('saving', callback);
    }
  }, {
    key: "saved",
    value: function saved(callback) {
      return this.registerEvent('saved', callback);
    }
  }, {
    key: "callEvent",
    value: function callEvent(name) {
      if (!(this.name in events[name])) {
        return this;
      }

      var callback = events[name][this.name];
      callback(this);
      return this;
    }
  }, {
    key: "registerEvent",
    value: function registerEvent(name, callback) {
      if (!(this.name in events[name])) {
        events[name][this.name] = callback;
      }

      return this;
    }
  }]);

  return HasEvent;
}(_hasRelationship.HasRelationship);

exports.HasEvent = HasEvent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oYXMtZXZlbnQudHMiXSwibmFtZXMiOlsiZXZlbnRzIiwiY3JlYXRpbmciLCJjcmVhdGVkIiwidXBkYXRpbmciLCJ1cGRhdGVkIiwiZGVsZXRpbmciLCJkZWxldGVkIiwic2F2aW5nIiwic2F2ZWQiLCJIYXNFdmVudCIsIm5hbWUiLCJjYWxsYmFjayIsInJlZ2lzdGVyRXZlbnQiLCJIYXNSZWxhdGlvbnNoaXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFNQSxNQUFNLEdBQUc7QUFDZEMsRUFBQUEsUUFBUSxFQUFFLEVBREk7QUFFZEMsRUFBQUEsT0FBTyxFQUFFLEVBRks7QUFHZEMsRUFBQUEsUUFBUSxFQUFFLEVBSEk7QUFJZEMsRUFBQUEsT0FBTyxFQUFFLEVBSks7QUFLZEMsRUFBQUEsUUFBUSxFQUFFLEVBTEk7QUFNZEMsRUFBQUEsT0FBTyxFQUFFLEVBTks7QUFPZEMsRUFBQUEsTUFBTSxFQUFFLEVBUE07QUFRZEMsRUFBQUEsS0FBSyxFQUFFO0FBUk8sQ0FBZjs7SUFXc0JDLFE7Ozs7O0FBR3JCLHNCQUFjO0FBQUE7O0FBQUE7O0FBQ2I7O0FBRGE7O0FBRWIsVUFBS0MsSUFBTCxHQUFZLEVBQVo7QUFGYTtBQUdiOzs7O1dBRUQsa0JBQVNDLFFBQVQsRUFBNEM7QUFDM0MsYUFBTyxLQUFLQyxhQUFMLENBQW1CLFVBQW5CLEVBQStCRCxRQUEvQixDQUFQO0FBQ0E7OztXQUNELGlCQUFRQSxRQUFSLEVBQTJDO0FBQzFDLGFBQU8sS0FBS0MsYUFBTCxDQUFtQixTQUFuQixFQUE4QkQsUUFBOUIsQ0FBUDtBQUNBOzs7V0FDRCxrQkFBU0EsUUFBVCxFQUE0QztBQUMzQyxhQUFPLEtBQUtDLGFBQUwsQ0FBbUIsVUFBbkIsRUFBK0JELFFBQS9CLENBQVA7QUFDQTs7O1dBQ0QsaUJBQVFBLFFBQVIsRUFBMkM7QUFDMUMsYUFBTyxLQUFLQyxhQUFMLENBQW1CLFNBQW5CLEVBQThCRCxRQUE5QixDQUFQO0FBQ0E7OztXQUNELGtCQUFTQSxRQUFULEVBQTRDO0FBQzNDLGFBQU8sS0FBS0MsYUFBTCxDQUFtQixVQUFuQixFQUErQkQsUUFBL0IsQ0FBUDtBQUNBOzs7V0FDRCxpQkFBUUEsUUFBUixFQUEyQztBQUMxQyxhQUFPLEtBQUtDLGFBQUwsQ0FBbUIsU0FBbkIsRUFBOEJELFFBQTlCLENBQVA7QUFDQTs7O1dBQ0QsZ0JBQU9BLFFBQVAsRUFBMEM7QUFDekMsYUFBTyxLQUFLQyxhQUFMLENBQW1CLFFBQW5CLEVBQTZCRCxRQUE3QixDQUFQO0FBQ0E7OztXQUNELGVBQU1BLFFBQU4sRUFBeUM7QUFDeEMsYUFBTyxLQUFLQyxhQUFMLENBQW1CLE9BQW5CLEVBQTRCRCxRQUE1QixDQUFQO0FBQ0E7OztXQUVELG1CQUFVRCxJQUFWLEVBQTRCO0FBQzNCLFVBQUksRUFBRSxLQUFLQSxJQUFMLElBQWFWLE1BQU0sQ0FBQ1UsSUFBRCxDQUFyQixDQUFKLEVBQWtDO0FBQ2pDLGVBQU8sSUFBUDtBQUNBOztBQUNELFVBQU1DLFFBQVEsR0FBR1gsTUFBTSxDQUFDVSxJQUFELENBQU4sQ0FBYSxLQUFLQSxJQUFsQixDQUFqQjtBQUNBQyxNQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0EsYUFBTyxJQUFQO0FBQ0E7OztXQUVELHVCQUFjRCxJQUFkLEVBQWdDQyxRQUFoQyxFQUEwRDtBQUN6RCxVQUFJLEVBQUUsS0FBS0QsSUFBTCxJQUFhVixNQUFNLENBQUNVLElBQUQsQ0FBckIsQ0FBSixFQUFrQztBQUNqQ1YsUUFBQUEsTUFBTSxDQUFDVSxJQUFELENBQU4sQ0FBYSxLQUFLQSxJQUFsQixJQUEwQkMsUUFBMUI7QUFDQTs7QUFDRCxhQUFPLElBQVA7QUFDQTs7OztFQS9DMERFLGdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxEYXRhIH0gZnJvbSAnLi9jb250cmFjdHMnO1xuaW1wb3J0IHsgSGFzUmVsYXRpb25zaGlwIH0gZnJvbSAnLi9oYXMtcmVsYXRpb25zaGlwJztcblxuZXhwb3J0IHR5cGUgRXZlbnRUeXBlcyA9ICdjcmVhdGluZycgfCAnY3JlYXRlZCcgfCAndXBkYXRpbmcnIHwgJ3VwZGF0ZWQnIHwgJ2RlbGV0aW5nJyB8ICdkZWxldGVkJyB8ICdzYXZpbmcnIHwgJ3NhdmVkJztcblxuZXhwb3J0IHR5cGUgQ2FsbGJhY2s8VCA9IGFueT4gPSAobW9kZWw6IFQpID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIEV2ZW50ID0ge1xuXHRba2V5OiBzdHJpbmddOiBDYWxsYmFjaztcbn07XG5cbmNvbnN0IGV2ZW50cyA9IHtcblx0Y3JlYXRpbmc6IHt9IGFzIEV2ZW50LFxuXHRjcmVhdGVkOiB7fSBhcyBFdmVudCxcblx0dXBkYXRpbmc6IHt9IGFzIEV2ZW50LFxuXHR1cGRhdGVkOiB7fSBhcyBFdmVudCxcblx0ZGVsZXRpbmc6IHt9IGFzIEV2ZW50LFxuXHRkZWxldGVkOiB7fSBhcyBFdmVudCxcblx0c2F2aW5nOiB7fSBhcyBFdmVudCxcblx0c2F2ZWQ6IHt9IGFzIEV2ZW50LFxufTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEhhc0V2ZW50PFQgZXh0ZW5kcyBNb2RlbERhdGE+IGV4dGVuZHMgSGFzUmVsYXRpb25zaGlwPFQ+IHtcblx0bmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gJyc7XG5cdH1cblxuXHRjcmVhdGluZyhjYWxsYmFjazogKHRoaXNBcmc6IHRoaXMpID0+IHZvaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlckV2ZW50KCdjcmVhdGluZycsIGNhbGxiYWNrKTtcblx0fVxuXHRjcmVhdGVkKGNhbGxiYWNrOiAodGhpc0FyZzogdGhpcykgPT4gdm9pZCkge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2NyZWF0ZWQnLCBjYWxsYmFjayk7XG5cdH1cblx0dXBkYXRpbmcoY2FsbGJhY2s6ICh0aGlzQXJnOiB0aGlzKSA9PiB2b2lkKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJFdmVudCgndXBkYXRpbmcnLCBjYWxsYmFjayk7XG5cdH1cblx0dXBkYXRlZChjYWxsYmFjazogKHRoaXNBcmc6IHRoaXMpID0+IHZvaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlckV2ZW50KCd1cGRhdGVkJywgY2FsbGJhY2spO1xuXHR9XG5cdGRlbGV0aW5nKGNhbGxiYWNrOiAodGhpc0FyZzogdGhpcykgPT4gdm9pZCkge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2RlbGV0aW5nJywgY2FsbGJhY2spO1xuXHR9XG5cdGRlbGV0ZWQoY2FsbGJhY2s6ICh0aGlzQXJnOiB0aGlzKSA9PiB2b2lkKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJFdmVudCgnZGVsZXRlZCcsIGNhbGxiYWNrKTtcblx0fVxuXHRzYXZpbmcoY2FsbGJhY2s6ICh0aGlzQXJnOiB0aGlzKSA9PiB2b2lkKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJFdmVudCgnc2F2aW5nJywgY2FsbGJhY2spO1xuXHR9XG5cdHNhdmVkKGNhbGxiYWNrOiAodGhpc0FyZzogdGhpcykgPT4gdm9pZCkge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyRXZlbnQoJ3NhdmVkJywgY2FsbGJhY2spO1xuXHR9XG5cblx0Y2FsbEV2ZW50KG5hbWU6IEV2ZW50VHlwZXMpIHtcblx0XHRpZiAoISh0aGlzLm5hbWUgaW4gZXZlbnRzW25hbWVdKSkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGNvbnN0IGNhbGxiYWNrID0gZXZlbnRzW25hbWVdW3RoaXMubmFtZV07XG5cdFx0Y2FsbGJhY2sodGhpcyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRyZWdpc3RlckV2ZW50KG5hbWU6IEV2ZW50VHlwZXMsIGNhbGxiYWNrOiBDYWxsYmFjazx0aGlzPikge1xuXHRcdGlmICghKHRoaXMubmFtZSBpbiBldmVudHNbbmFtZV0pKSB7XG5cdFx0XHRldmVudHNbbmFtZV1bdGhpcy5uYW1lXSA9IGNhbGxiYWNrO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuIl19