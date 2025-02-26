/*function getGreeting(name) {
    return "Hello, " + name + "!";
}*/

// a) Function expression syntax
const getGreetingExpression = function(name) {
    return "Hello, " + name + "!";
};

// b) Arrow function syntax
const getGreetingArrow = (name) => {
    return "Hello, " + name + "!";
};

// Testing the functions
console.log(getGreetingExpression("Sam")); // Hello, Sam!
console.log(getGreetingArrow("Sam")); // Hello, Sam!
