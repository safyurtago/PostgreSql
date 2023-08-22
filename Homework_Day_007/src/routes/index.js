const authRouter = require('./auth.route')
const serviceRouter = require('./service.route')
const useServiceRouter = require('./useService.route')

module.exports = [
    authRouter,
    serviceRouter,
    useServiceRouter
]