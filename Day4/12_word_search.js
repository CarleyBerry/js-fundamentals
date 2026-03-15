const exist = (b, w) => {
  const f = (r, c, k) => k == w.length || (r < b.length && r >= 0 && c < b[0].length && c >= 0 && b[r][c] == w[k] && 
    (b[r][c] = '#', (f(r+1,c,k+1) || f(r-1,c,k+1) || f(r,c+1,k+1) || f(r,c-1,k+1)) ? 1 : (b[r][c] = w[k], 0)));
  return b.some((L, r) => L.some((_, c) => f(r, c, 0)));
};
console.log(exist([['A','B'],['C','D']], 'AB'));
