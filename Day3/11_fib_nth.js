function fibNth(n) {
  if (n <= 0) {
    console.log(0);
    return;
  }
  if (n === 1) {
    console.log(1);
    return;
  }

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    let nextValue = prev + current;
    prev = current;
    current = nextValue;
  }

  console.log(current);
}

fibNth(5);
fibNth(7);
