const fs = require('fs');
const util = require('util');
const parse = require('./parse');

function parseFile(fileName, options, callback) {
  fs.readFile(fileName, 'utf-8', (error, css) => {
    if (error) {
      callback(error);
    } else {
      callback(
        null,
        parse(css, Object.assign({}, options, { from: fileName }))
      );
    }
  });
}

const parseFileAsync = util.promisify(parseFile);

function parseFileSync(fileName, options) {
  const css = fs.readFileSync(fileName, 'utf-8');
  return parse(css, Object.assign({}, options, { from: fileName }));
}

module.exports = {
  parse,
  parseFile,
  parseFileSync,
  parseFileAsync
};
