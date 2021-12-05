const { input } = require('./input');

const len = input.length;

let maxX = 0, maxY = 0;

input.forEach(inp => {
    maxX = Math.max(maxX, inp[0][0], inp[1][0]);
    maxY = Math.max(maxY, inp[0][1], inp[1][1]);
});

let grid = [];

for (let i = 0; i <= maxX; i++) {
    let row = [];
    for (let j = 0; j <= maxY; j++) {
        row.push(0);
    }
    grid.push(row);
}

input.forEach(inp => {
    let [x1, y1] = inp[0];
    let [x2, y2] = inp[1];
    if ((x1 != x2 && y1 == y2) || (x1 == x2 && y1 != y2)) {
        const add = [(x1 > x2 ? -1 : (x1 == x2 ? 0 : 1)), (y1 > y2 ? -1 : (y1 == y2 ? 0 : 1))];
        while ((x1 != x2 && y1 == y2) || (x1 == x2 && y1 != y2)) {
            ok1 = true;
            grid[x1][y1]++;
            x1 += add[0];
            y1 += add[1];
        }
        grid[x1][y1]++;
    }
})

let answer = 0;
grid.forEach(row => {
    row.forEach(col => answer += (col > 1 ? 1 : 0));
})

console.log(answer);