class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}


class Display {
    constructor() {}
    // Add methods to display prototype
    add(book, index, uiString) {
        let tableBody = document.getElementById('tableBody');
        uiString += `
            <tr class="bookRow">                        
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
                <td><button class="btn btn-sm btn-danger" id="${index}" onclick="deleteBook(this.id)">Delete</button></td>
            </tr>
        `;
        tableBody.innerHTML = uiString;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        } else {
            return true;
        }
    }
    show(type, displayMessage) {
        let message;
        let messageElem = document.getElementById('alertMessage');
        message = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Message :</strong> ${displayMessage}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`;
        messageElem.innerHTML = message;
        setTimeout(function () {
            messageElem.innerHTML = '';
        }, 2000);
    }
}

// get all books from localdtorage and show on page load

let library = localStorage.getItem('Library');

if (library !== null && library !== "[]") {
    getNsetBooks();
    document.getElementById('table').style.display = 'block';
} else {
    document.getElementById('table').style.display = 'none';
}

function getNsetBooks() {
    let tableBody = document.getElementById('tableBody');
    library = JSON.parse(localStorage.getItem('Library'));
    library.forEach(function(element, index){
        let book = new Display();
        book.add(element, index, tableBody.innerHTML);
    });
}

function deleteBook(index) {
    library.splice(index, 1);
    localStorage.setItem('Library', JSON.stringify(library));
    document.getElementById('tableBody').innerHTML = '';
    if (!library.length) document.getElementById('table').style.display = 'none';
    getNsetBooks();
}

function deleteAll() {
    let library = JSON.parse(localStorage.getItem('Library'));
    if (library != null) {
        localStorage.removeItem('Library');
        document.getElementById('tableBody').innerHTML = '';
        document.getElementById('table').style.display = 'none';
        getNsetBooks();
    }
}

// Search books if the search input text exists in the book then show otherwise hide

let search = document.getElementById('search');
    search.addEventListener('input', function () {
        let inputVal = search.value;
        let bookRow = document.getElementsByClassName('bookRow');
        Array.from(bookRow).forEach(function (element) {
            let content = element.getElementsByTagName('td')[0].innerText;

            if (content.includes(inputVal)) {
                element.style.display = ''
            } else {
                element.style.display = 'none'
            }
        })
})

// Add form submit listener
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('bookAuthor').value;
    let computerProgramming = document.getElementById('computerProgramming');
    let autoBiography = document.getElementById('autoBiography');
    let selfHelp = document.getElementById('selfHelp');
    let type;

    if (computerProgramming.checked) {
        type = computerProgramming.value;
    } else if (autoBiography.checked) {
        type = autoBiography.value;
    } else {
        type = selfHelp.value;
    }

    let book = new Book(name, author, type);
    console.log('book: ', book);
    
    
    let display = new Display();
    if (display.validate(book)) {
        display.clear();
        
        if (library == null) library = []
        library.push(book);
        localStorage.setItem('Library', JSON.stringify(library));
        document.getElementById('table').style.display = 'block';
        document.getElementById('tableBody').innerHTML = '';
        getNsetBooks();
    } else {
        display.show('danger', 'Field length should be greater than 2');
    }
}