const Express = require("express")
const app = Express()
const router = Express.Router()


router.get('/', (_, res) => {
    res.render('index')
}) 

router.get('/test-login', (req, res) => {
    const { name, nickname } = req.query 
    // Object destructuring => the variables have to use the same name in the URL as in the file. This is the other option for setting this up:
        // * let nameyName = req.query.name
        // * let nicknamey = req.query.nickname
    // Matches properties in the object req.query 
    // If name and username exist in req.query they are assigned to name & username variables

    res.send(`Hit the login route. Here's the data: ${name} / ${nickname}`) // Use the variables somehow

})

router.post('/postendpoint', (req, res) => {
    const { firstName, lastName, age, isTeacher } = req.body
    //console.log(req.body)
    res.status(200).json({
        firstName,
        lastName,
        age,
        isTeacher
    })
})


// Challenge
/* 
    Create the following routes:
    * login POST route that grabs username and password from body & sends response with that object back
    * register POST route that take name, surname, username, password & returns that object back
    * all GET route that sends just a random response 
    * /:id param GET route that takes id param and returns it in response
    * form/ w/ query params GET route that returns any query param that is dropped in
*/

// login POST route that grabs username and password from body & sends response with that object back
router.post('/login', (req, res) => {
    const { username, password } = req.body
    //console.log(req.body)
    res.status(200).json({
        status: 'User logged in.',
        username,
        password
    })
})

// register POST route that take name, surname, username, password & returns that object back

//! Need to include 'Express.urlencoded()' here in order for this to work. See notes on app.js file about invoking it at a top level where it will apply to everything.

router.post('/register', Express.urlencoded(), (req, res) => {
    const { name, surname, email, password } = req.body
    try {
        if (!name || !surname || !email || !password) {
            res.status(406).json({  //specific error
                status: "Failed. Insufficient data."
            })
        }
        else {
            res.status(200).json({
                status: 'User registered:',
                name,
                surname,
                email,
                password
            })
        }
    } catch(error) { // general error
        res.status(500).json({
            status: `${error}`
        })
    }
})

// all GET route that sends just a random response
router.get('/all', (req, res) => {
    res.status(200).json({
        status: 'getting all items'
    })
})

// :id param GET route that takes id param and returns it in response
router.get('/register/:id', (req, res) => {
    const { id } = req.params
    //res.send(`Your id: ${id}`).status(200)
    res.status(200).json({
        status: 'success',
        id
    })
})

            /*
            localhost:4000/register/mynewid
            Returns:
            {
                "status": "success",
                "id": "mynewid"
            }
            */

// form/ w/ query params GET route that returns any query param that is dropped in
router.get('/form', (req, res) => {
    const queries = req.query
    console.log(queries)
    res.status(200).json({
        status: 'success',
        queries
    })
})

            /*
            localhost:4000/form?name=lucy&dog=yes
            Returns:
            {
                "status": "success",
                "queries": {
                    "name": "lucy",
                    "dog": "yes"
                }
            }

            */


module.exports = router