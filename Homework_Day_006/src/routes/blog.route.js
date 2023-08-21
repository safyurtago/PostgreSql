const {Router} = require('express')
const { createBlog, getBlogs, getBlog, updateBlog, deleteBlog } = require('../controllers/blog.controller')
const { isAdmin } = require('../middlewares/isAdmin.middleware')
const router = Router()

router.post('/blogs/create', createBlog)
router.get('/blogs', getBlogs)
router.get('/blogs/:id', getBlog)
router.put('/blogs/update/:id', isAdmin, updateBlog)
router.delete('/blogs/delete/:id', isAdmin, deleteBlog)

module.exports = router