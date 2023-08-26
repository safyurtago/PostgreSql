const authRouter = require('./auth.route')
const productRouter = require('./product.route');
const promo_codeRouter = require('./promo-code.route');
const historyRouter = require('./history.route');

module.exports = [
    authRouter,
    productRouter,
    promo_codeRouter,
    historyRouter
]