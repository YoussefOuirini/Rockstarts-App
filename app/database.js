const Loki = require('lokijs');

const db = new Loki('rockstars.json');

const artists = db.addCollection('artists');
const songs = db.addCollection('songs');

const artistsJson = require('../data/artists.json');
const songsJson = require('../data/songs.json');

const metalSongs = songsJson.filter(song => song.Genre === 'Metal');
const metalSongsBefore2016 = metalSongs.filter(metalSong => metalSong.Year < 2016);
const metalArtists = artistsJson.filter(artist => metalSongs.find(song => artist.Name === song.Artist));

exports.importData = function importData() {
  artists.insert(metalArtists);
  songs.insert(metalSongsBefore2016);
};

exports.artists = artists;
exports.songs = songs;
