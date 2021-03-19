//* Class is a template for creating object

class Employee {
    constructor(name, experience, role) {
        this.name = name;
        this.experience = experience;
        this.role = role;
    }

    // method

    description() {
        return `${this.name} is a ${this.experience} years experienced ${this.role}`
    }

    // static method can use directly without creating object

    static add(a, b) {
        return a + b;
    }
}

// let newEmp = new Employee('Debidatta', 2, 'Software Developer');
// console.log('newEmp: ', newEmp.description());
// console.log(Employee.add(2,8))

// Inheritance

class Programmer extends Employee {
    constructor(name, experience, role, skill) {
        super(name, experience, role);
        this.skill = skill;
    }
}

let newProgrammer = new Programmer('Debidatta', 3, 'Software developer', 'MEAN Stack');
// console.log('newProgrammer: ', newProgrammer.description());


/*
    * AJAX - Asynchronous JavaScript And XML.  

    //* GET Method
    
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);      // method, url, request type async(true) / sync(false)
    xhr.onprogress = function (event) {
        console.log(`Downloaded ${event.loaded} of ${event.total} bytes`);
    }
    xhr.onload = function () {
        if (this.status === 200) {
            console.log('Response :', this.responseText)
        } else {
            console.log('Error')
        }
    }
    xhr.send();
    
    
    //* POST Method
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhr.onload = function () {
        if (this.status === 201) {
            console.log('Response :', this.responseText)
        } else {
            console.log('Error')
        }
    }
    xhr.send(JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }));
*/


/*
    * Callback - passing a function as argument to call after a task done
    
    function addNewStudent(studentData, callback) {    
        setTimeout(function () {
            students.push(studentData)
            callback();
        }, 5000)
        //* setTimeout is async in nature, it will execute the block out of the flow after given time
    }
    
    function getStudents() {
        console.log('getStudents :',students)
    }
    
    let students = [
        { name : 'Rohit', age: 22 },
        { name : 'Rakesh',age: 25 }
    ]
    
    let newStudent = {
        name: 'Munna',
        age: 25
    }
    
    addNewStudent(newStudent, getStudents);
    // getStudents();
    // passing the function as parameter
*/




/*
    * Promises - for solve the problem of nested callback 

    function addNewStudent(studentData) {
        console.log('Init Promise')
        return new Promise(function (resolve, reject) {
            setTimeout(function (err) {
                students.push(studentData)
                if (!err) {
                    resolve(students);
                } else {
                    reject(err);
                }
            }, 2000)
        })
    }
    
    let students = [
        {
            name: 'Rohit',
            age: 22
        },
        {
            name: 'Rakesh',
            age: 25
        }
    ]
    
    let newStudent = {
        name: 'Munna',
        age: 25
    }
    
    addNewStudent(newStudent).then(function (response) {    
        console.log('Resolved :', response)
    }).catch(function (error) {
        console.log('Rejected :',error)
    })
*/

/*
    * Arrow Functions
    
    //* Regular Functions
    
    function welcome(name) {
        console.log("Welcome to javascript ", name)
    }
    welcome('munna');
    
    //* Arrow Functions
    ((name) => {
        console.log('Welcome to javascript ',name)
    })('munna')

    //* single line
    (() => console.log("hello munna"))() 
    //* () is function calling and wrapped inside () is declaration
*/


/*
    * Fetch API

    //* GET 
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => console.log(json))
    
    //* POST
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
*/

/*
    * Async and Await

    //* with function name declaration
    
    fetchdata = async (url) => {
        let response = await fetch(url);
        let json = await response.json();
        return json;
    }
    
    //* calling function
    fetchdata('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => console.log(res))

    //* without function name
    
    (async (url) => {
        let response = await fetch(url);
        let json = await response.json();
        return json;
    })
    ('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => console.log(res))

    async converts the function to asynchronous, 
    where await keyword used that call in the background and return a promise
*/

/*
    * try catch - used for error handling

    const value = 7.5;
    
    update = (newData) => {
        value = newData;
    }
    
    try {
        update(10);
    } catch (error) {
        console.log(error.name,': ',error.message)
    } finally {
        console.log('Running update() finished')
    }
*/
