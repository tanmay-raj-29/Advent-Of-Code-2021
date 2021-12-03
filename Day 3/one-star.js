const { input } = require('./input');

let count = [];
const len = input[0].length;

for (let i = 0; i < len; i++) {
    count.push([0, 0]);
}

input.forEach(binaryNum => {
    binaryNum = binaryNum.split('').reverse().join('');
    for (let i = 0; i < binaryNum.length; i++) {
        if (binaryNum[i] === '0') {
            count[i][0]++;
        }
        else {
            count[i][1]++;
        }
    }
})

let epsilonRate = 0, gammaRate = 0;

count.forEach((pos, index) => {
    if (pos[0] < pos[1]) gammaRate += (1 << index);
    else epsilonRate += (1 << index);
});

console.log(epsilonRate * gammaRate);