const express = require('express');
const {connect} = require('mongoose');

const config = require('../config');
const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler')

const app = express();

app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/src/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes)
app.use(errorHandler)


const sfr = async () => {

    await connect(`${config.mongo_url}`);

    app.listen(config.port, ()=> {
        console.log("listening on port " + config.port);   
    });
};

sfr();