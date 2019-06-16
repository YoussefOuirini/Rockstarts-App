const { artists } = require('./database.js');

exports.getBand = function getBand(req, res) {
  res.send(artists.data);
};
