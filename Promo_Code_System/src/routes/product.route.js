const {Router} = require('express');
const { create, getAll, getOne, updateOne, deleteOne } = require('../controllers/product.controller');
const isAuth = require('../middlewares/isAuth.middleware');

const router = Router();

router.post('/products/create', create)
router.get('/products', getAll)
router.get('/products/:id', getOne)
router.put('/products/update/:id', updateOne)
router.delete('/products/delete/:id', deleteOne)

module.exports = router;