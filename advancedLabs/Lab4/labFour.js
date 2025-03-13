// Part a: Using setInterval
function printFibonacci() {
    let a = 0, b = 1;
    setInterval(() => {
      console.log(b);
      [a, b] = [b, a + b];
    }, 1000);
}
  
// Part b: Using nested setTimeout
function printFibonacciTimeouts() {
    let a = 0, b = 1;

    function printNext() {
        console.log(b);
        [a, b] = [b, a + b];
        setTimeout(printNext, 1000);
    }

    printNext();
}
  
// Part c: With limit
function printFibonacciWithLimit(limit) {
    let a = 0, b = 1;
    let count = 0;
    const intervalId = setInterval(() => {
        if (count >= limit) {
        clearInterval(intervalId);
        return;
        }
        console.log(b);
        [a, b] = [b, a + b];
        count++;
    }, 1000);
}
  
function printFibonacciTimeoutsWithLimit(limit) {
    let a = 0, b = 1;
    let count = 0;

    function printNext() {
        if (count >= limit) {
        return;
        }
        console.log(b);
        [a, b] = [b, a + b];
        count++;
        setTimeout(printNext, 1000);
    }
  
    printNext();
}
  
  // To use the functions:
  // printFibonacci();
  // printFibonacciTimeouts();
  // printFibonacciWithLimit(10);
  // printFibonacciTimeoutsWithLimit(10);