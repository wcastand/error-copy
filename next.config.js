const { join, resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default

const { transform } = require('./utils')
const stories_dir = resolve('./src')

module.exports = {
  webpack: (webpackConfig, { dev, defaultLoaders }) => {
    webpackConfig.module.rules.forEach(mod => {
      mod.include.push(process.cwd())
    })
    webpackConfig.plugins.push(
      new CopyWebpackPlugin([{ from: stories_dir, to: resolve('./stories/pages/'), transform }]),
      new WatchExternalFilesPlugin({ files: [join(stories_dir, '**/*')] }),
    )

    return webpackConfig
  },
}
