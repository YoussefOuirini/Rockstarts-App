const { artists } = require('./database.js');
const { validateId, validateAddArtist, validateArtistName } = require('./validateJSON');


exports.getArtist = function getArtist(req, res) {
  const nameValidation = validateArtistName(req.body);
  if (!nameValidation.valid) { res.send(`${nameValidation}`); return; }
  res.send(artists.find({ Name: req.body.Name }));
};

exports.getAllArtists = function getAllArtists(req, res) {
  res.send(artists.data);
};

exports.addArtist = function addArtist(req, res) {
  const artistValidation = validateAddArtist(req.body);
  if (!artistValidation.valid) { res.send(`${artistValidation}`); return; }
  const artist = artists.find({ Name: req.body.Name });
  if (artist.length > 0) {
    res.send(`${req.body.Name} is already in the database.`);
  } else {
    artists.insert(req.body);
    res.send(`${req.body.Name} added to artists.`);
  }
};

exports.deleteArtist = function deleteArtist(req, res) {
  const deletionValidation = validateId(req.body);
  if (!deletionValidation.valid) { res.send(`${deletionValidation}`); return; }
  artists.findAndRemove({ Id: req.body.Id });
  res.send(`Document with Id: ${req.body.Id} is removed`);
};

exports.updateArtist = function updateArtist(req, res) {
  const idValidation = validateId(req.body);
  if (!idValidation.valid) { res.send(`${idValidation}`); return; }
  const updateValidation = validateAddArtist(req.body.Update);
  if (!updateValidation.valid) { res.send(`${updateValidation}`); return; }
  const artistToUpdate = artists.findOne({ Id: req.body.Id });
  const updatedArtist = Object.assign(artistToUpdate, req.body.Update);
  artists.update(updatedArtist);
  res.send(`Updated artist to ${JSON.stringify(req.body.Update)}`);
};
