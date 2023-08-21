const {Router} = require('express')
const { createSubscriber, getSubscribers, getSubscriber, updateSubscriber, deleteSubscriber } = require('../controllers/subscriber.controller')
const { isAdmin } = require('../middlewares/isAdmin.middleware')



const router = Router()

router.post('/subscribers/create', isAdmin, createSubscriber)
router.get('/subscribers', isAdmin, getSubscribers)
router.get('/subscribers/:id', isAdmin, getSubscriber)
router.put('/subscribers/update/:id', isAdmin, updateSubscriber)
router.delete('/subscribers/delete/:id', isAdmin, deleteSubscriber)

module.exports = router