"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collection = void 0;

var _tsMixer = require("ts-mixer");

var _hasMacros = require("./has-macros");

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

let Collection = _decorate([(0, _tsMixer.mix)(Array, _hasMacros.HasMacros)], function (_initialize) {
  class Collection {
    constructor() {
      _initialize(this);
    }

  }

  return {
    F: Collection,
    d: [{
      kind: "method",
      key: "load",
      value: async function load(relations) {
        const results = await Promise.all(this.map(item => item.load(relations)));
        results.forEach((item, index) => this.splice(index, 1, item));
        return this;
      }
    }, {
      kind: "method",
      key: "toJSON",
      value: function toJSON() {
        return this.toArray().map(item => item.toJSON ? item.toJSON() : item);
      }
    }, {
      kind: "method",
      key: "save",
      value: function save() {
        return Promise.all(this.map(item => item.save()));
      }
    }, {
      kind: "method",
      key: "delete",
      value: async function _delete() {
        await Promise.all(this.map(item => item.delete()));
      }
    }, {
      kind: "method",
      key: "includes",
      value: function includes(model) {
        const match = this.find(item => item.get('id') === model.get('id'));
        return match || this.toArray().includes(model) ? true : false;
      }
    }, {
      kind: "method",
      key: "indexOf",
      value: function indexOf(model) {
        const index = this.findIndex(item => item.get('id') === model.get('id'));
        return index;
      }
    }, {
      kind: "method",
      key: "replace",
      value: function replace(model, index) {
        if (index) {
          return this.splice(index, 1, model);
        }

        const modelIndex = this.indexOf(model);
        return this.splice(modelIndex, 1, model);
      }
    }, {
      kind: "method",
      key: "remove",
      value: function remove(index) {
        return this.splice(index, 1);
      }
    }, {
      kind: "method",
      key: "get",
      value: function get(item) {
        if (typeof item === 'string') {
          return this.find(i => i.get('id') === item);
        }

        return this.find(i => i.get('id') === item.get('id'));
      }
    }, {
      kind: "method",
      key: "set",
      value: function set(item) {
        if (this.includes(item)) {
          this.replace(item, this.indexOf(item));
        } else {
          this.push(item);
        }

        return this;
      }
    }, {
      kind: "method",
      key: "toArray",
      value: function toArray() {
        return Array.from(this);
      }
    }]
  };
});

