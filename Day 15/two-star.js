const { input } = require('./input');
const grid = [], dp = [];

const getVal = function(i, j) {
    let val = 0;
    if (i >= n) val = grid[i-n][j];
    else val = grid[i][j-m];
    return val === 9 ? 1 : val + 1;
};

const n = input.length;
const m = input[0].split('').length;
const tn = 5 * n;
const tm = 5 * m;

for (let i = 0; i < tn; i++) {
    const row = [];
    for (let j = 0; j < tm; j++) {
        row.push(0);
    }
    grid.push(row);
}

input.forEach((line, index) => {
    line
    .trim()
    .split('')
    .forEach((val, col) => grid[index][col] = parseInt(val));
})

for (let i = 0; i < tn; i++) {
    for (let j = 0; j < tm; j++) {
        if (grid[i][j] === 0) grid[i][j] = getVal(i, j);
    }
}

for (let i = 0; i < tn; i++) {
    dp.push([]);
    for (let j = 0; j < tm; j++) {
        let val = 1e9;
        if (i) val = Math.min(val, dp[i-1][j] + grid[i][j]);
        if (j) val = Math.min(val, dp[i][j-1] + grid[i][j]);
        if (i == 0 && j == 0) val = 0;
        dp[i].push(val);
    }
}
console.log(dp[tn-1][tm-1]);