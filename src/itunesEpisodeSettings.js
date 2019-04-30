export default {
  name: 'itunesEpisodeSettings',
  title: 'iTunes Settings',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Episode type',
      type: 'string',
      options: {
        list: [
          { value: 'full', title: 'Full' },
          { value: 'trailer', title: 'Trailer' },
          { value: 'bonus', title: 'Bonus' }
        ]
      }
    },
    {
      name: 'season',
      title: 'Season',
      type: 'number'
    }
  ]
}
