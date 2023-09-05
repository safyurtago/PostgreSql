const express = require('express');
const {connect} = require('mongoose');

const config = require('../config');
const routes = require('./routes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);


const sfr = async () => {
    await connect(config.dbURI)

    app.listen(config.port, () => {
        console.log('listening on port ' + config.port);
    });
};

sfr();