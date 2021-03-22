/* 
    1. STRING

    str1 = 'string 1'
    str2 = 'string 2'

    console.log(str1.concat(' ' + str2))

    str1 = str1.toUpperCase();
    console.log(str1)

    str1 = str1.toLowerCase();
    console.log(str1)

    let string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    console.log(string.indexOf(','))                // first index only print => 26
    console.log(string.lastIndexOf('i'))            // last index of i => 54 
    console.log(string.charAt(26))                  // find comma(,)
    console.log(string.endsWith('.'))               // check if ends with .
    console.log(string.substring(0, 26))            // first segment
    console.log(string.slice(0, 6))                 // cut something
    console.log(string.split(','))                  // break segment
    console.log(string.replace(',',''))             // replace comma with space

*/

//! =========================== X ===========================

//  2. TEMPLATE LITERALS

// let todayDate = new Date().toLocaleDateString();
// let currentTime = new Date().toLocaleTimeString();

// console.log(`I am learning on %c ${todayDate} at ${currentTime} `, 'background: #222; color: #0f0; padding: 2px')

//! =========================== X ===========================

//  3. ARRAY

let studentMark = [79, 77, 64, 55, 44]

/*
    1. unshift  - add to first place
    2. push     - add to last place
    3. shift    - remove from first place
    4. pop      - remove from last place
    5. splice   - remove from specific index to number of index
    
    studentMark.unshift(30)
    studentMark.push(100)
    studentMark.shift()
    studentMark.pop()
    studentMark.splice(1,2)
    console.log('studentMark: ', studentMark);

    * Array Map

    let arr = [2, 3, 1, 4, 5];
    let output = arr.map(function (value) {
        return value + 10;
    })
    console.log(output)
    O/P :  [12, 13, 11, 14, 15] 


    * Array Filter

    let arr = [2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = arr.filter(function (value) {
        return value % 2 == 0;
    })
    console.log(evenNumbers)
    O/P : [2, 4, 6, 8]


    * Array Reduce

    let arr = [21, 22, 344, 889, 110];
    let sum = arr.reduce(function (total, value) {    
        return total + value;
    })
    console.log(sum);
    O/P : 1386


    * Array Every

    let arr = [2, 3, 4, 5, 6, 7, 8];
    let checkGT5 = arr.every(function (value) {
        return value > 5;
    })
    console.log(checkGT5)
    O/P : false - ( all the numbers are not greater than 5 )


    * Array Some

    let arr = [2, 3, 4, 5, 6, 7, 8];
    let checkGT5 = arr.some(function (value) {
        return value > 5;
    })
    console.log(checkGT5)
    O/P : true - ( some numbers are greater than 5 )

*/

//! =========================== X ===========================

// 4. OBJECT

let markDetails = {
    Rohan: 79,
    Ayosh: 77,
    Vikash: 64,
    Rakesh: 55,
    Chinu: 44
}

// to access 
// console.log('markDetails: ', markDetails.Ayosh);

// if space required in key use single quotes

markDetails = {
    'Rohan Roy': 79,
    'Ayosh Rath': 77,
    'Vikash Panigrahi': 64,
    'Rakesh Mohanty': 55,
    'Chinu Behera': 44
}

// to access
// console.log('markDetails: ', markDetails['Ayosh Rath']);

// we can add string , array, object everything inside object

delete markDetails['Chinu Behera']              // remove data
markDetails['Debidatta Pattanayak'] = 100       // add aditional data

// console.log('markDetails: ', markDetails);     

//! =========================== X ===========================

/*
    5. OPERATORS

    assignment      =, +=, -=, *=, /=, %=, **=
    Addition        +
    Subtraction     -
    multiplication  *       
    Exponentiation  **      let i = 5; i ** 2 = 25  square of 5
    Division        /       let i=10; i/2 = 5
    Modulus         %       let i=10; i%3 = 1 reminder after the division
    Increment       ++      let i=10; i = i++ = 11
    Decrement       --      let i=10; i = i-- = 9
    Ternary         ?:      condition ? true : false
    
    let age = 18;
    console.log('age: ', age == 18 ? 'can vote' : 'can not vote');
*/

//! =========================== X ===========================

/*
    6. CONDITIONS

    * If - Else

        let age = 18
        if (typeof age !== 'undefined' && age == 18) {
            console.log('can vote');
        }
        else if (age == 17) {
            console.log('age is 17');
        }
        else {
            console.log('age is less than 18');
        }
    
    * Switch
   
        let age = 18;
        switch (age) {
            case 18:
                console.log('you are 18')
                break;
            
            case 19:
                console.log('you are 19')
                break;
        
            default:
                console.log('you are not 18 or 19')
                break;
        }        
*/
