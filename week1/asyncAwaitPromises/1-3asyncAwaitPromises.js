// function getData() {
//    setTimeout(() => {
//        return "some data"
//    }, 3000)
//}

// let data = getData()

// console.log(data)

// Callbacks

function getData(callingbacker) {
    setTimeout(() => {
        callingbacker("some data")
    }, 3000)
}

getData((data) => console.log(data))

console.log("hello")

// Promises

/*
    * Promise is an object that may produce a singular value in the future.

    * Three states:
        * Pending (unfinished)
        * Fulfilled (complete)
        * Rejected (error)
*/

function getData() {

    return new Promise((resolve, reject) => { // Create a new instance of a promise with resolve & reject parameters for its timeout
        
        let flag = false

        setTimeout(() => { // Wrap it in setTimeout() to simluate waiting for a resource
            if (flag) {
                resolve("some true data") // resolve() or reject() the promise
            }
            else {
                reject("rejected")
            }
        }, 3000)
    })
}

function traditionalFunction() {
    return `stuff`
}

let stuff = traditionalFunction()

getData() // When returned, the getData() fx will return a Promise instead of a given string
    .then(data => console.log(data))
    .catch(function(error) {console.log(error)}) // We use .then() and .catch() resolvers with callbacks which catch the promise and extrapolate the information we want.

// Async Await

/*

*/

async function asyncFxDeclaration() {

}

let asyncFxExpression = async function() {

}

let asyncArrowFunction = async () => {}

// Identical to regular function apart from one thing:
// ? Async functions always return a promise.

async function getName() {
    return "Paul"
}

getName()
    .then(data => console.log(data))

// Await

async function extraData() {
    let infoFromGetData = await getData()
    // ! await waits for the data to come back from another asynchronous function before allowing this asynchronous function to execute its returm
    console.log(`${infoFromGetData} + data from async function`)
}

extraData().then(data => console.log(data))
