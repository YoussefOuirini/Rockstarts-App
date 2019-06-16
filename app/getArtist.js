const { artists } = require('./database.js');

exports.getArtist = function getArtist(req, res) {
  res.send(artists.find({ Name: req.body.name }));
};
