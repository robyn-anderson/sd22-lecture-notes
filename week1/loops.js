// Loops

/*
    * Allow us to  go over a block of code and a determined amount of cycles
*/

// While Loop

/*
    * Executed a statement inside of a code block provided that the condition continues to evaluate to true.

    * The condition is evaluated before executing the statement.
*/

let randInt = 7

while (randInt > 0) {
    randInt = randInt - 1
    console.log(randInt)
}

// For Loops

/*
    * We have to set up our loop in a way where we can:
        * see where we are in a loop
        * consider the condition we run it against
        * note when we are done with that condition
*/

// Ex: Count to 3

for (let i = 0; i <= 3; i++) {
    console.log(i)
}

let longWord = "asuperduperlongword"

for (let i = 0; i < longWord.length; i++) {
    console.log(longWord[i], i)  // [i] is the index of the word (the character in that spot) and i is the number of the position ex: s is 2
}

// For In Loop
// Can use for looping over anything index or number related

let wordArray = ["list 1", "list 2", "list 3"]

for (i in wordArray) {
    console.log(i)
}

// For Of Loop

// Can use for looping over iterable objects including (built-in string, array, array-like objects like arguments or NodeLists)

//! this for loop below uses the same array created above: wordArray
for (i of wordArray) {
    console.log(i)
}

// Do While Loop
// Will always run at least 1x even if condition is not met. Paul says this is probably not something used very much?