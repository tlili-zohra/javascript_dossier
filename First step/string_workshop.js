/*1. Store Books with Detailed Information
Task: Books are stored with their ID, title, author, Year, Genre, availability, BorrowedBy.*/
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
    Title: "a brief history of time",
    Author: "Stephen Hawking",
    Year: 1988,
    Genre: "Science",
    Available: "No",
    BorrowedBy: "Bob",
  },
];

/*2. Format Book Titles Properly
Task: Write a function that takes a book title and returns it with each word capitalized.*/
function capitalizall() {
  /*const capitalized = Books.map((x) => {
    console.log(x.Title.split(" "))
   x.Title.split(" ")=x[0].toUpperCase() + x.slice(1);
    return x.Title.split(" ")=x[0].toUpperCase() + x.slice(1);
  });*/
  const capitalized = Books.map((str) => {
    //console.log(str.Title.split(" "));
    //arraystr=str.Title.split(" ");
    //const result=arraystr.forEach(element => {
    //    strelemnt=element[0].toUpperCase()+element.slice(1)
    //    console.log(strelemnt);

    // });
    //console.log(str.Title.);
    //console.log(str.Title.split(" ").slice(1));
    return str.Title.split(" ")
      .map((firstc) => firstc[0].toUpperCase() + firstc.slice(1))
      .join(" ");
  });
}

console.log(capitalizall(Books[0].Title));

function capitalizeTitle(title) {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeTitle("harry potter and the philosopher's stone"));
console.log(capitalizeTitle(Books[0].Title));

/*3. Search for Books by Title (Case-Insensitive)
Task: Create a function that searches the book list for a title (case-insensitive) and returns matching books.*/

/*function searchtitle(title) {
  let result = Books.filter(function (book) {
    if (book.Title.toLowerCase == title.toLowerCase) {
      return "existe";
    }
    return "not existe";
  });
}
console.log(searchtitle("harry potter and the philosopher's stone"));*/

function searchTitle(title) {
  /*let result = Books.filter(
    (book) => book.Title.toLowerCase() == title.toLowerCase()
  );*/
  /* autre methode */
  let result = Books.filter((book) => book.Title.includes(title.toLowerCase()));
  //if (result.length > 0) {
  return result;
  //}
  //return result.length > 0 ? result : "Book not found";
}

console.log(searchTitle(Books[0].Title));
//autre methode
console.log(searchTitle("harry "));

/* 4. Search for Books by Author (Case-Insensitive)
Task: Create a function that searches for books by a specific author (case-insensitive) and returns a list of matching books.*/

function searchAuthor(author) {
  let result = Books.filter(function (book) {
    return book.Author.toLowerCase() == author.toLowerCase();
  });
  //sinon : let result = Books.filter((book) => book.Author.toLowerCase() == author.toLowerCase());
  //);
  if (result.length > 0) {
    return result;
  }
  //return result.length > 0 ? result : "Book not found";
}
console.log(searchAuthor("J.K. Rowling"));

/*5. Borrow a Book
Task: Borrow a book by its ID, Mark the book as unavailable and store the name of the borrower .*/

function borrowBook(id, name) {
  let book = Books.find((book) => book.ID === id);

  if (!book) {
    return "Book not found";
  }

  if (book.Available === "No") {
    return "Donner à " + book.BorrowedBy;
  }

  book.Available = "No";
  book.BorrowedBy = name;

  return book.Title + " " + name;
}

console.log(borrowBook(2, "Zohra"));
Books;

/*6. Return a Book
Task: Write a function to return a book by its ID, Mark the book as available.*/
function AvailableBook(id) {
  let book = Books.find(function (book) {
    return book.ID === id;
  });

  if (!book) {
    return "Book not found";
  }

  book.Available = "yes";

  return book;
}
console.log(AvailableBook(2));

/*7. List Available Books (Alphabetically)
Task: Create a function to list all available books, sorted alphabetically by title.*/

function stored_alpha() {
  return (book = Books.filter(function (book) {
    return book.Available === "Yes";
  }).sort(function (a, b) {
    return a.Title.localeCompare(b.Title); // comparer en string
  }));
  /*book.sort(function (a, b) {
    return a.Title.localeCompare(b.Title); // comparer en string
  });
  return book;*/
}
console.log(stored_alpha());

/*8. List Borrowed Books with Borrower Info
Task: Create a function to list all borrowed books along with the names of the people who borrowed them.
 */

function borrowBook() {
  return Books.filter(function (book) {
    return book.Available === "No";
  });
}
console.log(borrowBook());

/*
9. Generate Library Summary
Task: Write a function to generate a summary of library statistics:

- Total number of books.
- Number of available books.
- Number of borrowed books.
*/

function librarySummary() {
  return `Total number of books : ${Books.length} Books
  Number of available books : ${stored_alpha().length} Books
  Number of borrowed books : ${borrowBook().length} Books.
  `;
}
console.log(librarySummary());
