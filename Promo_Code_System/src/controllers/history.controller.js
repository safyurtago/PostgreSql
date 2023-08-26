const { knex } = require('../database');
const CustomError = require('../utils/custom-error');
const {historyValidator} = require('../validations/history.validation');


const create = async (req, res, next) => {
    const {product_id} = req.body;
    const promo_code = req.body?.promo_code 
    const user_id = req.userId;
    const user = await knex('users').select("*").where({id: user_id}).first();
    const product = await knex('products').select("*").where({id: product_id}).first();
    if (user.balance < +product.price) return res.status(400).json({message: "balance is out of range for product"});
    user.balance = user.balance -  +product.price;

    const resultValidate = await historyValidator.create({product_id, promo_code});
    if (resultValidate.error) throw new CustomError(resultValidate.error.message, 400);
    let data;
    if (promo_code) {
        const code = await knex('promo_codes').select('*').where({code_number: promo_code}).first();
        if (!code) return res.status(404).json({message: "Promo code not found"});
        if (code.expire_date < code.created_at) return res.status(410).json({message: "Promo code expired"});
        const owner = await knex('users').select('*').where({id: code.user_id}).first();
        owner.balance = +owner.balance + +code.price
        await knex('users').update({balance: owner.balance}).where({id: code.user_id})
        data = await knex('history').insert({user_id: user.id, product_id, promo_code: promo_code}).returning("*")
    }
    else {
        data = await knex('history').insert({user_id: user.id, product_id}).returning("*")
    }

    await knex('users').update({balance: user.balance}).where({id: user.id})
    res.status(201).json({message: "Successfully Done", data: data});
};

const getOne = async (req, res, next) => {
    const {id} = req.params
    const data = await knex('history').select("*").where({id: id}).first();
    res.status(200).json({message: "Success", data})
};

const getAll = async (req, res, next) => {
    const data = await knex('history').select("*");
    res.status(200).json({message: "Success", data})
};


module.exports = {
    create,
    getAll,
    getOne,
}