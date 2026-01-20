function removeVowels(str) {
    let result = '';
    const vowels = 'aeiouAEIOU';

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i];
        }
    }

    return result;
}

console.log(removeVowels("hello world"));
console.log(removeVowels("JavaScript"));
