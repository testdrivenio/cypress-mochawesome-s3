const path = require('path')
const fs = require('fs');

function findFiles (pattern) {
  const files = fs.readdirSync(pattern).filter(fn => fn.endsWith('.spec.js'));
  return files;

}

const test = findFiles(path.join('cypress', 'integration'));
console.log(test);

// module.exports = findFiles
