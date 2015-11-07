(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.boolean = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  var _objectAssign = require('object-assign');

  var _objectAssign2 = _interopRequireDefault(_objectAssign);

  exports['default'] = _objectAssign2['default'].bind(null, {}, {
    coerce: function coerce(value) {
      return !!value;
    },
    'default': false,
    deserialize: function deserialize(value) {
      return !(value === null);
    },
    serialize: function serialize(value) {
      return value ? '' : undefined;
    }
  });
  module.exports = exports['default'];
});