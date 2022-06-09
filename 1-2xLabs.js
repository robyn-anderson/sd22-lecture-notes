// Functions Lab Practice

/*
    Write a function that:
        * accepts a number as input
        * returns the input number plus the number positive one
*/

let addOne = (number) => {
    return `${number + 1}`
}
console.log(addOne(1)) // Result: 2

/*
    Age Calculator
        * Write a function that calculates the number of seconds old you are 
        when given your age.
*/

let age = 27

function ageCalc (age) {
    let seconds = 60
    let minutes = 60
    let hours = 24
    let days = 365.25
  return `You are ${(seconds * minutes * hours * days) * age} seconds old.`
}

console.log(ageCalc(age)) // should print "You are 852055200 seconds old." to the console