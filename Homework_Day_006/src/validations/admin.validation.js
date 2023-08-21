const Joi = require('joi');

class adminValidator {
    static async register ({name, email, password}) {
        const {error} = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required()
        }).validate({name, email, password})
        if (error) {
            return {error}
        } else {
            return {error: false}
        }
    }
}

class adminLoginValidator {
    static async login ({name, password}) {
        const {error} = Joi.object({
            name: Joi.string().required(),
            password: Joi.string().required()
        }).validate({name, password})
        if (error) {
            return {error}
        } else {
            return {error: false}
        }
    }
}

module.exports = {
    adminValidator,
    adminLoginValidator
};