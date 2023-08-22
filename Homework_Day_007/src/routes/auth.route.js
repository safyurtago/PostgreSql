const {Router} = require('express');

const { register, login } = require('../controllers/auth.controller');
const {authRegisterValidator} = require('../validations/auth.validation')


const router = Router()

router.post('/auth/register', authRegisterValidator, register)
router.post('/auth/login', login)

module.exports = router;