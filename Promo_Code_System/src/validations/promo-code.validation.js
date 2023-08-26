const Joi = require('joi');

class promocodeValidator {
    static async create ({price, code_number, user_id, expire_date}) {
        const {error} = Joi.object({
            price: Joi.number().required(),
            code_number: Joi.string().required(),
            user_id: Joi.string().required(),
            expire_date: Joi.string().required()
        }).validate({price, code_number, user_id, expire_date});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    };
    static async update ({price, expire_date}) {
        const {error} = Joi.object({
            price: Joi.number().required(),
            expire_date: Joi.string().required()
        }).validate({price, expire_date});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    };
}

module.exports = {promocodeValidator};