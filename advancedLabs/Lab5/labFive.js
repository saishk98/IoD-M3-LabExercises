// a) Fix the setTimeout call by wrapping the call to car.description() inside a function 
let car = { 
    make: "Porsche", 
    model: '911', 
    year: 1964, 
     
    description() { 
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); 
    } 
}; 

car.description(); // works 

// Fix by wrapping in an anonymous function
setTimeout(() => car.description(), 200); // works

// b) Change the year for the car by creating a clone of the original and overriding it 
let newCar = { ...car, year: 2023 };
newCar.description(); // "This car is a Porsche 911 from 2023"

// c) Does the delayed description() call use the original values or the new values from b)? Why?
setTimeout(() => car.description(), 200); // "This car is a Porsche 911 from 1964"
setTimeout(() => newCar.description(), 200); // "This car is a Porsche 911 from 2023"
// The delayed description() call uses the car object that it was bound to at the time of the call. 
// Since we are calling car.description() inside setTimeout, it uses the original car values.

// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function 
let boundDescription = car.description.bind(car);
setTimeout(boundDescription, 200); // "This car is a Porsche 911 from 1964"

// e) Change another property of the car by creating a clone and overriding it, 
// and test that setTimeout still uses the bound value from d)
let anotherCar = { ...car, model: 'Cayenne' };
anotherCar.description(); // "This car is a Porsche Cayenne from 1964"

// The bound function still uses the original bound values
setTimeout(boundDescription, 200); // "This car is a Porsche 911 from 1964"
