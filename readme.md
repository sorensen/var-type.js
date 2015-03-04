var-type
========

Get the native type of any variable using `Object.prototype.toString`

Install
-------

With [npm](https://npmjs.org)

```
npm install var-type
```

Usage
-----

Node.js

```js
var varType = require('var-type')

console.log(varType('hello')) // String

// The 2nd argument will be used as a comparison test if sent
varType('foo', 'String') // true
```

See [tests](./test.js).