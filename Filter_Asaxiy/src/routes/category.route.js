const { create, findAll, findOne } = require('../controllers/category.controller');


const router = require('express').Router();



router.post('/category', create);
router.get('/category', findAll);
router.get('/category/:id', findOne);


module.exports = router;