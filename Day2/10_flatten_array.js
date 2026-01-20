function flattenArray(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const flattened = flattenArray(arr[i]);
            for (let j = 0; j < flattened.length; j++) {
                result.push(flattened[j]);
            }
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
console.log(flattenArray([[1, 2], [3, [4, 5]], 6]));
