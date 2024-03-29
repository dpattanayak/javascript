// Regular Expression

/*
    //* g - global flag, to read the whole string
    //* i - insensitive flag, to read case insensitive    
    
    //* functions match expressions
    1. exec      -   this method will return an array for match or null for no match
    2. test      -   this method will return true or false
    3. match     -   It will return an array of result or null
    4. search    -   Returns index of first match else -1
    5. replace   -   Returns new string with first match if global flag enable replace all
    
    let regEx = /ip/gi
    let string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, quo.'
    
    result = regEx.exec(string);
    result = regEx.test(string);
    result = regEx.match(string);    //! wrong method
    result = string.match(regEx);    //* right method
    result = string.search(regEx);
    result = string.replace(regEx, 'yipee'); // find ip and replace yipee    
*/

//? Meta char symblos

//* 1. ^ - starts with       --> /^lo/i          >> lorem
//* 2. $ - ends with         --> /it$/i          >> elit
//* 3. . - one char btwn     --> /l.em/i         >> lorem 
//* 4. * - any char btwn     --> /l*rem/i        >> loenndhdrem 
//* 5. ? - optional          --> /loa?rei?m/i    >> Lorem (a and i optional)
//* 6. \ - escape            --> /lorem\*/i      >> Lorem*

//? Character Sets

//* 1. [a-z]     - anything btwn a to z     -->     /L[a-z]rem/i        >> Lorem
//* 2. [^a-z]    - nothing btwn a to z      -->     /L[^a-z]rem/i       >> L9rem
//* 3. [0-9]     - any number btwn 0 to 9   -->     /l[0-9]rem/         >> l9rem
//* 4. [^0-9]    - nothing btwn 0 to 9
//* 5. [^A-Z]    - nothing btwn cap a to z  -->     /l[^a-zA-Z0-9]rem/i >> L@rem

//? Quantifiers

//* {number} - number of characters allowed   
//*              --> /lo{2}rem/i     >> Loorem - allow exact 2 char
//*              --> /lo{0,2}rem/i   >> lorem  - allow btwn 0 to 2 char

//? Grouping

//* (chars) - group of chars allowed number of times     
//*         - /lo(rem){2}/i  >> Loremrem


//? Character Classes

//* 1. \w   - word character        --> /\wem/gi        >> lorem     (_ or alphanumeric character)
//* 2. \w+  - more than 1 word      --> /\w+em/gi       >> 'Low 2rem'           >>  '2rem'
//* 3. \W   - none word character   --> /\W2rem/gi      >> space before 2rem    >> ' 2rem'
//* 4. \W+  - more than 1 non word  --> /\W+sit/gi      >> dolo@ sit            >> '@ sit'

//* 5. \d   - decimal number        --> /\drem/gi       >> 2rem
//* 6. \d+  - more decimal number   --> /\d+rem/gi      >> 242rem
//* 7. \D   - non decimal number    --> /\Drem/gi       >> Lowrem
//* 8. \D+  - more non decimal      --> /\D+rem/gi      >> Lowrem

//* 9. \s   - white space char      --> /\sipsum/gi     >> ' ipsum'
//* 10. \s+ - more white space      --> /\s+ipsum/gi    >> '   ipsum'
//* 11. \S  - non white space       --> /\Srem/gi       >> orem
//* 12. \S+ - more non white space  --> /\S+rem/gi      >> L##orem

//* 13. \b  - word boundary         --> /lorem\b/gi     >> Lorem    (match if space after source)

//? Assertions

//* (a?=b)      - b after a         --> /lo(?=r)/gi     >> Lo
//* (a?!b)      - not b after a     --> /lo(?!r)/gi     >> lo


// let regEx = /lo(?!r)/gi
// let string = 'Lorem   ipsum, dolo@ sit amet consectetur adipisicing elit. Eligendi, quo.'

// let result = regEx.exec(string)

//! =========================== X ===========================

//* Iterators

