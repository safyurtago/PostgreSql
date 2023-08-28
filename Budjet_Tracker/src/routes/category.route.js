const {Router} = require('express');
const { create, getAll, get } = require('../controllers/category.controller');
const { isAuth } = require('../middlewares/isAuth.middleware')


const router = Router();

router.post('/category', isAuth, create)
router.get('/category', getAll) 
router.get('/category/:id', get)



module.exports = router;