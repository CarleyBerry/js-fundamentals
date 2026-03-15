const Node = (v, n = null) => ({ v, n });
const insert = (h, v) => h ? (h.n ? insert(h.n, v) : h.n = Node(v)) : Node(v);
const del = (h, v) => (!h ? null : (h.v == v ? h.n : (h.n = del(h.n, v), h)));
let head = insert(null, 1); insert(head, 2);
console.log(del(head, 1).v);
