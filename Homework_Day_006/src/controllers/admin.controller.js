const CustomError = require('../utils/custom-error');
const {adminValidator, adminLoginValidator} = require('../validations/admin.validation')
const adminQuery = require('../queries/admin.query');
const jwt = require('../utils/jwt')

const register = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;
        const result = await adminValidator.register({name, email, password});
        if (result.error) throw new CustomError(result.error.message, 400);
        
        const data = await adminQuery.regiser(name, email, password);
        
        res.status(201).json({message: "Successfully registered", data: data});
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const {name, password} = req.body;
        const result = await adminLoginValidator.login({name, password});
        if (result.error) throw new CustomError(result.error.message, 400);

        const {id} = await adminQuery.login(name, password);
        if (!id) res.status(404).json({message: "NOT FOUND", status: 404})
        const token = jwt.sign(id)
        res.status(200).json({message: "Succesfulley Logged In", token});

    } catch (error) {
        next(error);
    }
}

module.exports = {
    register,
    login
}