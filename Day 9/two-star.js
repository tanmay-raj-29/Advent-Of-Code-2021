const { input } = require('./input');

const n = input.length, m = input[0].length;
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let grid = [];

for (let i = 0; i < n; i++) {
    grid.push([...input[i]]);
}

let BFS = function(i, j) {
    let q = [[i, j]];
    let cnt = 0;
    grid[i][j] = -1;
    while (q.length) {
        const [x, y] = q.pop();
        cnt++;
        for (let k = 0; k < 4; k++) {
            const [nx, ny] = [x+dx[k], y+dy[k]];
            if (0 <= nx && nx < n && 0 <= ny && ny < m && grid[nx][ny] != 9 && grid[nx][ny] != -1) {
                q.push([nx, ny]);
                grid[nx][ny] = -1;
            }
        }
    }
    return cnt;
}

let basinSize = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (grid[i][j] != -1 && grid[i][j] != 9) {
            basinSize.push(BFS(i, j));            
        }
    }
}

basinSize.sort((a, b) => b-a);

console.log(basinSize[0] * basinSize[1] * basinSize[2]);