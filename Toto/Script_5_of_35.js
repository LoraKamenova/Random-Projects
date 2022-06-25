
const fs = require('fs')

fs.readFile('5_of_35_draws.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
})




