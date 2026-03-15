const qsort = ([p, ...a]) => p == null ? [] : 
  [...qsort(a.filter(x => x < p)), p, ...qsort(a.filter(x => x >= p))];
console.log(qsort([4, 2, 7, 1]));
