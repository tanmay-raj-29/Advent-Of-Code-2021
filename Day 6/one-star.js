const { input } = require('./input');

let timer = input;

for (let i = 0; i < 80; i++) {
    const sz = timer.length;
    for (let j = 0; j < sz; j++) {
        timer[j]--;
        if (timer[j] === -1) {
            timer[j] = 6;
            timer.push(8);
        }
    }
}

console.log(timer.length);