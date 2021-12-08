const { input } = require('./input');

input.sort((a, b) => a-b);

const len = input.length;
const mean = Math.floor(input.reduce((a, b) => a + b, 0) / len);
let fuel1 = 0, fuel2 = 0;

input.forEach(pos => {
    fuel1 += Math.abs(pos - mean) * (Math.abs(pos - mean) + 1) / 2
    fuel2 += Math.abs(pos - mean - 1) * (Math.abs(pos - mean - 1) + 1) / 2
});

console.log(Math.min(fuel1, fuel2));