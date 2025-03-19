// class for Books
class Books {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
}
class LibraryMember {
  constructor(name, memberID, borrowedBooks = []) {
    this.name = name;
    this.memberID = memberID;
    this.borrowedBooks = borrowedBooks;
  }
  borrowBook(book) {
    //Adds a book to borrowedBooks.
    this.borrowedBooks.push(book);
  }
  returnBook(book) {
    // Removes a book from borrowedBooks.
    const existBook = this.borrowedBooks.filter((b) => b === book);
    //const existBook = this.borrowedBooks.includes(book);
    console.log(existBook);
    if (existBook) {
      this.borrowedBooks.splice(this.borrowedBooks.indexOf(book), 1);
    }
  }
  //Getter method borrowedBooksList to display borrowed books
  get borrowedBooksList() {
    return this.borrowedBooks;
  }
}
//Library has a name and an array of books.
class library {
  constructor(name, books = []) {
    //constructor(name))
    this.name = name;
    //this.books = [];
    this.books = books;
  }
  //oubien
  /*
  constructor(name) {
    this.name = name;
    this.books = [];

  }
*/
  //addBook(book): Adds a book to the library.
  addBook(book) {
    this.books.push(book);
  }
  //removeBook(book): Removes a book by ISBN.
  removeBook(ISBN) {
    const existISBN = this.books.filter((book) => book.ISBN === ISBN); //filter book bech yraj3 eli l9ah book.isbn===isbn
    console.log(existISBN);
    if (existISBN) {
      this.books.splice(this.books.ISBN, 1);
    }
    //ou bien this.books = this.books.filter((book) => book.ISBN !== ISBN);
  }
  //listBooks(): Displays all books.
  listBooks() {
    return this.books;
  }
}
//Librarian is a special type of LibraryMember.

class Librarian extends LibraryMember {
  constructor(name, memberID, borrowedBooks = []) {
    super(name, memberID, borrowedBooks);
  }
  /////////////////////static method/////////////
  //addBookToLibrary(library, book) → Adds a book to a library.
  static addBookToLibrary(library, book) {
    // static method: can be called without creating an instance of the class and can't access instance properties.
    library.addBook(book);
  }
  //removeBookFromLibrary(library, bookISBN) → Removes a book by ISBN.
  static removeBookFromLibrary(library, bookISBN) {
    const existISBNrmv = library.books.filter((book) => book.ISBN === bookISBN);
    console.log(existISBNrmv);
    if (existISBNrmv) {
      library.books.splice(library.books.ISBN, 1);
      //library.books.indexOf(library.books.ISBN), 1);
    }
    //ou bien library.books = library.books.filter((book) => book.ISBN !== bookISBN);
    //oubien library.removeBook(bookISBN);
  }
  //checkBookAvailability(library, bookTitle) → Checks if a book exists in the library.
  static checkBookAvailability(library, bookTitle) {
    const existbookav = library.books.find((book) => book.title === bookTitle);
    console.log(existbookav);
    if (existbookav) {
      return "Book available";
    } else {
      return "Book not available";
    }
  }
  //ou bien
  /*
  static checkBookAvailability(library, bookTitle) {
    const existbookav = library.books.filter((book) => book.title === bookTitle);
    return !!(existbookav)
  }
    //ou bien 
    static checkBookAvailability(library, bookTitle) {
    const existbookav = library.books.filter((book) => book.title === bookTitle);
    return existbookav.length > 0 ? "Book available" : "Book not available";
}
    // filter return array
    // find return element
  */
}

//console.log(new Books());

//create 3 books
const book1 = new Books("1984", "George Orwell", 123456);
const book2 = new Books("Animal Farm", "George Orwell", 654321);
const book3 = new Books("The Great Gatsby", "F. Scott Fitzgerald", 987654);
//const book4 = new Books("To Kill a Mockingbird", "Harper Lee", 456789);
//const book5 = new Books("A Brief History of Time", "Stephen Hawking", 789456);

//create 2 members
const member1 = new LibraryMember("Alice", 1);
const member2 = new LibraryMember("Bob", 2);
//test the methods
//member1.borrowBook(book1);
//Have members borrow and return books.
member2.borrowBook(book2);
member2.borrowBook(book3);
console.log(member1.borrowedBooksList);
console.log(member2.borrowedBooksList);
console.log(member2.returnBook(book2));
console.log(member2.borrowedBooksList);
//create a library
const lib1 = new library("lib1");
//add books to the library
lib1.addBook(book2);
lib1.addBook(book1);
console.log(lib1.listBooks());
lib1.removeBook(654321);
console.log(lib1.listBooks());

const librarian1 = new Librarian("John", 3);
//add book to library
Librarian.addBookToLibrary(lib1, book3);
console.log(lib1.listBooks());
console.log(Librarian.checkBookAvailability(lib1, "1984")); //static method
console.log(Librarian.checkBookAvailability(lib1, "hhh"));
//remove bookISBN from library
console.log(Librarian.removeBookFromLibrary(lib1, 123456));
console.log(lib1.listBooks());
