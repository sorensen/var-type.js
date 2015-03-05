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

| Input                  | Output    |
| ---------------------- |:---------:|
| 'meow'                 | String    |
| new String('bar')      | String    |
| 20                     | Number    |
| new Number(10)         | Number    |
| NaN                    | Number    |
| Infinity               | Number    |
| true                   | Boolean   |
| new Boolean()          | Boolean   |
| /ab+c/                 | RegExp    |
| new RegExp('ab+c')     | RegExp    |
| [1,2,3]                | Array     |
| new Array(4,5,6)       | Array     |
| {a: 1}                 | Object    |
| new Object()           | Object    |
| function() {}          | Function  |
| new Function('a', 'b') | Function  |
| new Date()             | Date      |
| new Error()            | Error     |
| null                   | Null      |
| undefined              | Undefined |


See [tests](./test.js).