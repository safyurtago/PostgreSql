const CustomError = require("../utils/custom-error");
const { registerValidator, loginValidator } = require("../validations/auth.validations")
const {knex} = require('../database')
const jwt = require('../utils/jwt');

const {fetchOne, fetch} = require('../utils/pg')

const register = async (req, res, next) => {
    try {
        const {name, email, username, password, balance} = req.body
        const result = await registerValidator.register({name, email, username, password, balance});
        if (result.error) throw new CustomError(result.error.message, 400)
        
        const findusername = await knex('users').select('*').where('username', username)
        if (findusername.length) return res.status(409).json({message: "Username already registered"})

        const data = await knex('users').insert({name: name, email: email, username: username, password: password, balance: balance}).returning("*");
        res.status(201).json({message: "Successfully registered", data: data})
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const {username, password} = req.body
        const result = await loginValidator.login({username, password});
        if (result.error) throw new CustomError(result.error.message, 400)

        const findusername = await knex('users').select('*').where({username: username, password: password}).first()
        if (!findusername) return res.status(404).json({message: "Username not found"})
        const token = jwt.sign(findusername.id)
        res.status(200).json({message: "Successfully Logged In", token: token})
    } catch (error) {
        next(error)   
    }
}

module.exports = {
    login,
    register,
}