const Joi = require('joi');

class subscriberCreateValidator {
    static async create ({email}) {
        const {error} = Joi.object({
            email: Joi.string().required()
        }).validate({email})
        if (error) {
            return {error}
        }
        else {
            return {error: false}
        }
    }
}

class subscriberUpdateValidator {
    static async update ({email, id}) {
        const {error} = Joi.object({
            email: Joi.string().required(),
            id: Joi.required()
        }).validate({email, id})
        if (error) {
            return {error}
        }
        else {
            return {error: false}
        }
    }
}


module.exports = {
    subscriberCreateValidator,
    subscriberUpdateValidator
}