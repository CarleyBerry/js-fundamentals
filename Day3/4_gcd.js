function gcd(a, b) {
  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  console.log(a);
}

gcd(48, 18);
gcd(10, 5);
