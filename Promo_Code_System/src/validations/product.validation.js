const Joi = require('joi');

class productValidator {
    static async create ({name, price}) {
        const {error} = Joi.object({
            name: Joi.string().required(),
            price: Joi.number().required()
        }).validate({name, price});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    };
    static async update ({name, price}) {
        const {error} = Joi.object({
            name: Joi.string().required(),
            price: Joi.number().required()
        }).validate({name, price});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    };
}

module.exports = {productValidator};