const { songs } = require('./database.js');

exports.getSong = function getSong(req, res) {
  res.send(songs.find({ Genre: req.body.genre }));
};

exports.getAllSongs = function getAllSongs(req, res) {
  res.send(songs.data);
};

exports.addSong = function addSong(req, res) {
  // Add some verification here to check req.body
  const song = songs.find({ Name: req.body.Name });
  if (song.length > 0) {
    res.send(`${req.body.Name} is already in the database.`);
  } else {
    songs.insert(req.body);
    res.send(`${req.body.Name} added to songs.`);
  }
};

exports.deleteSong = function deleteSong(req, res) {
  songs.findAndRemove({ Id: req.body.Id });
  res.send(`Document with Id: ${req.body.Id} is removed`);
};
