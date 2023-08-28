const {Router} = require('express');
const { create, getAll, get } = require('../controllers/expense.controller');
const { isAuth } = require('../middlewares/isAuth.middleware');


const router = Router();


router.post('/expense', isAuth, create);
router.get('/expense', isAuth, getAll);
router.get('/expense/:id', isAuth, get);


module.exports = router;