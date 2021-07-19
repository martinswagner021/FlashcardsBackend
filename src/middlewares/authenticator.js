// Libraries Imports
const jwt = require('jsonwebtoken')
const verify = jwt.verify

// Authenticator Middleware
const Authenticator = (req, res, next) => {
    
    const { authorization } = req.headers

    // Check if there is any token provided 
    if(!authorization) return res.status(401).send({message: "You need to log in at first!"})
    
    // Split the token 
    const [ Bearer , token ] = authorization.split(' ', 2)

    // Check if the token is well formed
    if(!Bearer || !token) return res.status(401).send({message: "Malformed token!"})

    // Check if the token is still actually valid
    try {
        const { sub } = verify(token, process.env.JWT_SECRET)

        // Add the subject into the request object, so that we can access user's data after next() function
        req.user_id = sub.toString()
        
    } catch (error) {
        return res.status(401).end()
    }

    return next()
}

// Exports
module.exports = Authenticator