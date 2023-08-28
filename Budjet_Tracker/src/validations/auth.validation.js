const Joi = require('joi');

class authValidator {
    static async register({fullname, username, password, balance}) {
        const {error} = Joi.object({
            fullname: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required(),
            balance: Joi.number().required()
        }).validate({fullname, username, password, balance});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    };
    static async login({username, password}) {
        const {error} = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required(),
        }).validate({username, password});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    };
    // static async update({fullname, username, password, balance}) {
    //     const {error} = Joi.object({
    //         fullname: Joi.string().required(),
    //         username: Joi.string().required(),
    //         password: Joi.string().required(),
    //         balance: Joi.number().required()
    //     }).validate({fullname, username, password, balance});
    //     if (error) {
    //         return {error};
    //     }
    //     else {
    //         return {error: false};
    //     }
    // };
}

module.exports = {authValidator}