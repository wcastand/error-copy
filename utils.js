const path = require('path')
const fs = require('fs')

const fixPaths = content => {
  const new_content = content.replace(/(from ['|"])([\.].*)(['|"])/gm, (match, p1, p2, p3) => {
    const old_path = path.resolve('./src', p2)
    const pages_dir = path.resolve(process.cwd(), './stories', 'pages')
    const new_path = path.relative(pages_dir, old_path)
    return `${p1}${new_path}${p3}`
  })
  return new_content
}

const transform = content => fixPaths(content.toString())

module.exports = { transform }
