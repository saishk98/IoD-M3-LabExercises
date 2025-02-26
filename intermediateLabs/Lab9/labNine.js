let salaries = { 
    "Timothy" : 35000, 
    "David" : 25000, 
    "Mary" : 55000, 
    "Christina" : 75000, 
    "James" : 43000 
};

// a) Function to calculate the total of all salaries
function sumSalaries(salaries) {
    let total = 0;
    for (let key in salaries) {
        total += salaries[key];
    }
    return total;
}

// b) Function to find the name of the person earning the highest salary
function topEarner(salaries) {
    let maxSalary = 0;
    let topEarner = '';
    for (let key in salaries) {
        if (salaries[key] > maxSalary) {
            maxSalary = salaries[key];
            topEarner = key;
        }
    }
    return topEarner;
}

// Example usage
console.log("Total Salaries: " + sumSalaries(salaries)); // Output: 233000
console.log("Top Earner: " + topEarner(salaries)); // Output: Christina