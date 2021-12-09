const { input } = require('./input');

const n = input.length;
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let answer = 0;
for (let i = 0; i < n; i++) {
    const m = input[i].length;
    for (let j = 0; j < m; j++) {
        let ok = true;
        for (let k = 0; k < 4; k++) {
            let nx = i + dx[k];
            let ny = j + dy[k];
            if (0 <= nx && nx < n && 0 <= ny && ny < m && input[nx][ny] <= input[i][j]) {
                ok = false;
            }
        }
        if (ok) {
            answer += input[i][j] + 1;
        }
    }
}

console.log(answer);