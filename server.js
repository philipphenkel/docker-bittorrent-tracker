// Copyright (C) 2016 Philipp Henkel
// Licensed under the MIT License (MIT). See LICENSE file for more details.

var config = require('./config.js');
var filter = require('./filter')
var Server = require('bittorrent-tracker').Server

var server = new Server({
  udp: config.get('udp'),
  http: config.get('http'),
  ws: config.get('websocket'),
  stats: config.get('stats'),
  filter: function (infoHash, params, cb) {
    var whitelist = config.get('torrentWhitelist')
    cb(filter.isTorrentAllowed(infoHash, whitelist))
  }
})

server.on('error', function (err) {
  console.error('error: ' + err.message)
})

server.on('warning', function (err) {
  console.warn('warning: ' + err.message)
})

server.listen(8000, function () {
  if (server.http) {
    console.log('HTTP tracker listening on port ' + server.http.address().port)
  }
  if (server.udp) {
    console.log('UDP tracker listening on port ' + server.udp.address().port)
  }
  if (server.ws) {
    console.log('WebSocket tracker listening on port ' + server.ws.address().port)
  }
})

console.log('configuration = ' + config);
