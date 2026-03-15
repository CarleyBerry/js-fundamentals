const subsets = ([x, ...a]) => x == null ? [[]] : subsets(a).flatMap(s => [s, [x, ...s]]);
console.log(subsets([1, 2, 3]));
