const workerQuery = require('../queries/worker.query')

const isAllowed = async (req, res, next) => {
    if (!req.user.role)   return res.status(403).json({message: 'You are not allowed to access this '})
    next()
}

module.exports = {
    isAllowed
}