const merge = (l, r) => {
  let res = [];
  while (l.length && r.length) res.push(l[0] < r[0] ? l.shift() : r.shift());
  return [...res, ...l, ...r];
};
const sort = a => a.length < 2 ? a : merge(sort(a.splice(0, a.length/2)), sort(a));
console.log(sort([5, 3, 8, 1]));
