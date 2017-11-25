# sanity-plugin-podcast

Podcast plugin for [Sanity](https://sanity.io/) that creates schema documents for podcasts and episodes with necessary iTunes data.

Note: You still need a service to translate the data output to a valid RSS-feed. A one-click-install will soon be ready for Heroku.
## Installation

```
sanity install podcast
```

## Usage

Import the type into your schema:

```js
import {podcast, episode}  from 'part:podcast/schema';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
      podcast,
      episode,
      // [...]
    ])
})
```

## License

MIT-licensed. See LICENSE.