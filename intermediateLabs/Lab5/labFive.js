/*let twentyCents = 0.20 
let tenCents = 0.10 
console.log('${twentyCents} + ${tenCents} = ${twentyCents + tenCents}')  
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2); 
let fixedTen = tenCents.toFixed(2); 
console.log(fixedTwenty + fixedTen) //why is this not working? */

// a) Explanation:
// The code returns the wrong answer because `toFixed` converts the number to a string representation. 
// When you concatenate two strings in JavaScript, it does not perform arithmetic addition but instead, concatenates the strings together.
// For example, '0.20' + '0.10' results in '0.200.10' rather than 0.30.

let twentyCents = 0.20;
let tenCents = 0.10;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);  
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2); 
let fixedTen = tenCents.toFixed(2); 
console.log(fixedTwenty + fixedTen); // Outputs '0.200.10'

// b) Function to safely add two decimal numbers
function currencyAddition(float1, float2) {
    let factor = 100;
    return (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
}

console.log(0.3 == currencyAddition(0.1, 0.2)); // true

// c) Function to safely perform the given operation on two numbers
function currencyOperation(float1, float2, operation) {
    let factor = 100;
    let result;
    switch (operation) {
        case '+':
            result = (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
            break;
        case '-':
            result = (Math.round(float1 * factor) - Math.round(float2 * factor)) / factor;
            break;
        case '*':
            result = (Math.round(float1 * factor) * Math.round(float2 * factor)) / (factor * factor);
            break;
        case '/':
            if (float2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            result = (Math.round(float1 * factor) / Math.round(float2 * factor));
            break;
        default:
            throw new Error("Invalid operation. Please use one of +, -, *, /.");
    }
    return result;
}

console.log(0.3 == currencyOperation(0.1, 0.2, '+')); // true

// d) Extend the function to include numDecimals argument
function currencyOperationExtended(float1, float2, operation, numDecimals) {
    if (numDecimals < 1 || numDecimals > 10) {
        throw new Error("numDecimals must be between 1 and 10.");
    }
    let factor = Math.pow(10, numDecimals);
    let result;
    switch (operation) {
        case '+':
            result = (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
            break;
        case '-':
            result = (Math.round(float1 * factor) - Math.round(float2 * factor)) / factor;
            break;
        case '*':
            result = (Math.round(float1 * factor) * Math.round(float2 * factor)) / (factor * factor);
            break;
        case '/':
            if (float2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            result = (Math.round(float1 * factor) / Math.round(float2 * factor));
            break;
        default:
            throw new Error("Invalid operation. Please use one of +, -, *, /.");
    }
    return result;
}

console.log(0.3 == currencyOperationExtended(0.1, 0.2, '+', 2)); // true
console.log(currencyOperationExtended(0.1, 0.2, '+', 4)); // 0.3
console.log(currencyOperationExtended(0.1, 0.2, '-', 3)); // -0.1
console.log(currencyOperationExtended(0.1, 0.2, '*', 5)); // 0.02
console.log(currencyOperationExtended(0.1, 0.2, '/', 6)); // 0.5