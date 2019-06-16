const { songs } = require('./database.js');

exports.getSong = function getSong(req, res) {
  res.send(songs.find({ Genre: req.body.genre }));
};

exports.getAllSongs = function getAllSongs(req, res) {
  res.send(songs.data);
};
