/*function Person(name, age) { 
    this.name = name; 
    this.age = age; 
    this.human = true; 
}*/

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = function() {
        return this.age >= 18;
    };
}

// a) Create a new person using the constructor function and store it in a variable
const person1 = new Person("Alice", 25);

// b) Create a second person using different name and age values and store it in a separate variable
const person2 = new Person("Bob", 16);

// c) Print out the properties of each person object to the console
console.log(person1); // Output: { name: 'Alice', age: 25, human: true, canDrive: [Function (anonymous)] }
console.log(person2); // Output: { name: 'Bob', age: 16, human: true, canDrive: [Function (anonymous)] }

// d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    canDrive() {
        return this.age >= 18;
    }
}

const person3 = new PersonClass("Charlie", 30);
console.log(person3); // Output: PersonClass { name: 'Charlie', age: 30, human: true }

// Print canDrive method results
console.log(`Can ${person1.name} drive? `, person1.canDrive()); // Output: Can Alice drive?  true
console.log(`Can ${person2.name} drive? `, person2.canDrive()); // Output: Can Bob drive?  false
console.log(`Can ${person3.name} drive? `, person3.canDrive()); // Output: Can Charlie drive?  true