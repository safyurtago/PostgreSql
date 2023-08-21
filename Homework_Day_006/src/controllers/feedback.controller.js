const {v4: uuid} = require('uuid');
const path = require('path');

const CustomError = require('../utils/custom-error');
const {feedbackCreateValidator, feedbackUpdateValidator} = require('../validations/feedback.validation')

const feedbackQuery = require('../queries/feedback.query');

const createFeedback = async (req, res, next) => {
    try {
        const {name, description} = req.body;
        const file = req.files?.photo

        const result = await feedbackCreateValidator.create({name, description, file});
        if (result.error) throw new CustomError(result.error.message, 400);

        const photo = uuid() + path.extname(file.name)
        file.mv(process.cwd() + '/uploads/' + photo)

        const data = await feedbackQuery.create(name, description, photo)

        res.status(201).json({message: "Successfully created", data});
    } catch (error) {
        next(error);
    }
}

const getFeedbacks = async (req, res, next) => {
    try {
        const feedbacks = await feedbackQuery.find();
        res.status(200).json({message: "Services Found", feedbacks});
    } catch (error) {
        next(error)    
    }
}

const getFeedback = async (req, res, next) => {
    try {
        const {id} = req.params
        const feedback = await feedbackQuery.findOne(id)

        res.status(200).json({message: "Service Found", feedback})
    } catch (error) {
        next(error)
    }

}

const updateFeedback = async (req, res, next) => {
    const {id} = req.params
    const {name, description} = req.body
    const file = req.files?.photo

    const result = await feedbackUpdateValidator.update({name, description, file, id})
        if (result.error) throw new CustomError(result.error.message, 400);

        const photo = uuid() + path.extname(file.name)
        file.mv(process.cwd() + '/uploads/' + photo)

        const data = await feedbackQuery.update(name, description, photo, id)
        res.status(200).json({message: "Feedback Updated", data: data})
}

const deleteFeedback = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await feedbackQuery.delete(id);
        res.status(200).json({message: "Successfully Deleted", data})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createFeedback,
    getFeedback,
    getFeedbacks,
    updateFeedback,
    deleteFeedback
}