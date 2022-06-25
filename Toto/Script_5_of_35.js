let fs = require('fs');
let array = fs.readFileSync('5_of_35_draws.txt').toString().split("\r\n");
let arr = [];

console.log(array);

for (let i = 0; i < array.length - 1; i++) {
    let myArray = array[i].split(" - ");
    let temp = myArray[1].split(",");

    for (let j = 0; j < temp.length; j++) {
        arr.push(temp[j].trim());
    }
}

console.log(arr);

