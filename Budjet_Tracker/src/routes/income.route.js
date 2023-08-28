const {Router} = require('express');
const { create, getAll, get } = require('../controllers/income.controller');
const { isAuth } = require('../middlewares/isAuth.middleware');


const router = Router();


router.post('/income', isAuth, create);
router.get('/income', isAuth, getAll);
router.get('/income/:id', isAuth, get);

module.exports = router;