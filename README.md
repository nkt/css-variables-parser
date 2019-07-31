CSS Variables Parser
====================

[![Build Status](https://circleci.com/gh/nkt/css-variables-parser.svg?style=shield)](https://circleci.com/gh/nkt/css-variables-parser)

Installation
------------

```bash
npm install css-variables-parser
```

Usage
-----

Parse css string

```js
const { parse } = require('css-variables-parser');

const variables = parse(':root { --color-primary: red; }');
console.log(variables); // { 'color-primary': 'red' }
```

Parse file (not available in browser)

```js
const {
  parseFile,
  parseFileSync,
  parseFileAsync
} = require('css-variables-parser');

parseFile('./path/to/file.css', null, (error, variables) => {
  console.log({ error, variables });
});

const variables = parseFileSync('./path/to/file.css');

parseFileAsync('./path/to/file.css')
  .then((variables) => console.log(variables))
  .catch((error) => console.error(error));
```

There are some options:

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
