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
    console.log('HTTP tracker at http://localhost:' + server.http.address().port + '/announce')
  }
  if (server.udp) {
    console.log('UDP tracker at udp://localhost:' + server.udp.address().port)
  }
  if (server.ws) {
    console.log('WebSocket tracker at ws://localhost:' + server.http.address().port)
  }
})
