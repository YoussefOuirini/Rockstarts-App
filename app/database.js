const Loki = require('lokijs');

const db = new Loki('rockstars.json');

const artists = db.addCollection('artists');
const songs = db.addCollection('songs');

const artistsJson = require('../data/artists.json');
const songsJson = require('../data/songs.json');

exports.importData = function importData() {
  artists.insert(artistsJson);
  songs.insert(songsJson);
};
