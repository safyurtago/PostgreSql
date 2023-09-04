const {Router} = require('express');

const isAuth = require('../middlewares/isAuth');
const currentUser = require('../middlewares/current-user');
const { createJob, findAllJobs, findOneJob, updateJob, deleteJob } = require('../controllers/job.controller');

const router = Router();

router.post('/jobs/create', isAuth, currentUser, createJob);
router.get('/jobs', findAllJobs);
router.get('/jobs/:id', findOneJob);
router.put('/jobs/update/:id', isAuth, currentUser, updateJob);
router.delete('/jobs/delete/:id', isAuth, currentUser, deleteJob);

module.exports = router;