const {Router} = require('express')
const { createService, getServices, getService, updateService, deleteService } = require('../controllers/service.controller')
const { isAdmin } = require('../middlewares/isAdmin.middleware')

// const upload = require('../../uploads');

const router = Router()

router.post('/services/create', isAdmin, createService)
router.get('/services', getServices)
router.get('/services/:id', getService)
router.put('/services/update/:id', isAdmin, updateService)
router.delete('/services/delete', isAdmin, deleteService)


module.exports = router