// Variables

/* Containers that store data in memory.
    * variable declaration
        * allowing the memory space to be reserved for this variable
        * declarations start with:
            * let
            * var
            * const
        * declarations cannot start with a number, or most characters other than $ or _
        * default value is undefined (apart from cnst)
        * weakly typed language (no need to declare data type)
    * variable initialization
        * assigning a value to our variable
*/

// (1) (2) (3) (4)
let firstName = "Lucy";
console.log(firstName)

// 1. variable declaration (let)
// 2. variable's identifier (firstName)
// 3. assignment operator (=)
// 4. value initialization ("Lucy")

// It is possible to declare a variable without a value

let lastName;
console.log(lastName)

lastName = "May";
console.log(lastName)

// ! Old, you will encounter it but use "let" instead
var age = 34;
console.log(age)

/* 
const will not change - it is immutable and cannot be changed - therefore the below statement makes no sense because there is no purpose to creating it without assigning a value 
*/

// const isInstructor;

// ! const must be given a value when declared
// ! const must aways be declared AND initialized

const isStudent = true;
console.log(isStudent)
let checkingBools;
console.log(Boolean(checkingBools))

/* 
    Use "let" unless for a good reason (or at least for now, until you're very clear on when you need a variable to be able to change versus when it needs to not change (or you need to know if it is accidentally trying to change))
*/

// let age = 46;
//console.log(age)
//! SyntaxError: Identifier has already been declared (see above where "var age = 34;".
//! Common problem. Vairable declaration can only happen 1x in scope.

// Best Practices for Variables
/*
    * Be concise (ex: firstName instead of myuserfirstname)
    * Be specific (ex: getValue instead of i)
    * Utilize camelCase, snake_case, PascalCase, or skewer-case
    * You can use nocase and SCREAMING_CASE
    * A variable is a Name that points to a Value (ex: let snakc = "apple";)
        * variables point, values do not
*/

// Assigning Variables to Other Variables

let sisterName = "Metzi";
console.log(sisterName)
let mySiblings = sisterName;
console.log(mySiblings)

/*
    sisterName does not need to be redeclared (using 
    "let") because the VARIABLE already exists (sisterName),
    it'sjust being given a new VALUE (Mary).
*/
sisterName = "Mary";
console.log(sisterName)

// Scope

//Scope is like a territory or a jurisdiction

//The whole file is a scope...
/*
if(x) {
    // ...so are IF statement blocks

    while(x) {
        // ...and WHILE loop blocks

        for(x=1; x<2; x++) {
            // ...and FOR loop blocks
    
            function a() {
                // ...and FUNCTION blocks
            
                function b() {
                    // ...scope in a scope in a scope
                
                    function c() {
                        // ...another scope!
                    }
                }
            }
        }
    }
}
*/

// Equal and Strict Value Operators

/*
    Comparison Operators (== and ===) are used to check if the value to the left and 
    the values (and datatype for ===) to the right of the operator are equal. 
    
    Equality Comparison (==) checks that the VALUES only are equal. 
    Ex: console.log(2 == "2") returns true

    Strict Operator (===) checks for value AND datatype.
    Ex: console.log(2===2) returns true and console.log(2==="2") returns false
*/


let fName = "Robyn";
let lName = "Anderson";
let houseNumber = 123;
let street = "Elmo Street";
let city = "Stowe";
let state = "Vermont";
let postCode = "05672";

let myAddress = fName + " " + lName + "\n" + houseNumber + " " + street + "\n" + city + ", " + state + " " + postCode;
console.log(myAddress)

// Template Literals

let myAddressTemplateLiteral = `${fName} ${lName}\n${houseNumber} ${street}\n${city}. ${state} ${postCode}`;
console.log(myAddressTemplateLiteral)