class Queue {
  constructor() { this.i = []; }
  enqueue(v) { this.i.push(v); }
  dequeue() { return this.i.shift(); }
  peek() { return this.i[0]; }
  isEmpty() { return !this.i.length; }
}
const q = new Queue(); q.enqueue(1); console.log(q.dequeue());
