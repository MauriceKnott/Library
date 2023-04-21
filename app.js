let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  
  
  function addBookToLibrary(title, author, pages, status) {
    const book = new book(title, author, pages, status);
    myLibrary.push(book);
  }
  

  const btn = document.querySelector('.bookBtn');
  const nav = document.querySelector('nav');
  const addBtn = document.querySelector('.addBtn');
  const list = document.querySelector('.list');
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  const pages = document.querySelector('.pages')
  const read = document.querySelector('#page');
  const form = document.querySelector('.form');

btn.addEventListener('click', () => {
  const form = document.querySelector('.form');

  if (form.style.display === 'none') {

    form.style.display = 'grid';
    btn.style.display = 'none';
   
    nav.style.filter = 'blur(3px)';
  } else {
    form.style.display = 'none';

  }
});

addBtn.addEventListener('click', () => {
  
});
document.querySelector("body > div.container > form > button")

form.addEventListener("submit", function (e) {
  e.preventDefault();
   const bookCard = document.createElement('div')
   const newlabel = document.createElement("Label");
   const buttonGroup = document.createElement('div')
   const title = document.createElement('p')
   const author = document.createElement('p')
   const pages = document.createElement('p')
  const readBtn = document.createElement('button')
  const removeBtn = document.createElement('button')
  title.textContent = `"${book.title}"`
  author.textContent = book.author
  pages.textContent = `${book.pages} pages`
  removeBtn.textContent = 'Remove'
  if (book.isRead) {
    readBtn.textContent = 'Read'
    readBtn.classList.add('btn-light-green')
  } else {
    readBtn.textContent = 'Not read'
    readBtn.classList.add('btn-light-red')
  }

  list.appendChild(title)
  list.appendChild(author)
  list.appendChild(pages)
  list.appendChild(readBtn)
  list.appendChild(removeBtn)
  list.appendChild(buttonGroup)
  list.appendChild(bookCard)

});




console.log(myLibrary)