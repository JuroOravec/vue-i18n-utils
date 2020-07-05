// https://github.com/typescript-eslint/typescript-eslint/blob/93fb661d803467d807d5bf1592dbc9ddfc5d4529/docs/getting-started/linting/README.md
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    '@typescript-eslint/explicit-function-return-type': ['warn'],
    '@typescript-eslint/ban-ts-ignore': ['warn'],
    '@typescript-eslint/no-use-before-define': ['warn'],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/camelcase': 'off',
  },
  overrides: [
    {
      files: ['src/lib/i18n-util/adaptor.ts'],
      rules: {
        'constructor-super': 'off',
      },
    },
    {
      files: ['**/types-abstract.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
