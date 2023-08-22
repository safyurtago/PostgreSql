const authQuery = require('../queries/auth.query');
const jwt = require('../utils/jwt')

const register = async (req, res) => {
    const {name, username, balance, password} = req.body;
    const data = await authQuery.register(name, username, balance, password);
    res.status(201).json({message: "Successfully registered", data: data});
}

const login = async (req, res) => {
    const {username, password} = req.body;
    const {id} = await authQuery.login(username, password);
    if (!id) { return res.status(404).json({message: "Not Found"}); }
    const token = jwt.sign(id)
    res.status(200).json({message: "Success Logged in", token: token})
}


module.exports = {
    register,
    login
}