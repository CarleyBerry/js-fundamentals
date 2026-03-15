const Node = (v, l = null, r = null) => ({ v, l, r });
const insert = (n, v) => {
  const q = [n];
  while (q.length) {
    const c = q.shift();
    if (!c.l) return c.l = Node(v); if (!c.r) return c.r = Node(v);
    q.push(c.l, c.r);
  }
};
const inorder = (n, res = []) => (n && (inorder(n.l, res), res.push(n.v), inorder(n.r, res)), res);
const root = Node(10); [5, 15, 2, 7].forEach(v => insert(root, v));
console.log(inorder(root));
