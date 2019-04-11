# sanity-plugin-podcast

<img align="right" width="100" height="100" alt="Sanity Podcast Server Logo" src="https://github.com/kmelve/sanity-plugin-podcast/blob/master/src/static/sanity-podcast-logo.png?raw=true">

Podcast plugin for [Sanity](https://sanity.io/) that creates schemas for podcasts and episodes with necessary iTunes data. You can make as many podcasts with as many episodes as you want. You can also cross publish episodes to multiple podcasts (if that ever makes sense). Sanity also takes care of the file hosting with CDNs that makes your episodes download fast wherever your listeners are.

Note: [You still need a service to translate the data output to a valid RSS-feed](#get-the-podcast-on-the-ether-headphones). 

## Installation :package:

```
sanity install podcast
```

## Usage :wrench:

This plugin adds two document shchemas to your Sanity dataset: *Podcast* and *Episode*. You can create as many podcasts as you want, and attach episodes to them. This plugin supports cross-posting episodes to multiple podcast, but as for now the podcast episodes will have the same metadata for any podcast it is attached to.


## Get the podcast on the ether! :headphones:

In these schemas you will have most of the fields you'll need to publish a podcast. In order to actually get a podcast on the ether, you will need a service to generate and host a RSS-feed. If you don't want to make your own, you can either clone/fork the node-based [Sanity Podcast Server](https://github.com/kmelve/sanity-podcast-server) or just simply use the free service by adding `https://www.sanitypodcastfeed.com` to your [CORS-settings](https://www.sanity.io/docs/front-ends/cors) and accessing your feed at `https://www.sanitypodcastfeed.com/<projectid>/<dataset>/<podcastslug>/rss`.

You can validate your podcast feed at [`castfeedvalidator.com/?url=https://www.sanitypodcastfeed.com/<projectid>/<dataset>/<podcastslug>/rss`](castfeedvalidator.com).

You probably want to add your podcast to the iTunes Podcast directory. You can read about the various steps at [Apple’s Podcast Connect](https://itunespartner.apple.com/podcasts/).

## License

MIT-licensed. See LICENSE.
