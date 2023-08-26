const express = require('express');
const fileUplaod = require('express-fileupload');

const config = require('../config')
const routes = require('./routes')
const errHandler = require('./middlewares/error-handler');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUplaod())
app.use('/api', routes)
app.use(errHandler)

app.listen(config.port, () => {
    console.log("listening on port " + config.port);
});