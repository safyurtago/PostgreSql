const Joi = require('joi');

class registerValidator {
    static async register ({name, email, username, password, balance}) {
        const {error} = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required(),
            balance: Joi.number().required()
        }).validate({name, email, username, password, balance})
        if (error) {
            return {error}
        } else {
            return {error: false}
        }
    }
}

class loginValidator {
    static async login ({username, password}) {
        const {error} = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required()
        }).validate({username, password})
        if (error) {
            return {error}
        } else {
            return {error: false}
        }
    }
}

module.exports = {
    registerValidator,
    loginValidator
};