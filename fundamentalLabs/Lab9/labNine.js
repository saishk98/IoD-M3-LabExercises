/*let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
let dog1 = 'Bingo'; 
let cat1 = { name: 'Fluffy', breed: 'Siberian' };*/

// Initial variables
let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
let dog1 = 'Bingo'; 
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
let moreSports = teamSports;
moreSports.push('Basketball');
moreSports.unshift('Football');

// b) Create a new dog2 variable equal to dog1 and give it a new value
let dog2 = dog1;
dog2 = 'Rex';

// c) Create a new cat2 variable equal to cat1 and change its name property
let cat2 = cat1;
cat2.name = 'Whiskers';

// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
console.log('teamSports:', teamSports); // Prints the modified array due to reference
console.log('dog1:', dog1); // Remains unchanged as strings are primitive types
console.log('cat1:', cat1); // Prints the modified object due to reference

// Explanation:
// teamSports and moreSports point to the same array, so changes to moreSports affect teamSports.
// dog1 and dog2 are independent because strings are primitive types and are copied by value.
// cat1 and cat2 point to the same object, so changes to cat2 affect cat1.

// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent

// Creating moreSports as a copy of teamSports
moreSports = [...teamSports];
moreSports.push('Basketball');
moreSports.unshift('Football');

// Creating cat2 as a copy of cat1
cat2 = { ...cat1 };
cat2.name = 'Whiskers';

// Printing the original variables to check if they remain unchanged
console.log('Original teamSports:', teamSports); // Should print the original array
console.log('Original cat1:', cat1); // Should print the original object

// Printing the new variables to check the changes
console.log('New moreSports:', moreSports); // Should print the modified array
console.log('New cat2:', cat2); // Should print the modified object
