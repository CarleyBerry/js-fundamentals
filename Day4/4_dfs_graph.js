const dfs = (g, n, vis = new Set(), res = []) => (
  n && !vis.has(n) && (vis.add(n), res.push(n), (g[n] || []).forEach(m => dfs(g, m, vis, res))), res
);
console.log(dfs({A: ['B', 'C'], B: ['D']}, 'A'));
