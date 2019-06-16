const { artists } = require('./database.js');

exports.getBand = function getBand(req, res) {
  res.send(artists.find({ Name: req.body.name }));
};
