const Category = require('../models/category.model');

const create = async (req, res) => {
    try {
        const {name} = req.body;
        const data = await Category.create({name});
        res.status(201).json(data);
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
};
const findAll = async (req, res) => {
    try {
        const {} = req.query;
        const filter = {};

        const datas = await Category.find(filter);
        res.status(200).json(datas);
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
};
const findOne = async (req, res) => {
    try {
        const {id} = req.params;
        const data = await Category.findById(id);
        res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
};

module.exports = {
    create,
    findAll,
    findOne
}