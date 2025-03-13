// a) The order in which the messages will print:
// 1. '#4: Not delayed at all' - This is printed immediately because it is not delayed.
// 2. '#3: Delayed by 0ms' - This is printed next because it has a 0ms delay, so it will be executed as soon as possible after the current execution stack is empty.
// 3. '#2: Delayed by 20ms' - This message is printed after a 20ms delay.
// 4. '#1: Delayed by 100ms' - This message is printed after a 100ms delay.

const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');

// c) Adding a fifth test with a delay greater than 10 seconds
const timeoutId = setTimeout(delayMsg, 11000, '#5: Delayed by 11000ms');

// d) Using clearTimeout to prevent the fifth test from printing at all
clearTimeout(timeoutId);