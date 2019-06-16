const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const {getBand} = require('../getBand');

/** @desc: list API calls * */
module.exports = (app) => {
  app.get('/getBand', getBand);
};