const Joi = require('joi');

class expenseValidator {
    static async create ({category_id, amount}) {
        const {error} = Joi.object({
            category_id: Joi.string().required(),
            amount: Joi.number().required()
        }).validate({category_id, amount});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    };
}

module.exports = {expenseValidator};