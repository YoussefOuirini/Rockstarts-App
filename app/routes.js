const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const { getBand } = require('./getBand.js');

/** @desc: list API calls * */
module.exports = (app) => {
  app.post('/getBand', jsonParser, getBand);
};
