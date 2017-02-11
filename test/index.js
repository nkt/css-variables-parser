const fs = require('fs');
const path = require('path');
const parser = require('../src');

const casesPath = path.resolve(__dirname, 'cases');

fs.readdirSync(casesPath).forEach((caseName) => {
  test(caseName, () => {
    const caseDirName = path.resolve(casesPath, caseName);

    const input = path.resolve(caseDirName, 'input.css');
    const output = path.resolve(caseDirName, 'output.json');

    const actual = parser.parseFile(input);
    const expected = JSON.parse(fs.readFileSync(output, 'utf-8'));

    expect(actual).toEqual(expected);
  });
});
