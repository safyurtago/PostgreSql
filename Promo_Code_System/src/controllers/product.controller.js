const { knex } = require('../database');
const CustomError = require('../utils/custom-error');
const {productValidator} = require('../validations/product.validation')

const create = async (req, res, next ) => { 
    try {  
        const {name, price} = req.body
        const resultValidate = await productValidator.create({name, price});
        if (resultValidate.error) throw new CustomError(resultValidate.error.message, 400);

        const findproduct = await knex('products').select("*").where({name: name}).first();
        if (findproduct) return res.status(409).json({message: "Product already exists", data: findproduct})

        const product = await knex('products').insert({name, price}).returning("*");
        res.status(201).json({message: "Product created", data: product}) 
    } catch (error) {
      next(error);  
    } 
};

const getAll = async (req, res, next) => {
    const products = await knex('products').select("*");
    res.status(200).json({message: "Products Found", data: products})
};

const getOne = async (req, res, next) => {
    const {id} = req.params;
    const product = await knex('products').select("*").where({id: id});
    if (!product) res.status(404).json({message: "Product Not Found"})
    res.status(200).json({message: "Product Found", data: product})
};

const updateOne = async (req, res, next) => {
    const {id} = req.params;
    const {name, price} = req.body;
    const resultValidate = productValidator.update({name, price});
    if (resultValidate.error) throw new CustomError(resultValidate.error.message, 400);
    const product_id = await knex('products').select("*").where({id: id});
    if (!product_id) res.status(404).json({message: "Product Not Found"});
    const data = await knex('products').update({name: name, price: price}).where({id: id}).returning("*");
    res.status(200).json({message: "Successfully updated", data: data})
};

const deleteOne = async (req, res, next) => {
    const {id} = req.params
    const product_id = await knex('products').select("*").where({id: id});
    if (!product_id) res.status(404).json({message: "Product Not Found"});
    const data = await knex('products').delete().where({id: id}).returning("*");  
    res.status(200).json({message: "Successfully deleted", data: data})
};

module.exports = {
    create,
    getAll,
    getOne,
    updateOne,
    deleteOne,
}