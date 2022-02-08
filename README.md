# git-user-info

[![npm version](http://img.shields.io/npm/v/git-user-info.svg?style=flat-square)](http://browsenpm.org/package/git-user-info)

Get the user info for the current user from git config, at the project or global scope

# Installation

```bash
$ npm install --save git-user-info
```

# Usage

```js
var {getGitUserInfo} = require('git-user-info')

// Default path
console.log(getGitUserInfo())

// Specific path
console.log(getGitUserInfo({path: '/path/to/.gitconfig'}))
```

# Notes

- Heavily inspired by [git-user-name](https://github.com/jonschlinkert/git-user-name)

# License

MIT-licensed. See LICENSE.
