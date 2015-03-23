// creat library constructor function
var Library = function (branch) {
  // add branch key
  this.branch = branch;
  // add empty array for bookshelves
  this.bookshelves = [];
  // add function to add bookshelf
  this.addShelf = function (newShelf) {
    // add new bookshelf to end of bookshelves array
    this.bookshelves.push(newShelf);
  };
  // add function to remove shelf
  this.removeShelf = function (shelfToRemove) {
    // loop through array of bookshelves
    for (var i = 0; i < this.bookshelves.length; i++) {
      // if the bookshelf in the array matches the shelf to remove, use splice() to remove it from the array
      if (this.bookshelves[i] === shelfToRemove) {
        this.bookshelves.splice(i, 1);
      }
    }
  };
  // function to list shelves
  this.listShelves = function () {
    var shelfList = "";
    for (var i = 0; i < this.bookshelves.length; i++) {
      var thisShelf = this.bookshelves[i].shelfName;
      shelfList += thisShelf + "\n";
    }
    console.log(this.branch + " branch shelves : \n" + shelfList);
  };
};

// create bookshelf constructor function
var Bookshelf = function (shelfName) {
  // add shelfName key
  this.shelfName = shelfName;
  // create empty array for books
  this.books = [];
  // add function to add book to books array
  this.addBook = function (bookToAd) {
    // push tempObject to books array
    this.books.push(bookToAd);
  };
  // add function to remove book
  this.removeBook = function (title, author) {
    // loop through books array
    for (var i = 0; i < this.books.length; i++) {
      // create tempBook object
      var tempBook = {title: title, author: author};
      // if the tempBook's title matches the title of the book in the array, splice it from the array
      if (this.books[i].title === tempBook.title) {
        this.books.splice(i, 1);
      }
    }
  };
   // function to list shelves
  this.listBooks = function () {
    var bookList = "";
    for (var i = 0; i < this.books.length; i++) {
      var thisBookTitle = this.books[i].title;
      var thisBookAuthor = this.books[i].author;
      bookList += thisBookTitle + " by " + thisBookAuthor + "\n";
    }
    console.log(this.shelfName + " has these books : \n" + bookList);
  };
};
var Book = function (title, author) {
  this.title = title;
  this.author = author;
}
// create instance of Library class
var ballardLibrary = new Library("Ballard Branch");
// create instances of the Bookshelf object
var nineteenthCenturyBritishLit = new Bookshelf("Nineteenth Century British Lit");
var scienceFiction = new Bookshelf("Science Fiction");
// create books
var oryxAndCrake = new Book("Oryx and Crake", "Margaret Atwood");
var dorianGrey = new Book("The Picture of Dorian Grey", "Oscar Wilde");
var oliverTwist = new Book("Oliver Twist", "Charles Dickens");
var thePortraitOfALady = new Book("The Portrait of a Lady", "Henry James");
var ubik = new Book("Ubik", "Philip K. Dick");
var slaughterhouseFive = new Book("Slaughterhouse-Five", "Kurt Vonnegut");

// add books to shelves
scienceFiction.addBook(oryxAndCrake);
scienceFiction.addBook(ubik);
scienceFiction.addBook(slaughterhouseFive);
nineteenthCenturyBritishLit.addBook(dorianGrey);
nineteenthCenturyBritishLit.addBook(oliverTwist);
nineteenthCenturyBritishLit.addBook(thePortraitOfALady);
// add shelves to ballardLibrary
ballardLibrary.addShelf(nineteenthCenturyBritishLit);
ballardLibrary.addShelf(scienceFiction);
//remove Henry James because no one should have to read those books...
nineteenthCenturyBritishLit.removeBook(thePortraitOfALady);
// list shelves in library
ballardLibrary.listShelves();
nineteenthCenturyBritishLit.listBooks();
scienceFiction.listBooks();
