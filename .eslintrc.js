module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
  },
  globals: {},
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
  },
};
