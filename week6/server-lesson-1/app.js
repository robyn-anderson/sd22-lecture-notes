// Express

// * to start the server with nodemon: npm run dev
/*
    Express handles server process and route management (through controllers)

    To use:     
        * Import Express
        * set app variable to top level Express function invokation
        * set up your app.lsten method to listen on a port
            * takes port as first param
            * takes anonymous no param callback to run
        * use app.http-method (GET, POST, PUT, DELETE) to handle each route
            * takes string or route as first parameter
            * takes handler callback the contains logic
                * handler has request and response parameters
                * req and res parameters have access to express methods (everything that pops up as an option after typing 'res.')
*/

// Import Express

const Express = require("express") // Call Express
const app = Express() // Invoke Express



const mainRoutes = require('./controllers/mainRoutes') // Import the routes from the mainRoutes.js file

const PORT = 4000

const logTime = (req, res, next) => {
    let date = new Date()
    console.log(date.toLocalDateString())
    next()
}

app.use(logTime)
app.use(mainRoutes) // .use() is a middleware function

// starts a UNIX socket and listens for connections on the given path
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})