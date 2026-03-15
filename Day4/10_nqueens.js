const solve = (n, r = 0, c = [], d1 = [], d2 = [], res = []) => {
  if (r == n) return res.push(c.map(y => '.'.repeat(y) + 'Q' + '.'.repeat(n-y-1)));
  for (let i = 0; i < n; i++) {
    if (c.includes(i) || d1.includes(r-i) || d2.includes(r+i)) continue;
    solve(n, r+1, [...c, i], [...d1, r-i], [...d2, r+i], res);
  }
  return res;
};
console.log(solve(4).length);
