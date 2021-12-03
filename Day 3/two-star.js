const { input } = require('./input');

const len = input[0].length;

const findRating = function(gas) {
    let curSet = input;
    let index = 0;
    while (curSet.length > 1) {
        let one = 0, zero = 0;
        curSet.forEach(binaryNum => binaryNum[index] === '0' ? zero++ : one++);
        const required = gas === "Oxygen" ? (one >= zero ? 1 : 0) : (one >= zero ? 0 : 1);
        curSet = curSet.filter(binaryNum => +binaryNum[index] === required);
        index++;
    }
    let val = 0;
    for (let i = 0; i < len; i++) {
        const idx = (len - i - 1);
        if (curSet[0][idx] === '1') val += (1 << i);
    }
    return val;
}

const oxygenRating = findRating("Oxygen");
const carbonDiOxideRating = findRating("Co2");

console.log(oxygenRating * carbonDiOxideRating);
