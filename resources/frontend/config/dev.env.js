/* eslint-disable */
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PUSHER_KEY: '"SomeRandomKey"',
  PUSHER_CHANNEL: '"Test"',
  API_ENDPOINT: '"http://vivid-finance-api.dev/api/v1"'
});
