// Challenge 0: Memoized Fibonacci
// Run: node 0_fib_memo.js

function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
}

// Tests
console.log(fib(0));   // 0
console.log(fib(1));   // 1
console.log(fib(10));  // 55
console.log(fib(40));  // 102334155
