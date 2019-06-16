const { artists } = require('./database.js');
const { validateId } = require('./validateJSON');


exports.getArtist = function getArtist(req, res) {
  res.send(artists.find({ Name: req.body.Name }));
};

exports.getAllArtists = function getAllArtists(req, res) {
  res.send(artists.data);
};

exports.addArtist = function addArtist(req, res) {
  // Add some verification here to check req.body
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
  const updateValidation = validateId(req.body);
  if (!updateValidation.valid) { res.send(`${updateValidation}`); return; }
  const artistToUpdate = artists.findOne({ Id: req.body.Id });
  const updatedArtist = Object.assign(artistToUpdate, req.body.Update);
  artists.update(updatedArtist);
  res.send(`Updated artist to ${JSON.stringify(req.body.Update)}`);
};
