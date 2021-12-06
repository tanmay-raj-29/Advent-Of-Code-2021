const { input } = require('./input');

let count = [];
for (let i = 0; i <= 8; i++) {
    count.push(0);
}

input.forEach(timer => count[timer]++);

for (let i = 0; i < 256; i++) {
    let new_count = [];
    for (let j = 0; j <= 8; j++) {
        new_count.push(0);
    }
    for (let j = 0; j <= 8; j++) {
        if (j == 0) {
            new_count[8] += count[0];
            new_count[6] += count[0];
        }
        else {
            new_count[j-1] += count[j];
        }
    }
    count = new_count;
}

console.log(count.reduce((a, b) => a + b, 0));