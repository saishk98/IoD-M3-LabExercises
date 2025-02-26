const phoneBookABC = new Map() //an empty map to begin with 
phoneBookABC.set('Annabelle', '0412312343')  
phoneBookABC.set('Barry', '0433221117') 
phoneBookABC.set('Caroline', '0455221182') 

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
const phoneBookDEF = new Map([
    ['Daniel', '0466112233'],
    ['Elena', '0422334455'],
    ['Francis', '0477889900']
  ]);
  
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
// This has been done in the above step during the creation of the phoneBookDEF map

// c) Update the phone number for Caroline
phoneBookABC.set('Caroline', '0455111222'); // Updating Caroline's phone number

// d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
function printPhoneBook(contacts) {
contacts.forEach((phoneNumber, name) => {
    console.log(`${name}: ${phoneNumber}`);
});
}

// e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// f) Print out the full list of names in the combined phone book
printPhoneBook(phoneBook);