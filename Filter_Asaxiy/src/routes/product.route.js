const { create, findAll, findOne, updateOne, deleteOne } = require('../controllers/product.controller');

const router = require('express').Router();



router.post('/products', create);
router.get('/products', findAll);
router.get('/products/:id', findOne);
router.put('/products/update/:id', updateOne);
router.delete('/products/delete/:id', deleteOne);

module.exports = router;