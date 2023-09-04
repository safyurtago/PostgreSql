const Joi = require('joi');

class categoryValidator {
    static async create ({name}) {
        const {error} = Joi.object({
            name: Joi.string().required()
        }).validate({name});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    }
};

module.exports = categoryValidator;