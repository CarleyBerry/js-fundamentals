function mostFrequent(arr) {
    let maxCount = 0;
    let mostFrequentElement = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            mostFrequentElement = arr[i];
        }
    }

    return mostFrequentElement;
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
console.log(mostFrequent(["a", "b", "b", "c", "c", "c", "c"]));
