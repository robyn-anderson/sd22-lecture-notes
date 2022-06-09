// Logic & Control

// null is intentional absence / the concept of "none" or "nothing"

let nullCheck = "content!"

if ( nullCheck === null) {
    console.log("This is a null!")
}
else {
    console.log("The variable has content!")
}

// Conditionals

/*
    A way for a progrmaer to check if an expression is true.
    It can also check for falseness.
    It can execute code when the condition is met but also when the condition is not met.
    It can execute code that checks for another condition all together.
    
    The fundamental function of a conditional is to check for truthiness.

    Syntax:

        if ( conditional ) {
            run this code if TRUE
        }
 */

let light = "on"

if (light == "on") {
    console.log("the light is on")
}

// Falsey values:
/*
    * false
    * 0
    * null
    * undefined
    * NaN
    * "", '', `` (any empty string)
*/

let temperature = 50

if (temperature >= 70 && temperature <= 70) {
    console.log("It's a nice spring day")
}
else if (temperature >= 60) { // No need for AND because the check for > 70 happsn before the check for > 60
    console.log("It's almost spring")
}
else if (temperature < 60) {
    console.log("It's quite chilly")
}

// Logic Operators NOT AND OR

/*
    AND operator (&&)
        * true if both sides of operator are true
    OR operator (||)
        * true if at least one side of the operator is true
        * false if neither side is true
    NOT operator (!)
        *
*/

console.log(5 < 10 && 7 < 10) // true: both sides of operator are true
console.log(5 < 1 && 7 < 10) // false: left is false, right is true, but along as one is false, it is false
console.log(5 < 10 || 7 < 10) // true: both sides of operator are true
console.log(5 < 10 || 11 < 10) // true: left is true, right is false, but along as one is true, it is true
console.log(12 < 10 || 11 < 10) // false: both sides are false, so false
console.log( !(5 < 10) ) // false: 5 is less than 10 but the ! (NOT) flips the true statement to false

// Using Logical Operators

let weather = "sunny"
let temp = 70

if (temp >= 70 && weather == "sunny" || weather == "cloudy") {
    console.log("Take a hike!")
}
else if (temp >= 70 && weather == "raining") {
    console.log("Stay home?")
}
else {
    console.log("We have not accounted for this weather forecast")
}

// ! Challenge

/* 
    Set a variable of age and give it a number of your choice.
    Create an else if statement that checks the following:
        * If the age is 17 or younger, console.log "sorry, you're too young to do anything."
        * If the age is at least 18, "You can vote!"
        * If the age is at least 21, "You can drink!"
        * If the age is at least 25, "You can rent a car!"
*/

let myAge = 22

if (myAge >= 25)  {
    console.log("You can rent a car!")
}
else if (myAge >= 21)  {
    console.log("You can drink!")
}
else if (myAge >= 18)  {
    console.log("You can vote!")
}
else {
    console.log("sorry, you're too young to do anything")
}


// Ternaries

/*
    Syntax: condition ? something if true : something if false
*/

// Non-ternary version
let fName = "Lucy"

if (fName === "Lucy") {
    console.log("I think she is wonderful.")
}
else {
    console.log("Not sure who that is.")
}

// Ternary version

fName == "Lucy" ? console.log("I think she is wonderful.") : console.log("Not sure who that is.")

// Chain ternary version

let hero = "Batman"
let villain = "x"

hero == "Batman" && villain == "Riddler"
    ? console.log("What has a head and a tail but no body?")
    : hero == "Batman" && villain == "Joker" // else if
    ? console.log("Why so serious?")
    : hero == "Batman" && villain == "Kiteman" // else if
    ? console.log("What does kiteman do?")
    : console.log("stop") // else