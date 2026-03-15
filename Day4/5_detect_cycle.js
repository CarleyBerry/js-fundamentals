const hasC = (g) => {
  const vis = new Set(), stk = new Set();
  const f = n => stk.has(n) || (!vis.has(n) && (vis.add(n), stk.add(n), (g[n] || []).some(f) ? 1 : (stk.delete(n), 0)));
  return Object.keys(g).some(f);
};
console.log(hasC({1: [2], 2: [1]}));
