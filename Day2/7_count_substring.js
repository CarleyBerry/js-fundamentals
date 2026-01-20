function countSubstring(str, substr) {
    let count = 0;
    let position = 0;

    while (position < str.length) {
        let found = str.indexOf(substr, position);
        if (found !== -1) {
            count++;
            position = found + 1;
        } else {
            break;
        }
    }

    return count;
}

console.log(countSubstring("hello hello world", "hello"));
console.log(countSubstring("aaaa", "aa"));
