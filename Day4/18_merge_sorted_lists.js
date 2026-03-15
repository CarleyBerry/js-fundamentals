const merge = (a, b) => !a ? b : !b ? a : (a.v < b.v ? (a.n = merge(a.n, b), a) : (b.n = merge(a, b.n), b));
console.log(merge({v:1, n:null}, {v:2, n:null}).v);
