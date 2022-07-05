// DOM

/*
    Data representation of the objects that comprise the structure and content of a document on the web.

    Basic structure:
        -Document
            -HTML
                -Head
                    -Meta tags
                    -Link tags
                    -Title tag
                -Body
                    -Nav
                    -Header
                    -Divs
                    -H1s, imgs, asides, and so on...
                    -And any of their attributes
*/

// Create our first element

// Use the createElement method on a document object and specify the element to be created. Assign it to a variable (for future modification):
let h1 = document.createElement('h1')

// Give the variable content (innerText) and styles:
h1.innerText = 'Creating my first DOM element'
h1.style.color = 'crimson'
h1.style.fontFamily = 'sans-serif'
h1.style.textAlign = 'center'
h1.style.textTransform = 'uppercase'
h1.style.fontWeight = '10'

// Up to this point, the variable existed, but it was not an element in the document. It needs to be appended to the body of the document before it will exist and show up on the page as an element:
document.body.appendChild(h1)

let h2 = document.createElement('h2')
h2.innerText = 'New h2 Element'
// Can also give the variable (soon-to-be-element) a class name or similar so it can get its styles from the css file:
h2.className = 'h2-element'
document.body.appendChild(h2)

// Find Elements Within the DOM

/*
    Five Methods:
        
        - document.getElementsByTagName()
            Returns HTMLCollection
                - Array-like object
                - Allows access to index, properties, and methods to help navigate and modify
                - Does NOT allow to modify a group of elements all at once
                - BUT can use a for loop to itirate over the array-like object and change them all
                - Can use .length on it
                - Use array notation to select individual items, like this: li[1]
                - Use .item() method

        - document.getElementsByClassName()
            Returns HTMLCollection

        - document.getElementById()

        - document.querySelector()
            Grabs the first instance of an element or null if not found

        - document.querySelectorAll()
            NodeList returns a static list of document's elements
        
*/

// document.getElementsByTagName

let li = document.getElementsByTagName('li')
console.log(li) // This returns an HTML Collection (an array-like object)

// Change one element:
let liKitchen = document.getElementsByTagName('li')[0] // Returns just the first item in the array-like object
liKitchen.style.color = 'firebrick'

// Change all elements:
for (i of li) {
    console.log(i) // this is not necessary
    i.style.color = 'navy'
    i.style.textAlign = 'center'
}

/*
This will work but is not a good way to do this. Too complicated. 
for (i of li) {
    if (i === li[1]) {
        i.style.color = 'yellow'
    }
    else {
        i.style.color = 'navy'
    }
}
*/

/*
This is better:
for (i of li) {
    console.log(i) // this is not necessary
    i.style.color = 'navy'
}
li[1].style.color = "yellow"
*/

// .querySelector()


/*
    Grabs the first instance of an element or null if not found
*/

let toDoListOne = document.querySelector('h1') // This grabs the first h1

let toDoList = document.querySelector('#listTitle') // Grabs the element with the listTitle ID
toDoList.style.textAlign = 'center'

// .querySelectorAll()

/*
    NodeList returns a static list of document's elements
*/

let nodeListLi = document.querySelectorAll('li')
console.log(nodeListLi)

let newListItem = document.createElement('li')
let ulToDo = document.getElementById('ulToDo')
newListItem.innerText = 'Dynamic vs Static'
ulToDo.appendChild(newListItem)



// Event Listeners

/*
    Event listeners allow us to execute a function when a particular even occurs.

    .addEventListener() takes an event and a callback function
        - event: when to start
        - callback function: action to take
*/

let button = document.getElementById('submit')

button.addEventListener('click', (event) => {
    // Collect & store user input in a variable
    let input = document.getElementById('listInput').value
    // Access the element the nput needs to be added to
    let theList = document.getElementById('ulToDo')
    // Create the element that will hold the input
    let newItem = document.createElement('li')
    // Assign the input to the new element
    newItem.textContent = input
    // Append the new element (with its text content from the input) to the list
    theList.appendChild(newItem)
})

// Same as above except it listens for hitting the enter key instead of clicking a button:

let input = document.getElementById('listInput')

input.addEventListener('keydown', (event) => {
    if (event.key ==='Enter') {
        // Collect & store user input in a variable
        let input = document.getElementById('listInput').value
        // Access the element the nput needs to be added to
        let theList = document.getElementById('ulToDo')
        // Create the element that will hold the input
        let newItem = document.createElement('li')
        // Assign the input to the new element
        newItem.textContent = input
        // Append the new element (with its text content from the input) to the list
        theList.appendChild(newItem)
    }
})

/* Better than above (which is repetitive) would be to:

       - Have a single function for collecting the input, creating the element, and adding it to the list 

       - And then have 2 event listeners that call the function based on either clicking a button or using the 'enter' key.
 */

       let form = document.getElementsByClassName('form')[0]
       
       form.addEventListener('submit', (e) => {
        e.preventDefault() // This will stop the default behavior of the form so the page will not refresh after submission
        console.log('event has ocurred')
       })
