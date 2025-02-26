if (0) console.log('#1 zero is true');
if ("0") console.log('#2 zero is true'); // Prints #2 zero is true
if (null) console.log('null is true');
if (-1) console.log('negative is true'); // Prints negative is true
if (1) console.log('positive is true'); // Prints positive is true

// 1. if(0): 0 is false because 0 is a falsy value. Therefore, console.log('#1 zero is true') will not print.
// 2. if("0"): "0" is true because "0" is a truthy value. Therefore, console.log('#2 zero is true') will print.
// 3. if(null): null is false because null is a falsy value. Therefore, console.log('null is true') will not print.
// 4. if(-1): -1 is a non-zero number, which is a truthy value in JavaScript. Therefore, console.log('negative is true') will print.
// 5. if(1): 1 is a non-zero number, which is a truthy value in JavaScript. Therefore, console.log('positive is true') will print.