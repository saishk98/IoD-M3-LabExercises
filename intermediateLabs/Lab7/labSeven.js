const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
];

// a) Function to get the title of the book with the matching id
function getBookTitle(bookId) {
    const book = books.find(book => book.id === bookId);
    return book ? book.title : 'Book not found';
}

// b) Function to get all books written before 1950
function getOldBooks() {
    return books.filter(book => book.year < 1950);
}

// c) Function to add a new genre property to all books
function addGenre() {
    return books.map(book => ({ ...book, genre: 'classic' }));
}

// d) Function to get titles of books written by authors whose names start with authorInitial
function getTitles(authorInitial) {
    return books
        .filter(book => book.author.startsWith(authorInitial))
        .map(book => book.title);
}

// e) Function to get the latest book
function latestBook() {
    let latest = books[0];
    books.forEach(book => {
        if (book.year > latest.year) {
            latest = book;
        }
    });
    return latest;
}

// Testing the functions
console.log(getBookTitle(3)); // Should return: '1984'
console.log(getOldBooks());   // Should return all books written before 1950
console.log(addGenre());      // Should add genre: 'classic' to each book
console.log(getTitles('F'));  // Should return titles by authors starting with 'F'
console.log(latestBook());    // Should return the book with the most recent publication year