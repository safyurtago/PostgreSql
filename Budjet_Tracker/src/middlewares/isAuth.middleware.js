const { knex } = require('../../database')
const jwt = require('../utils/jwt')


const isAuth = (req, res, next) => {
    const token = req.headers?.token
    if (!token) return res.status(401).json({message: 'Unauthorized'});
    jwt.verify(token, async (err, result) => {
        if (err) return res.status(401).json({message: "Unauthorized"});
        const user = await knex('users').select('*').where({id: result}).first();
        if (!user) return res.status(401).json({message: 'Unauthorized'});
        req.userId = result
        next();
    })
}

module.exports = {isAuth}
