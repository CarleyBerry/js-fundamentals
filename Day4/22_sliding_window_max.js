const maxS = (a, k) => a.map((_, i) => i > a.length - k ? null : Math.max(...a.slice(i, i + k))).filter(x => x !== null);
console.log(maxS([1,3,-1,-3,5,3,6,7], 3));
