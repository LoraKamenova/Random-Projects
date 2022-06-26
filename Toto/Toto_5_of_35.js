    //get input from file
    let fs = require('fs');
    let array = fs.readFileSync('Toto/5_of_35_draws.txt').toString().split("\r\n");
    let arr = [];

    for (let i = 0; i < array.length - 1; i++) {
        let myArray = array[i].split(" - ");
        let temp = myArray[1].split(",");

        for (let j = 0; j < temp.length; j++) {
            arr.push(temp[j].trim());
        }
    }

    //calculate frequency of each number
    const counts2 = {};

    for (const num of arr) {
        counts2[num] = counts2[num] ? counts2[num] + 1 : 1;
    }

    // for (let key in counts2) {
    //     if (counts2.hasOwnProperty(key)) {
    //         console.log(key + " -> " + counts2[key]);
    //     }
    // }

    //sort frequencies
    function sortProperties2(obj) {
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

    let temp = sortProperties2(counts2)

    console.log(temp)

    for (let i = 0; i < temp.length; i++) {
        console.log(temp[i][0] + ' -> ' + temp[i][1]);
    }


    let string2 = ""

    for (let i = temp.length - 1; i > (temp.length - 1) - 5; i--) {
        string2 += ` ${temp[i][0]} `;

    }

    console.log();
    console.log("Your lucky numbers are: ")
    console.log(string2)

    let date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const content = `${date} Your lucky numbers are: ${string2} \r\n`;

    fs.appendFile('Toto/History_5_of_35.txt', content, function (err) {
        if (err) throw err;
    });
