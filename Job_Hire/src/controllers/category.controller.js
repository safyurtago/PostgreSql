const categoryValidator = require('../validations/category.validation');
const CustomError = require('../utils/custom-error');
const Category = require('../models/category');


const createCategory = async (req, res, next) => {
    try {
        const {name} = req.body;
        const resultValidation = await categoryValidator.create({name});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400); };

        const findCategory = await Category.findOne({name});
        if (findCategory) { return res.status(409).json({message: "Category already exists", findCategory})};

        const newCategory = await Category.create({name});
        return res.status(201).json({message: "Category created", newCategory});
    } catch (error) {
        console.log(error);
        next(error);
    }
};
const findAllCategory = async (req, res, next) => {
    try {
        const categories = await Category.find();
        res.status(200).json({message: 'Categories found', categories});
    } catch (error) {
        next(error);
    }
};
const findOneCategory = async (req, res, next) => {
    try {
        const {id} = req.params;
        const category = await Category.findById(id);
        res.status(200).json({message: "Category found", category});
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createCategory,
    findAllCategory,
    findOneCategory,
}