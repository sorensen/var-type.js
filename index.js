'use strict';

var toString = Object.prototype.toString
  , slice = Array.prototype.slice
  , concat = Array.prototype.concat

module.exports = function(x, tests) {
  var t = toString.call(x).replace(/\[object |\]/g, '')
    , args = slice.call(arguments, 1)
    , tests = concat.apply([], args)

  if (tests.length) return !!~tests.indexOf(t)
  return t
}
