// Challenge 9: Sliding Window Maximum
// Run: node 9_sliding_window_max.js
// Return max of each window of size k using a deque.

function slidingWindowMax(nums, k) {
  const result = [];
  const deque = []; // stores indices, front = max

  for (let i = 0; i < nums.length; i++) {
    // Remove indices outside the window
    while (deque.length && deque[0] < i - k + 1) deque.shift();
    // Remove smaller elements from back
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();
    deque.push(i);
    if (i >= k - 1) result.push(nums[deque[0]]);
  }
  return result;
}

// Tests
console.log(slidingWindowMax([1,3,-1,-3,5,3,6,7], 3)); // [3,3,5,5,6,7]
console.log(slidingWindowMax([1],                  1)); // [1]
