export default {
    name: 'host',
    title: 'Host',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'email',
            type: 'email',
        },
        {
            name: 'description',
            title: 'Description',
            description: 'Describe your host in the most interesting way',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: 'social',
            title: 'Social network presence',
            type: 'object',
            fields: [
                {
                    name: 'twitter',
                    type: 'string',
                },
                {
                    name: 'facebook',
                    type: 'string',
                },
                {
                    name: 'googleplus',
                    type: 'string',
                },
                {
                    name: 'instagram',
                    type: 'string',
                },
                {
                    name: 'linkedin',
                    type: 'string',
                },
                {
                    name: 'youtube',
                    type: 'string',
                },
            ]
        },
        {
            name: 'image',
            type: 'image'
        }

    ]
}