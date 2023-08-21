const express = require('express');
const multer = require('multer');

const config = require('../config');

const app = express();

app.use(express.json())


app.listen(config.port, () => console.log(config.port));