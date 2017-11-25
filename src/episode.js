export default {
    name: 'episode',
    title: 'Episode',
    type: 'document',
    fields: [
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
            type: 'file',
        },
        {
            name: 'title',
            title: 'Title',
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
            type: 'text'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
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
            name: 'itunesSettings',
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