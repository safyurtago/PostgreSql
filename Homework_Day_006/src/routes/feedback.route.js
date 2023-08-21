const {Router} = require('express')
const { createFeedback, getFeedbacks, getFeedback, updateFeedback, deleteFeedback } = require('../controllers/feedback.controller')
const { isAdmin } = require('../middlewares/isAdmin.middleware')
const router = Router()

router.post('/feedbacks/create', createFeedback)
router.get('/feedbacks', getFeedbacks)
router.get('/feedbacks/:id', getFeedback)
router.put('/feedbacks/update/:id', isAdmin, updateFeedback)
router.delete('/feedbacks/delete/:id', isAdmin, deleteFeedback)

module.exports = router