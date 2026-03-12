function lcm(num1, num2) {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }
  let commonDivisor = a;

  let result = (num1 * num2) / commonDivisor;
  
  console.log(result);
}

lcm(12, 18);
lcm(5, 7);
