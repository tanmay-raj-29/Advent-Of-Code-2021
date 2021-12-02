const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
	.map((command) => {
        const [dir, val] = command.split(' ');
        return [dir, parseInt(val, 10)]
    });

module.exports = {
	input,
};