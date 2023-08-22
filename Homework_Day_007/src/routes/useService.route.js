const {Router} = require('express')

const { createUseService, getUseServices, getUseService } = require('../controllers/useService.controller')
const {isAuth, isOwner} = require('../middlewares/isAuth.middleware')

const router = Router()

router.post('/useServices/create', isAuth, createUseService)
router.get('/useServices', isAuth, getUseServices)
router.get('/useServices/:id', isAuth,  getUseService)


module.exports = router;