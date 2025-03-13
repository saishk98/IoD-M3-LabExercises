// Add a delay function to Function prototype
Function.prototype.delay = function(ms) {
    let fn = this;
    return function(...args) {
        setTimeout(() => {
            fn.apply(this, args);
        }, ms);
    }
}

// Test function with two parameters
function multiply(a, b) { 
    console.log(a * b); 
} 

// Test delay with two parameters
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// Modify multiply to take 4 parameters and multiply all of them
function multiplyFour(a, b, c, d) { 
    console.log(a * b * c * d); 
} 

// Test delay with four parameters
multiplyFour.delay(1000)(2, 3, 4, 5); // prints 120 after 1000 milliseconds