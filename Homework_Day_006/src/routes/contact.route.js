const {Router} = require('express')

const {createContact, getContacts, getContact, updateContact, deleteContact} = require('../controllers/contact.controller');

const { isAdmin } = require('../middlewares/isAdmin.middleware')
const router = Router()

router.post('/contacts/create', isAdmin, createContact)
router.get('/contacts', isAdmin, getContacts)
router.get('/contacts/:id', isAdmin, getContact)
router.put('/contacts/update/:id', isAdmin, updateContact)
router.delete('/contacts/delete/:id', isAdmin, deleteContact)

module.exports = router