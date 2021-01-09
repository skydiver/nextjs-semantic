/**
 * Registration use case
 */
export default class Registration {
  /**
   * process use case
   * @param {*} request input params
   */
  async process(request) {
    const result = {};
    if (request.firstName || request.lastName) {
      result.greeting = `Hello, ${request.firstName} ${request.lastName}!`;
    }
    return result;
  }

  /*eslint no-unused-vars: ["error", { "args": "none" }]*/
  getSchema(request) {
    const schema = {
      title: 'Guest',
      type: 'object',
      properties: {
        firstName: { type: 'string', minLength: 1 },
        lastName: { type: 'string', minLength: 1 },
        workExperience: {
          description: 'Work experience in years',
          type: 'integer',
          minimum: 0,
          maximum: 100
        },
        check: { type: 'boolean' },
        zip: { type: 'string', pattern: '[0-9]{5}' },
        color: { type: 'string', enum: ['red', 'amber', 'green'] }
      },
      required: ['firstName', 'lastName']
    };
    return schema;
  }
}
