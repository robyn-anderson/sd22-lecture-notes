// Functions

 /*
    Function is a block of reusable code that can take
    in parameters (doors), perform an action, and 
    return the result.

    Function syntax:

    function fxName(parameters) {
        block of code to run
        return statement
    }
        * function = the word "function"
        * fxName = the name of the function
        * (parameters) = like doors that allow us to bring information 
        in from the outside that we need in our "room" (function) so it will work. 
        Sometimes there are 0 parameters but can have  as many as needed.
    
 */

function fxDeclaration() {
    return "This is a function declaration's return statement"
}
// Function will not run until it is "called" (function invoked)

// fxDeclaration() 
// This calls the function, it just does not show it in the console log

let displayData = fxDeclaration()
console.log(displayData)
 
// This will show the text in the console.log
// Only use console.log to display info when testing (for the developer) it is not used to get tangible data out of the function
// Return statements are data that we can capture and work with

function greetUser(userName) {
    return `Good day, ${userName}`
}

console.log(greetUser()) // Will produce: Good day, undefined

console.log(greetUser("Robyn"))
// "Robyn" is an argument (a value that is beig passed through a parameter)

// Passing Variables as Arguments

let userOne = "Robyn Anderson"
let userTwo = "Lucy Anderson May"
let userThree = "Walt May"

console.log(greetUser(userOne))
console.log(greetUser(userTwo))
console.log(greetUser(userThree))
/* 
Result:
    Good day, Robyn Anderson
    Good day, Lucy Anderson May
    Good day, Walt May
*/

function capitalizeStrings(string) {
    return string.toUpperCase()
}
console.log(capitalizeStrings("Robyn Anderson"))
// Result = "ROBYN ANDERSON"

let fullName = "A Full Name" // sets variable with string value
let fullNameCapitalized = capitalizeStrings(fullName) // function takes variable as argument and turns it into a captalized version assigned to the variable fullNameCapitalized
console.log(fullName) // Returns: Robyn Anderson (original variable is unchanged)
console.log(fullNameCapitalized) // Returns: ROBYN ANDERSON

// Function Expression

/*
    Function expression utilizes a variable as a placeholder.
*/

let myDog = function(name, breed) {
    return `My dog, ${name} is a ${breed}.`
}
console.log(myDog("Lucy", "mystery-doggo"))

// Arrow Functions

/*
    A more concise way of writing functions.
    Arrow functions are created using function expressions ONLY.
    They are not hoisted.
    The do not bind to ".this" or "super"
*/

// Concise Body Arrow Function
/* 
    Can only have 1 parameter if it's not enclosed by ()
    Can have implicit return statement ONLY, without using { }
    Supposed to be very clean
    Function keyword is being substituted by the arrow
    Parameters are usually before the function, but in "concise arrow function" they are after
*/

let greetEveryone = () => console.log("Hello Class!")
greetEveryone()

let greetPerson = name => console.log(`Hello, ${name}`)
greetPerson("Lucy")

// Block Body Arrow Function

/*
    This is when needing to use more than one parameter in the function
    see below multipleparameters listed within the ()
*/

let sendEmail = (email, name, fromName) => {
    
    let greet = "What's up: "

    return `${greet}: ${name}:
    
    We've been trying to reach you about your car's\nextended warranty. Oh my dog, not this crap again!\nSincerely,\n${fromName}`
}
console.log(sendEmail("lucymay@tourcube.net", "Lucy", "Anonymous"))

// Challenge
// My Try:

let tipCalculator = (preTaxBill, salesTax, tipPercentage) => {
    return `This is your total with tax: $${preTaxBill + (preTaxBill * (salesTax/100))}\nThis is your tip: ${tipPercentage}%\nAnd this is total with tip: $${(preTaxBill + (preTaxBill * (salesTax/100))) * (1 + (tipPercentage/100))}`
}
console.log(tipCalculator(100, 10, 20))

// Instructor's answer:
/* 
    Technically uses more memory than my try above because of declaring 
    additional variables, but this is really not an issue for modern computers 
    and is is perhaps easier to read.
*/

let instructorTipCalculator = (preTaxBill, salesTax, tipPercentage) => {
    let totalWithTax = preTaxBill + (preTaxBill * (salesTax / 100))
    let totalTip =  totalWithTax * (tipPercentage / 100)
    let total = totalWithTax + totalTip

    return `This is your total with tax: $${totalWithTax.toFixed(2)}\nThe tip amount is $${totalTip.toFixed(2)}\nAnd the overall total is: $${total.toFixed(2)}`
}
console.log(instructorTipCalculator(100, 10, 20))

