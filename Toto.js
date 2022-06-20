function solve () {
    const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
    const counts = {};

    for (const num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    console.log(counts[5], counts[2], counts[9], counts[4]);
    console.log(counts[5]); // logs '3'
}
solve();


