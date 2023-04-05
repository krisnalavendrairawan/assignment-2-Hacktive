const { verifyToken } = require('../helpers/jwt')

function authentication(req, res, next) {
    try {
        let decoded = verifyToken(req.headers.token)
        req.decoded = decoded
        next()
    } catch (err) {
        res.status(401).json({
            message: 'You are not authorized'
        })
    }
}

module.exports = {
    authentication
}