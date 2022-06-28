//get raw data from file
let fs = require('fs');
let inputData = fs.readFileSync('Toto/5_of_35_draws.txt').toString().split("\r\n");
let allDrawnNumbers = [];
let draw = -1;

for (let i = 0; i < inputData.length - 1; i++) {
    let singleLineSplit = inputData[i].split(" - ");
    let drawNumbers = singleLineSplit[1].split(",");

    for (let j = 0; j < drawNumbers.length; j++) {
        allDrawnNumbers.push(drawNumbers[j].trim());
    }
}

//calculate frequency of each number
const frequencyCounter = {};

for (const num of allDrawnNumbers) {
    frequencyCounter[num] = frequencyCounter[num] ? frequencyCounter[num] + 1 : 1;
}

//sort numbers by frequency
function sortFrequencies(obj) {
    // convert object into array
    let sortable = [];
    for (let key in obj)
        if (obj.hasOwnProperty(key))
            sortable.push([key, obj[key]]);

    // sort items by value
    sortable.sort(function (a, b) {
        return a[1] - b[1]; // compare numbers
    });
    return sortable;
}

let sortedFrequencyCounter = sortFrequencies(frequencyCounter)

//print numbers and their frequencies
for (let i = 0; i < sortedFrequencyCounter.length; i++) {
    console.log(sortedFrequencyCounter[i][0] + ' -> ' + sortedFrequencyCounter[i][1]);
}

// print lucky numbers on console
let luckyNumbers = ""

for (let i = sortedFrequencyCounter.length - 1; i > (sortedFrequencyCounter.length - 1) - 5; i--) {
    luckyNumbers += ` ${sortedFrequencyCounter[i][0]} `;
}

console.log();
console.log("Your lucky numbers are: ")
console.log(luckyNumbers)

//print lucky numbers in History file
let date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
const content = `${date} Your lucky numbers are: ${luckyNumbers} \r\n`;

fs.appendFile('Toto/History_5_of_35.txt', content, function (err) {
    if (err) throw err;
});
