[![Build Status](https://travis-ci.org/tomzmtl/spark.svg?branch=master)](https://travis-ci.org/tomzmtl/spark)

# Spark

## Yet another React boilerplate

Spark is an opinionated WebApp boilerplate.

### Core components

* **React** UI library
* **Redux** State management
* **Mocha** Test framework
* **Chai** Assertion library

### Features

#### Express backend

Routing is handled by a minimalist express server.

#### Handlebars templating

Express uses `handlebars` as the default templating language.

#### Travis CI configuration

There is a very basic `.travis.yml` to setup the CI. Also see `mocha.travis.opts` for a specific Mocha configuration for Travis.

#### Ready for heroku

Event though there is no heroku-specific code in there, we are using a `postinstall` script to execute the build process. This makes it ready to be used on an heroku environment.

#### Copy assets to dist folder

All assets in `src/assets` will be copied in `/dist` automatically, on build and change.

Uses `copy-webpack-plugin`. See webpack configuration.
