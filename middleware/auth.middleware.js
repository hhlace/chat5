const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.validateAuthentication = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send('Aithorization header is missing')
    }
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        return res.status(401).send('Aithorization token is missing')
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token')
        }
        req.decoded = decoded
        next()
    })
}
