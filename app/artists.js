const { artists } = require('./database.js');

exports.getArtist = function getArtist(req, res) {
  res.send(artists.find({ Name: req.body.name }));
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
