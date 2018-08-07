import SoundPlayerInput from './components/SoundPlayerInput/SoundPlayerInput'
export default {
  name: 'episode',
  title: 'Episode',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      required: true,
      description: 'Remember that long titles can be truncated in podcast apps',
      type: 'string'
    },
    {
      name: 'podcast',
      description: 'Choose podcast(s) to publish this episode in',
      type: 'array',
      of: [{ type: 'reference', weak: true, to: [{ type: 'podcast' }] }]
    },
    {
      name: 'schedule',
      type: 'object',
      title: 'Publish schedule',
      fields: [
        {
          name: 'publish',
          type: 'datetime',
          title: 'Date of publication',
          description: 'When should this episode be available?',
          options: {
            inputUtc: false,
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
            inputDate: true,
            inputTime: true,
            timeStep: 15,
            calendarTodayLabel: 'Today',
            placeholderDate: '2017-04-18',
            placeholderTime: '11:29'
          }
        },
        {
          name: 'unpublish',
          type: 'datetime',
          title: 'When should this episode be unaccessible?',
          description:
            'In case you want to unpublish an episode on a said date.',
          options: {
            inputUtc: false,
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
            inputDate: true,
            inputTime: true,
            timeStep: 15,
            calendarTodayLabel: 'Today',
            placeholderDate: '2017-04-18',
            placeholderTime: '11:29'
          }
        }
      ]
    },
    {
      name: 'file',
      title: 'Podcast media file',
      readOnly: true,
      description:
        'Most podcatchers support .mp3, but other audio-formats may work as well',
      type: 'file'
    },
    {
      name: 'previewFile',
      title: 'Podcast media file',
      inputComponent: SoundPlayerInput,
      description:
        'Most podcatchers support .mp3, but other audio-formats may work as well',
      type: 'string',
    },
    {
      name: 'fileUrl',
      title: 'External location for podcast media file',
      description: 'For when you host your podcast media file elsewhere',
      type: 'url'
    },
    {
      name: 'duration',
      title: 'Duration',
      description: 'HH:MM:SS',
      type: 'string'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',

    },
    {
      name: 'explicit',
      title: 'Explicit content',
      type: 'boolean'
    },
    {
      name: 'summary',
      title: 'Summary',
      description: 'An episode summary is a string containing one or more descriptive sentences summarizing your episode for potential listeners. You can specify up to 4000 characters.',
      type: 'text'
    },
    {
      name: 'description',
      title: 'Description',
      description: `An episode description is a string containing one or more sentences describing your episode to potential listeners. You can specify up to 4000 characters.`,
      type: 'text',
    },
    {
      name: 'content',
      title: 'Content',
      description: 'An episode note. Where encoded is a string containing information about your episode.',
      type: 'array',
      of: [{
        type: 'block'
      }]
    },
    {
      name: 'linkList',
      title: 'Link list',
      description: 'A more structured way to add links for show notes. Will be compiled at the end of the episode content field in a podcast RSS feed',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string'
            },
            {
              name: 'URL',
              type: 'url'
            },
            {
              name: 'excerpt',
              type: 'text'
            },
            {
              name: 'timestamp',
              type: 'string',
            }
          ]
        }
      ]
    },
    {
      name: 'slug',
      title: 'Episode slug',
      type: 'slug',
      description: 'When you need to refer to your podcast episode in a url',
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      options: {
        layout: 'tags'
      },
      of: [
        {
          type: 'string'
        }
      ]
    },
    {
      name: 'itunes',
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
    },
    {
      name: 'coverArt',
      title: 'Cover art',
      type: 'image'
    },
    {
      name: 'sponsors',
      type: 'array',
      title: 'Sponsors',
      of: [
        {
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
        },
      ]
    },
  ],
  orderings: [
    {
      title: 'Publish Date, New',
      name: 'publishDateDesc',
      by: [
        {field: 'schedule.publish', direction: 'desc'}
      ]
    },
    {
      title: 'Publish Date, Old',
      name: 'publishDateAsc',
      by: [
        {field: 'schedule.publish', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'podcast.0.title',
      description: 'summary',
      media: 'coverArt',
      schedule: 'schedule'
    },
    prepare({title, subtitle, description, media, schedule}) {
      return {
        title,
        esubtitle: `${new Date(schedule.publish).toDateString()} – ${subtitle}`,
        description,
        media,
      }
    }
  }
};
