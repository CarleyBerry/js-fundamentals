function evaluateExpression(expression) {
  const evaluate = (s) => {
    const stack = [];
    let num = 0, sign = '+';
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === '(') {
        let count = 1, j = i + 1;
        while (count > 0) {
          if (s[j] === '(') count++;
          if (s[j] === ')') count--;
          j++;
        }
        num = evaluate(s.substring(i + 1, j - 1));
        i = j - 1;
      } else if (!isNaN(c) && c !== ' ') {
        num = num * 10 + parseInt(c);
      }
      
      if ((isNaN(c) && c !== ' ') || i === s.length - 1) {
        if (sign === '+') stack.push(num);
        else if (sign === '-') stack.push(-num);
        else if (sign === '*') stack.push(stack.pop() * num);
        else if (sign === '/') stack.push(Math.trunc(stack.pop() / num));
        num = 0;
        sign = c;
      }
    }
    return stack.reduce((a, b) => a + b, 0);
  };
  return evaluate(expression);
}

console.log(evaluateExpression('3 + (2 * 2) - 1'));
