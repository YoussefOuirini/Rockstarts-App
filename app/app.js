const express = require('express');
const {importData} = require('./database.js');

importData();

const app = express();
const PORT = 8080;

app.listen(PORT);

const routes = require('./routes');

routes(app);
module.exports = app;
