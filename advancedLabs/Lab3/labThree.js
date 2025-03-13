function debounce(func, ms = 1000) {
    let timeout;
    
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), ms);
    };
}

function printMe(msg) { 
    console.log(`printing debounced message: ${msg}`) 
} 

printMe = debounce(printMe, 1000); // For part (a) and (b)

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls 
setTimeout(() => printMe('Message 1'), 100);  
setTimeout(() => printMe('Message 2'), 200);  
setTimeout(() => printMe('Message 3'), 300);

// Explanation:
// Part (a): The debounce function is created as a decorator that wraps another function. 
// It ensures that the wrapped function is only called after a specified period of inactivity. 
// The default period of inactivity is set to 1000 milliseconds (1 second).

// Part (b): The debounce function is extended to take a second argument ms, which defines the length of the inactivity period. 
// This allows the inactivity period to be customized instead of being hardcoded to 1000 milliseconds.

// Part (c): The printMe function is modified to take an argument msg, which is included in the console.log statement. 
// The debounced version of printMe is then called with different messages at different intervals. 
// Only the last message should be printed after 1000 milliseconds of no calls.