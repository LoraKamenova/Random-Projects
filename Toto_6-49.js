function getMostFrequentNumbersToto6of49(arr) {
    const counts = {};

    for (const num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    for (let key in counts) {
        if (counts.hasOwnProperty(key)) {
            console.log(key + " -> " + counts[key]);
        }
    }

    function sortProperties(obj) {
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

    console.log(sortProperties(counts))

    console.log(sortProperties(counts)[0][0] + ' -> ' + sortProperties(counts)[0][1]);


}

getMostFrequentNumbersToto6of49([5, 19, 35, 36, 43, 46, 2, 3, 5, 12, 17, 22, 5, 10, 24, 35, 42, 47, 7, 8, 18, 33, 38, 40, 4, 5, 11, 35, 43, 44, 10, 15, 22, 25, 42, 48, 2, 16, 21, 30, 46, 48, 15, 20, 28, 38, 39, 40, 9, 11, 32, 37, 41, 47, 9, 11, 32, 37, 41, 47, 9, 15, 18, 22, 25, 43, 2, 22, 32, 38, 39, 43, 6, 10, 16, 30, 35, 37, 21, 23, 25, 30, 39, 46, 9, 10, 29, 35, 36, 45, 2, 7, 11, 13, 17, 30, 4, 5, 24, 28, 37, 49, 13, 22, 29, 31, 43, 46, 17, 18, 24, 29, 37, 42, 12, 25, 27, 37, 39, 41, 1, 3, 23, 28, 41, 43, 6, 7, 9, 30, 31, 40, 1, 2, 14, 18, 21, 39, 4, 13, 31, 36, 44, 47, 5, 6, 7, 10, 22, 42, 21, 26, 28, 34, 36, 47, 10, 16, 21, 22, 39, 47, 12, 20, 24, 25, 37, 46, 3, 5, 8, 20, 30, 32, 2, 10, 13, 22, 23, 28, 9, 27, 28, 31, 33, 38, 20, 25, 29, 35, 42, 47, 6, 15, 24, 33, 34, 38, 2, 20, 23, 34, 37, 47, 10, 23, 33, 36, 41, 49, 10, 11, 22, 30, 41, 49, 9, 25, 26, 28, 29, 34, 4, 20, 33, 34, 39, 41, 3, 8, 32, 40, 41, 45, 11, 15, 34, 39, 41, 42, 3, 26, 32, 34, 43, 48, 3, 8, 24, 28, 37, 48, 3, 5, 13, 15, 36, 47, 2, 5, 7, 17, 19, 42, 4, 20, 25, 38, 43, 44, 18, 23, 26, 41, 42, 45, 3, 20, 28, 29, 31, 48, 5, 9, 21, 22, 30, 48, 4, 16, 24, 25, 36, 38, 17, 23, 26, 38, 42, 45, 9, 23, 30, 32, 36, 39]);


