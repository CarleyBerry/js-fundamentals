const hasC = (h, s = new Set()) => !!h && (s.has(h) || (s.add(h), !!hasC(h.n, s)));
console.log(hasC({v:1, n:{v:2}}));
