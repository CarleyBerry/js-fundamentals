const inorder = (n, res = []) => (n && (inorder(n.l, res), res.push(n.v), inorder(n.r, res)), res);
const build = a => {
  const nodes = a.map(v => v ? ({ v, l: null, r: null }) : null);
  nodes.forEach((n, i) => n && (n.l = nodes[2*i+1], n.r = nodes[2*i+2]));
  return nodes[0];
};
console.log(inorder(build([1, 2, 3, 4, 5])));
