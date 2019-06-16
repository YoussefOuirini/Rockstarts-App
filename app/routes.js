const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const { getArtist, getAllArtists, addArtist } = require('./artists.js');
const { getSong, getAllSongs } = require('./songs.js');

/** @desc: list API calls * */
module.exports = (app) => {
  app.get('/getAllArtists', jsonParser, getAllArtists);
  app.post('/getArtist', jsonParser, getArtist);
  app.post('/addArtist', jsonParser, addArtist);

  app.get('/getAllSongs', jsonParser, getAllSongs);
  app.post('/getSong', jsonParser, getSong);
};
