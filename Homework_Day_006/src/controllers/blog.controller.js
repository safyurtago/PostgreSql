const {v4: uuid} = require('uuid');
const path = require('path');

const CustomError = require('../utils/custom-error');
const {blogCreateValidator, blogUpdateValidator} = require('../validations/blog.validation')

const blogQuery = require('../queries/blog.query');

const createBlog = async (req, res, next) => {
    try {
        const {title, description} = req.body;
        const file = req.files?.photo

        const result = await blogCreateValidator.create({title, description, file});
        if (result.error) throw new CustomError(result.error.message, 400);

        const photo = uuid() + path.extname(file.name)
        file.mv(process.cwd() + '/uploads/' + photo)

        const data = await blogQuery.create(title, description, photo)

        res.status(201).json({message: "Successfully created", data});
    } catch (error) {
        next(error);
    }
}

const getBlogs = async (req, res, next) => {
    try {
        const blogs = await blogQuery.find();
        res.status(200).json({message: "Services Found", blogs});
    } catch (error) {
        next(error)    
    }
}

const getBlog = async (req, res, next) => {
    try {
        const {id} = req.params
        const blog = await blogQuery.findOne(id)

        res.status(200).json({message: "Service Found", blog})
    } catch (error) {
        next(error)
    }

}

const updateBlog = async (req, res, next) => {
    const {id} = req.params
    const {title, description} = req.body
    const file = req.files?.photo

    const result = await blogUpdateValidator.update({title, description, file, id})
        if (result.error) throw new CustomError(result.error.message, 400);

        const photo = uuid() + path.extname(file.name)
        file.mv(process.cwd() + '/uploads/' + photo)

        const data = await blogQuery.update(title, description, photo, id)
        res.status(200).json({message: "Blog Updated", data: data})
}

const deleteBlog = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await blogQuery.delete(id);
        res.status(200).json({message: "Successfully Deleted", data})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createBlog,
    getBlog,
    getBlogs,
    updateBlog,
    deleteBlog
}