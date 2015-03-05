'use strict';

var toString = Object.prototype.toString

module.exports = function(x, test) {
  var t = toString.call(x).replace('[object ', '').replace(']', '')
  if (test) return t === test
  return t
}
