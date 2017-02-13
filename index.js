'use strict';

var gitconfig = require('git-config-path');
var parse = require('parse-git-config');
var extend = require('extend-shallow');

module.exports = function(options) {
    var opts = extend({cwd: '/', path: gitconfig}, options);
    var user = null;
    try {
        var config = parse.sync(opts);
        user = config && config.user ? config.user : null;
    } catch (err) {
        return null;
    }

    return user || null;
};
