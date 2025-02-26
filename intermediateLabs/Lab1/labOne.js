// console.log(ucFirstLetters("los angeles") ) //Los Angeles 

function ucFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Test the function with different strings
console.log(ucFirstLetters("los angeles")); // Los Angeles
console.log(ucFirstLetters("new york")); // New York
console.log(ucFirstLetters("san francisco")); // San Francisco
console.log(ucFirstLetters("hello world")); // Hello World
console.log(ucFirstLetters("capitalize each word")); // Capitalize Each Word

// In this function, we use split to divide the string into an array of words. 
// Then we use map to iterate over each word and capitalize the first letter using charAt(0).toUpperCase(), and concatenate it with the rest of the word using slice(1). 
// Finally, we use join to combine the words back into a single string. 
// This function correctly capitalizes the first letter of each word in a given string.