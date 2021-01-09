import Ajv from 'ajv';
import JSONSchemaBridge from 'uniforms-bridge-json-schema';
var localize = require('ajv-i18n');

const ajv = new Ajv({ allErrors: true, useDefaults: true, coerceTypes: true });

export function createValidator(schema) {
  const validator = ajv.compile(schema);

  return (model) => {
    validator(model);

    if (validator.errors && validator.errors.length) {
      localize.ru(validator.errors);
      return { details: validator.errors };
    }
  };
}

export function createSchemaBridge(schema) {
  return new JSONSchemaBridge(schema, createValidator(schema));
}
