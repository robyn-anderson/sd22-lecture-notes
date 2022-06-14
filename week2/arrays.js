// Introduction to Arrays

/*
    Arrays are contained within [], the items are separated by commas, and finished with a semicolon, like this:
    
    ['string', 100, true];
    ^start              ^end
        ^item0  ^item1  ^item2
    
    Javascript starts counting array order at 0 (index 0)
    Index number is always -1 of the "regular" counting number
        * Ordinal counting is starting at 1
        * Cardinal counting is starting at 0

        * There are multiple types of "bases" in programming.
            * Base 2 = Binary (0,1)
            * Base 8 = Octal (0,1,2,3,4,5,6,7)
            * Base 10 = Decimal (0,1,2,3,4,5,6,7,8,9)
            * Base 16 = Hexadecimal (1,2,3,4,5,6,7,8,9,A,B,C,D,E,F)
                            (A=10, B=11, C=12, D=13, E=14, F=15)
     
    Arrays cannot be limited. There is no way to put an item limit on an array. Things can always be added.
    
    Arrays can contain any VALUE. 
    
        Things that are NOT ALLLOWED in arrays (they are not values)
            * variable declarations: (let myName = 'robyn')
            * loops: (while (value== true) {console.log('Hello!')})
            * conditionals: (if... / else...)
*/

let value = true; // Boolean, data type
let myNumber = 42; // Number, data type
let myArray = []; // Array, Object, data type
let hello = function(message) {
    return `hello, ${message}!`;
};

let arrayExample = [
    1,
    'string',
    true,
    function () {
        console.log("yes, you can have a list of functions in an array")
    },
    [
        'AND, you can have arrays within arrays',
        'Really!?',
        ["Yes", "good luck."],
    ],
    hello,
];
console.log('The array is:', arrayExample);
console.log('Calling the function: ', arrayExample[5]('Lucy'));
//           ^ print this first then   ^ array     ^ thing within the array to call
//                                                      ^thing to pass into the function in position 5

// Adding things to arrays

let fruits = ['apple', 'banana', 'cherry']; // start
// Change array to be ['apple', 'banana', 'cherry', 'blueberry', 'pineapple']

/*
    Insert at Index method (only for adding to end):
        * fruits[3] = 'blueberry' - adds to end of array
        * fruits[4] = 'pineapple' - adds after last addition to array
        * fruits[42] = 'cherry'
                    ^ accidental "42" - what will happen?
            * this would insert extra empty spaces in the array
                * the value of each extra space is "undefined"
                * this is not ideal, people would prefer if JS used "null" in this situation
    
    Insert at Index using ".length" on the array (only for adding to end):
        * fruits[fruits.length] = "blueberry"
            * if fruits = ['apple', 'banana', 'cherry']
                * fruits.length is equal to "3" because ".length" counts ordinally (starting at 1)
                * so can use the operation of array.length to create & fill the next empty space in the array
            * fruits[fruits.length] = 'blueberry
                        ^ 
                        fruits.length => 3
              fruits[fruits.length]
                        ^
                fruits[3]
                fruits[3] = 'blueberry'
    
    METHODS FOR ADDING:
    
    Push method
        * The push() method adds one or more elements to the end of an array.
        * Returns the new length of the array.
        * arrayName.push('item to add to end of array')
    
    Unshift method
        * The unshift() method adds one or more elements to the beginning of an array.
        * Returns the new length of the array.
        * arrayName.unshift('item to add to beginning of array')
    
    METHODS FOR REMOVING:
    
    Shift method
        * The shift() method removes the first element from an array.
        * Returns that removed element. 
        * This method changes the length of the array.
        * arrayName.shift('item to remove')
    
    Pop method
        * The pop() method removes the last element from an array.
        * Returns that element.
        * This method changes the length of the array.
    
    REPLACING
        * fruits = ['apple', 'banana', 'cherry', 'blueberry', 'pineapple']
        * fruits[0] = 'apricot'
        * fruits = ['apricot', 'banana', 'cherry', 'blueberry', 'pineapple']
        * The string 'apple' is still "around" in the code, but it is no longer in the fruits array

*/

// Referencing items within an array:
fruits = ['apricot', 'banana', 'cherry'];
console.log(fruits[1]); // will print 'banana'
console.log(fruits[fruits.length - 2]) // will print 'banana'


// Referencing arrays within arrays:
fruits = ['apricot', 'banana', 'cherry', 'blueberry', 'pineapple'];
fruits.push(['nectarine', 'strawberry']);
console.log(fruits);
console.log('2nd item from array within array: ', fruits[5][1]); // grabs the item that is in an array in another array

// Slicing & Dicing
/*
    * The slice() method returns a shallow copy of a portion of an array into a new array object (the original array will not be modified)
    * Select from start to end (end not included) using the index of items in the array
        * if start is not included, uses index 0
        * if end is not included, uses index of last item in array
*/
let fruities = ['apricot', 'banana', 'cherry', 'date', 'elderberry'];
console.log(fruities.slice(1,3)); // Returns [ 'banana', 'cherry' ] (last index is not included)
console.log(fruities.slice(-5, -1)); // Returns [ 'apricot', 'banana', 'cherry', 'date' ] (WHY?)

let fruityFruits = ['apricot', 'banana', 'cherry', 'date', 'elderberry'];
let subFruityFruits = fruityFruits.slice(1,3);

subFruityFruits.push('dragon fruit', 'kiwi');
console.log(fruityFruits); // Will be unchanged
console.log(subFruityFruits); // Will contain the new fruits from the push

// Array Indexing

/*
    Think of indexes as pointing at the space between the items (they are like the "fences" in between the items):

    0   1    2    3   4
    | B |  L |  U | E | 
    ['B', 'L', 'U', 'E']

    So when you ask for a slice of (1,3) you get (L, U) because L & L are in between the index "fences" of 1 and 3
*/

// Joining arrays into strings

let fullName = ['Lucy', 'May'];
fullName.join(); // 'Lucy, May'
fullName.join(' '); // 'Lucy May'
fullName.join(', ') // 'Lucy, May'
fullName.toString(); // 'Lucy,May'

// Split strings into arrays
let phrase = 'all dogs are good dogs';
let phraseWords = phrase.split(' '); // the thing to use for splitting is entered in the split parentheses - in this example, a space. This could be '' and each character would become its own item.
console.log(phraseWords);