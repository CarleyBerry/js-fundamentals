const reverse = (h, p = null) => h ? reverse(h.n, (h.n = p, h)) : p;
const n = {v:1, n:{v:2, n:null}};
console.log(reverse(n).v);
