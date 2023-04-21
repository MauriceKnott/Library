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