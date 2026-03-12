function power(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }

  console.log(result);
}

power(2, 3);
power(5, 2);
