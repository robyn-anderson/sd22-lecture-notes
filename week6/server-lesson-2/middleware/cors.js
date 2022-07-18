// This file is the manually-made version of:
    // * app.use(cors(corsOptions))

module.exports = (req, res, next) => {
    res.header("access-control-allow-origin", "*")
    res.header("access-control-allow-headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.header("access-control-allow-methods", "GET, POST, PUT, DELETE")
    next()
}

/*
    CORS = CrossOrigin Resource Sharing

    Allows HTTP headers to handle access to selected resources from different origins.

    CORS adds new HTTP headers that we specify that lets a server describe what is permitted to read information from the client.

    * access-control-allow-origin allows incoming from any origin
    * access-control-allow-methods specifies allowed methods in preflight request
    * access-control-allow-headers is used in response with preflight, indication which HTTP header can be used during ACTUAL request
*/