// IO and Callbacks Lesson

/*
    * Process is an event that currenty runs in the foreground or background on your local machine.

    * Node.js allows access to its processes viaa a process object.

    * This helps us deal with processing external input and internal output (IO) into and out of our file/program. The file becomes a process when it is executed.

    * This is done using process.stdin and process.stdout properties.
*/

// import {stdin, stdout} from "node:process"

// console.log("Hello")

/*

process.stdin	                Hey terminal input,
.once('data', ... )	            once you get some data...
(input)	                        use it as a parameter called 'input'...
=>	                            and send it to this function's block of code...
{console.log(input.toString())}	convert it to a string and print it to the terminal"

*/

/*
process.stdin.once("data", (input) => {
    console.log(input)
})
*/

// Ran this in Terminal and got nothing at first (waiting for input)
// Then typed in "Hello from Node stdin process!" in Terminal and clicked enter.
// Terminal then showed this (a buffer): <Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 4e 6f 64 65 20 73 74 64 69 6e 20 70 72 6f 63 65 73 73 21 0a>"
// End the process in the Terminal using ctrl + c

/*
process.stdin.once("data", (input) => {
    console.log(input.toString())
})
*/

// Re-building the above as a function declaration

/*
process.stdin.once("data", function (input) {
    console.log(input.toString())
})
*/

// Event Listeners

/*
    * A way of handling user input

    * They take 2 parameters: (event, action)
        * Event specifies when the action will fire
        * Action is a callback function that does something when the even occurs 
*/

// Callback Functions

/*
    * Are simply functions that will be called upon inside of another function or a method when an event occurs.
*/

// Example of callback function inside another function:

/*
function getName(name) {
    return name
}

function getPorsche(winnersName) {
    let winner = getName(winnersName) // getName() calls back to its creation and executes, then returns its result and saves into the winner variable
    console.log(`Congrats! You won a Porsche 911, ${winner}`)
}

getPorsche("Person")
*/

/*
    Let's set up a "listen" on standard-input (stdin) so that when we type something, node will reply wth what we said + the word "doggo"
*/

/*
function handleInput(input) {
    console.log(input.toString().trim() + "doggo")
}
process.stdin.once("data", handleInput)
*/

// These seem to be the same - what is the difference???

/*
process.stdin.once("data", (input) => {
    console.log(input.toString().trim() + "doggo")
})
*/

// Multiple Functions

/* 
    Created a "listen" on standard-input (stdin) so that when we type something, 
    node will reply wth what we said + the word "doggo".

    Also added a thanksforPlaying function that is being used as a callback
    when the event "listener" inside handleInput senses an event. This
    prints lines 69-70 to the console and exists node ...missing notes...
*/

/* 
function handleInput(input) {
    console.log(input.toString().trim() + "...doggo")
    process.stdin.once("data", thanksForPlaying)
}

function thanksForPlaying(input) {
    console.log(input.toString().trim() + "... thanks for playing")
    console.log("all done")
    process.exit()
}

process.stdin.once("data", handleInput)
*/

// import {stdin, stdout} from "node:process"

process.stdin.on("data", (input) => {
    // Writeable Stream (0) of 10
    process.stdout.write(`This is the input: ${input.toString()}`)
})
// will be used when ctrl + d is used
process.stdin.on("end", () => {
    process.stdout.write("Fires only during graceful end")
})