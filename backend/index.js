const express = require("express");
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
AWS.config.loadFromPath('./aws-config.json');
const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use('/api', require('./controllers'));

app.listen(PORT, () => { console.log(`Running on port: ${PORT}`) });
