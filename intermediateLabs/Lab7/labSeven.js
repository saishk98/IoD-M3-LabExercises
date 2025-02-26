const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
];

// a) Function to get the title of the book with the matching id
function getBookTitle(bookId: number): string | undefined {
    const book = books.find(book => book.id === bookId);
    return book ? book.title : undefined;
}

// b) Function to get all books written before 1950
function getOldBooks(): typeof books {
    return books.filter(book => book.year < 1950);
}

// c) Function to add a new genre property to all books
function addGenre(): typeof books {
    return books.map(book => ({ ...book, genre: 'classic' }));
}

// d) Function to get titles of books written by authors whose names start with authorInitial
function getTitles(authorInitial: string): string[] {
    return books
        .filter(book => book.author.startsWith(authorInitial))
        .map(book => book.title);
}

// e) Function to get the latest book
function latestBook(): typeof books[0] | undefined {
    let latest: typeof books[0] | undefined = undefined;
    books.forEach(book => {
        if (!latest || book.year > latest.year) {
            latest = book;
        }
    });
    return latest;
}

// Testing the functions
console.log(getBookTitle(1)); // Expected: 'The Great Gatsby'
console.log(getOldBooks()); // Expected: Array of books written before 1950
console.log(addGenre()); // Expected: Array of books with a new genre property 'classic'
console.log(getTitles('H')); // Expected: ['To Kill a Mockingbird']
console.log(latestBook()); // Expected: { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }