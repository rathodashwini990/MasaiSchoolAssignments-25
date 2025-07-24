const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  // 1. Add a book
  addBook(book) {
    if (!book.title || !book.author || !book.year) {
      console.log("Book information is incomplete.");
      return;
    }
    this.books.push(book);
    console.log(`Book "${book.title}" added successfully.`);
  },

  // 2. Find book by title
  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  // 3. Remove book by title
  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`Book "${title}" removed successfully.`);
    } else {
      console.log("Book not found.");
    }
  }
};

// Incorrect: Missing property name and incorrect object syntax
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

// Display total books after addition
console.log("Total Books:", library.books.length);

// Optional: Check if book was added
console.log("Books:", library.books);
