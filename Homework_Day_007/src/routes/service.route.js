const {Router} = require('express');
const { createService, getServices, getService, updateService, deleteService } = require('../controllers/service.controller');

const {isAuth, isOwner} = require('../middlewares/isAuth.middleware');
const { createvalidator } = require('../validations/service.validation');

const router = Router()

router.post('/services/create', isAuth, createvalidator, createService)
router.get('/services', getServices)
router.get('/services/:id', getService)
router.put('/services/update/:id', isAuth, isOwner, createvalidator, updateService)
router.delete('/services/delete/:id', isAuth, isOwner, deleteService)


module.exports = router