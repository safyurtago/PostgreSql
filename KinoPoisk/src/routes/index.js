const authRouter = require("./auth.route");
const filmRouter = require("./film.route");
const userRouter = require("./user.route");
const orderRouter = require("./order.route");

module.exports = [authRouter, filmRouter, userRouter, orderRouter];
