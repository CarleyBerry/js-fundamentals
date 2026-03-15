const isP2 = n => n > 0 && !(n & (n - 1));
console.log(isP2(16), isP2(15));
