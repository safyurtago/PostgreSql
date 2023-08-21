const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const config = require('../config')
const routes = require('./routes')
const errorHandler = require('./middlewares/error-handler')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload())
app.use('/api', routes);
app.use(errorHandler);


app.listen(config.port, () => {
    console.log("listening on port: " + config.port);
});