let myLibrary = [];
const container = document.querySelector("#container");
const title = document.querySelector("#formTitle");
const author = document.querySelector("#formAuthor");
const pages = document.querySelector("#formPages");
const read = document.querySelector("#formRead");
let i = 0;

const book = new Book("dg", "sdf", 16, true);
myLibrary.push(book);
display(book);
//Book Constructor
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return this.read? title + " by " + author + ", " + pages + " pages, read" : title + " by " + author + ", " + pages + " pages, not read yet";
    /*
    if (this.read) {
        return title + " by " + author + ", " + pages + " pages, read";
    } else {
        return title + " by " + author + ", " + pages + " pages, not read yet";
    }
    */
}

//
function addBookToLibrary() {
    const book = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(book);
}

function display(Book) {
    const table = document.createElement("table");
    const removeBook = document.createElement("button");
    removeBook.textContent = "Remove Book";
    removeBook.classList.add("removeBook");
    table.classList.add('table');
    table.setAttribute("index", myLibrary.indexOf(Book));

    const tr1 = document.createElement("tr");
    const tr2 = document.createElement("tr");

    for (let i = 0; i < 4; i++) {
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        switch (i) {
            case 0:
                td1.textContent = "Title";
                tr1.appendChild(td1);
                td2.textContent = Book.title;
                tr2.appendChild(td2);
                break;
            case 1:
                td1.textContent = "Author";
                tr1.appendChild(td1);
                td2.textContent = Book.author;
                tr2.appendChild(td2);
                break;
            case 2:
                td1.textContent = "Pages";
                tr1.appendChild(td1);
                td2.textContent = Book.pages;
                tr2.appendChild(td2);
                break;
            case 3:
                td1.textContent = "Read?";
                tr1.appendChild(td1);
                td2.textContent = Book.read? "yes": "no";
                tr2.appendChild(td2);
                break;
            }
    }
    removeBook.addEventListener("click", () => {
        const parentTable = event.target.parentNode;
        delete myLibrary[parentTable.getAttribute("index")];
        showBooks();
    })
    table.appendChild(removeBook);
    table.appendChild(tr1);
    table.appendChild(tr2);
    container.appendChild(table);
}

function showBooks() {
    container.textContent = "";
    myLibrary.forEach(display);
}

function clearForm() {
    title.value = "";
    pages.value = "";
    author.value = "";
    read.checked = false;

}
/* Event Listeners */

/* Add a book button*/
const addBook = document.querySelector(".addBook");
const form = document.querySelector(".form");
addBook.addEventListener("click", () => {
    form.style.display = "block";
})

/*Add Book button*/
const add = document.querySelector(".add");
add.addEventListener("click", () => {
    addBookToLibrary();
    form.style.display = "none";
    clearForm();
    showBooks();
});

const close = document.querySelector(".close");
close.addEventListener("click", ()  => {
    form.style.display = "none";
    clearForm();
});

