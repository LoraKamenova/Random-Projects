let fs = require('fs');
let input = fs.readFileSync('5_of_35_draws.txt').toString().split("\r\n");
let allNumbers = [];

for (let i = 0; i < input.length - 1; i++) {
    let singleLine = input[i].split(" - ");
    let numberGroup = singleLine[1].split(",");

    for (let j = 0; j < numberGroup.length; j++) {
        allNumbers.push(numberGroup[j].trim());
    }
}

module.exports = {
    allNumbers,
};
