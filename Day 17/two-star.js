const { input } = require('./input');

const target = input.slice(13).join('').split(',').map(inp => inp);

const [x1, x2] = target[0].split('=')[1].split('..').map(inp => parseInt(inp));
const [y1, y2] = target[1].split('=')[1].split('..').map(inp => parseInt(inp));
console.log(x1, x2, y1, y2);

let ans = 0;

for (let i = 20; i <= x2; i++) {
    for (let j = y1; j <= 100; j++) {
        let x = i, y = j;
        let px = 0, py = 0, cur = 0;
        while (py >= Math.min(y1, y2)) {
            if (x == 0 && !(x1 <= px && px <= x2)) break;
            px += x;
            py += y;
            cur = Math.max(cur, py);
            if (x1 <= px && px <= x2 && y1 <= py && py <= y2) {
                ans++;
                break;
            }
            y--;
            if (x != 0) x--;
        }
    }
}

console.log(ans);