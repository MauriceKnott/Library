let myLibrary = [];

const form = document.querySelector('.form');
const list = document.querySelector('list');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  Book.prototype.toggleRead = function() {
    this.read = !this.read;
  }

  function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
  }

function render() {
  let libraryEl = document.querySelector(".list");
  libraryEl.innerHTML = "";
  
  for (let i = 0; i < myLibrary.length; i++) {
let book = myLibrary[i];
let bookEl = document.createElement("div");
bookEl.setAttribute("class","book-card");
bookEl.innerHTML = `
<div class="card-header">
<div class="card-grid">
<h3 class="title">${book.title} </h3>
<h4 class="author">Written by: ${book.author}</h4>
</div>
<div class="card-body">
<p>${book.pages} pages </p>
<p class="read-status">${book.read ? "Read" : "Not Read Yet"} </p>
<button class="remove-btn" onclick="removeBook(${i})">Remove</button>
<button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
</div>
</div>
`


libraryEl.appendChild(bookEl);
  }
}   



function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}
  
  function addBookToLibrary(title, author, pages, status) {
 title = document.querySelector("#title").value;
 author = document.getElementById("author").value;
 pages = document.getElementById("pages").value;
 status = document.getElementById("read").value;
 newBook = new Book(title, author, pages, read);
myLibrary.push(newBook)
render()
  }
  
  
let newBookBtn =  document.querySelector(".bookBtn");
newBookBtn.addEventListener("click", function () {
  let newBookForm = document.querySelector(".form");
  let bookList = document.querySelector(".list")
  let bookCard = document.querySelectorAll(".book-card");
  newBookForm.style.display = "grid";
  newBookBtn.style.display = "none";
  bookList.style.display = "none";
  bookCard.style.display = "none";
});

let addBook = document.querySelector('#addBook');
addBook.addEventListener("click", function() {
 let bookBtnShow = document.querySelector(".bookBtn");
 let newBookForm = document.querySelector(".form");
 let bookList = document.querySelector(".list")
  bookBtnShow.style.display = "flex";
  newBookForm.style.display = "none";
  bookList.style.display = "grid";

});


form.addEventListener("submit", function (e) {
  e.preventDefault();
addBookToLibrary()
 });

 let toggleBtn = document.querySelector('.toggle-read-btn');

toggleBtn.addEventListener("click", function() {
  let colorBtn = document.querySelector('read-status')
  if (Book.read) {
    toggleBtn.innerHTML = 'Read'
    toggleBtn.classList.add('btn-light-green')
  } else {
    toggleBtn.innerHTML = 'Not read'
    toggleBtn.classList.add('btn-light-red')
  }
})
