const short = (g, s, e) => {
  let q = [[s]], vis = new Set([s]);
  while (q.length) {
    let p = q.shift(), n = p[p.length-1];
    if (n === e) return p;
    (g[n] || []).filter(m => !vis.has(m)).forEach(m => (vis.add(m), q.push([...p, m])));
  }
};
console.log(short({A:['B'], B:['C']}, 'A', 'C'));
