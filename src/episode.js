export default {
    name: 'episode',
    title: 'Episode',
    type: 'document',
    fields: [
        {
            name: 'schedule',
            type: 'object',
            title: 'Publish schedule',
            fields: [
                {
                    name: 'publish',
                    type: 'richDate',
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
                    type: 'richDate',
                    title: 'When should this episode be unaccessible?',
                    description: 'In case you want to unpublish an episode on a said date.',
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
            name: 'podcast',
            description: 'Choose podcast(s) to publish this episode in',
            type: 'array',
            of: [
                { type: 'reference', weak: true, to: [ { type: 'podcast' }] }
            ]
        },
        {
            name: 'file',
            title: 'Podcast media file',
            description: 'Most podcatchers support .mp3, but other audio-formats may work as well',
            type: 'file',
        },
        {
            name: 'title',
            title: 'Title',
            description: 'Remember that long titles can be truncated in podcast apps',
            type: 'string',
        },
        {
            name: 'explicit',
            title: 'Explicit content',
            type: 'boolean',
        },
        {
            name: 'summary',
            title: 'Summary',
            description: 'iTunes ',
            type: 'text'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'slug',
            title: 'Episode slug',
            type: 'slug',
            description: 'When you need to refer to your podcast episode in a url',
            options: {
                source: 'title',
                slugify: input => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
                                     .slice(0, 200)
              }
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
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
                            { value: 'bonus', title: 'Bonus' },
                        ]
                    },
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
            type: 'image',
        }
    ]
}