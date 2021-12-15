const { input } = require('./input');
const grid = [], dp = [];

input.forEach(line => {
    dp.push([]);
    const row = [];
    line
    .trim()
    .split('')
    .map(val => {
        dp[dp.length-1].push(1e9);
        row.push(parseInt(val))
    });
    grid.push(row);
})

const n = grid.length;
const m = grid[0].length;

dp[0][0] = 0;
console.log(n, m);

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (i) dp[i][j] = Math.min(dp[i][j], dp[i-1][j] + grid[i][j]);
        if (j) dp[i][j] = Math.min(dp[i][j], dp[i][j-1] + grid[i][j]);
    }
}
console.log(dp[n-1][m-1]);