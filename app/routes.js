const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const { getArtist } = require('./getArtist.js');
const { getSong } = require('./getSong.js');

/** @desc: list API calls * */
module.exports = (app) => {
  app.post('/getArtist', jsonParser, getArtist);
  app.post('/getSong', jsonParser, getSong);
};
