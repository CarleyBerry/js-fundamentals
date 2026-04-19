// Challenge 21: Count Islands in a Grid
// Run: node 21_count_islands.js
// Given a 2D grid of '1' (land) and '0' (water), count number of islands.

function countIslands(grid) {
  let count = 0;

  function dfs(r, c) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== "1") return;
    grid[r][c] = "0"; // mark visited
    dfs(r + 1, c); dfs(r - 1, c);
    dfs(r, c + 1); dfs(r, c - 1);
  }

  for (let r = 0; r < grid.length; r++)
    for (let c = 0; c < grid[0].length; c++)
      if (grid[r][c] === "1") { count++; dfs(r, c); }

  return count;
}

// Tests
const g1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
console.log(countIslands(g1)); // 1

const g2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
console.log(countIslands(g2)); // 3
