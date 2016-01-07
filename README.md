# docker-bittorrent-tracker
Node.js Docker image containing a [BitTorrent tracker](https://wiki.theory.org/BitTorrentSpecification#Tracker_HTTP.2FHTTPS_Protocol).
The Node service is using Feross Aboukhadijeh's excellent [bittorrent-tracker](https://github.com/feross/bittorrent-tracker) library.

Besides HTTP and UDP the tracker also supports WebSockets.

### Usage
By default port 8000 is exposed. In order to run a tracker at port 8100, just call

```console
docker run --rm  -i -t -p 8100:8000 henkel/bittorrent-tracker:latest
```

### License

MIT. Copyright (c) Philipp Henkel