fruitsIterators = (values) => {
    let nextIndex = 0;
    return {
        next: () => {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}
const fruitsArray = ['Apple', 'Graps', 'Orange'];

// using the iterators
// const fruits = fruitsIterators(fruitsArray);
// fruitsArray.forEach(() => {
//     console.log(fruits.next())
// })
// console.log(fruits.next())


//* Generators

function* numbersGen(limit) {
    let i = 1;
    while (i <= limit) {  
        if (i % 5 == 0) {         
            yield i;            
        }
        i++;
    }
}

// to generate a set of 10 numbers out of 50 numbers that are divisible by 5

let numSet = []
let gen = numbersGen(50);
for (let n = 1; n <= 50; n++) {
    numSet.push(gen.next().value)
    if (numSet.length == 10) break;
}
// console.log('numSet: ', numSet);

//! =========================== X ===========================

//* for..in and for..of

// for..in

let objectForin = {
    name: 'Debidatta Pattanayak',
    age: 26,
    profession: 'Software Developer',
    city: 'Chennai',
    hobbies: ['Programming','Reading']
}

for (const key in objectForin) {
    if (objectForin.hasOwnProperty(key)) {
        const element = objectForin[key];
        // console.log(`${key} : ${element}`);        
    }
}

// for..in is specially used for accessing the keys of an abject

// for..of

let arrayForof = [
    {
        name: 'Debidatta Pattanayak',
        age: 26,
        profession: 'Software Developer',
        city: 'Chennai',
        hobbies: ['Programming','Reading']
    },
    {
        name: 'Rohit Sharma',
        age: 36,
        profession: 'Cricketer',
        city: 'Mumbai',
        hobbies: ['Batting','Fielding']
    },
    {
        name: 'Virat Kohli',
        age: 34,
        profession: 'Captain',
        city: 'Mumbai',
        hobbies: ['Batting','Reading']
    }
]

// access index
for (index of arrayForof.keys()) {
    // console.log(index)
}

// access elements
for (elements of arrayForof) {
    // console.log(elements)
}


// access both
arrayForof.forEach((index, element) => {
    // console.log(index , element)
})


//! =========================== X ===========================

//* Map and Set


//? when to use Map
//? what is the problem map solves

//* Object VS Map 

// Object

let myObj = {}      // empty object
let a = {}, b = {}  // 2 empty objects

// lets assign a and b to myObj

myObj[a] = 'a'
myObj[b] = 'b'

// console.log('myObj :', myObj)
// requirement : { {} : 'a' , {} : 'b' }
//! output : [object Object]: "b"    << b overlaps a

// Map

let myMap = new Map()
myMap.set(a,'a')
myMap.set(b,'b')
// console.log('myMap :', myMap)

//* output : Map(2) {{…} => "a", {…} => "b"}    << SOLVED

// Maps in Javascript ( we can use any type of key or value ) 

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.


//* Array VS Set

// Array

let myArray = [1, 2, 3, 4, 5, 2, 4];
// console.log('myArray: ', myArray);
// output :  [1, 2, 3, 4, 5, 2, 4]

//  Set

let mySet = new Set([1, 2, 3, 4, 5, 2, 4]);
// console.log('mySet: ', mySet);
// output :  {1, 2, 3, 4, 5}

// Removing the duplicate values from myArray

myArray = [...mySet]
// console.log('myArray: ', myArray);
// output : [1, 2, 3, 4, 5]

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

//! =========================== X ===========================

//* Destructuring

//* Destructuring Object

const mySelf = {
    name: 'Debidatta Pattanayak',
    age: 26,
    gender: 'male',
    getName: function() {
        return this.name
    },
    getAge: function() {
        return this.age
    }
}

let { name, age, gender, getName, getAge } = mySelf;

console.log(mySelf.getName())
// output "Debidatta Pattanayak"

// console.log(getName())
// outout "blank" why ??

// console.log(getAge())
// output undefined why ??

console.log(mySelf.getAge())
// output 26

//* Destructuring Array

let mydArray = [1, 2, 3, 4, 5, 2, 4];
[a, b, c, ...d] = mydArray;
// console.log(a,b,c,d)
