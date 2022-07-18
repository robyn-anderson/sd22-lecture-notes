//Could do it this way:
const Express = require("express") // Call Express
const app = Express()
const router = Express.Router() // Invoke Express Router

/* This is more efficient (but does not work?????)
const router = require("express").Router() // Invoke Express Router
*/

let staticServer = Express.static(process.cwd()) // in this directory
app.use(staticServer) // use the middleware (.use()) to invoke it


/* Express Routing 
    * supports handing all HTTP methods with the pattern app.method(path, handler)
    * an incoming request of the given METHOD (POST, GET, DELETE) matches the PATH peremeter, Express will then invoke the HANDLER CALLBACK function  
*/

// req = request
// res = response

router.get('/', (req, res) => {
    res.render("index")
}) 

router.get('/login', (req, res) => {
    res.send('Hit the login route')

}) 

router.get('/signup', (req, res) => {
    res.send('Hit the signup route')

}) 

router.get('/all-items', (req, res) => {
    const allItems = '/all-items'
    res.status(200).send(`You have hit the ${allItems} route`)
})

router.get('/:item/:qty', (req, res) => {
    //entered in postman: localhost:4000/cookies
    console.log(req.params) // { item: 'cookies' }
    console.log(req.params.item, req.params.qty) // cookies
    res.send(`Got your item: ${req.params.qty} ${req.params.item}`).status(200) // Returned in postman: Got your item: cookies
})

// Need to export this so can import it into app.js
module.exports = router