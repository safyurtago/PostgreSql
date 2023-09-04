const {Router} = require('express');

const isAuth = require('../middlewares/isAuth');
const currentUser = require('../middlewares/current-user');
const { create, findAll, findOne, deleteOne } = require('../controllers/applyJob.controller');


const router = Router();

router.post('/apply/create', isAuth, currentUser, create)
router.get('/apply', isAuth,  currentUser,findAll);
router.get('/apply/:id', isAuth, currentUser, findOne);
router.delete('/apply/delete/:id', isAuth, currentUser, deleteOne);


module.exports = router;