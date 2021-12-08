const { input } = require('./input');

let count = 0;

input.forEach(signals => {
    signals[1].forEach(signal => {
        if (signal.length === 2 || signal.length === 3 || signal.length === 4 || signal.length === 7) {
            count += 1;
        }
    });
})

console.log(count);