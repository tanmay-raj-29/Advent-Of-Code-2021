const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
	.map((inp) => {
		return inp.trim().split('').map(val => parseInt(val));
	});

module.exports = {
	input,
};