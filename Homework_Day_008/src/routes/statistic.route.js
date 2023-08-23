const {Router} = require('express');
const { getStatistic } = require('../controllers/statistic.controller');
const { isAuth } = require('../middlewares/isAuth.middleware');


const router = Router();

router.get('/statistic', isAuth, getStatistic)


module.exports = router;