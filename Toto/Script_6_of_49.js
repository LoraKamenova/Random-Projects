
const fs = require('fs')

fs.readFile('6_of_49_drawn_numbers.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
})
