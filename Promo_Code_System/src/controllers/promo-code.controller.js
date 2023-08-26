const { knex } = require('../database');
const CustomError = require('../utils/custom-error');
const {promocodeValidator} = require('../validations/promo-code.validation');


const create = async (req, res, next) => {
    try {
        const {price, code_number, user_id, expire_date} = req.body;
    
        const resultValidate = await promocodeValidator.create({price, code_number, user_id, expire_date});
        if (resultValidate.error) throw new CustomError(resultValidate.error.message, 400)

        // const user = knex('users').select("*").where({id: user_id});
        // if (!user) return res.status(404).json({message: "User not found in database for code: "});

        const findPromoCode = await knex('promo_codes').select("*").where({code_number: code_number}).first();
        if (findPromoCode) return res.status(409).json({message: "Promo Code already exists", data: findPromoCode});
        
        const data = await knex('promo_codes').insert({price, code_number, user_id, expire_date}).returning("*");
        return res.status(201).json({ message: "Successfully created", data: data});

    } catch (error) {
        next(error);
    }
}
const getAll = async (req, res, next) => {
    try {
        const codes = await knex('promo_codes').select("*");
        return res.status(201).json({message: "Codes Found", data: codes})
    } catch (error) {
        next(error)
    }
}
const getOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const code = await knex('promo_codes').select("*").where({id: id})
        return res.status(200).json({message: "Code found", data: code})
    } catch (error) {
        next(error)
    }
}
const updateOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {price, expire_date} = req.body
        const resultValidate = await promocodeValidator.update({price, expire_date});
        if (resultValidate.error) throw new CustomError(resultValidate.error.message, 400)
        const code = await knex('promo_codes').select("*").where({id: id})
        if (!code) return res.status(404).json({message: "Code Not Found"})
        const data = await knex('promo_codes').update({price: price, expire_date: expire_date}).where({id: id})
        return res.status(200).json({message: "updated", data: data})
    } catch (error) {
        next(error)
    }
}
const deleteOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const code = await knex('promo_codes').select("*").where({id: id})
        if (!code) return res.status(404).json({message: "Code Not Found"})
        const data = await knex('promo_codes').delete().where({id: id})
        return res.status(200).json({message: "deleted", data: data})
    } catch (error) {
        next(error)
    }
}


module.exports = {
    create,
    getAll,
    getOne,
    updateOne,
    deleteOne,
}