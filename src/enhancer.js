// @flow

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./enhancer.prod');
} else {
  module.exports = require('./enhancer.dev');
}
