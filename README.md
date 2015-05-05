# git-user-info

[![npm version](http://img.shields.io/npm/v/git-user-info.svg?style=flat-square)](http://browsenpm.org/package/git-user-info)[![Build Status](http://img.shields.io/travis/rexxars/git-user-info/master.svg?style=flat-square)](https://travis-ci.org/rexxars/git-user-info)[![Coverage Status](http://img.shields.io/codeclimate/coverage/github/rexxars/git-user-info.svg?style=flat-square)](https://codeclimate.com/github/rexxars/git-user-info)[![Code Climate](http://img.shields.io/codeclimate/github/rexxars/git-user-info.svg?style=flat-square)](https://codeclimate.com/github/rexxars/git-user-info/)

Get the user info for the current user from git config, at the project or global scope

# Installation

```bash
$ npm install --save git-user-info
```

# Usage

```js
var gitUserInfo = require('git-user-info');

// Default path
console.log(gitUserInfo());

// Specific path
console.log(gitUserInfo({ path: '/path/to/.gitconfig' }))
```

# Notes

* Operations are synchronous (for now, feel free to contribute async version)
* Heavily inspired/stolen from [git-user-name](https://github.com/jonschlinkert/git-user-name)

# License

MIT-licensed. See LICENSE.