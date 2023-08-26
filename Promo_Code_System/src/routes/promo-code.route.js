const {Router} = require('express');
const { create, getAll, getOne, updateOne, deleteOne } = require('../controllers/promo-code.controller');


const router = Router();

router.post('/promocode/create', create)
router.get('/promocode', getAll)
router.get('/promocode/:id', getOne)
router.put('/promocode/update/:id', updateOne)
router.delete('/promocode/delete/:id', deleteOne)


module.exports = router;