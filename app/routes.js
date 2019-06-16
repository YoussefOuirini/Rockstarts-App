const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const {
  getArtist, getAllArtists, addArtist, deleteArtist,
} = require('./artists.js');
const {
  getSong, getAllSongs, addSong, deleteSong, updateSong,
} = require('./songs.js');

/** @desc: list API calls * */
module.exports = (app) => {
  app.get('/getAllArtists', jsonParser, getAllArtists);
  app.post('/getArtist', jsonParser, getArtist);
  app.post('/addArtist', jsonParser, addArtist);
  app.delete('/deleteArtist', jsonParser, deleteArtist);

  app.get('/getAllSongs', jsonParser, getAllSongs);
  app.post('/getSong', jsonParser, getSong);
  app.post('/addSong', jsonParser, addSong);
  app.delete('/deleteSong', jsonParser, deleteSong);
  app.put('/updateSong', jsonParser, updateSong);
};
