const {v4: uuid} = require('uuid');
const path = require('path');

const {serviceCreateValidator, serviceUpdateValidator} = require('../validations/service.validation')

const serviceQuery = require('../queries/service.query')

const createService = async (req, res, next) => {
    try {
        const {title, description} = req.body;
        const file = req.files?.photo

        const result = await serviceCreateValidator.create({title, description, file})
        if (result.error) throw new CustomError(result.error.message, 400);

        
        const photo = uuid() + path.extname(file.name)
        file.mv(process.cwd() + '/uploads/' + photo)

        const data = await serviceQuery.create(title, description, photo)
        
        res.status(201).json({message: "Successfully Created", data: data})
    } catch (error) {
      next(error);
    } 
};

const getServices = async (req, res, next) => {
    try {
        const services = await serviceQuery.find();

        res.status(200).json({message: "Services Found", data: services})
    } catch (error) {
        next(error)
    }
};

const getService = async (req, res, next) => {
    try {
        const {id} = req.params
        const service = await serviceQuery.findOne(id);
    
        res.status(200).json({message: "Service Found", data: service})
    } catch (error) {
        next(error)
    }
};

const updateService = async (req, res, next) => {
    try {
        const {title, description} = req.body
        const file = req.files?.photo
        const {id} = req.params
        
        const result = await serviceUpdateValidator.update({title, description, file, id})
        if (result.error) throw new CustomError(result.error.message, 400);

        const photo = uuid() + path.extname(file.name)
        file.mv(process.cwd() + '/uploads/' + photo)

        const data = await serviceQuery.update(title, description, photo, id)
        res.status(200).json({message: "Service Updated", data: data})
    } catch (error) {
    next(error)
    }
};

const deleteService = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await serviceQuery.delete(id);
        res.status(200).json({message: "Successfully Deleted", data})
    } catch (error) {
        next(error)
    }
};


module.exports = {
    createService,
    getService,
    getServices,
    updateService,
    deleteService
}