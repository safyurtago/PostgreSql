const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const trxRoute = require("./transaction.route");
const pageRouter = require("./page.route");

module.exports = [authRoute, userRoute, trxRoute, pageRouter];
