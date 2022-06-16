// For Of Loop

/*
    It creates the index automatically
    for              in a loop
    of fruits        take a thing inside fruits
    let fruitsItem   name it fruit (assign it a variable)
    {...}            and send it to this block of code (print the value of the 'fruit' variable through the loop in a sentence)
*/
let fruits = ['apples', 'bananas', 'oranges'];
for (let fruitsItem of fruits) {
    console.log("I like " + fruitsItem + "!")
}
/*
    Result:
    I like apples!
    I like bananas!
    I like oranges!
*/

// Iteration Methods (method = a function that is attached to an object)

/* 
Some examples:

    forEach - do something to every item in the array (return: undefined)
    
    find - find the first item that matches (return: one matching item or undefined)
    
    filter - accept or reject each item (return: a new collection, possibly smaller)
    
    map - change each item into a new item - connect a set of values to a new set of values - a mapping between 2 sets of things (return: a new collection of the same size, does not amend the original)
    
    reduce - scan the entire collection and reduce it to (returns: a single result, for example, a total of numbers within an array)
*/

 let names = ['Lucy', 'Walt', 'Metzi', 'Ross'];
 

 // forEach
 function printUpper(name) { // "name" can be anything, it just means the item within the array
    console.log(name.toUpperCase())
 };
    names.forEach(printUpper)
 // ^array ^method  ^function to run on every item in array (callback function)

 
    // This is what forEach (as shown above) is doing in the background:
    function forEvery(theArray, callback) {
        let index = 0;
        while (index < theArray.length) {
            let item = theArray[index];
            callback(item)
            index = index + 1;
        }
        return undefined;
    }
    forEvery(names, printUpper)
        // result: [ undefined, undefined, undefined, undefined ]


// map 
function printLower(name) { // "name" can be anything, it just means the item within the array
    console.log(name.toLowerCase())
};

let bigNames = names.map(printLower);

    // This is what map (as shown above) is doing in the background:
    function ourMap(theArray, callback) {
        let result = [];
        let index = 0;
        while (index < theArray.length) {
            let item = theArray[index];
            result.push(callback(item))
            index = index + 1
        }
        return result;
    }
    let upperNames = ourMap(names, printUpper);
    console.log(upperNames);
    console.log(names);


// find
let findName = names.find(name => name === 'walt');
console.log(findName);
 // result: walt
 
// filter
let filterName = names.filter(itemInArray => itemInArray !=='walt');
console.log(filterName);
 //result: [ 'lucy', 'metzi', 'ross' ]

let moreNames = ['Alice', 'Bob', 'Charlie', 'Carol'];

let beginsWithC = function(word) {
   return word.charAt(0).toUpperCase() === 'C';
};
 
let cNames = moreNames.filter(beginsWithC); //=> [ 'Charlie', 'Carol' ]

 // reduce
 // didn't get the notes... see slides for day 2 of week 2 or lookup online!

 // Method chaining

 // Can be dense, but can accomplish a lot in one variable instead of creating multiple. For example:

let phrase = "all dogs are good dogs";

function upperCaseVowels(character) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let lower = character.toLowerCase();
    if (vowels.includes(lower)) {
        character = character.toUpperCase();
    }
    return character
}
// non-chaining method:
let characters = phrase.split('')
let upperVowels = characters.map(upperCaseVowels);
let newString = upperVowels.join('');
console.log(newString);

// chaining method:
console.log(phrase.split('').map(upperCaseVowels).join(''));

// chaining but easier to read:
let result = phrase
    .split('')
    .map(upperCaseVowels)
    .join('')
console.log(result);