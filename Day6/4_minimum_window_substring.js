// Challenge 4: Minimum Window Substring
// Run: node 4_minimum_window_substring.js
// Return the minimum window in s which contains all chars of t.

function minWindow(s, t) {
  const need = {}, have = {};
  for (const c of t) need[c] = (need[c] || 0) + 1;

  let formed = 0, required = Object.keys(need).length;
  let l = 0, min = Infinity, res = "";

  for (let r = 0; r < s.length; r++) {
    const ch = s[r];
    have[ch] = (have[ch] || 0) + 1;
    if (need[ch] && have[ch] === need[ch]) formed++;

    while (formed === required) {
      if (r - l + 1 < min) { min = r - l + 1; res = s.slice(l, r + 1); }
      const lc = s[l++];
      have[lc]--;
      if (need[lc] && have[lc] < need[lc]) formed--;
    }
  }
  return res;
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("a", "a"));               // "a"
console.log(minWindow("a", "aa"));              // ""
