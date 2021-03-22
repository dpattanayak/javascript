console.clear()

// https://www.w3schools.com/jsref/

/*
    * case types:
        1. camelCase
        2. kebeb-case
        3. snake_case
        4. PascalCase
*/
//! =========================== X ===========================
/*
    * Variables:
        1. var, let, const
        2. var - value can be change
        3. let - block level scope
        4. const - value can't change

        ex : var userName = 'user1102'
        ex : let index = 0
        ex : const annualReturn = '4.7%'   
        
        IMPORTANT : Variable name should be meaningful !!
*/

var userName = 'user1102';
// console.log('before let', userName)

//const annualReturn;           Uncaught SyntaxError  - can't declare const without assignment
const annualReturn = '4.7%';
// annualReturn = '4.8%'        Uncaught TypeError - can't re-assign

// when you want to declare a variable only for a block        
{
    // let userName = 'letUser'
    // console.log('inside let', userName)
}
// console.log('outSide let', userName)

//! =========================== X ===========================

/*
    * Datatypes :
        1.Premitive
            * string, number, boolean, null, undefined, symbol 

            string = 'string',
            number = 100
            boolean = true
            variable = null
            variable = undefined
            variable = symbol // pending

        2.Reference
            * Arrays, Object literals, Functions, Dates
            
            Arrays = [1,2,3]
            Object literals = {
                key : value
            }
            Functions = function addNumber(){}
            Dates = new Date()
*/

// Get the type of the variable using typeof operator
// console.log('typeof userName is : ',typeof(userName))

//! =========================== X ===========================

/*
    Type Conversion and Coercion
    
    * Conversion :

    var number = 100.01004
    number = String(number)     // converted to string
    number = number.toString()  // converted to string
    console.log(number,typeof number)
    
    number = Number(number)                 // converted to number 100.01004
    number = Number(number).toFixed()       // converted to number 100
    number = parseInt(number)               // converted to number 100

    string = "100"
    number = 100


    * Coercion :

    addition = string + number => 100100
    after type cast
    string = Number("100")
    addition = string + number => 200
*/