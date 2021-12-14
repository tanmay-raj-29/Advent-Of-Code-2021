const { input } = require('./input');

let groups = {};
const template = input[0].split('');
const occurence = {};

const increment = function (obj, key, val) {
    obj[key] = (obj[key] ? obj[key] + val : val);
};

for (let i = 0; i + 1 < template.length; i++) {
    const group = template[i] + template[i + 1];
    increment(groups, group, 1);
}

template.forEach(ch => increment(occurence, ch, 1));

for (let steps = 0; steps < 10; steps++) {
    let newGroups = {...groups};
    for (let i = 2; i < input.length; i++) {
        const line = input[i].split('').join('');
        const prevGroup = line[0] + line[1];
        if (groups[prevGroup]) {
            increment(newGroups, prevGroup, -groups[prevGroup]);
            const newChar = line[6];
            const newGroup1 = line[0] + newChar;
            const newGroup2 = newChar + line[1];
            increment(newGroups, newGroup1, groups[prevGroup]);
            increment(newGroups, newGroup2, groups[prevGroup]);
            increment(occurence, newChar, groups[prevGroup]);
        }
    }
    [groups, newGroups] = [newGroups, groups];
}

const freq = Object.values(occurence);
console.log((Math.max(...freq) - Math.min(...freq)));