exports.Collection = Collection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbIkNvbGxlY3Rpb24iLCJBcnJheSIsIkhhc01hY3JvcyIsInJlbGF0aW9ucyIsInJlc3VsdHMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbSIsImxvYWQiLCJmb3JFYWNoIiwiaW5kZXgiLCJzcGxpY2UiLCJ0b0FycmF5IiwidG9KU09OIiwic2F2ZSIsImRlbGV0ZSIsIm1vZGVsIiwibWF0Y2giLCJmaW5kIiwiZ2V0IiwiaW5jbHVkZXMiLCJmaW5kSW5kZXgiLCJtb2RlbEluZGV4IiwiaW5kZXhPZiIsImkiLCJyZXBsYWNlIiwicHVzaCIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlhQSxVLGNBRFosa0JBQUlDLEtBQUosRUFBV0Msb0JBQVgsQztBQUFELFFBQ2FGLFVBRGIsQ0FDMEU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7OztPQUE3REEsVTs7OzthQUNaLG9CQUFXRyxTQUFYLEVBQXFDO0FBQ3BDLGNBQU1DLE9BQU8sR0FBRyxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxHQUFMLENBQVVDLElBQUQsSUFBVUEsSUFBSSxDQUFDQyxJQUFMLENBQVVOLFNBQVYsQ0FBbkIsQ0FBWixDQUF0QjtBQUNBQyxRQUFBQSxPQUFPLENBQUNNLE9BQVIsQ0FBZ0IsQ0FBQ0YsSUFBRCxFQUFPRyxLQUFQLEtBQWlCLEtBQUtDLE1BQUwsQ0FBWUQsS0FBWixFQUFtQixDQUFuQixFQUFzQkgsSUFBdEIsQ0FBakM7QUFDQSxlQUFPLElBQVA7QUFDQTs7OzthQUVELGtCQUFjO0FBQ2IsZUFBTyxLQUFLSyxPQUFMLEdBQWVOLEdBQWYsQ0FBb0JDLElBQUQsSUFBV0EsSUFBSSxDQUFDTSxNQUFMLEdBQWNOLElBQUksQ0FBQ00sTUFBTCxFQUFkLEdBQThCTixJQUE1RCxDQUFQO0FBQ0E7Ozs7YUFFRCxnQkFBTztBQUNOLGVBQU9ILE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLEdBQUwsQ0FBVUMsSUFBRCxJQUFVQSxJQUFJLENBQUNPLElBQUwsRUFBbkIsQ0FBWixDQUFQO0FBQ0E7Ozs7YUFFRCx5QkFBZTtBQUNkLGNBQU1WLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLEdBQUwsQ0FBVUMsSUFBRCxJQUFVQSxJQUFJLENBQUNRLE1BQUwsRUFBbkIsQ0FBWixDQUFOO0FBQ0E7Ozs7YUFFRCxrQkFBU0MsS0FBVCxFQUFtQjtBQUNsQixjQUFNQyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFXWCxJQUFELElBQVVBLElBQUksQ0FBQ1ksR0FBTCxDQUFTLElBQVQsTUFBbUJILEtBQUssQ0FBQ0csR0FBTixDQUFVLElBQVYsQ0FBdkMsQ0FBZDtBQUNBLGVBQU9GLEtBQUssSUFBSSxLQUFLTCxPQUFMLEdBQWVRLFFBQWYsQ0FBd0JKLEtBQXhCLENBQVQsR0FBMEMsSUFBMUMsR0FBaUQsS0FBeEQ7QUFDQTs7OzthQUVELGlCQUFRQSxLQUFSLEVBQWtCO0FBQ2pCLGNBQU1OLEtBQUssR0FBRyxLQUFLVyxTQUFMLENBQWdCZCxJQUFELElBQVVBLElBQUksQ0FBQ1ksR0FBTCxDQUFTLElBQVQsTUFBbUJILEtBQUssQ0FBQ0csR0FBTixDQUFVLElBQVYsQ0FBNUMsQ0FBZDtBQUNBLGVBQU9ULEtBQVA7QUFDQTs7OzthQUVELGlCQUFRTSxLQUFSLEVBQWtCTixLQUFsQixFQUFrQztBQUNqQyxZQUFJQSxLQUFKLEVBQVc7QUFDVixpQkFBTyxLQUFLQyxNQUFMLENBQVlELEtBQVosRUFBbUIsQ0FBbkIsRUFBc0JNLEtBQXRCLENBQVA7QUFDQTs7QUFDRCxjQUFNTSxVQUFVLEdBQUcsS0FBS0MsT0FBTCxDQUFhUCxLQUFiLENBQW5CO0FBQ0EsZUFBTyxLQUFLTCxNQUFMLENBQVlXLFVBQVosRUFBd0IsQ0FBeEIsRUFBMkJOLEtBQTNCLENBQVA7QUFDQTs7OzthQUVELGdCQUFPTixLQUFQLEVBQXNCO0FBQ3JCLGVBQU8sS0FBS0MsTUFBTCxDQUFZRCxLQUFaLEVBQW1CLENBQW5CLENBQVA7QUFDQTs7OzthQUVELGFBQUlILElBQUosRUFBc0I7QUFDckIsWUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzdCLGlCQUFPLEtBQUtXLElBQUwsQ0FBV00sQ0FBRCxJQUFPQSxDQUFDLENBQUNMLEdBQUYsQ0FBTSxJQUFOLE1BQWdCWixJQUFqQyxDQUFQO0FBQ0E7O0FBRUQsZUFBTyxLQUFLVyxJQUFMLENBQVdNLENBQUQsSUFBT0EsQ0FBQyxDQUFDTCxHQUFGLENBQU0sSUFBTixNQUFnQlosSUFBSSxDQUFDWSxHQUFMLENBQVMsSUFBVCxDQUFqQyxDQUFQO0FBQ0E7Ozs7YUFFRCxhQUFJWixJQUFKLEVBQWE7QUFDWixZQUFJLEtBQUthLFFBQUwsQ0FBY2IsSUFBZCxDQUFKLEVBQXlCO0FBQ3hCLGVBQUtrQixPQUFMLENBQWFsQixJQUFiLEVBQW1CLEtBQUtnQixPQUFMLENBQWFoQixJQUFiLENBQW5CO0FBQ0EsU0FGRCxNQUVPO0FBQ04sZUFBS21CLElBQUwsQ0FBVW5CLElBQVY7QUFDQTs7QUFFRCxlQUFPLElBQVA7QUFDQTs7OzthQUVELG1CQUFVO0FBQ1QsZUFBT1AsS0FBSyxDQUFDMkIsSUFBTixDQUFXLElBQVgsQ0FBUDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxEYXRhIH0gZnJvbSAnLi9jb250cmFjdHMnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IG1peCB9IGZyb20gJ3RzLW1peGVyJztcbmltcG9ydCB7IEhhc01hY3JvcyB9IGZyb20gJy4vaGFzLW1hY3Jvcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sbGVjdGlvbjxUIGV4dGVuZHMgTW9kZWwgPSBhbnksIEQgZXh0ZW5kcyBNb2RlbERhdGEgPSBhbnk+IGV4dGVuZHMgQXJyYXk8VD4sIEhhc01hY3JvcyB7fVxuQG1peChBcnJheSwgSGFzTWFjcm9zKVxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb248VCBleHRlbmRzIE1vZGVsID0gYW55LCBEIGV4dGVuZHMgTW9kZWxEYXRhID0gYW55PiB7XG5cdGFzeW5jIGxvYWQocmVsYXRpb25zOiBBcnJheTxzdHJpbmc+KSB7XG5cdFx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHRoaXMubWFwKChpdGVtKSA9PiBpdGVtLmxvYWQocmVsYXRpb25zKSkpO1xuXHRcdHJlc3VsdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHRoaXMuc3BsaWNlKGluZGV4LCAxLCBpdGVtKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b0pTT04oKTogRFtdIHtcblx0XHRyZXR1cm4gdGhpcy50b0FycmF5KCkubWFwKChpdGVtKSA9PiAoaXRlbS50b0pTT04gPyBpdGVtLnRvSlNPTigpIDogaXRlbSkpO1xuXHR9XG5cblx0c2F2ZSgpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5tYXAoKGl0ZW0pID0+IGl0ZW0uc2F2ZSgpKSk7XG5cdH1cblxuXHRhc3luYyBkZWxldGUoKSB7XG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwodGhpcy5tYXAoKGl0ZW0pID0+IGl0ZW0uZGVsZXRlKCkpKTtcblx0fVxuXG5cdGluY2x1ZGVzKG1vZGVsOiBUKSB7XG5cdFx0Y29uc3QgbWF0Y2ggPSB0aGlzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZ2V0KCdpZCcpID09PSBtb2RlbC5nZXQoJ2lkJykpO1xuXHRcdHJldHVybiBtYXRjaCB8fCB0aGlzLnRvQXJyYXkoKS5pbmNsdWRlcyhtb2RlbCkgPyB0cnVlIDogZmFsc2U7XG5cdH1cblxuXHRpbmRleE9mKG1vZGVsOiBUKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5nZXQoJ2lkJykgPT09IG1vZGVsLmdldCgnaWQnKSk7XG5cdFx0cmV0dXJuIGluZGV4O1xuXHR9XG5cblx0cmVwbGFjZShtb2RlbDogVCwgaW5kZXg/OiBudW1iZXIpIHtcblx0XHRpZiAoaW5kZXgpIHtcblx0XHRcdHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMSwgbW9kZWwpO1xuXHRcdH1cblx0XHRjb25zdCBtb2RlbEluZGV4ID0gdGhpcy5pbmRleE9mKG1vZGVsKTtcblx0XHRyZXR1cm4gdGhpcy5zcGxpY2UobW9kZWxJbmRleCwgMSwgbW9kZWwpO1xuXHR9XG5cblx0cmVtb3ZlKGluZGV4OiBudW1iZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0Z2V0KGl0ZW06IHN0cmluZyB8IFQpIHtcblx0XHRpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5maW5kKChpKSA9PiBpLmdldCgnaWQnKSA9PT0gaXRlbSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZmluZCgoaSkgPT4gaS5nZXQoJ2lkJykgPT09IGl0ZW0uZ2V0KCdpZCcpKTtcblx0fVxuXG5cdHNldChpdGVtOiBUKSB7XG5cdFx0aWYgKHRoaXMuaW5jbHVkZXMoaXRlbSkpIHtcblx0XHRcdHRoaXMucmVwbGFjZShpdGVtLCB0aGlzLmluZGV4T2YoaXRlbSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnB1c2goaXRlbSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b0FycmF5KCkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMpO1xuXHR9XG59XG4iXX0=