function sumArgs(...numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }

  console.log(total);
}

sumArgs(1, 2, 3, 4, 5);
sumArgs(10, -2, 7);
