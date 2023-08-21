const {v4: uuid} = require('uuid');
const path = require('path');

const CustomError = require('../utils/custom-error');
const {subscriberCreateValidator, subscriberUpdateValidator} = require('../validations/subscriber.validation')

const subscriberQuery = require('../queries/subscriber.query');

const createSubscriber = async (req, res, next) => {
    try {
        const {email} = req.body

        const result = await subscriberCreateValidator.create({email});
        if (result.error) throw new CustomError(result.error.message, 400);

        const data = await subscriberQuery.create(email)

        res.status(201).json({message: "Successfully created", data});
    } catch (error) {
        next(error);
    }
}

const getSubscribers = async (req, res, next) => {
    try {
        const subscribers = await subscriberQuery.find();
        res.status(200).json({message: "Subscribers Found", subscribers});
    } catch (error) {
        next(error)    
    }
}

const getSubscriber = async (req, res, next) => {
    try {
        const {id} = req.params
        const subscriber = await subscriberQuery.findOne(id)

        res.status(200).json({message: "Subscriber Found", subscriber})
    } catch (error) {
        next(error)
    }

}

const updateSubscriber = async (req, res, next) => {
    const {id} = req.params
    const {email} = req.body

    const result = await subscriberUpdateValidator.update({email, id})
        if (result.error) throw new CustomError(result.error.message, 400);

 
        const data = await subscriberQuery.update(email, id)
        res.status(200).json({message: "Subscriber Updated", data: data})
}

const deleteSubscriber = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await subscriberQuery.delete(id);
        res.status(200).json({message: "Successfully Deleted", data})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createSubscriber,
    getSubscriber,
    getSubscribers,
    updateSubscriber,
    deleteSubscriber
}