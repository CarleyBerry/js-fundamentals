// Challenge 1: Word Break
// Run: node 1_word_break.js
// Given a string s and dictionary, return true if s can be segmented.

function wordBreak(s, wordDict) {
  const set = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++)
    for (let j = 0; j < i; j++)
      if (dp[j] && set.has(s.slice(j, i))) { dp[i] = true; break; }

  return dp[s.length];
}

console.log(wordBreak("leetcode", ["leet", "code"]));         // true
console.log(wordBreak("applepenapple", ["apple", "pen"]));    // true
console.log(wordBreak("catsandog", ["cats","dog","sand","an","cat"])); // false
