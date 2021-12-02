const { input } = require('./input');

let horizontal = 0;
let vertical = 0;
let aim = 0;

input.forEach(([dir, val]) => {
    if (dir == 'forward') horizontal += val, vertical += aim * val;
    else if (dir == 'up') aim -= val;
    else aim += val;
});

console.log(vertical * horizontal);