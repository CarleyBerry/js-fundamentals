function findMax(...numbers) {
  if (numbers.length === 0) {
    console.log(undefined);
    return;
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  console.log(max);
}

findMax(1, 5, 2, 9, 3);
findMax(-10, -5, -20);
