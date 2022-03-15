const gitconfig = require('git-config-path')
const parse = require('parse-git-config')

async function getGitUserInfo(options = {}) {
  const opts = {cwd: '/', path: gitconfig(), ...options}
  const user = await getUserFromConfig(opts)
  if (user || options.path) {
    return user
  }

  // If the user didn't explicitly define a path, try the global git config as well
  return getUserFromConfig({...opts, path: gitconfig('global')})
}

function getUserFromConfig(options) {
  return new Promise((resolve, reject) => {
    parse(options, (err, config) => {
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
