function countOccurrences(list, element) {
  let occurrences = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      occurrences = occurrences + 1;
    }
  }

  console.log(occurrences);
}

countOccurrences([1, 2, 3, 2, 4, 2], 2);
countOccurrences(["a", "b", "a"], "c");
