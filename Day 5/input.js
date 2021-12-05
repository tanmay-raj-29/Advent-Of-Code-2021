const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
	.map((inp) => {
		line = inp.split(' ');
		const findLine = function (nums) {
			return nums.split(',').map(num=>parseInt(num));
		}
		return [findLine(line[0]), findLine(line[2])];
	});

module.exports = {
	input,
};