const path = require("path");
const fs = require("fs");

const input = fs
	.readFileSync(path.join(__dirname, "input.txt"), "utf8")
	.toString()
	.trim()
	.split("\n")
	.map(line => {
	  	return line.split("|").map(word => {
	  		return word
	  		  .trim()
	  		  .split(" ")
	  		  .map(signal => signal);
	  	});
	});

module.exports = {
	input,
};