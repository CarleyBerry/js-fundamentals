function findDuplicates(arr) {
    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > 1 && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }

    return duplicates;
}

console.log(findDuplicates([1, 2, 2, 3, 4, 4, 4, 5]));
console.log(findDuplicates([5, 5, 5, 5]));
