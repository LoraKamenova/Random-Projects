function solve () {
    const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
    const counts = {};

    for (const num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }


    for (let key in counts) {
        if (counts.hasOwnProperty(key)) {
            console.log(key + " -> " + counts[key]);
        }
    }

    console.log(counts[5], counts[2], counts[9], counts[4]);
}
solve();


