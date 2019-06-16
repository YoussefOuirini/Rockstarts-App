const { songs } = require('./database.js');
const { validateAddSong, validateId, validateSongGenre } = require('./validateJSON');

exports.getSong = function getSong(req, res) {
  const genreValidation = validateSongGenre(req.body);
  if (!genreValidation.valid) { res.send(`${genreValidation}`); return; }
  res.send(songs.find({ Genre: req.body.Genre }));
};

exports.getAllSongs = function getAllSongs(req, res) {
  res.send(songs.data);
};

exports.addSong = function addSong(req, res) {
  const songValidation = validateAddSong(req.body);
  if (!songValidation.valid) { res.send(`${songValidation}`); return; }
  const song = songs.find({ Name: req.body.Name });
  if (song.length > 0) {
    res.send(`${req.body.Name} is already in the database.`);
  } else {
    songs.insert(req.body);
    res.send(`${req.body.Name} added to songs.`);
  }
};

exports.deleteSong = function deleteSong(req, res) {
  const deletionValidation = validateId(req.body);
  if (!deletionValidation.valid) { res.send(`${deletionValidation}`); return; }
  songs.findAndRemove({ Id: req.body.Id });
  res.send(`Document with Id: ${req.body.Id} is removed`);
};

exports.updateSong = function updateSong(req, res) {
  const idValidation = validateId(req.body);
  if (!idValidation.valid) { res.send(`${idValidation}`); return; }
  const updateValidation = validateAddSong(req.body.Update);
  if (!updateValidation.valid) { res.send(`${updateValidation}`); return; }
  const songToUpdate = songs.findOne({ Id: req.body.Id });
  const updatedSong = Object.assign(songToUpdate, req.body.Update);
  songs.update(updatedSong);
  res.send(`Updated song to ${JSON.stringify(req.body.Update)}`);
};
