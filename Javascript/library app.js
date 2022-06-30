class library {
  constructor(booklist) {
    this.booklist = booklist;
    this.issuedBooks = {};
  }
  getBooklist() {
    console.log(booklist);
  }
  issueBook(bookName, userName ) {
    if (booklist.includes(bookName)) {
      if (this.issuedBooks[bookName] === undefined) {
        this.issuedBooks[bookName] = userName;
        console.log(`${bookName} issued for ${userName}`);
      }
      else {
        console.log(`${bookName} is already issued for ${this.issuedBooks[bookName]}`);
      }
    }
    else{
      console.log("This book is not in our library");
    }
  }
   
  returnBook(bookName, userName) {
    if (this.issuedBooks[bookName] === userName) {
      delete this.issuedBooks[bookName];
      console.log("Book returned by " + userName);
    }
    else {
      if (this.booklist.includes(bookName) === false) {
        console.log("This book is not our book");
      }
      else if (this.issuedBooks[bookName] !== userName) {
        console.log("This book is not issued by you.")
      }
    }
  }
  addBook(bookName) {
    if (this.booklist.includes(bookName)) {
      console.log('We already have that book');
    }
    else {
      this.booklist.push(bookName);
      console.log('book Added to our library');
    }
  }
}