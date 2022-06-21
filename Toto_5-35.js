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
solve2( [7, 9, 23, 28, 32, 9, 11, 16, 21, 30, 5, 20, 30, 33, 35, 5, 13, 14, 28, 33, 2, 3, 12, 15, 22, 2, 13, 27, 30, 33, 7, 20, 24, 32, 34, 16, 19, 22, 25, 27, 6, 17, 18, 21, 27, 13, 16, 20, 26, 33, 13, 23, 31, 34, 35, 1, 21, 23, 29, 30, 6, 8, 26, 28, 31, 2, 9, 14, 20, 35, 12, 13, 19, 30, 35, 7, 11, 19, 31, 34, 6, 8, 24, 26, 28, 3, 16, 18, 34, 35, 11, 20, 21, 22, 33, 2, 6, 16, 25, 32, 1, 2, 24, 33, 34, 2, 7, 10, 11, 30, 7, 16, 19, 30, 35, 12, 19, 20, 24, 25, 4, 8, 10, 13, 22, 14, 16, 22, 23, 33, 17, 22, 24, 32, 34, 5, 11, 18, 33, 34, 3, 9, 15, 32, 35, 4, 10, 13, 15, 18, 12, 14, 19, 22, 30, 1, 4, 19, 28, 29, 9, 19, 27, 31, 33, 1, 7, 8, 21, 32, 3, 5, 7, 9, 25, 22, 26, 28, 29, 31, 4, 13, 21, 22, 23, 2, 11, 15, 32, 34, 7, 12, 14, 25, 34, 7, 9, 10, 28, 31, 4, 6, 18, 21, 29, 9, 11, 14, 18, 23, 1, 20, 26, 27, 32, 9, 12, 17, 23, 29, 8, 20, 26, 31, 33, 5, 18, 20, 28, 33, 2, 3, 8, 18, 21, 2, 3, 15, 26, 32, 5, 14, 22, 25, 26, 2, 11, 15, 20, 21, 9, 13, 19, 20, 27, 1, 13, 14, 16, 25, 10, 19, 23, 24, 35, 3, 6, 11, 26, 35, 3, 9, 21, 27, 31, 1, 4, 14, 24, 27, 5, 8, 9, 15, 33, 3, 18, 19, 26, 28, 1, 4, 7, 27, 35, 7, 10, 11, 16, 25, 9, 12, 24, 25, 33, 18, 21, 24, 25, 29, 2, 4, 6, 10, 26, 1, 8, 12, 19, 34, 4, 6, 19, 29, 35, 7, 11, 15, 25, 33, 4, 11, 22, 26, 35, 5, 11, 14, 27, 30, 4, 7, 8, 17, 20, 3, 9, 11, 22, 31, 4, 12, 14, 19, 24, 6, 11, 15, 24, 28, 4, 9, 16, 29, 35, 6, 7, 9, 19, 33, 2, 20, 23, 24, 30, 14, 19, 23, 25, 30, 1, 22, 24, 28, 33, 6, 13, 23, 31, 34, 6, 9, 15, 28, 34, 6, 12, 16, 27, 32, 17, 21, 23, 25, 33, 1, 2, 13, 18, 26, 15, 17, 19, 27, 32, 5, 12, 22, 29, 30, 2, 16, 26, 28, 34, 11, 15, 20, 22, 28, 3, 10, 25, 31, 34, 1, 4, 24, 28, 30, 18, 23, 28, 31, 33, 4, 18, 21, 23, 33, 10, 20, 25, 26, 33, 10, 13, 18, 23, 28, 3, 9, 19, 24, 33, 6, 17, 19, 30, 35, 3, 14, 19, 20, 26, 1, 17, 21, 26, 35, 2, 3, 6, 8, 14, 15, 24, 26, 27, 32]);


