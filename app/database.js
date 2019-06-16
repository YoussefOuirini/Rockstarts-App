const Loki = require('lokijs');

const db = new Loki('rockstars.json');

const artists = db.addCollection('artists');
const songs = db.addCollection('songs');

artists.insert('../data/artists.json');
songs.insert('../data/songs.json');

exports.importData = function importData() {
  artists.insert('../data/artists.json');
  songs.insert('../data/songs.json');
};
