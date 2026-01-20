function findPathSum(arr, target) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum === target) {
            return true;
        }
    }

    return false;
}

console.log(findPathSum([1, 2, 3, 4], 5));
console.log(findPathSum([1, 1, 1, 1], 5));
