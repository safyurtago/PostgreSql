const jwt = require('../utils/jwt')
const authQuery = require('../queries/auth.query')
const serviceQuery = require('../queries/service.query')

const isAuth = async (req, res, next) => {
    const token = req.headers?.token;
    if (!token) {
        return res.status(401).json({message: "Unauthorized"});
    }
    jwt.verify(token, async (err, decoded) => {
        if (err) {
            return res.status(401).json({message: "Unauthorized"});
        }
        req.userId = decoded;
        const data = await authQuery.findId(req.userId)
        if (!data) return res.status(401).json({message: "Unauthorized"});

        next()
    })
}

const isOwner = async (req, res, next) => {
    const {id} = req.params
    const {owner_id} = await serviceQuery.ownerId(id)
    if (owner_id != req.userId) return res.status(403).json({message: "You are not allowed to access this"});
    next()
}

module.exports = {
    isAuth,
    isOwner
}