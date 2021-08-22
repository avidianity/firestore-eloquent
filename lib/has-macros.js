"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasMacros = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class HasMacros {
  constructor() {
    _defineProperty(this, "macros", []);
  }

  macro(key, callable) {
    const macro = this.macros.find(macro => macro.key === key);

    if (macro) {
      throw new Error(`${key} is already registered.`);
    }

    this.macros.push({
      key,
      callable
    });
  }

  call(key, ...parameters) {
    const macro = this.macros.find(macro => macro.key === key);

    if (!macro) {
      throw new Error(`${key} is not a registered macro.`);
    }

    return macro.callable.bind(this)(...parameters);
  }

}

exports.HasMacros = HasMacros;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oYXMtbWFjcm9zLnRzIl0sIm5hbWVzIjpbIkhhc01hY3JvcyIsIm1hY3JvIiwia2V5IiwiY2FsbGFibGUiLCJtYWNyb3MiLCJmaW5kIiwiRXJyb3IiLCJwdXNoIiwiY2FsbCIsInBhcmFtZXRlcnMiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLTyxNQUFlQSxTQUFmLENBQXlCO0FBQUE7QUFBQSxvQ0FDRSxFQURGO0FBQUE7O0FBRy9CQyxFQUFBQSxLQUFLLENBQVVDLEdBQVYsRUFBdUJDLFFBQXZCLEVBQXFEO0FBQ3pELFVBQU1GLEtBQUssR0FBRyxLQUFLRyxNQUFMLENBQVlDLElBQVosQ0FBa0JKLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxHQUFOLEtBQWNBLEdBQTFDLENBQWQ7O0FBQ0EsUUFBSUQsS0FBSixFQUFXO0FBQ1YsWUFBTSxJQUFJSyxLQUFKLENBQVcsR0FBRUosR0FBSSx5QkFBakIsQ0FBTjtBQUNBOztBQUNELFNBQUtFLE1BQUwsQ0FBWUcsSUFBWixDQUFpQjtBQUNoQkwsTUFBQUEsR0FEZ0I7QUFFaEJDLE1BQUFBO0FBRmdCLEtBQWpCO0FBSUE7O0FBRURLLEVBQUFBLElBQUksQ0FBSU4sR0FBSixFQUFpQixHQUFHTyxVQUFwQixFQUF3QztBQUMzQyxVQUFNUixLQUFLLEdBQUcsS0FBS0csTUFBTCxDQUFZQyxJQUFaLENBQWtCSixLQUFELElBQVdBLEtBQUssQ0FBQ0MsR0FBTixLQUFjQSxHQUExQyxDQUFkOztBQUNBLFFBQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1gsWUFBTSxJQUFJSyxLQUFKLENBQVcsR0FBRUosR0FBSSw2QkFBakIsQ0FBTjtBQUNBOztBQUVELFdBQU9ELEtBQUssQ0FBQ0UsUUFBTixDQUFlTyxJQUFmLENBQW9CLElBQXBCLEVBQTBCLEdBQUdELFVBQTdCLENBQVA7QUFDQTs7QUFyQjhCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgTWFjcm8gPSB7XG5cdGtleTogc3RyaW5nO1xuXHRjYWxsYWJsZTogRnVuY3Rpb247XG59O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGFzTWFjcm9zIHtcblx0cHJvdGVjdGVkIG1hY3JvczogQXJyYXk8TWFjcm8+ID0gW107XG5cblx0bWFjcm88VCA9IGFueT4oa2V5OiBzdHJpbmcsIGNhbGxhYmxlOiAobW9kZWw6IHRoaXMpID0+IFQpIHtcblx0XHRjb25zdCBtYWNybyA9IHRoaXMubWFjcm9zLmZpbmQoKG1hY3JvKSA9PiBtYWNyby5rZXkgPT09IGtleSk7XG5cdFx0aWYgKG1hY3JvKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7a2V5fSBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuYCk7XG5cdFx0fVxuXHRcdHRoaXMubWFjcm9zLnB1c2goe1xuXHRcdFx0a2V5LFxuXHRcdFx0Y2FsbGFibGUsXG5cdFx0fSk7XG5cdH1cblxuXHRjYWxsPFQ+KGtleTogc3RyaW5nLCAuLi5wYXJhbWV0ZXJzOiBhbnkpOiBUIHtcblx0XHRjb25zdCBtYWNybyA9IHRoaXMubWFjcm9zLmZpbmQoKG1hY3JvKSA9PiBtYWNyby5rZXkgPT09IGtleSk7XG5cdFx0aWYgKCFtYWNybykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGAke2tleX0gaXMgbm90IGEgcmVnaXN0ZXJlZCBtYWNyby5gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFjcm8uY2FsbGFibGUuYmluZCh0aGlzKSguLi5wYXJhbWV0ZXJzKTtcblx0fVxufVxuIl19