const path = require('path')
const test = require('tape')
const {getGitUserInfo} = require('../')

test('should get correct user info from specified folder', async function (t) {
  const info = await getGitUserInfo({
    path: path.join(__dirname, 'fixtures', '.gitconfig'),
  })

  t.equals(info.name, 'Espen Hovlandsdal', 'name should be correct')
  t.equals(info.email, 'espen@hovlandsdal.com', 'email should be correct')
  t.equals(info.url, 'http://espen.codes/', 'url should be correct')
  t.end()
})

test('should return null on invalid .gitconfig', async function (t) {
  const info = await getGitUserInfo({
    path: path.join(__dirname, 'user-info.test.js'),
  })

  t.equals(info, null, 'invalid .gitconfig should return null')
  t.end()
})

test('does not crash if no `path` is given', async function (t) {
  await getGitUserInfo()
  t.end()
})

test('does not crash if `path` is given', async function (t) {
  await getGitUserInfo()
  t.end()
})

test('should return null on invalid path', async function (t) {
  t.equals(await getGitUserInfo({path: 123}), null, 'should be null')
  t.end()
})
