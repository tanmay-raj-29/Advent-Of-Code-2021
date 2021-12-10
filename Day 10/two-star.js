const { input } = require('./input');

const score = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4
};

const correct = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>'
};

let scores = [];

input.forEach(line => {
    const sz = line.length;
    let stack = [];
    let corrupt = false;
    for (let i = 0; i < sz; i++) {
        if (line[i] in correct) {
            stack.push(line[i]);
        }
        else {
            if (correct[stack[stack.length - 1]] === line[i]) {
                stack.pop();
            }
            else {
                corrupt = true;
                break;
            }
        }
    }
    if (corrupt === false) {
        let curScore = 0;
        stack.reverse();
        stack.forEach(ch => {
            curScore *= 5;
            curScore += score[correct[ch]]
            console.log(curScore);
        });
        scores.push(curScore);
    }
});


scores.sort((a, b) => a - b);
scores.forEach(sc => console.log(sc));

console.log(scores[Math.floor(scores.length/2)]);