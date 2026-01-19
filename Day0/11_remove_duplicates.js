// Challenge 11: Remove Duplicates
let numbers = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

for (let i = 0; i < numbers.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < unique.length; j++) {
        if (numbers[i] === unique[j]) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        unique.push(numbers[i]);
    }
}

console.log(unique);
