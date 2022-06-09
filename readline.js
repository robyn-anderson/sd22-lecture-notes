const { rawListeners } = require("process")
const readline = require("readline") // Imprts readline to our file to be used.
// We can now access all of readline's methods and properties by using readline variable.
const rlPromise = require("node:readline/promises");

// const readlineInterface = readline.createInterface(
//     process.stdin,
//     process.stdout
// )

const rlPromiseInterface = rlPromise.createInterface(
    process.stdin,
    process.stdout
)

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText)
    })
}

console.log("running the code...");

const promiseAnswer = rlPromiseInterface.question("What do you think of the class?");
promiseAnswer.then((answer) => {
    console.log("You replied: ");
     console.log(answer.toUpperCase());
     console.log("Thank you for the feedback!")
     readlineInterface.close();
})

// function handleAnswer(answer) {
//     console.log("You replied: ");
//     console.log(answer.toUpperCase());
//     console.log("Thank you for the feedback!")
//     readlineInterface.close();
// }


// readlineInterface.question("How do you like the class so far", handleAnswer);