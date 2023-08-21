const Joi = require('joi');

class feedbackCreateValidator {
    static async create ({name, description, file}) {
        const {error} = Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            file: Joi.required()
        }).validate({name, description, file})
        if (error) {
            return {error}
        }
        else {
            return {error: false}
        }
    }
}

class feedbackUpdateValidator {
    static async update ({name, description, file, id}) {
        const {error} = Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            file: Joi.required(),
            id: Joi.required()
        }).validate({name, description, file, id})
        if (error) {
            return {error}
        }
        else {
            return {error: false}
        }
    }
}


module.exports = {
    feedbackCreateValidator,
    feedbackUpdateValidator
}