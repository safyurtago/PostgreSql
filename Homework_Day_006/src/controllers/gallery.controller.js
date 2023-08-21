const {v4: uuid} = require('uuid');
const path = require('path');

const CustomError = require('../utils/custom-error');
const {galleryCreateValidator, galleryUpdateValidator} = require('../validations/gallery.validation')

const galleryQuery = require('../queries/gallery.query');

const createGallery = async (req, res, next) => {
    try {
        const file = req.files?.photo

        const result = await galleryCreateValidator.create({file});
        if (result.error) throw new CustomError(result.error.message, 400);

        const photo = uuid() + path.extname(file.name)
        file.mv(process.cwd() + '/uploads/' + photo)

        const data = await galleryQuery.create(photo)

        res.status(201).json({message: "Successfully created", data});
    } catch (error) {
        next(error);
    }
}

const getGalleries = async (req, res, next) => {
    try {
        const gallerys = await galleryQuery.find();
        res.status(200).json({message: "Gallerys Found", gallerys});
    } catch (error) {
        next(error)    
    }
}

const getGallery = async (req, res, next) => {
    try {
        const {id} = req.params
        const gallery = await galleryQuery.findOne(id)

        res.status(200).json({message: "Gallery Found", gallery})
    } catch (error) {
        next(error)
    }

}

const updateGallery = async (req, res, next) => {
    const {id} = req.params
    const file = req.files?.photo

    const result = await galleryUpdateValidator.update({file, id})
        if (result.error) throw new CustomError(result.error.message, 400);

        const photo = uuid() + path.extname(file.name)
        file.mv(process.cwd() + '/uploads/' + photo)

        const data = await galleryQuery.update(photo, id)
        res.status(200).json({message: "Gallery Updated", data: data})
}

const deleteGallery = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await galleryQuery.delete(id);
        res.status(200).json({message: "Successfully Deleted", data})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createGallery,
    getGallery,
    getGalleries,
    updateGallery,
    deleteGallery
}