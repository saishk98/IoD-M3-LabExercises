/*const sydney = { 
    name: 'Sydney', 
    population: 5_121_000, 
    state: 'NSW', 
    founded: '26 January 1788', 
    timezone: 'Australia/Sydney' 
}*/

// a) Function to print object properties and their values using a for...in loop
function printCityProperties(city) {
    for (const property in city) {
        console.log(`${property}: ${city[property]}`);
    }
}

// Test the function with the sydney object
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
};

printCityProperties(sydney);

// b) Create a new object for a different city and call the function with the new object
const newYork = {
    name: 'New York',
    population: 8_336_817,
    state: 'NY',
    founded: '1624',
    timezone: 'America/New_York'
};

printCityProperties(newYork);