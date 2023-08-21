const Joi = require('joi');

class galleryCreateValidator {
    static async create ({file}) {
        const {error} = Joi.object({
            file: Joi.required()
        }).validate({file})
        if (error) {
            return {error}
        }
        else {
            return {error: false}
        }
    }
}

class galleryUpdateValidator {
    static async update ({file, id}) {
        const {error} = Joi.object({
            file: Joi.required(),
            id: Joi.required()
        }).validate({file, id})
        if (error) {
            return {error}
        }
        else {
            return {error: false}
        }
    }
}


module.exports = {
    galleryCreateValidator,
    galleryUpdateValidator
}