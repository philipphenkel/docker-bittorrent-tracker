// Copyright (C) 2016 Philipp Henkel
// Licensed under the MIT License (MIT). See LICENSE file for more details.

var filter = require('../filter')
var test = require('tape')

test('isTorrentAllowed', function (t) {
  t.plan(9)

  t.equal(filter.isTorrentAllowed('aaa', ['aaa', 'bbb']), true)
  t.equal(filter.isTorrentAllowed('bbb', ['aaa', 'bbb']), true)
  t.equal(filter.isTorrentAllowed('ccc', ['aaa', 'bbb']), false)
  t.equal(filter.isTorrentAllowed('',    ['aaa', 'bbb']), false)
  t.equal(filter.isTorrentAllowed(null,  ['aaa', 'bbb']), false)

  t.equal(filter.isTorrentAllowed('aaa', []), true)
  t.equal(filter.isTorrentAllowed('',    []), true)
  t.equal(filter.isTorrentAllowed(null,  []), true)

  t.equal(filter.isTorrentAllowed('aaa', null), true)
})
