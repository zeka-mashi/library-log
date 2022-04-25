let myLibrary = [];
myLibrary.push(new Book("Book Uno", "Author's Name", 256, true))
myLibrary.push(new Book("Next Book", "John Doe", 512, true))
myLibrary.push(new Book("The Last Read", "Test Tester", 1024, false))

let iconBookUpdate = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M13 17.5C13 19.25 13.69 20.83 14.82 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V11.03C19.84 11 19.67 11 19.5 11C15.91 11 13 13.91 13 17.5M19 20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20M19 13.5V12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5Z" /></svg>';
let iconBookRemove = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19C13 20.1 13.3 21.12 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19M22.54 16.88L21.12 15.47L19 17.59L16.88 15.47L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88Z" /></svg>';

function updateDisplay() {
    var booksInDisplay = document.getElementsByClassName("book-item");
    var arr = [];
    for (let i = 0; i < booksInDisplay.length; i++) {
        arr.push(booksInDisplay[i].dataset.title);
    }
    for (let i = 0; i < myLibrary.length; i++) {
        if (!(arr.includes(myLibrary[i].title))) {
            //add book
            var newBookItem = document.createElement("div")
            newBookItem.classList.add("book-item")
            newBookItem.setAttribute("data-title", myLibrary[i].title)
            var pBookName = document.createElement("p")
            pBookName.textContent = myLibrary[i].title
            newBookItem.appendChild(pBookName)
            var pAuthor = document.createElement("p")
            pAuthor.textContent = myLibrary[i].author
            newBookItem.appendChild(pAuthor)
            var pPages = document.createElement("p")
            pPages.textContent = myLibrary[i].pages
            newBookItem.appendChild(pPages)
            var pStatus = document.createElement("p")
            pStatus.textContent = "Not Read"
            if (myLibrary[i].read) {
                pStatus.textContent = "Read"
            }
            newBookItem.appendChild(pStatus)

            var bookBtnWrapper = document.createElement("div")
            bookBtnWrapper.classList.add("book-btn-wrapper")
            var btnStatus = document.createElement("div")
            btnStatus.innerHTML = iconBookUpdate;
            btnStatus.classList.add("book-btn")
            btnStatus.setAttribute("title", "Update book status")
            btnStatus.addEventListener("click", function() {
                changeStatus(this)
            })
            bookBtnWrapper.append(btnStatus)
            var btnRemove = document.createElement("div")
            btnRemove.innerHTML = iconBookRemove;
            btnRemove.classList.add("book-btn")
            btnRemove.setAttribute("title", "Remove book")
            btnRemove.addEventListener("click", function() {
                removeBook(this)
            })
            bookBtnWrapper.append(btnRemove)

            newBookItem.append(bookBtnWrapper)
            document.getElementsByClassName("book-container")[0].appendChild(newBookItem)
        }
    }
}

updateDisplay()

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // do stuff here
}

function changeStatus(e) {
    var elm = e.parentElement.parentElement
    myLibrary = myLibrary.filter(function(book) {
        if (book.title === elm.dataset.title) {
            book.read = !(book.read)
            var newStatus = "Not Read"
            if (book.read) {
                newStatus = "Read"
            }
            elm.children[3].textContent = newStatus
        }
        return true
    })
}

function removeBook(e) {
    var elm = e.parentElement.parentElement;
    idx = [...elm.parentElement.children].indexOf(elm)
    if (idx > -1) {
        myLibrary.splice(idx, 1);
        elm.remove();
    }
}