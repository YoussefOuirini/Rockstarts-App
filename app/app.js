const express = require('express');
const {importData} = require('./database.js');

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/');

app.listen(PORT);

const requiredRoute = require('./routes');

requiredRoute(app);
module.exports = app;
