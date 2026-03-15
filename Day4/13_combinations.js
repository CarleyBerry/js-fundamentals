const combine = (n, k, s = 1, cur = []) => 
  cur.length == k ? [cur] : Array.from({length: n-s+1}, (_, i) => combine(n, k, s+i+1, [...cur, s+i])).flat();
console.log(combine(4, 2));
