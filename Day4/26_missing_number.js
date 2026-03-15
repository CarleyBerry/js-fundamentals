const miss = a => a.reduce((sum, v, i) => sum + i - v, a.length);
console.log(miss([0, 1, 3]));
