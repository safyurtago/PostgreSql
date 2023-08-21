const {Router} = require('express')
const { createGallery, getGalleries, getGallery, updateGallery, deleteGallery } = require('../controllers/gallery.controller')



const router = Router()

router.post('/gallery/create', createGallery)
router.get('/gallery', getGalleries)
router.get('/gallery/:id', getGallery)
router.put('/gallery/update/:id', updateGallery)
router.delete('/gallery/delete/:id', deleteGallery)

module.exports = router