const authRouter = require('./auth.route');
const jobRouter = require('./job.route');
const categoryRouter = require('./category.route');
const applyJobRouter = require('./applyJob.route');

module.exports = [
    authRouter, 
    jobRouter,
    categoryRouter,
    applyJobRouter,
];