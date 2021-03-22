console.log('project todo init')
showNotes();

// If a user adds a note, add it to the localstorage

let addBtn = document.getElementById('addBtn').addEventListener('click', function (e) {
    let txtTitle = document.getElementById('txtTitle');
    let txtDescription = document.getElementById('txtDescription');
    let notes = localStorage.getItem('notes');
    let notesObj = [];
    if (notes != null) {
        notesObj = JSON.parse(notes);
    }
    notesObj.push({ title: txtTitle.value, description: txtDescription.value });
    localStorage.setItem('notes', JSON.stringify(notesObj));
    txtTitle.value = "";
    txtDescription.value = "";
    showNotes();
})

// Retrive all notes from localstorage and bind to the notes div 

function showNotes() {
    let notes = JSON.parse(localStorage.getItem("notes"));        // newest first
    let notesObj = [];
    if (notes != null) {
        notesObj = notes;
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard card mx-2 my-2 p-0" style="min-width: 23%;max-width: 48%;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                    <button class="btn btn-sm btn-danger" id="${index}" onclick="deleteNote(this.id)">Delete</button>
                </div>
            </div>
        `
    });
    let notesElement = document.getElementById('notes');
    if (typeof notes != null && notes) {
        if (notes.length > 0) {            
            document.getElementById('noteHeading').className = 'd-block';
        }  else {
            let noteHeading = document.getElementById('noteHeading');
            noteHeading.classList.remove('d-block');
            noteHeading.className = 'd-none';
        } 
        notesElement.innerHTML = html;
    }
}


// Delete a note

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    let notesObj = [];
    if (notes != null) {
        notesObj = JSON.parse(notes);
        notesObj.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        showNotes();
    } else {
        document.getElementById('noteHeading').className = 'd-none';
    }
}

// Delete All

function deleteAll() {
    let notes = localStorage.getItem("notes");
    if (notes != null) {
        localStorage.removeItem('notes');
        showNotes();
    }
}

// Search notes if the search input text exists in the note then show otherwise hide

let search = document.getElementById('search');
    search.addEventListener('input', function () {
        let inputVal = search.value;
        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function (element) {
            let cardTitle = element.getElementsByTagName('h5')[0].innerText;
            let cardDesc = element.getElementsByTagName('p')[0].innerText;

            if (cardTitle.includes(inputVal) || cardDesc.includes(inputVal)) {
                element.style.display = 'block'
            } else {
                element.style.display = 'none'
            }
        })
})
