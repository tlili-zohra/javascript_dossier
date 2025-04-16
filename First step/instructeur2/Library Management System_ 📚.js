/* Library Management System 📚
A public library wants to digitize its book inventory. 

1. Store Books with Detailed Information
Task: Books are stored with their ID, title, author, Year, Genre, availability, BorrowedBy.

2. Format Book Titles Properly
Task: Write a function that takes a book title and returns it with each word capitalized.

3. Search for Books by Title (Case-Insensitive)
Task: Create a function that searches the book list for a title (case-insensitive) and returns matching books.

4. Search for Books by Author (Case-Insensitive)
Task: Create a function that searches for books by a specific author (case-insensitive) and returns a list of matching books.

5. Borrow a Book
Task: Borrow a book by its ID, Mark the book as unavailable and store the name of the borrower .

6. Return a Book
Task: Write a function to return a book by its ID, Mark the book as available.

7. List Available Books (Alphabetically)
Task: Create a function to list all available books, sorted alphabetically by title.

8. List Borrowed Books
Task: Create a function to list all borrowed books along with the names of the people who borrowed them.

9. Generate Library Summary
Task: Write a function to generate a summary of library statistics:

- Total number of books.
- Number of available books.
- Number of borrowed books.


Books:

ID: 1
Title: harry potter and the philosopher's stone
Author: J.K. Rowling
Year: 1997
Genre: Fantasy
Available: Yes
BorrowedBy: None

ID: 2
Title: the great gatsby
Author: F. Scott Fitzgerald
Year: 1925
Genre: Classic
Available: Yes
BorrowedBy: None

ID: 3
Title: to kill a mockingbird
Author: Harper Lee
Year: 1960
Genre: Classic
Available: No
BorrowedBy: Alice

ID: 4
Title: 1984
Author: George Orwell
Year: 1949
Genre: Dystopian
Available: Yes
BorrowedBy: None

ID: 5
Title: a brief history of time
Author: Stephen Hawking
Year: 1988
Genre: Science
Available: No
BorrowedBy: Bob


*/

// 1. Store Books with Detailed Information

const Books = [
  {
    ID: 1,
    Title: "harry potter and the philosopher's stone",
    Author: "J.K. Rowling",
    Year: 1997,
    Genre: "Fantasy",
    Available: "Yes",
    BorrowedBy: "None",
  },

  {
    ID: 2,
    Title: "the great gatsby",
    Author: "F. Scott Fitzgerald",
    Year: 1925,
    Genre: "Classic",
    Available: "Yes",
    BorrowedBy: "None",
  },

  {
    ID: 3,
    Title: "to kill a mockingbird",
    Author: "Harper Lee",
    Year: 1960,
    Genre: "Classic",
    Available: "No",
    BorrowedBy: "Alice",
  },

  {
    ID: 4,
    Title: "1984",
    Author: "George Orwell",
    Year: 1949,
    Genre: "Dystopian",
    Available: "Yes",
    BorrowedBy: "None",
  },

  {
    ID: 5,
    Title: "a brief history of time harry",
    Author: "Stephen Hawking",
    Year: 1988,
    Genre: "Science",
    Available: "No",
    BorrowedBy: "Bob",
    History: {},
  },
];

// 2. Format Book Titles Properly

function formatTitle(title) {
  return title
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(formatTitle(Books[0].Title));

// 3. Search for Books by Title (Case-Insensitive)

function searchByTitle(title) {
  return Books.filter(function (book) {
    return book.Title.toLowerCase().includes(title.toLowerCase());
  });
}

console.log(searchByTitle("harry"));

// 4. Search for Books by Author (Case-Insensitive)

function searchByAuthor(author) {
  author = author.toLowerCase();
  return Books.filter(function (book) {
    let bookAuthor = book.Author.toLowerCase();
    return bookAuthor.includes(author);
  });
}

console.log(searchByAuthor("orwell"));

// 5. Borrow a Book

function borrowBook(id, name) {
  let book = Books.find(function (book) {
    return book.ID == id;
  });
  if (book && book.Available === "Yes") {
    book.Available = "No";
    book.BorrowedBy = name;
    return "book borrowed succsessfully";
  } else if (!book) {
    return "Book not found";
  } else {
    return "Book already borrowed";
  }
}
console.log(borrowBook(4, "Mazen"));

// 6. Return a Book

function returnBook(id) {
  let book = Books.find(function (book) {
    return book.ID == id;
  });
  if (book && book.Available === "No") {
    book.Available = "Yes";
    book.BorrowedBy = "None";
    return "book available";
  } else if (!book) {
    return "Book not found";
  } else {
    return "book already available";
  }
}

console.log(returnBook(2));

// 7. List Available Books (Alphabetically)

function availableBooks() {
  return Books.filter(function (book) {
    return book.Available === "Yes";
  }).sort(function (a, b) {
    return a.Title.localeCompare(b.Title);
  });
}

console.log(availableBooks());

// 8. List Borrowed Books

function borrowedBooks() {
  let books = Books.filter(function (book) {
    return book.Available === "No";
  });
  return books.map(function (book) {
    return `${book.Title} BorrowedBy ${book.BorrowedBy}`;
  });
}

console.log(borrowedBooks());

// 9. Generate Library Summary

function librarySummary() {
  return `Total Number Of Books : ${Books.length} Books
   Number Of Available Books : ${availableBooks().length} Books
   Number Of Borrowed Books : ${borrowedBooks().length} Books `;
}

console.log(librarySummary());
