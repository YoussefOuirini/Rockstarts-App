const { Validator } = require('jsonschema');

const validator = new Validator();

/**
  * @function validateJSON - validates the status update JSON
  * @param jsonToValidate - the json that needs to be validated
  * @param schema - the properties of the JSON to be validated
  * @returns validator.validate() - indicates whether the JSON is valid
  */
exports.validateJSON = function validateInstance(jsonToValidate, schema) {
  return validator.validate(jsonToValidate, schema);
};
