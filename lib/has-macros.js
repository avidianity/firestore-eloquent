"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasMacros = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HasMacros = /*#__PURE__*/function () {
  function HasMacros() {
    _classCallCheck(this, HasMacros);

    _defineProperty(this, "macros", []);
  }

  _createClass(HasMacros, [{
    key: "macro",
    value: function macro(key, callable) {
      var macro = this.macros.find(function (macro) {
        return macro.key === key;
      });

      if (macro) {
        throw new Error("".concat(key, " is already registered."));
      }

      this.macros.push({
        key: key,
        callable: callable
      });
    }
  }, {
    key: "call",
    value: function call(key) {
      var macro = this.macros.find(function (macro) {
        return macro.key === key;
      });

      if (!macro) {
        throw new Error("".concat(key, " is not a registered macro."));
      }

      for (var _len = arguments.length, parameters = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        parameters[_key - 1] = arguments[_key];
      }

      return macro.callable.apply(macro, parameters);
    }
  }]);

  return HasMacros;
}();

exports.HasMacros = HasMacros;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oYXMtbWFjcm9zLnRzIl0sIm5hbWVzIjpbIkhhc01hY3JvcyIsImtleSIsImNhbGxhYmxlIiwibWFjcm8iLCJtYWNyb3MiLCJmaW5kIiwiRXJyb3IiLCJwdXNoIiwicGFyYW1ldGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBS3NCQSxTOzs7O29DQUNZLEU7Ozs7O1dBRWpDLGVBQWVDLEdBQWYsRUFBNEJDLFFBQTVCLEVBQTBEO0FBQ3pELFVBQU1DLEtBQUssR0FBRyxLQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUIsVUFBQ0YsS0FBRDtBQUFBLGVBQVdBLEtBQUssQ0FBQ0YsR0FBTixLQUFjQSxHQUF6QjtBQUFBLE9BQWpCLENBQWQ7O0FBQ0EsVUFBSUUsS0FBSixFQUFXO0FBQ1YsY0FBTSxJQUFJRyxLQUFKLFdBQWFMLEdBQWIsNkJBQU47QUFDQTs7QUFDRCxXQUFLRyxNQUFMLENBQVlHLElBQVosQ0FBaUI7QUFDaEJOLFFBQUFBLEdBQUcsRUFBSEEsR0FEZ0I7QUFFaEJDLFFBQUFBLFFBQVEsRUFBUkE7QUFGZ0IsT0FBakI7QUFJQTs7O1dBRUQsY0FBUUQsR0FBUixFQUE0QztBQUMzQyxVQUFNRSxLQUFLLEdBQUcsS0FBS0MsTUFBTCxDQUFZQyxJQUFaLENBQWlCLFVBQUNGLEtBQUQ7QUFBQSxlQUFXQSxLQUFLLENBQUNGLEdBQU4sS0FBY0EsR0FBekI7QUFBQSxPQUFqQixDQUFkOztBQUNBLFVBQUksQ0FBQ0UsS0FBTCxFQUFZO0FBQ1gsY0FBTSxJQUFJRyxLQUFKLFdBQWFMLEdBQWIsaUNBQU47QUFDQTs7QUFKMEMsd0NBQXBCTyxVQUFvQjtBQUFwQkEsUUFBQUEsVUFBb0I7QUFBQTs7QUFLM0MsYUFBT0wsS0FBSyxDQUFDRCxRQUFOLE9BQUFDLEtBQUssRUFBYUssVUFBYixDQUFaO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBNYWNybyA9IHtcclxuXHRrZXk6IHN0cmluZztcclxuXHRjYWxsYWJsZTogRnVuY3Rpb247XHJcbn07XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGFzTWFjcm9zIHtcclxuXHRwcm90ZWN0ZWQgbWFjcm9zOiBBcnJheTxNYWNybz4gPSBbXTtcclxuXHJcblx0bWFjcm88VCA9IGFueT4oa2V5OiBzdHJpbmcsIGNhbGxhYmxlOiAobW9kZWw6IHRoaXMpID0+IFQpIHtcclxuXHRcdGNvbnN0IG1hY3JvID0gdGhpcy5tYWNyb3MuZmluZCgobWFjcm8pID0+IG1hY3JvLmtleSA9PT0ga2V5KTtcclxuXHRcdGlmIChtYWNybykge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7a2V5fSBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuYCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm1hY3Jvcy5wdXNoKHtcclxuXHRcdFx0a2V5LFxyXG5cdFx0XHRjYWxsYWJsZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y2FsbDxUPihrZXk6IHN0cmluZywgLi4ucGFyYW1ldGVyczogYW55KTogVCB7XHJcblx0XHRjb25zdCBtYWNybyA9IHRoaXMubWFjcm9zLmZpbmQoKG1hY3JvKSA9PiBtYWNyby5rZXkgPT09IGtleSk7XHJcblx0XHRpZiAoIW1hY3JvKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgJHtrZXl9IGlzIG5vdCBhIHJlZ2lzdGVyZWQgbWFjcm8uYCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbWFjcm8uY2FsbGFibGUoLi4ucGFyYW1ldGVycyk7XHJcblx0fVxyXG59XHJcbiJdfQ==