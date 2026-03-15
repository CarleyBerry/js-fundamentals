class Stack {
  constructor() { this.s = []; }
  push(v) { this.s.push(v); }
  pop() { return this.s.pop(); }
  peek() { return this.s[this.s.length-1]; }
  isEmpty() { return !this.s.length; }
}
const s = new Stack(); s.push(1); console.log(s.pop());
