const h = (a, n, i) => {
  let L = i, l = 2*i+1, r = 2*i+2;
  if (l < n && a[l] > a[L]) L = l; if (r < n && a[r] > a[L]) L = r;
  if (L != i) ([a[i], a[L]] = [a[L], a[i]], h(a, n, L));
};
const sort = a => {
  for (let i = a.length/2-1|0; i >= 0; i--) h(a, a.length, i);
  for (let i = a.length-1; i > 0; i--) ([a[0], a[i]] = [a[i], a[0]], h(a, i, 0));
  return a;
};
console.log(sort([3, 1, 4, 2]));
