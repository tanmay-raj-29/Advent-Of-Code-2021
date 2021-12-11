const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
	.map(line => {
		return line
				.trim()
				.split('')
				.map(el => parseInt(el));
	})

module.exports = {
	input,
};