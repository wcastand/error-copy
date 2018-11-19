const { join, resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { transform } = require('./utils')
const stories_dir = resolve('./src')

module.exports = {
  webpack: (webpackConfig, { dev, defaultLoaders }) => {
    webpackConfig.module.rules.forEach(mod => {
      mod.include.push(process.cwd())
    })
    webpackConfig.plugins.push(
      new CopyWebpackPlugin([{ from: stories_dir, to: resolve('./stories/pages/'), transform }]),
    )

    return webpackConfig
  },
}
