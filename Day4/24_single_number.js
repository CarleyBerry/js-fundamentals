const single = a => a.reduce((a, b) => a ^ b, 0);
console.log(single([1, 2, 2]));
