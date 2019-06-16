const { Validator } = require('jsonschema');

const validator = new Validator();

/**
  * @function validateJSON - validates the status update JSON
  * @param jsonToValidate - the json that needs to be validated
  * @param schema - the properties of the JSON to be validated
  * @returns validator.validate() - indicates whether the JSON is valid
  */
function validateJSON(jsonToValidate, schema) {
  return validator.validate(jsonToValidate, schema);
}

exports.validateSongGenre = function validateSongGenre(jsonToValidate) {
  const schema = {
    type: 'object',
    properties: {
      Genre: { type: 'integer', required: true },
    },
  };
  return validateJSON(jsonToValidate, schema);
};

exports.validateAddSong = function validateAddSong(jsonToValidate) {
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
};

exports.validateDeleteSong = function validateDeleteSong(jsonToValidate) {
  const schema = {
    type: 'object',
    properties: {
      Id: { type: 'integer', required: true },
    },
  };
  return validateJSON(jsonToValidate, schema);
};
