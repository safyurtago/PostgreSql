const {Router} = require('express');

const isAuth = require('../middlewares/isAuth');
const isAdmin = require('../middlewares/isAdmin');
const currentUser = require('../middlewares/current-user');
const { createCategory, findOneCategory, findAllCategory } = require('../controllers/category.controller');

const router = Router();

router.post('/categories', isAuth, currentUser, isAdmin, createCategory);
router.get('/categories', findAllCategory);
router.get('/categories/:id', findOneCategory);


module.exports = router;