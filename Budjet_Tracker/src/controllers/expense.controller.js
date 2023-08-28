const { knex } = require('../../database');
const { CustomError } = require('../utils/custom-error');
const { expenseValidator } = require('../validations/expense.validation');

const create = async (req, res, next) => {
    // const trx = knex.transaction();
    try {
        const {category_id, amount} = req.body;
        const user_id = req.userId;
    
        const resultValidation = await expenseValidator.create({category_id, amount});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400)};
        const user = await knex('users').select('*').where({id: user_id}).first();
        await knex('users').update({balance: user.balance + amount}).where({id: user_id});
        const expense = await knex('expenses').insert({user_id, category_id, amount}).returning('*');
        // await trx.commit();
        res.status(201).json({message: 'Successfully created', data: expense});
    } catch (error) {
        // await trx.rollback();
        next(error);
    }
}

const get = async (req, res, next) => {
    try {
        const {id} = req.params
        const expense = await knex('expenses').select('*').where({id}).first();
        res.status(200).json({message: "expense found", expense});
    } catch (error) {
        next(error);
    }
}

const getAll = async (req, res, next) => {
    try {
        const {category, fromPrice, toPrice, date} = req.query;
        const user_id = req.userId;
        let query = knex('expenses')
        query = query.where({user_id})
        if (category) { query = query.where({category})}
        if (fromPrice) { query = query.where('amount', '>', fromPrice)}
        if (toPrice) { query = query.where('amount', '<', toPrice)}
        if (date) { query = query.orderBy('created_at', date)}
        const data = await query;
        res.status(200).json({message: "expenses found", data})
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    get,
    getAll,
}