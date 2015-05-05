'use strict';

var path = require('path');
var test = require('tape');
var userInfo = require('../');

test('should get correct user info from specified folder', function(t) {
    var info = userInfo({ path: path.join(__dirname, 'fixtures', '.gitconfig') });

    t.equals(info.name, 'Espen Hovlandsdal', 'name should be correct');
    t.equals(info.email, 'espen@hovlandsdal.com', 'email should be correct');
    t.equals(info.url, 'http://espen.codes/', 'url should be correct');
    t.end();
});

test('should return null on invalid .gitconfig', function(t) {
    var info = userInfo({ path: path.join(__dirname, 'user-info.test.js') });

    t.equals(info, null, 'invalid .gitconfig should return null');
    t.end();
});
