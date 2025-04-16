class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
}

class LibraryMember {
  constructor(name, memberId) {
    this.name = name;
    this.memberId = memberId;
    this.BorrowedBooks = [];
  }
  BorrowBook(book) {
    this.BorrowedBooks.push(book);
  }
  returnBook(book) {
    this.BorrowedBooks = this.BorrowedBooks.filter((b) => b != book);
  }
  get BorrowedBooksList() {
    this.BorrowedBooks.forEach((b) => console.log(b));
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(bookISBN) {
    this.books = this.books.filter((b) => b.ISBN != bookISBN);
  }

  get listBooks() {
    return this.books;
  }
}
class Librarian extends LibraryMember {
  static addBookToLibrary(Library, book) {
    Library.addBook(book);
  }
  static removeBookFromLibrary(Library, bookISBN) {
    Library.removeBook(bookISBN);
  }

  static checksBookAvailability(Library, bookTitle) {
    const books = Library.listBooks;
    return books.some((book) => book.title === bookTitle)
      ? "Available"
      : "Not available";
  }
}

// ✅ Test Case
const myLibrary = new Library("City Library");
myLibrary;

const librarianGuy = new Librarian("Ali", 500);
librarianGuy;

const book1 = new Book("The Alchemist", "Paulo Coelho", "978-0061122415");
const book2 = new Book("Clean Code", "Robert C. Martin", "978-0132350884");
book1;
book2;

// Librarian managing books
Librarian.addBookToLibrary(myLibrary, book1);
Librarian.addBookToLibrary(myLibrary, book2);
console.log(myLibrary.listBooks);

console.log(Librarian.checksBookAvailability(myLibrary, "The Alchemist"));
console.log(Librarian.checksBookAvailability(myLibrary, "Harry Potter"));

Librarian.removeBookFromLibrary(myLibrary, "978-0061122415");
console.log(myLibrary.listBooks);
