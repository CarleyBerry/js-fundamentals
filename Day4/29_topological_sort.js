const topo = (n, e) => {
  let g = Array.from({length:n},()=>[]), deg = Array(n).fill(0), q=[], res=[];
  e.forEach(([u,v]) => (g[u].push(v), deg[v]++));
  deg.forEach((d,i) => !d && q.push(i));
  while(q.length) { let u = q.shift(); res.push(u); g[u].forEach(v => !--deg[v] && q.push(v)); }
  return res.length == n ? res : [];
};
console.log(topo(2, [[0,1]]));
