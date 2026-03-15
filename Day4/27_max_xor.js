const maxOR = a => {
  let res = 0;
  for (let i = 0; i < a.length; i++) for (let j = i; j < a.length; j++) res = Math.max(res, a[i] ^ a[j]);
  return res;
};
console.log(maxOR([1, 2, 3]));
