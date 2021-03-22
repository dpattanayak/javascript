/*
    1. Document
            let formData = document.forms;
            console.log(formData)
            Array.from(formData).forEach(element => {
                console.log(element)
            });

            Selectors
                1. Single element selector
                    document.getElementById('heading')
                    document.querySelector('#heading')

                2. Multi element selector
                    document.getElementsByClassName('className')
                    document.getElementsByTagName('div')

            Nodes
                let element = document.querySelector('.className')
                element.childNodes          // includes all comment, new line etc
                element.children            // only elements 
                element.firstChild          // first child
                element.firstElementChild   // first element
                element.lastChild           // last child
                element.lastElementChild    // last element
                element.childElementCount   // count child
                element.parentNode          // parent
                element.parentElement       // parent elememt
                element.nextElementSibling  // next child

            Manipulation
                
                * Making a timer
                
                let divElement = document.createElement('div');
                divElement.id = 'timer';
                
                divElement.setAttribute('style',`
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                `)
                
                let body = document.querySelector('body');
                body.appendChild(divElement);
                body.setAttribute('style',`
                    background-color: #222;
                    color:#adff2f;
                    font-family: monospace;
                    font-size: 2em;
                `)
                
                document.getElementById('timer').innerHTML = currentTime;
                setInterval(function () {
                    document.getElementById('timer').innerHTML = new Date().toLocaleTimeString();
                },1000)

            * https://www.w3schools.com/jsref/dom_obj_all.asp
*/

//! =========================== X ===========================

/*
    2. Local Storage & Session Storage

        localStorage.setItem('Key', 'value');
        localStorage.getItem('Key');
        localStorage.removeItem('Key', 'value');
        
        sessionStorage.setItem('key','value');
        sessionStorage.getItem('key');
        sessionStorage.removeItem('key','value');

        use JSON.stringfy() to store arrays and JSON.parse() to retrive
*/ 

//! =========================== X ===========================

/*
    3. Events

        * https://www.w3schools.com/jsref/dom_obj_event.asp
       
        * Save to localStorage
      
            let triggerClick = document.querySelector('h1').addEventListener('click', function (e) {
                let contentEditable = document.createElement('div');
                contentEditable.setAttribute('contenteditable', true);
                contentEditable.setAttribute('style', `
                    padding: 10px;
                    width: 50%;
                    margin-left: 25%;
                    text-align: left;
                    outline:1px solid cyan;
                    border-radius: 4px;
                `);
                
                let body = document.querySelector('body');
                body.appendChild(contentEditable);
                
                contentEditable.focus();
            
                contentEditable.addEventListener('blur', function (e) {        
                    let todo = contentEditable.innerText;
                    if (todo != '') {               
                        localStorage.setItem('Todo', todo);
                    } else {
                        contentEditable.focus();
                    }
                })
            })


    4. Math Object

        Math.round()
        Math.ceil()
        Math.floor()
        Math.pow()
        Math.sqrt()
        Math.abs()
        Math.random()
        etc ...
        
        https://www.w3schools.com/js/js_math.asp
*/

//! =========================== X ===========================

/*
    5. Date
*/ 
let todayDate = new Date().toLocaleDateString();
let currentTime = new Date().toLocaleTimeString();

let reminderCount;
reminderCount = sessionStorage.getItem('reminderCount');
if (reminderCount == null) {
    reminderCount = 0;
}
document.getElementById('reminderCountElem').innerText = reminderCount;

console.log(`Learning Javascript on %c ${todayDate} `, 'background: #222; color: #0f0; padding: 2px;font-weight:bold');

let reminderElem = document.createElement('div');
reminderElem.className = 'reminderElem';

let body = document.querySelector('body');
body.appendChild(reminderElem);
body.setAttribute('style',`
    background-color: #222;
    color:#adff2f;
    cursor: pointer;
`)

document.getElementById('timerBtn').innerText = currentTime;
setInterval(function () {
    document.getElementById('timerBtn').innerText = new Date().toLocaleTimeString();
}, 1000)

var reminder = setInterval(function () {
    startReminder();
}, 2500)    

function startReminder() {
    if (reminderCount == 0) {        
        document.querySelector('.reminderElem').innerHTML = `Still you didn't drink a glass of water, Hurry up !!`;
    } else if(reminderCount > 8){
        document.querySelector('.reminderElem').innerHTML = `Well done you have archived today's Goal !!`;
    } else {
        document.querySelector('.reminderElem').innerHTML = `You have to drink ${8-reminderCount} glass of water more !!`;
    }

    setTimeout(function () {        
        document.querySelector('.reminderElem').innerHTML = '';
    },1500)
}

function countReminder() {
    reminderCount += 1;    
    sessionStorage.setItem('reminderCount',reminderCount);
    document.getElementById('reminderCountElem').innerText = reminderCount;
}