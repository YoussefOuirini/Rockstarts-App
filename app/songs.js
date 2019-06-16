const { songs } = require('./database.js');
const { validateJSON } = require('./validateJSON');

exports.getSong = function getSong(req, res) {
  res.send(songs.find({ Genre: req.body.Genre }));
};

exports.getAllSongs = function getAllSongs(req, res) {
  res.send(songs.data);
};

function validateAddSong(jsonToValidate) {
  const schema = {
    type: 'object',
    properties: {
      Id: { type: 'integer', required: true },
      Name: { type: 'string', required: true },
      Year: { type: 'integer', required: true },
      Artist: { type: 'string', required: true },
      Shortname: { type: 'string', required: true },
      Bpm: { type: 'integer', required: true },
      Duration: { type: 'integer', required: true },
      Genre: { type: 'string', required: true },
      SpotifyId: { type: 'string', required: true },
      Album: { type: 'string', required: true },
    },
  };
  return validateJSON(jsonToValidate, schema);
}

exports.addSong = function addSong(req, res) {
  const songValidation = validateAddSong(req.body);
  if (!songValidation.valid) { res.send(`${songValidation} is invalid.`); return; }
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

exports.updateSong = function updateSong(req, res) {
  const songToUpdate = songs.findOne({ Id: req.body.Id });
  const updatedSong = Object.assign(songToUpdate, req.body.Update);
  songs.update(updatedSong);
  res.send(`Updated song to ${JSON.stringify(req.body.Update)}`);
};
