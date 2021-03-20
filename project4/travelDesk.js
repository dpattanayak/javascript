let carsObject = [
    "ford torino",
    "ford galaxie 500",
    "ford torino (sw)",
    "ford maverick",
    "ford f250",
    "audi 100 ls",
    "toyota corona mark ii",
    "datsun pl510"
];

let validationCustom04 = document.getElementById('validationCustom04');
let selected = `<option selected disabled value="">Choose Car</option>`
let options = '';
carsObject.forEach(Element => {
    options += `<option>${Element}</option>`        
})
validationCustom04.innerHTML = selected + options;

// Validation is in-build in bootstrap
// Let's validate some strings of our own
/*
1. Validate Name
2. Validate Email
3. Validate Phone Number
*/

let nameRegEx = /^[a-zA-Z]([a-zA-Z0-9]){4,9}$/
// name should start with alphabet either caps or small , 
// contains alphanumeric length should be 5 to 10 chars (1+4 to 1+9)

let testName = 'Debidatta'
// let result = nameRegEx.test(testName);
// console.log('result: ', result);

let emailRegEx = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9\._-]+)\.([a-zA-z]){2,7}$/
// 3 groups
// 1. may start with alphanumeric with -_.
// 2. @ symbol btwn 1 and 2 group
// 3. last group should not contain number or special chars limit 2 to 7 chars

let testEmail = 'm__ew@jj--aa.ff.com'
// let result = emailRegEx.exec(testEmail);

let phoneRegEx = /^(\+91)[0-9]{10}$/
// should start with +91 and limit to 10 digits

let testNumber = '+919840691463'
// let result = phoneRegEx.exec(testNumber);
// console.log('result: ', result);