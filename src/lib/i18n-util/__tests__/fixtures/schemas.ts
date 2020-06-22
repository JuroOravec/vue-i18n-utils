export const emptySchema = {
  additionalProperties: false,
  properties: {},
  required: [],
  title: 'Translation File Schema',
  type: 'object',
};

export const fullSchemaLocale = {
  additionalProperties: false,
  properties: {
    message: {
      additionalProperties: false,
      properties: {
        hello: {
          type: 'string',
        },
        hi: {
          type: 'string',
        },
      },
      required: ['hi', 'hello'],
      type: 'object',
    },
  },
  required: ['message'],
  title: 'Translation File Schema',
  type: 'object',
};

export const fullSchemaMaster = {
  additionalProperties: false,
  patternProperties: {
    '^.*$': {
      type: 'object',
      required: ['message'],
      additionalProperties: false,
      properties: {
        message: {
          additionalProperties: false,
          properties: {
            hello: {
              type: 'string',
            },
            hi: {
              type: 'string',
            },
          },
          required: ['hi', 'hello'],
          type: 'object',
        },
      },
    },
  },
  title: 'Translation File Schema',
  type: 'object',
};

export const fullSchemaFromObject = {
  additionalProperties: false,
  properties: {
    de: {
      type: 'object',
      required: ['message'],
      additionalProperties: false,
      properties: {
        message: {
          additionalProperties: false,
          properties: {
            hello: {
              type: 'string',
            },
            hi: {
              type: 'string',
            },
          },
          required: ['hello', 'hi'],
          type: 'object',
        },
      },
    },
  },
  required: ['de'],
  title: 'Translation File Schema',
  type: 'object',
};
