/*
    * try - runs the code
    * catch - catches an error in a param and executes code inside its scope based on there being an error in 'try' code
    * throw - allows us to create custom errors and is useful when dealing with code that will not throw an error (returns undefined instead of erroring)
    * finally - will happen regardless, whether try or catch happens (based on code bug)
*/


// let mug = "blue"

try {
    if (mug) {
        console.log(mug)
    }
} catch(error) {
    console.log(error)
    let p = document.createElement("p")
    p.innerText = "This isn't working"
    document.body.appendChild(p)
} finally {
    console.log("This will happen regardless - whether try or catch happens (based on code bug)")
}

console.log("running")

let obj = '{ "name": "Lucy" }'

try {
    let person = JSON.parse(obj)
    if (!person.surname) {
        throw new SyntaxError("Property not found")
    }
} catch(err) {
    console.log(err)
}