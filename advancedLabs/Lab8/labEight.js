// a) Create a decorator function validateStringArg(fn) which will validate an argument passed to fn to ensure that it is a string, throwing an error if not
function validateStringArg(fn) {
    return function(...args) {
        for (let arg of args) {
            if (typeof arg !== 'string') {
                throw new Error(`Argument ${arg} is not a string`);
            }
        }
        return fn(...args);
    };
}

// b) Extend orderItems to use the ... rest operator, allowing multiple item name arguments, and include them all in the returned string
function orderItems(...itemNames) {
    return `Order placed for: ${itemNames.join(', ')}`;
}

// c) Extend the decorator function to validate as strings all arguments passed to fn
// (Note: The decorator function already validates all arguments passed to fn)

// create a decorated version of the original function
const validatedOrderItems = validateStringArg(orderItems);

// d) When testing the decorated function, use try-catch blocks to handle errors thrown for non-string arguments
try {
    console.log(validatedOrderItems("Apple Watch", "MacBook Pro")); // should run the function
} catch (error) {
    console.error(error.message);
}

try {
    console.log(validatedOrderItems("iPhone", 123)); // should throw an error
} catch (error) {
    console.error(error.message);
}

try {
    console.log(validatedOrderItems("iPad")); // should run the function
} catch (error) {
    console.error(error.message);
}

try {
    console.log(validatedOrderItems(123, 456)); // should throw an error
} catch (error) {
    console.error(error.message);
}