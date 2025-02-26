/*const westley = { 
    name: 'Westley', 
    numFingers: 5 
} 
const rugen = { 
    name: 'Count Rugen', 
    numFingers: 6 
} 
 
const inigo = { 
    firstName: 'Inigo', 
    greeting(person) {  
        let greeting = `Hello ${person.name}, my name is ${this.firstName}. `; 
        console.log(greeting + this.getCatchPhrase(person)); 
    }, 
    getCatchPhrase(person) { 
        return 'Nice to meet you.'; 
    } 
} 
 
inigo.greeting(westley) 
inigo.greeting(rugen)*/

const westley = { 
    name: 'Westley', 
    numFingers: 5 
} 
const rugen = { 
    name: 'Count Rugen', 
    numFingers: 6 
} 
 
const inigo = { 
    firstName: 'Inigo', 
    lastName: 'Montoya',  // Added lastName property
    greeting(person) {  
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; 
        console.log(greeting + this.getCatchPhrase(person)); 
    }, 
    getCatchPhrase: (person) => 
        person.numFingers === 6 ? 'You killed my father. Prepare to die.' : 'Nice to meet you.' // Updated to use arrow function syntax and conditional operator
} 
 
inigo.greeting(westley) 
inigo.greeting(rugen)