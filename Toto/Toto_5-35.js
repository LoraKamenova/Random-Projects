const {arr} = require('./Script_5_of_35');

function solve2 (arr) {
    const counts2 = {};

    for (const num of arr) {
        counts2[num] = counts2[num] ? counts2[num] + 1 : 1;
    }

    for (let key in counts2) {
        if (counts2.hasOwnProperty(key)) {
            console.log(key + " -> " + counts2[key]);
        }
    }

    function sortProperties2(obj)
    {
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

    console.log(sortProperties2(counts2))
}

solve2(arr);
