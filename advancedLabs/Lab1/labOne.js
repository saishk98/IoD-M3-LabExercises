function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;

    return function() {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}

let counter1 = makeCounter(); // Starts from 0 and increments by 1
counter1(); // 1
counter1(); // 2

let counter2 = makeCounter(); // Starts from 0 and increments by 1
counter2(); // 1
counter2(); // 2

// Test to see if counter1 and counter2 are independent
counter1(); // 3
counter2(); // 3

// Create a counter that starts from 10 and increments by 2
let counter3 = makeCounter(10, 2);
counter3(); // 12
counter3(); // 14

// Create a counter that starts from 5 and increments by 3
let counter4 = makeCounter(5, 3);
counter4(); // 8
counter4(); // 11