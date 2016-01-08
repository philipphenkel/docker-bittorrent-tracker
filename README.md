### BitTorrent Tracker
Node.js Docker image containing a [BitTorrent tracker](https://wiki.theory.org/BitTorrentSpecification#Tracker_HTTP.2FHTTPS_Protocol).
The Node service is using Feross Aboukhadijeh's excellent [bittorrent-tracker](https://github.com/feross/bittorrent-tracker) library.

Besides HTTP and UDP the tracker also supports WebSockets.

### Usage

```console
docker run --rm -i -t henkel/bittorrent-tracker:latest
```

By default port 8000 is exposed. In order to run a detached tracker at port 8100, just call

```console
docker run --name bittorrent-tracker -d -p 8100:8000 henkel/bittorrent-tracker:latest
```

### Updating

The container is stateless and you can easily update to the latest version at any time:

```console
docker stop bittorrent-tracker
docker rm bittorrent-tracker
docker pull henkel/bittorrent-tracker:latest
```

Follow the "Usage" instructions to re-start service.

### License

MIT. Copyright (c) Philipp Henkel

