const { Buffer } = require('buffer');

// const buf = Buffer.alloc(4);

// console.log(buf);
// console.log(buf[0]);

// const buf = Buffer.from('Hello, Raviii');

// console.log(buf);

// console.log(buf.toString());

// const buffTwo = Buffer.allocUnsafe


const buf1 = Buffer.from('Hello ');
const buf2 = Buffer.from('Ravi ');
const merged = Buffer.concat([buf1, buf2]);

console.log(merged);
console.log(merged.toString);
