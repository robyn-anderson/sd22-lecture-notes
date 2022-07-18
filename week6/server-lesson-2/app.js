require("dotenv").config() // to install: npm i dotenv --save

const Express = require("express")
const app = Express() 

// const PORT = 4000 - replaced by dotenv
const PORT = process.env.PORT || 4000

app.use(Express.static(__dirname))

//app.use(Express.urlencoded())
// This will use it everywhere, but if you only need it for one thing (register in maniRoutes in this example, you can just put it in there instead of at the top level here)

app.use(cors(corsOptions))

app.use(Express.json())

const mainRoutes = require('./controllers/mainRoutes')
app.use(mainRoutes)


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})