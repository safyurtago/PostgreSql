const router = require('express').Router();
const User = require('../models/User.model')



router.get('/pages', async (req, res) => {
    const {from, until} = req.query;
    const users = await User.find().skip(from).limit(until)
    
    res.status(200).json(users);
})


module.exports = router