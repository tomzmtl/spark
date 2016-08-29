module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
};
