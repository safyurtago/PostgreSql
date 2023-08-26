const {Router} = require('express');
const { create, getAll, getOne } = require('../controllers/history.controller');
const isAuth = require('../middlewares/isAuth.middleware');


const router = Router();

router.post('/history/create', isAuth, create)
router.get('/history',  getAll)
router.get('/history/:id', getOne)


module.exports = router;