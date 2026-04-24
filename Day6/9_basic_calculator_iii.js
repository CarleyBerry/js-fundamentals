function calculate(s) {
  s = s.replace(/\s+/g, '');
  let i = 0;

  function evaluate() {
    const stack = [];
    let num = 0;
    let sign = '+';

    while (i < s.length) {
      const char = s[i];
      if (char === '(') {
        i++;
        num = evaluate();
      }

      if (!isNaN(parseInt(char))) {
        num = num * 10 + parseInt(char);
      }

      if ((isNaN(parseInt(char)) && char !== '(') || i === s.length - 1) {
        if (sign === '+') stack.push(num);
        else if (sign === '-') stack.push(-num);
        else if (sign === '*') stack.push(stack.pop() * num);
        else if (sign === '/') stack.push(Math.trunc(stack.pop() / num));
        
        sign = char;
        num = 0;
      }

      if (char === ')') break;
      i++;
    }

    return stack.reduce((a, b) => a + b, 0);
  }

  return evaluate();
}

console.log(calculate('1 + 1'));
