const express = require('express');
const {importData} = require('./database.js');

importData();

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT);

const requiredRoute = require('./routes');

requiredRoute(app);
module.exports = app;
