"use strict";
const firstBook = {
    id: 1,
    title: "1984",
    author: {
        name: "John Doe",
        country: "Spain"
    },
    pages: 347,
    year: 1984
};
let secondBook = {
    id: 2,
    title: "Second Book",
    author: {
        name: "John Doe",
        country: "Sweden"
    },
    pages: 243,
    year: 2014,
    genre: "Genre",
    rating: 4.1
};
function printBook(book) {
    const message = `Book: \ntitle: ${book.title}, \nauthor: ${book.author.name}`;
    if (!book.genre || !book.rating) {
        console.log(message);
    }
    else {
        console.log(`${message}, \ngenre: ${book.genre}, \nrating: ${book.rating} `);
    }
}
console.log("-----------First Book----------");
printBook(firstBook);
console.log("-----------Second Book----------");
printBook(secondBook);
//secondBook.id=34;
const thirdBook = {
    id: 3,
    title: "Third Book",
    author: {
        name: "John Doe",
        country: "Italy"
    },
    pages: 107,
    year: 2025,
    rating: 4.9
};
const fourthBook = {
    id: 4,
    title: "Fourth Book",
    author: {
        name: "John Doe",
        country: "USA"
    },
    pages: 309,
    year: 1998,
    genre: "Genre",
};
const books = [firstBook, secondBook, thirdBook, fourthBook];
function getRecentBook(books, afterYear) {
    let titleBooks = [];
    books.forEach((book) => {
        if (book.year > afterYear) {
            titleBooks.push(book.title);
        }
    });
    return titleBooks;
}
console.log(getRecentBook(books, 2000));
