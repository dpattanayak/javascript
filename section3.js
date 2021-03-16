/*
    1.  LOOPS

        * For Loop
            for (let i = 0; i <= 10; i++){
                console.log(i)
            }

        * while
            let j = 0;
            while (j<=10) {             // only execute when condition match
                console.log(j);
                j += 1;
            }
        
        * do while
            let j = 0;
            do {                        // atleast execute once
                console.log(j)
                j += 1;
            } while (j<=10);

        * break and continue in loops
            let j = 0;
            do {
                if (j === 5) {
                    break;              // loop will stop when j value is 5
                }
                console.log(j)
                j += 1;
            } while (j<=10);

            let j = 0;
            do {
                if (j === 5) {
                    j += 1;
                    continue;           // 6 will not print due to skip bt continue
                }
                j += 1;
                console.log(j)
            } while (j<10);     
            
        * Array Iteration
            studentMark = [79, 77, 64, 55, 44]
            studentMark.forEach(function (index, element) {
                console.log(index, element)
            })

            for (const item of studentMark) {
                console.log('only access item :',item)                
            }

        * Object Iteration
            let object = {
                name: 'Rohan Das',
                age : 35,
                type: 'Programmer',
                os  : 'Ubuntu'
            }

            for (const key in object) {
                console.log(`${key} : ${object[key]}`)
            }
*/

/*
    2. FUNCTION
    
        * A block of code that follows the instruction
            function addition(number1, number2) {
                return (number1 + number2)
            }
            let sum = addition(100,200)
            console.log('sum: ', sum);

        
        * we can pass default parameters in function any case parameter missed no problem
            function addition(number1, number2=100) {
                return (number1 + number2)
            }
            let sum = addition(100)
*/

/*
    3. WINDOW
        console.log(window)
        
        let getUserData = prompt('getUserData')
        let permission = confirm('Are you sure')
        
        console.log(location)
        console.log(document)           // document object model
        console.log(history)            // back btn functionality
*/
