function caseCounter(str) {
    let uppercase = 0;
    let lowercase = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            uppercase++;
        } else if (str[i] >= 'a' && str[i] <= 'z') {
            lowercase++;
        }
    }

    return { uppercase: uppercase, lowercase: lowercase };
}

console.log(caseCounter("Hello World"));
console.log(caseCounter("JavaScript"));
