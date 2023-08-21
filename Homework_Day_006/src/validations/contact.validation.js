const Joi = require('joi');

class contactCreateValidator {
    static async create ({name, phonenumber, email, message}) {
        const {error} = Joi.object({
            name: Joi.string().required(),
            phonenumber: Joi.string().required(),
            email: Joi.string().required(),
            message: Joi.string().required()
        }).validate({name, phonenumber, email, message})
        if (error) {
            return {error}
        }
        else {
            return {error: false}
        }
    }
}

class contactUpdateValidator {
    static async update ({title, description, file, id}) {
        const {error} = Joi.object({
            name: Joi.string().required(),
            phonenumber: Joi.string().required(),
            email: Joi.string().required(),
            message: Joi.string().required(),
            id: Joi.required()
        }).validate({title, description, file, id})
        if (error) {
            return {error}
        }
        else {
            return {error: false}
        }
    }
}


module.exports = {
    contactCreateValidator,
    contactUpdateValidator
}