const e = require('express');
const Joi = require('joi');

class historyValidator {
    static async create ({product_id, promo_code}) {
        const {error} = Joi.object({
            product_id: Joi.string().required(),
            promo_code: Joi.string()
        }).validate({product_id, promo_code})
        if (error) {
            return {error}
        }
        else {
            return {error: false}
        }
    }
}

module.exports = {historyValidator};