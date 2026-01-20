function uniqueElementsCount(arr) {
    const unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }

    return unique.length;
}

console.log(uniqueElementsCount([1, 2, 2, 3, 3, 3, 4]));
console.log(uniqueElementsCount(["a", "b", "a", "c"]));
