export default {
  name: 'sponsorRead',
  type: 'object',
  title: 'Sponsor read',
  fields: [
    {
      name: 'sponsor',
      type: 'reference',
      to: [
        {
          type: 'sponsor'
        }
      ]
    },
    {
      name: 'copy',
      type: 'array',
      title: 'copy',
      of: [{ type: 'block'}]
    },
  ]
}
