function uppercaseExceptFirst(str) {
    if (str.length === 0) {
        return str;
    }

    return str[0] + str.slice(1).toUpperCase();
}

console.log(uppercaseExceptFirst("hello"));
console.log(uppercaseExceptFirst("javaScript"));
