const Joi = require('joi');

class serviceCreateValidator {
    static async create ({title, description, file}) {
        const {error} = Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            file: Joi.required()
        }).validate({title, description, file})
        if (error) {
            return {error}
        }
        else {
            return {error: false}
        }
    }
}

class serviceUpdateValidator {
    static async update ({title, description, file, id}) {
        const {error} = Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            file: Joi.required(),
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
    serviceCreateValidator,
    serviceUpdateValidator
}