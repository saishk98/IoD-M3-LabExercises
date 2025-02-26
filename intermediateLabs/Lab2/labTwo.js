/*console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat... */

// Variant a: Using if-else statement
function truncate(str, max) {
    if (str.length > max) {
      return str.slice(0, max) + '...';
    } else {
      return str;
    }
  }
  
  console.log(truncate('This text will be truncated if it is too long', 25));
  // Output: This text will be truncat...
  
  // Variant b: Using conditional operator
  function truncateWithConditional(str, max) {
    return str.length > max ? str.slice(0, max) + '...' : str;
  }
  
  console.log(truncateWithConditional('This text will be truncated if it is too long', 25));
  // Output: This text will be truncat...

  // Both functions achieve the same result, truncating the string and adding an ellipsis if the string length exceeds the specified maximum length. 
  // The first variant uses an if-else statement, while the second variant uses a conditional (ternary) operator.