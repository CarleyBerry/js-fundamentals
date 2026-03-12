function multiplyArgs(...numbers) {
  if (numbers.length === 0) {
    console.log(0);
    return;
  }

  let total = 1;

  for (let i = 0; i < numbers.length; i++) {
    total = total * numbers[i];
  }

  console.log(total);
}

multiplyArgs(1, 2, 3, 4);
multiplyArgs(5, 10, 2);
