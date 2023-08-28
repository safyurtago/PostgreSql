const { knex } = require('../../database');
const { CustomError } = require('../utils/custom-error');
const { categoryValidator } = require('../validations/category.validation');

const create = async (req, res, next) => {
    try {
        const {name} = req.body;
        const user_id = req.userId;
        const resultValidation = await categoryValidator.create({name});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400);}
        const findCategory = await knex('categories').select('*').where({name, user_id}).first();
        if (findCategory) { return res.status(409).json({message: "Category already exists", category: findCategory})}
        const category = await knex('categories').insert({name, user_id}).returning('*');
        res.status(201).json({message: "Category created", category});
    } catch (error) {
        next(error)
    }
}

const get = async (req, res, next) => {
    try {
        const {id} = req.params;
        const category = await knex('categories').select('*').where({id}).first();
        res.status(200).json({message: "Category found", category})
    } catch (error) {
        next(error);
    }
}

const getAll = async (req, res, next) => {
    try {
        const {user_id, category_name} = req.query
        let query = knex('categories');


        if (category_name) { query = query.where({name: category_name})};
        if (user_id) { query = query.where({user_id})};

        const data = await query
        res.status(200).json({message: "Data found", data})

    } catch (error) {
        next(error)
    }
}


module.exports = {
    create,
    getAll,
    get,
}