console.log(camelCase('margin-left')) // marginLeft 
console.log(camelCase('background-image')) // backgroundImage 
console.log(camelCase('display')) // display 

// a) Main camelCase function
function camelCase(cssProp) {
    return cssProp.replace(/-([a-z])/g, function(g) {
      return g[1].toUpperCase();
    });
  }
  
  // b) Variants using different types of for loops
  
  // Using a for loop
  function camelCaseForLoop(cssProp) {
    let result = '';
    let capitalizeNext = false;
    for (let i = 0; i < cssProp.length; i++) {
      if (cssProp[i] === '-') {
        capitalizeNext = true;
      } else {
        result += capitalizeNext ? cssProp[i].toUpperCase() : cssProp[i];
        capitalizeNext = false;
      }
    }
    return result;
  }
  
  // Using a for...of loop
  function camelCaseForOfLoop(cssProp) {
    let result = '';
    let capitalizeNext = false;
    for (let char of cssProp) {
      if (char === '-') {
        capitalizeNext = true;
      } else {
        result += capitalizeNext ? char.toUpperCase() : char;
        capitalizeNext = false;
      }
    }
    return result;
  }
  
  // c) Variants with and without the conditional operator
  
  // With conditional operator
  function camelCaseWithConditional(cssProp) {
    return cssProp.split('-').map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
  }
  
  // Without conditional operator
  function camelCaseWithoutConditional(cssProp) {
    const words = cssProp.split('-');
    let result = words[0];
    for (let i = 1; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].slice(1);
    }
    return result;
  }
  
  // Testing all variants
  console.log(camelCase('margin-left')); // marginLeft
  console.log(camelCase('background-image')); // backgroundImage
  console.log(camelCase('display')); // display
  
  console.log(camelCaseForLoop('margin-left')); // marginLeft
  console.log(camelCaseForLoop('background-image')); // backgroundImage
  console.log(camelCaseForLoop('display')); // display
  
  console.log(camelCaseForOfLoop('margin-left')); // marginLeft
  console.log(camelCaseForOfLoop('background-image')); // backgroundImage
  console.log(camelCaseForOfLoop('display')); // display
  
  console.log(camelCaseWithConditional('margin-left')); // marginLeft
  console.log(camelCaseWithConditional('background-image')); // backgroundImage
  console.log(camelCaseWithConditional('display')); // display
  
  console.log(camelCaseWithoutConditional('margin-left')); // marginLeft
  console.log(camelCaseWithoutConditional('background-image')); // backgroundImage
  console.log(camelCaseWithoutConditional('display')); // display