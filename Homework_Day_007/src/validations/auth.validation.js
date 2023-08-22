const Joi = require('joi');

const authRegisterValidator = async (req, res, next) => {
    const {name, username, balance, password} = req.body;

    const {error} = Joi.object({
        name: Joi.string().required(),
        username: Joi.string().required(),
        balance: Joi.number().required(),
        password: Joi.string().required()
    }).validate({name, username, balance, password});
    if (error) { 
        res.status(401).json({message: error.message});
    }
    next();
}

module.exports = {authRegisterValidator};