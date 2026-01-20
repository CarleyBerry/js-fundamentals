function averageFilter(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    const average = sum / arr.length;
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(averageFilter([1, 2, 3, 4, 5]));
console.log(averageFilter([10, 20, 15, 25, 30]));
