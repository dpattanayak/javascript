## **PROJECTS**

##### **Project 1** (Todo App)
    => Create, Read, Update and Delete Notes 
    => Search Notes
    => Store Notes in localstorage
    => Bootstrap UI

##### **Project 2** (Library App)
    => Same functionality as Todo App
    => Practice with form data

##### **Project 3** (News App)
    => Live News serving web app
    => Practice Pagination

##### **Project 4** (CV Screener)
    => Verify Candidates
    => Practice Array Iteration (next method)

##### **Project 5** (Post Master)
    => REST Operations
    => Practice API
----

## **Basic Terminologies**

##### **URL** (Uniform Resource Locator)

    Query   -- http://example.com/path?query=something

    Params  -- http://example.com/path/12345678

    Body    -- http://example.com/path/,{object}

---

##### **REST** (REpresentation State Transfer)

    Get     --  http://example.com/users?name=something         (query)

    Post    --  http://example.com/users                        (body)

    Put     --  http://example.com/users/1                      (params)

    Delete  --  http://example.com/users/1                      (params)

---

##### **MVC** (Model View Controller)
 
`The controller handles user requests and delegated information between the Model and the View. It only deals with requests, and never handles data or presentation.`

`The Model handles data validation, logic and persistance. It interacts directly with the database to handle the data. The controller will get all of its data information bt asking the Model about the data.`

`The View handles presenting the information. It will usually renser dynamic html page based on the Model fatches. The Controller is responsible for passing that data between the Model and View, so that the Model and View never have to interact with eact other.`

---

##### **Arrow Function, Promises, Async and Await**

---

`Arrow Functions - Better than normal functions`


```js
function sum(a,b){
    return a + b
}

function isPositive(number){
    return number >= 0
}

function rendomNumber(){
    return Math.random
}

document.addEventListener('click',function(){
    console.log('Click')
})

// Convert to Arrow

let sum = (a,b) => a + b

let isPositive = number => number >= 0

let rendomNumber = () => Math.random

document.addEventListener('click',() => console.log('Click'))

// Taking another example why arrow functions are so greate

class Person{
    constructor(name){
        this.name = name
    }

    printNameArrow(){
        setTimeout(()=>{
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction(){
        setTimeout(function(){
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Munna')
person.printNameArrow()         // output : Munna
person.printNameFunction()      // output : It's blank because 'this' is not accessible in function()
```
---

`Promises - as the word says this is like real world promise.`

---

```js

// Promise One
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a == 2){
        resolve('Promise Success')
    } else {
        reject('Promise Failed')
    }
})

p.then((message)=>{
    console.log('This is in the then' + message)
}).catch((message)=>{
    console.log('This is in the catch' + message)
})

// Promise All and Race
const one = new Promise((resolve,reject)=>{
    resolve('Video 1 recorded')
})

const two = new Promise((resolve,reject)=>{
    resolve('Video 2 recorded')
})

const three = new Promise((resolve,reject)=>{
    resolve('Video 3 recorded')
})

// wait for all 3 promise to finish

Promise.all([one,two,three]).then((messages)=>{
    console.log(messages)
})

// return when the first promise resolves

Promise.race([one,two,three]).then((message)=>{
    console.log(message)
})
```

---

`Async and Await - This make the Promise better when have nested callbacks`

---

```js

function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`Making Request to ${location}`)
        if(location === 'Google'){
            resolve('Google says hi')
        } else {
            reject('we can only talk to Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('Processing response')
        resolve(`Extract Information ==> ${response}`)
    })
}

makeRequest('Google').then(response => {
    console.log('Response Received')
    return processRequest(response)
}).then(processResponse => {
    console.log(processResponse)
}).catch(err => {
    console.log(err)
})

// Output

// Making Request to Google
// Response Received
// Processing response
// Extra Information ==> Google says hi

// Error block

// makeRequest('Facebook')

// Making Request to Facebook
// we can only talk to Google

// Trying async away

async function doWork(){
    try {
        const response = await makeRequest('Google')            // await will wait till the response comes
        console.log('Response Received')
        const processResponse = await processRequest(response)
        console.log(processResponse)
    } catch (err) {
        console.log(err)
    }
    
}

doWork()

// Output

// Making Request to Google
// Response Received
// Processing response
// Extra Information ==> Google says hi

// Error block

// makeRequest('Facebook')

// Making Request to Facebook
// we can only talk to Google

```

---

##### **Project Setup** (Node.js/Express/Mongodb)


```bash

npm init -y
npm i express ejs express-ejs-layouts path
npm i --save-dev nodemon
npm i mongoose
npm i --save-dev dotenv
npm i body-parser
npm i multer (file upload)
```
<br>

- Change main to server.js and added script in package.json

- Created server.js

- Set Views and Layouts

- start mongodb server (sudo systemctl start mongod) (sudo systemctl status mongod)

- for host the app on live I'm using Heroku (sudo snap install --classic heroku)

- heruku login

- heroku git:remote -a mongo-node-web, git push heroku master

- mongo-atlas setup

- app setup done (https://mongo-node-web.herokuapp.com/)

- authors view ( add author, list all author)

- kill port already running (npx kill-port 3000) (check : lsof -i tcp:3000)



[mongo-node-web app](https://mongo-node-web.herokuapp.com/)

---

#### [FilePond](https://github.com/pqina/filepond) (File Upload library)

<br>

- We will remove multer library and use filepond instead because it looks good and stores image as base64 encoded.

- Setup FilePond

- Removed all multer library code


##### **Method Override**

<br>

- npm i method-override

- we will override a post method to put or delete from form data

##### **Applying CSS**

<br>

<!-- Add tab index in content editable div -->

```javascript
document.addEventListener('keyup', function(event) {
    if (event.keyCode == 9) {
        var editor = document.getElementById("jsonEditor1");
        var doc = editor.ownerDocument.defaultView;
        var sel = doc.getSelection();
        var range = sel.getRangeAt(0);

        var tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0");
        range.insertNode(tabNode);

        range.setStartAfter(tabNode);
        range.setEndAfter(tabNode); 
        sel.removeAllRanges();
        sel.addRange(range);
    }
});
```



----