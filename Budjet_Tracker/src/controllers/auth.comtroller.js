const { CustomError } = require('../utils/custom-error');
const { authValidator } = require('../validations/auth.validation');
const { knex } = require('../../database/index'); 
const jwt = require('../utils/jwt');

const register = async (req, res, next) => {
    try {
        const {fullname, username, password, balance} = req.body
        const resultValidation = await authValidator.register({fullname, username, password, balance});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400);}
        const findUser = await knex('users').select('*').where({username}).first();
        if (findUser) { return res.status(409).json({message: "User already registered"})}
        const user = await knex('users').insert({fullname, username, password, balance}).returning('*');
        res.status(201).json({message: "User registered successfully", user: user});
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const {username, password} = req.body
        const resultValidation = await authValidator.login({username, password});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400);};
        const findUser = await knex('users').select('*').where({username, password}).first();
        if (!findUser) return res.status(404).json({message: "User not found"})
        const token = jwt.sign(findUser.id)
        res.status(200).json({message: "User found", token})
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
}