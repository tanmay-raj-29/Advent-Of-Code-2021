const { input } = require('./input');

let flashes = 0;
const dx = [1, -1, 0, 0, 1, -1, 1, -1];
const dy = [0, 0, 1, -1, 1, 1, -1, -1];

const check = function(x, y) {
    return 0 <= x && x < 10 && 0 <= y && y < 10;
}

const flash = function(x, y, vis) {
    if (vis[x][y] === true) {
        return;
    }
    vis[x][y] = true;
    flashes++;
    for (let dir = 0; dir < 8; dir++) {
        let nx = x + dx[dir], ny = y + dy[dir];
        if (check(nx, ny)) input[nx][ny]++;
    }
    for (let dir = 0; dir < 8; dir++) {
        let nx = x + dx[dir], ny = y + dy[dir];
        if (check(nx, ny) && input[nx][ny] > 9) flash(nx, ny, vis);
    }
};

for (let step = 0; step < 100; step++) {
    let vis = [];
    for (let i = 0; i < 10; i++) {
        vis.push([]);
        for (let j = 0; j < 10; j++) {
            input[i][j]++;
            vis[i].push(false);
        }
    }
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (input[i][j] > 9) {
                flash(i, j, vis);
            }
        }
    }
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (input[i][j] > 9) input[i][j] = 0;
        }
    }
}

console.log(flashes);