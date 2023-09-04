const Joi = require('joi');

class jobValidator {
    static async create ({title, description}) {
        const {error} = Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
        }).validate({title, description});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    }
};

module.exports = jobValidator;