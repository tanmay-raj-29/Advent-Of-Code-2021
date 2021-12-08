const { input } = require('./input');

const order = input[0].split(',').map(num => parseInt(num));
const boards = [];

for (let i = 2; i < input.length; i++) {
    const board = [], status = [];
    let sum = 0;
    while (board.length < 5) {
        const row = input[i].split(' ').map(num => parseInt(num)).filter(num => isNaN(num) === false);
        board.push(row);
        sum += row.reduce((a, b) => a + b, 0);
        status.push([false, false, false, false, false]);
        i++;
    }
    boards.push({
        "board": board,
        "status": status, 
        "won": false,
        "sum": sum,
        "winningNum": -1,
    })
}

const didWin = function(status) {
    let win = false;
    for (let i = 0; i < 5; i++) {
        let cur = true;
        for (let j = 0; j < 5; j++) {
            cur = (cur && status[i][j]);
        }
        win = (win || cur);
    }
    for (let j = 0; j < 5; j++) {
        let cur = true;
        for (let i = 0; i < 5; i++) {
            cur = (cur && status[i][j]);
        }
        win = (win || cur);
    }
    return win;
}

const markSelected = function(idx, num) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (boards[idx].board[i][j] === num) {
                boards[idx].status[i][j] = true;
                boards[idx].sum -= num;
                boards[idx].winningNum = num;
                boards[idx].won = didWin(boards[idx].status);
                return;
            }
        }
    }
}

let idx = -1;

for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < boards.length; j++) {
        if (boards[j].won === false) {
            markSelected(j, order[i]);
            if (boards[j].won) {
                idx = j;
            }
        }
    }
}

console.log(idx);

console.log(boards[idx].sum * boards[idx].winningNum);