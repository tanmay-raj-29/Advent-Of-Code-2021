const { input } = require('./input');

input.sort((a, b) => a-b);

const len = input.length;
const median = input[len / 2];
let fuel = 0;

input.forEach(pos => fuel += Math.abs(pos - median));

console.log(fuel);