function subsetSum(nums, target) {
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let j = target; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }
  return dp[target];
}

console.log(subsetSum([3, 34, 4, 12, 5, 2], 9));
