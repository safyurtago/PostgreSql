const Joi = require('joi');

const createvalidator = (req, res, next) => {
    const {name, price} = req.body;
    const {error} = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required()
    }).validate({name, price});
    if (error) { 
        res.status(401).json({message: error.message});
    }
    next();
}

module.exports = {
    createvalidator,
    
}