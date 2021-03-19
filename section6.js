/*
    * Regular Expression
    
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
    result = regEx.match(string);    // wrong method
    result = string.match(regEx);    // right method
    result = string.search(regEx);
    result = string.replace(regEx, 'yipee'); // find ip and replace yipee
    
*/
    //* Meta char symblos  
                                                
    //* 1. ^ - starts with       --> /^lo/i          >> lorem
    //* 2. $ - ends with         --> /it$/i          >> elit
    //* 3. . - one char btwn     --> /l.em/i         >> lorem 
    //* 4. * - any char btwn     --> /l*rem/i        >> loenndhdrem 
    //* 5. ? - optional          --> /loa?rei?m/i    >> Lorem (a and i optional)
    //* 6. \ - escape            --> /lorem\*/i      >> Lorem*

    //* Character Sets
    
    //* 1. [a-z]     - anything btwn a to z     -->     /L[a-z]rem/i        >> Lorem
    //* 2. [^a-z]    - nothing btwn a to z      -->     /L[^a-z]rem/i       >> L9rem
    //* 3. [0-9]     - any number btwn 0 to 9   -->     /l[0-9]rem/         >> l9rem
    //* 4. [^0-9]    - nothing btwn 0 to 9
    //* 5. [^A-Z]    - nothing btwn cap a to z  -->     /l[^a-zA-Z0-9]rem/i >> L@rem
 
    //* Quantifiers

    //* {number} - number of characters allowed   
    //*              --> /lo{2}rem/i     >> Loorem - allow exact 2 char
    //*              --> /lo{0,2}rem/i   >> lorem  - allow btwn 0 to 2 char
    
    //* Grouping
    
    //* (chars) - group of chars allowed number of times     
    //*         - /lo(rem){2}/i  >> Loremrem
