const express = require('express');
const {importData} = require('./database.js');

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/');

app.listen(PORT);

app.get('/healthcheck', (req, res) => {
  res.send("I'm OK!");
});

const requiredRoute = require('./routes');

requiredRoute(app);
module.exports = app;
