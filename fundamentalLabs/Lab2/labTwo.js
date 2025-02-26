let three = "3"
let four = "4"
let thirty = "30"

//What is the value of the following expressions? 
// let addition = three + four // 34 - Incorrect
// let multiplication = three * four // 12 
// let division = three / four // 0.75
// let subtraction = three - four // -1

// let lessThan1 = three < four // 3 < 4
// let lessThan2 = thirty < four // 30 < 4 - Incorrect 

// 1. Addition: The expression three + four is concatenating the strings "3" and "4" instead of adding their numeric values. This is because the + operator concatenates strings if any operand is a string.
// 2. Less than Comparison: The expression thirty < four is comparing the strings "30" and "4" lexicographically. In string comparison, "30" is considered less than "4" because "3" is less than "4" when comparing the first characters.

let addition = Number(three) + Number(four); // 7
let multiplication = Number(three) * Number(four); // 12 
let division = Number(three) / Number(four); // 0.75
let subtraction = Number(three) - Number(four) // -1

let lessThan1 = Number(three) < Number(four); // 3 < 4 - true
let lessThan2 = Number(thirty) < Number(four); // 30 < 4 - false

console.log(addition);             // 7
console.log(multiplication);       // 12
console.log(division);             // 0.75
console.log(subtraction);          // -1

console.log(lessThan1);            // true
console.log(lessThan2);            // false
