// Challenge 8: Find Median from Data Stream
// Run: node 8_find_median.js
// Uses two heaps: maxHeap (lower half) + minHeap (upper half)

class MaxHeap {
  constructor() { this.h = []; }
  push(v) {
    this.h.push(v);
    this.h.sort((a, b) => b - a);
  }
  pop()  { return this.h.shift(); }
  peek() { return this.h[0]; }
  size() { return this.h.length; }
}

class MinHeap {
  constructor() { this.h = []; }
  push(v) {
    this.h.push(v);
    this.h.sort((a, b) => a - b);
  }
  pop()  { return this.h.shift(); }
  peek() { return this.h[0]; }
  size() { return this.h.length; }
}

class MedianFinder {
  constructor() {
    this.lo = new MaxHeap(); // lower half
    this.hi = new MinHeap(); // upper half
  }

  addNum(num) {
    this.lo.push(num);
    this.hi.push(this.lo.pop());
    if (this.hi.size() > this.lo.size()) this.lo.push(this.hi.pop());
  }

  findMedian() {
    return this.lo.size() > this.hi.size()
      ? this.lo.peek()
      : (this.lo.peek() + this.hi.peek()) / 2;
  }
}

const mf = new MedianFinder();
mf.addNum(1); mf.addNum(2);
console.log(mf.findMedian()); // 1.5
mf.addNum(3);
console.log(mf.findMedian()); // 2
