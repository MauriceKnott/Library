const getBookFromInput = () => {
    const title = document.querySelector('.title').value
    const author = document.querySelector('.author').value
    const pages = document.querySelector('.pages').value
    const isRead = document.querySelector('#Read').checked
    return new Book(title, author, pages, isRead)
  }
  
  
  const createBookCard = (book) => {
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const buttonGroup = document.createElement('div')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')
  
    bookCard.classList.add('book-card')
    buttonGroup.classList.add('button-group')
    readBtn.classList.add('btn')
    removeBtn.classList.add('btn')
  
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
  
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    buttonGroup.appendChild(readBtn)
    buttonGroup.appendChild(removeBtn)
    bookCard.appendChild(buttonGroup)
    booksGrid.appendChild(bookCard)
  }
  
  addBtn.addEventListener("click", createBookCard())






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