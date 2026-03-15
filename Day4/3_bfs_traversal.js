const bfs = r => {
  const res = [], q = [r];
  while (q.length) {
    const n = q.shift(); if (!n) continue;
    res.push(n.v); q.push(n.l, n.r);
  }
  return res;
};
console.log(bfs({v:1, l:{v:2}, r:{v:3}}));
