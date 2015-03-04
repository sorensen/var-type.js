'use strict';

var type = require('./index')
  , assert = require('assert')
  , ase = assert.strictEqual
 
describe('var-type', function() {

  function test(exp, list) {
    list.forEach(function(x) {
      ase(type(x), exp)
    })
  }

  function Klass() {}
  var klass = new Klass()

  it('String', function() {
    test('String', [
      'meow'
    , new String('bar')
    ])
  })

  it('Number', function() {
    test('Number', [
      20
    , new Number(10)
    , NaN
    , Infinity
    ])
  })

  it('Boolean', function() {
    test('Boolean', [
      true
    , new Boolean(false)
    ])
  })

  it('RegExp', function() {
    test('RegExp', [
      /ab+c/
    , new RegExp('ab+c')
    ])
  })

  it('Array', function() {
    test('Array', [
      [1, 2, 3]
    , new Array(4, 5, 6)
    ])
  })

  it('Object', function() {
    test('Object', [
      {a: 1}
    , new Object()
    , klass
    ])
  })

  it('Function', function() {
    test('Function', [
      function() {}
    , new Function('a', 'b', 'return')
    ])
  })

  it('Date', function() {
    test('Date', [
      new Date()
    ])
  })

  it('Null', function() {
    test('Null', [
      null
    ])
  })

  it('Undefined', function() {
    test('Undefined', [
      undefined
    , // note trailing comma
    ])
  })

  it('Error', function() {
    var err
    try { hi() } catch(e) {
      err = e
    }
    test('Error', [
      new Error()
    , err
    ])
  })
})
