function partition(s) {
  const res = [];
  
  function isPalindrome(str, l, r) {
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++; r--;
    }
    return true;
  }

  function backtrack(start, path) {
    if (start === s.length) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s, start, i)) {
        path.push(s.substring(start, i + 1));
        backtrack(i + 1, path);
        path.pop();
      }
    }
  }

  backtrack(0, []);
  return res;
}

console.log(partition('aab'));
