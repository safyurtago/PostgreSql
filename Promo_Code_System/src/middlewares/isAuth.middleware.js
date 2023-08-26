const jwt = require('../utils/jwt')
const {knex} = require('../database/index')

const isAuth = (req, res, next) => {
    const token = req.headers?.token
    if (!token) {
        return res.status(401).json({message: 'Unauthorized'})
    }
    jwt.verify(token, async (err, decoded) => {
        if (err) {
            return res.status(401).json({message: 'Unauthorized'})
        }
        req.userId = decoded; 
        const data = await knex('users').select('*').where({id: decoded})
        if (!data) { 
            return res.status(401).json({message: 'Unauthorized'})
        }
        next()
    })
}

module.exports = isAuth