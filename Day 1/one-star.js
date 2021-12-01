const { input } = require('./input');

let prv = -1;
let counter = 0;

input.forEach((depth, index) => {
    if (index > 0 && +depth > prv) counter++;
    prv = +depth;
});

console.log(counter);