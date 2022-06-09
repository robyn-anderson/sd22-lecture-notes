console.log("What is your first and last name?");

process.stdin.on("data", handleInput, lengthOfName);

function handleInput(someInput) {
  console.log("Hello, " + someInput.toString().trim() + "!")
}

function lengthOfName() {
  return `${someInput.replace(' ','').trim().length()}`
}
console.log("Your name is " + lengthOfName(someInput) + " characters long.")