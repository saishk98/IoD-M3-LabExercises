const animals = ['Tiger', 'Giraffe'];
console.log(animals);

// a) Add 2 new values to the end
animals.push('Elephant', 'Lion');
console.log('After adding 2 new values to the end:', animals);

// b) Add 2 new values to the beginning
animals.unshift('Zebra', 'Kangaroo');
console.log('After adding 2 new values to the beginning:', animals);

// c) Sort the values alphabetically
animals.sort();
console.log('After sorting alphabetically:', animals);

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newValue;
}
replaceMiddleAnimal('Panda');
console.log('After replacing the middle animal:', animals);

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.
function findMatchingAnimals(beginsWith) {
    const beginsWithLower = beginsWith.toLowerCase();
    return animals.filter(animal => animal.toLowerCase().startsWith(beginsWithLower));
}

console.log('Animals that start with "t":', findMatchingAnimals('t'));
console.log('Animals that start with "z":', findMatchingAnimals('z'));