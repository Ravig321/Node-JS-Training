const fs = require('fs');

const ab = fs.readFileSync('myfile.txt', 'utf-8');

console.clear();
console.warn(ab);