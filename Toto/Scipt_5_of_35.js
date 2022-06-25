const {allNumbers} = require('./Input_5_of_35');

function getNumbers_for_5_of_35 (allNumbers) {
    const counts_5_of_35 = {};

    for (const num of allNumbers) {
        counts_5_of_35[num] = counts_5_of_35[num] ? counts_5_of_35[num] + 1 : 1;
    }

    for (let key in counts_5_of_35) {
        if (counts_5_of_35.hasOwnProperty(key)) {
            console.log(key + " -> " + counts_5_of_35[key]);
        }
    }

    function sortCounts(obj) {
        // convert object into array
        let sortable=[];
        for(let key in obj)
            if(obj.hasOwnProperty(key))
                sortable.push([key, obj[key]]);

        // sort items by value
        sortable.sort(function(a, b)
        {
            return a[1]-b[1]; // compare numbers
        });
        return sortable;
    }

    console.log(sortCounts(counts_5_of_35))
}

getNumbers_for_5_of_35(allNumbers);
