import { FaPodcast } from 'react-icons/fa'

import categories from './categories';
import languages from './languages';

export default {
  name: 'podcast',
  title: 'Podcast',
  description: 'Create and configure a podcast',
  icon: FaPodcast,
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      required: true,
      description:
        'Remember that if your title is too long, it may be truncated in various podcatchers-'
    },
    {
      name: 'subtitle',
      type: 'string',
      description: 'That catchy tagline.'
    },
    {
      name: 'slug',
      title: 'Podcast slug',
      type: 'slug',
      description: 'For when you need to refer to your podcast in a url.',
      options: {
        source: 'title',
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      }
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      description:
        'What is this podcast about and why should people subscribe to it?'
    },
    {
      name: 'coverArt',
      title: 'Cover art',
      type: 'image',
      required: true,
      description:
        'The image should be either jpg or png. Preferably 3000 x 3000, minimum 1400 x 1400 pixels.'
    },
    {
      name: 'copyright',
      type: 'string',
      description: 'Who owns the rights to this podcast?'
    },
    {
      name: 'language',
      type: 'string',
      description: 'What language is this podcast in?',
      options: {
        list: languages
      }
    },
    {
      name: 'explicit',
      type: 'boolean',
      description:
        'Do you need to warn parents about the content in this podcast? (You can set this for individual episodes to)'
    },
    {
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
          type: 'object',
          description:
            'The name and email of the person or organization that iTunes should list in their different views',
          fields: [
            {
              name: 'email',
              type: 'email'
            },
            {
              name: 'name',
              type: 'string'
            }
          ]
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
          type: 'object',
          description:
            'Each podcast can belong to 3 separate categories, and will be ranked separately in each.',
          fieldsets: [
            {
              title: 'Optional categories',
              name: 'categories',
              options: {
                collapsable: true
              }
            }
          ],
          fields: ['first', 'secondary', 'tertiary'].map((category, index) => ({
            name: `${category}Category`,
            type: 'string',
            description: 'Where should this podcast be organized in iTunes?',
            options: {
              list: categories
            },
            fieldset: index ? 'categories' : null
          }))
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      description: 'description',
      media: 'coverArt'
    }
  }
};
