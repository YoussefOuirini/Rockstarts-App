const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/', express.static('swagger'));

app.listen(PORT);

app.get('/healthcheck', (req, res) => {
  res.send("I'm OK!");
});

const requiredRoute = require('./routes');

requiredRoute(app);
module.exports = app;
