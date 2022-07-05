// URL

/*
    Uniform Resource Locator (Identifier)

    Address that allows us to access wbe resources

    http://www.apple.com:443/path/to/file.html?key1=value&kay2=value#anchorInDocument

        * http:// => scheme or protocol
        * www.apple.com => domain name (domain and/or subdomain ex: online.uprighted), and top-level domain (.com. eu, .co.uk)
        * :443 - port on which we access the resource
        * domain (IP once it goes through DNS servers) + port === socket
            * path to the file (path/to/file.html)  
        * ? => divider into the beginning of parameters (end of route, beginning of parameters)
        * key=value => parameters with their key and value pairs
        * & => divides mutliple key:value pairs
        * # => anchor allows us to go somewhere on the page (and are not sent to the server (not sure what this means))
    
    Access an entire URL: document.location.search
    
    Access anchors (links to specific places on the page) in the document: document.location.hash

    URLSearchParams is an interface

    Document is an interface

    document. is an object

*/

 let params = new URLSearchParams(document.location.search) // grab parameters from the URL and assigns to 'params' variable
 // URSearchParams is an interface
 let slideIndex = params.get('slideIndex') // can use .get() with URLSearchParams to access the value of a key:value pair (in this case grabbing th value of the slideIndex in the URL)


 // API

 /*
    Application Programing Interface

    A way for a client (browser) to communicate with the server

    Allows for the HTTP request & response lifecycle
 */

// AJAX

 /*
    AJAX is asynchronous Javascript and XML. Ajax is not a single technology. It is really several technologies, each flourishing in its own right, coming together in powerful new ways. Ajax incorporates:
        -Standards-based presentation using HTML and CSS
        -Dynamic display and interaction using the Document Object Model
        -Data interchange and manipulation using JSON
        -Asynchronous data retrieval using Fetch
        -JavaScript binding everything together


        * Requests data from an external source
        * Parse the data returned by the request
        * Load that data into the page without a refresh
        * Data can be in any format but most common is:
            * XML
            * JSON
            * HTML fragment (not an entire page) 
    
    Examples:
        * load the comments on an article later so rest of page is useable sooner
        * load weather and update it every hour
        * infinite scrolling (like instagram)
    
    Advantages:
        * Page components can be loaded individually
        * New data can be loaded asynchronously
        * User interacts with the page and sees results almost immediately
            * or at least more quickly than they would in a full page reload
    Disadvantages
        * JavaScript must be enabled
        * Adds complexity to JavaScript applications
        * Without refreshes the page state can get bloated
            * Memory leaks become a bigger problem in longer-lived apps (data that is overflowing its container capacity)
        * Screen-readers cannot read the whole page at once
        * Reloading the page can show completely different content
            * Bookmarking and link sharing no longer "just work"
    */

// FetchAPI

/*
    A built-in get request (using JSON to get an object(???))

    Fetch with resolvers:

        1. 'Fetch' your resource which returns a 'promise' object (no access to anything at this point)
        
        2. Use a .then/await resolver to catch fetch's return and assign to a parameter

        3. Use .json() on response to finish reading entire ReadableStream

        4. Chain another .then/await resolver to catch read response object and...

        5. Do whatever you want to do with it

        
    A Fetch API converts text into JSON for you if you call response.json()

    JSON.parse('jbbolnnkljkb') converts a string (json) into an object
*/

fetch('https://jsonplaceholder.typicode.com/posts/1') // returns a promise that goes to the resolver (.then())
    .then(response => response.json()) // .then() is a method (funtion) and then the 'response' catches it
    .then(data => console.log(data))
    .catch(error => console.log(error)) // grabbing error information

// Top Level Await

async function getData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let data = await response.json()
    console.log(data)
    console.log(JSON.stringify(data)) // this make it a string instead of an object
    if (!response.ok) {
        throw Error('Not Ok!')

    }
    } catch (err) {
        console.log('error')
    }
    
}
    getData()

// JSON.parse converts a string (json) into an object. NOTE: double-quotes must be used inside {}
let myText = '{ "data": "some data goes here" }';
let myObject = JSON.parse(myText);
console.log(myObject);
