// Challenge 8: Palindrome Check
let str = "racecar";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}

if (str === reversed) {
    console.log(str + " is a palindrome");
} else {
    console.log(str + " is not a palindrome");
}
