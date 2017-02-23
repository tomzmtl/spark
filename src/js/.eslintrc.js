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
};
