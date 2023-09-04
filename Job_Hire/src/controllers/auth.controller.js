const CustomError = require('../utils/custom-error');
const authValidator = require('../validations/auth.validation')
const User = require('../models/users')
const jwt = require('../utils/jwt')

const register = async (req, res, next) => {
    try {
        const {first_name, last_name, username, password} = req.body;
        const resultValidation = await authValidator.register({first_name, last_name, username, password});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400); };

        const findUser = await User.findOne({username});
        if (findUser) {return res.status(404).json({message: 'Username already registered'});}

        const newUser = await User.create({first_name, last_name, username, password});
        res.status(201).json({message: 'User registration successful', newUser});

    } catch (error) {
        next(error);
    }
};
const login = async (req, res, next) => {
    try {
        const {username, password} = req.body;

        const resultValidation = await authValidator.login({username, password});
        if (resultValidation.error) {throw new CustomError(resultValidation.error.message, 400)};

        const findUser = await User.findOne({username, password});
        if (!findUser) {return res.status(404).json({message: 'Username or Password is wrong'});}


        const token = jwt.generateToken({id: findUser._id})
        res.status(200).json({message: 'Logged in successfully', token});

    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
}