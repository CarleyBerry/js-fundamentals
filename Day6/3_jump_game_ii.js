// Challenge 3: Jump Game II — Minimum jumps to reach end
// Run: node 3_jump_game_ii.js

function jumpGameII(nums) {
  let jumps = 0, curEnd = 0, farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === curEnd) { jumps++; curEnd = farthest; }
  }
  return jumps;
}

console.log(jumpGameII([2, 3, 1, 1, 4])); // 2
console.log(jumpGameII([2, 3, 0, 1, 4])); // 2
console.log(jumpGameII([1]));              // 0
