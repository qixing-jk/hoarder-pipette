const path = require('path')

module.exports = {
  config: (config) => {
    config.resolve ??= {}
    config.resolve.alias ??= {}
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  },
}
