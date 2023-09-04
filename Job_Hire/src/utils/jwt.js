const jwt = require('jsonwebtoken');

const {jwt_secret_key} = require('../../config');

const generateToken = (payload) => { return jwt.sign(payload, jwt_secret_key, {expiresIn: "24h"}); };
const verifyToken = (payload, callback) => { return jwt.verify(payload, jwt_secret_key, callback); };

module.exports = {
    generateToken,
    verifyToken
}