//  manual adding book to library
let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function render() {
  let libraryEl = document.getElementById("lib");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `
    
        <div class="card-header">
    <h3 class="title">Title : ${book.title}</h3>
     <h5 class="author">Written by : ${book.author}</h5>
       </div>
        <div class="card-body">
         <p class="book-pages">No of Pages :  ${book.pages} pages</p>
          <p class="read-status">Read Status : ${
            book.read ? "Read" : "Not Read Yet"
          }</p>
         <button  class="remove-btn btn" onclick="removeBook(${i})">Remove</button>
         <button class="toggle-read-btn btn" onclick="toggleRead(${i})">Read</button>
         </div>
 
`;
    libraryEl.appendChild(bookEl);
  }
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

let newBokbtn = document.querySelector("#new-book-btn");
newBokbtn.addEventListener("click", function () {
  let newBookForm = document.getElementById("new-book-form");
  newBookForm.style.display = "block";
});

document.getElementById("add-book").addEventListener("click", function (e) {
  e.preventDefault();
  addBookToLibrary();
  hrDisplayOn.style.display = "block";
});

const hrDisplayOn = document.getElementById("display-off");

// api adding book to library

// function getBooks() {
//   document.getElementById("output").innerHTML = "";
//   fetch(
//     "https://openlibrary.org/search.json?q=" +
//       document.getElementById("input").value
//   )
//     .then((a) => a.json())
//     .then((response) => {
//       for (let i = 0; i < 10; i++) {
//         document.getElementById("output").innerHTML +=
//           "<h2>" +
//           response.docs[i].title +
//           "</h2>" +
//           response.docs[i].author_name[0] +
//           "<br>";
//       }
//     });
// }
// console.log(getBooks());
