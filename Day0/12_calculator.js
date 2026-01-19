// Challenge 12: Simple Calculator
let num1 = 10;
let operator = "+";
let num2 = 5;
let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
}

console.log(result);
