const {v4: uuid} = require('uuid');
const path = require('path');

const CustomError = require('../utils/custom-error');
const {contactCreateValidator, contactUpdateValidator} = require('../validations/contact.validation')

const contactQuery = require('../queries/contact.query');

const createContact = async (req, res, next) => {
    try {
        const {name, phonenumber, email, message} = req.body;

        const result = await contactCreateValidator.create({name, phonenumber, email, message});
        if (result.error) throw new CustomError(result.error.message, 400);

        const data = await contactQuery.create(name, phonenumber, email, message)

        res.status(201).json({message: "Successfully created", data});
    } catch (error) {
        next(error);
    }
}

const getContacts = async (req, res, next) => {
    try {
        const blogs = await contactQuery.find();
        res.status(200).json({message: "Contacts Found", contacts});
    } catch (error) {
        next(error)    
    }
}

const getContact = async (req, res, next) => {
    try {
        const {id} = req.params
        const blog = await contactQuery.findOne(id)

        res.status(200).json({message: "Contact Found", contact})
    } catch (error) {
        next(error)
    }

}

const updateContact = async (req, res, next) => {
    const {id} = req.params
    const {name, phonenumber, email, message} = req.body

    const result = await contactUpdateValidator.update({name, phonenumber, email, message, id})
        if (result.error) throw new CustomError(result.error.message, 400);


        const data = await contactQuery.update(name, phonenumber, email, message, id)
        res.status(200).json({message: "Contact Updated", data: data})
}

const deleteContact = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await contactQuery.delete(id);
        res.status(200).json({message: "Successfully Deleted", data})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createContact,
    getContact,
    getContacts,
    updateContact,
    deleteContact
}