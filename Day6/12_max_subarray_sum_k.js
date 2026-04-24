// Challenge 12: Sliding Window Maximum Sum
// Run: node 12_sliding_window_max_sum.js
// Return the max sum of any subarray of size k.

function maxWindowSum(nums, k) {
  let windowSum = 0, maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    windowSum += nums[i];
    if (i >= k) windowSum -= nums[i - k];
    if (i >= k - 1) maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

console.log(maxWindowSum([2, 1, 5, 1, 3, 2], 3)); // 9  (5+1+3)
console.log(maxWindowSum([2, 3, 4, 1, 5],    2)); // 7  (3+4)
console.log(maxWindowSum([1, 2, 3],           1)); // 3
