const today = new Date(); 
console.log('Current time is ' + today.toLocaleTimeString()); 
console.log(today.getHours() + ' hours have passed so far today'); 

// a) Print the total number of minutes that have passed so far today
const totalMinutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(totalMinutesPassed + ' minutes have passed so far today');

// b) Print the total number of seconds that have passed so far today
const totalSecondsPassed = totalMinutesPassed * 60 + today.getSeconds();
console.log(totalSecondsPassed + ' seconds have passed so far today');

// c) Calculate and print your age as: 'I am x years, y months and z days old'
function calculateAge(birthday) {
    const now = new Date();
    let years = now.getFullYear() - birthday.getFullYear();
    let months = now.getMonth() - birthday.getMonth();
    let days = now.getDate() - birthday.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    console.log(`I am ${years} years, ${months} months, and ${days} days old`);
}

// Replace with your actual birthdate
const myBirthday = new Date('1998-08-15');
calculateAge(myBirthday);

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates
function daysInBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const diffInTime = Math.abs(date2.getTime() - date1.getTime());
    const diffInDays = Math.ceil(diffInTime / oneDay);
    return diffInDays;
}

// Example usage:
const date1 = new Date('2025-01-01');
const date2 = new Date('2025-02-19');
console.log('Days in between: ' + daysInBetween(date1, date2));
