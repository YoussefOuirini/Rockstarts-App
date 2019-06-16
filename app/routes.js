const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const { getArtist, getAllArtists } = require('./artists.js');
const { getSong, getAllSongs } = require('./songs.js');

/** @desc: list API calls * */
module.exports = (app) => {
  app.get('/getAllArtists', jsonParser, getAllArtists);
  app.get('/getAllSongs', jsonParser, getAllSongs);
  app.post('/getArtist', jsonParser, getArtist);
  app.post('/getSong', jsonParser, getSong);
};
