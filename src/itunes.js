import categories from './categories';

export default {
  name: 'itunes',
  title: 'iTunes settings',
  type: 'object',
  description: 'iTunes has extra stuff',
  fields: [
    {
      name: 'author',
      type: 'string',
      title: 'Author',
      description: 'Podcast author, typically the host(s)'
    },
    {
      name: 'owner',
      type: 'owner',
      title: 'Owner',
    },
    {
      name: 'url',
      type: 'url',
      description:
        'Helpful for when you want to show this podcast in other contexts than iTunes'
    },
    {
      name: 'type',
      type: 'string',
      description:
        'Is this a ongoing (episodic) podcast, or is it structured in seasons?',
      options: {
        list: [
          {
            value: 'episodic',
            title: 'Episodic'
          },
          {
            value: 'serial',
            title: 'Serial'
          }
        ]
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'categories'
    }
  ]
}
