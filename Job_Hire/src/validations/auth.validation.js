const Joi = require('joi');

class authValidator {
    static async register ({first_name, last_name, username, password}) {
        const {error} = Joi.object({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required(),
        }).validate({first_name, last_name, username, password});
        if (error) {
            return {error};
        }
        else {
            return {error:false};
        }
    };
    static async login ({username, password}) {
        const {error} = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required(),
        }).validate({username, password});
        if (error) {
            return {error};
        }
        else {
            return {error:false};
        }
    };      
}

module.exports = authValidator;