const jwt = require('../utils/jwt')
const adminQuery = require('../queries/admin.query')

const isAdmin = (req, res, next) => {
    const token = req.headers?.token
    if (!token) {
        return res.status(401).json({message: 'Unauthorized'})
    }
    jwt.verify(token, async (err, decoded) => {
        if (err) {
            return res.status(401).json({message: 'Unauthorized'})
        }
        req.userId = decoded; 
        const data = await adminQuery.findId(req.userId)
        if (!data) { 
            return res.status(401).json({message: 'Unauthorized'})
        }
        next()
    })
}

module.exports = {isAdmin}