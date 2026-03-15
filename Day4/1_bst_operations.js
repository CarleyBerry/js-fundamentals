const Node = (v) => ({ v, l: null, r: null });
const ins = (n, v) => {
  if (!n) return Node(v);
  v < n.v ? n.l = ins(n.l, v) : n.r = ins(n.r, v);
  return n;
};
const del = (n, v) => {
  if (!n) return null;
  if (v < n.v) n.l = del(n.l, v);
  else if (v > n.v) n.r = del(n.r, v);
  else {
    if (!n.l) return n.r; if (!n.r) return n.l;
    let s = n.r; while (s.l) s = s.l;
    n.v = s.v; n.r = del(n.r, s.v);
  }
  return n;
};
let r = ins(null, 10); [5, 15].forEach(v => ins(r, v));
console.log(del(r, 5).v);
