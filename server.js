var Server = require('bittorrent-tracker').Server

var server = new Server({
  udp: true,
  http: true,
  ws: true,
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
    console.log('WebSocket tracker listening on port ' + server.http.address().port)
  }
})
