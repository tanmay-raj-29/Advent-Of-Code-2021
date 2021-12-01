const { input } = require('./input');

let counter = 0;

input.forEach((depth, index) => {
    if (index >= 3) {
        let curDepth = +depth;
        let prevWindowDepth = +input[index - 3];
        if (curDepth > prevWindowDepth) counter++;
    }
});

console.log(counter);