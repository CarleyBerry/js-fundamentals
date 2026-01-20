function rotateArray(arr, k) {
    k = k % arr.length;

    const result = [];

    for (let i = arr.length - k; i < arr.length; i++) {
        result.push(arr[i]);
    }

    for (let i = 0; i < arr.length - k; i++) {
        result.push(arr[i]);
    }

    return result;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([10, 20, 30], 1));
