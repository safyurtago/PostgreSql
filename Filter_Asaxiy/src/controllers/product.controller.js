const Product = require('../models/product.model');

const create = async (req, res) => {
    try {
        const {name, description, price, amount, category} = req.body;
        const newProduct = await Product.create({name, description, price, amount, category});
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
};
const findAll = async (req, res) => {
    try {
        const {name, category} = req.query;
        const filter = {};

        if (name) {
            filter.name = name
        }
        if (category) {
            filter.category = category
        }
        const products = await Product.find(filter);
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
};
const findOne = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
};
const updateOne = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, description, price, amount} = req.body;
        const newProduct = await Product.findByIdAndUpdate(id, {
            '$set': {
                name,
                description,
                price,
                amount
            }
        })
        res.status(200).json(newProduct);
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
};
const deleteOne = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
};

module.exports = {
    create,
    findAll,
    findOne,
    updateOne,
    deleteOne
}