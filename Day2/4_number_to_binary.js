function numberToBinary(num) {
    if (num === 0) return '0';

    let binary = '';

    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }

    return binary;
}

console.log(numberToBinary(5));
console.log(numberToBinary(10));
