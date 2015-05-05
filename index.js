'use strict';

var gitconfig = require('git-config-path');
var parse = require('parse-git-config');
var extend = require('extend-shallow');

module.exports = function(options) {
    options = extend({cwd: '/', path: gitconfig}, options);
    var config = parse.sync(options);

    if (typeof config === 'object' && config.hasOwnProperty('user')) {
        return config.user;
    }

    return null;
};
