const User = require('../models/users');

const CurrentUser = async (req, res, next) => {
    try {
        const {verify: {id}} = req
        const user = await User.findById(id)
        req.user = user
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = CurrentUser;