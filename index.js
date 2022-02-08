const gitconfig = require('git-config-path')
const parse = require('parse-git-config')

async function getGitUserInfo(options = {}) {
  const opts = {cwd: '/', path: gitconfig, ...options}
  return new Promise((resolve, reject) => {
    parse(opts, (err, config) => {
      if (err) {
        reject(err)
        return
      }

      resolve(config && config.user ? config.user : null)
    })
  })
}

module.exports = {
  getGitUserInfo,
}
