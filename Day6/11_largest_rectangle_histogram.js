// Challenge 11: Largest Rectangle in Histogram
// Run: node 11_largest_rectangle.js
// Uses a monotonic stack approach — O(n)

function largestRectangle(heights) {
  const stack = [];
  let maxArea = 0;
  heights = [...heights, 0]; // sentinel

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      const [idx, h] = stack.pop();
      maxArea = Math.max(maxArea, h * (i - idx));
      start = idx;
    }
    stack.push([start, heights[i]]);
  }
  return maxArea;
}

console.log(largestRectangle([2,1,5,6,2,3])); // 10
console.log(largestRectangle([2,4]));           // 4
console.log(largestRectangle([1]));             // 1
