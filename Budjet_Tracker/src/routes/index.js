const authRouter = require('./auth.route');
const categoryRouter = require('./category.route');
const incomeRouter = require('./income.route');
const expenseRouter = require('./expense.route');

module.exports = [
    authRouter,
    categoryRouter,
    incomeRouter,
    expenseRouter,
]