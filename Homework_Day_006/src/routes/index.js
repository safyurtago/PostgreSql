const admminRouter = require('./admin.route')
const serviceRouter = require('./service.route')
const blogRouter = require('./blog.route')
const feedbackRouter = require('./feedback.route')
const galleryRouter = require('./gallery.route')
const subscriberRouter = require('./subscriber.route')
const contactRouter = require('./contact.route')

module.exports = [
    admminRouter,
    serviceRouter,
    blogRouter,
    feedbackRouter,
    galleryRouter,
    subscriberRouter,
    contactRouter
]