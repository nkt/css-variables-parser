CSS variables parser
====================

Installation
------------

```
yarn add css-variables-parser
```

Usage
-----

Parse css string

```js
const parser = require('css-variables-parser');

const variables = parser.parse(':root { --color-primary: red; }');
console.log(variables); // { 'color-primary': 'red' }
```

Parse file

```js
const parser = require('css-variables-parser');

const variables = parser.parseFile('./path/to/file.css');
```

Pass options as second argument

```js
const parser = require('css-variables-parser');

const variables = parser.parse(css, {
  from: 'filename.css',
  parser: require('sugarss')
});
```

License
-------
[MIT](LICENSE)
