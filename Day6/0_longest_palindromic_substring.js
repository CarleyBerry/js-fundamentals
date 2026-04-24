// Challenge 0: Longest Palindromic Substring (Expand Around Center)
// Run: node 0_longest_palindrome.js

function longestPalindrome(s) {
  let start = 0, maxLen = 1;

  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }
    if (r - l - 1 > maxLen) { maxLen = r - l - 1; start = l + 1; }
  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i);     // odd length
    expand(i, i + 1); // even length
  }
  return s.slice(start, start + maxLen);
}

console.log(longestPalindrome("babad"));   // "bab" or "aba"
console.log(longestPalindrome("cbbd"));    // "bb"
console.log(longestPalindrome("racecar")); // "racecar"
