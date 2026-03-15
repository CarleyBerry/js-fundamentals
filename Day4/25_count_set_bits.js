const countB = n => n ? 1 + countB(n & (n - 1)) : 0;
console.log(countB(7));
