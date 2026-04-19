function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= start) {
      start = map.get(s[i]) + 1;
    }
    map.set(s[i], i);
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
