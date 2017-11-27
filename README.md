# sanity-plugin-podcast

<img align="right" width="100" height="100" alt="Sanity Podcast Server Logo" src="https://github.com/kmelve/sanity-plugin-podcast/blob/master/src/static/sanity-podcast-logo.png?raw=true">

Podcast plugin for [Sanity](https://sanity.io/) that creates schema documents for podcasts and episodes with necessary iTunes data.

Note: You still need a service to translate the data output to a valid RSS-feed.
## Installation

```
sanity install podcast
```

## Usage

This plugin adds two document shchemas to your Sanity dataset: *Podcast* and *Episode*. You can create as many podcasts as you want, and attach episodes to them. This plugin supports cross-posting episodes to multiple podcast, but as for now the podcast episodes will have the same metadata for any podcast it is attached to.

In these schemas you will have most of the fields you'll need to publish a podcast. In order to actually get a podcast on the ether, you will need a service to generate and host a RSS-feed. If you don't want to make your own, you can either clone/fork the node-based [Sanity Podcast Server](https://github.com/kmelve/sanity-podcast-server) or just simply the free service by adding `https://www.sanitypodcastfeed.com` to your [CORS-settings](https://www.sanity.io/docs/front-ends/cors) and accessing your feed at `https://www.sanitypodcastfeed.com/<projectid>/<dataset>/<podcastslug>/rss`.

You can validate your podcast feed at [`castfeedvalidator.com/?url=https://www.sanitypodcastfeed.com/<projectid>/<dataset>/<podcastslug>/rss`](castfeedvalidator.com).

## License

MIT-licensed. See LICENSE.