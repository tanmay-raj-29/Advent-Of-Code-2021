const { input } = require('./input');

const score = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137
};
const correct = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<'
};

let answer = 0;

input.forEach(line => {
    const sz = line.length;
    let stack = [];
    for (let i = 0; i < sz; i++) {
        if (line[i] in correct) {
            if (stack[stack.length - 1] === correct[line[i]]) {
                stack.pop();
            }
            else {
                answer += score[line[i]];
                break;
            }
        }
        else {
            stack.push(line[i]);
        }
    }
});

console.log(answer);