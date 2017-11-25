import categories from './categories';

export default {
    name: 'podcast',
    title: 'Podcast',
    description: 'Create and configure a podcast',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            description: 'A podcast should have a short and catchy title'
        },
        {
            name: 'subtitle',
            type: 'string',
            description: 'That catchy tagline'
        },
        {
            name: 'slug',
            title: 'Podcast slug',
            description: 'When you need to refer to your podcast in a url',
            options: {
                source: 'title',
                slugify: input => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
                                     .slice(0, 200)
              }
        },
        {
            name: 'description',
            type: 'text',
            description: 'What is this podcast about and why should people listen to it?'
        },
        {
            name: 'coverArt',
            title: 'Cover art',
            type: 'image',
            description: 'The image should be either jpg or png. Preferably 3000 x 3000, minimum 1400 x 1400 pixels.'
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
                list: [
                    { value: "af", title: "af" },
                    { value: "ar", title: "ar" },
                    { value: "az", title: "az" },
                    { value: "bg", title: "bg" },
                    { value: "bn", title: "bn" },
                    { value: "bs", title: "bs" },
                    { value: "ca", title: "ca" },
                    { value: "cs", title: "cs" },
                    { value: "cy", title: "cy" },
                    { value: "da", title: "da" },
                    { value: "de", title: "de" },
                    { value: "de-at", title: "de-at" },
                    { value: "de-ch", title: "de-ch" },
                    { value: "el", title: "el" },
                    { value: "en", title: "en" },
                    { value: "en-au", title: "en-au" },
                    { value: "en-ca", title: "en-ca" },
                    { value: "en-gb", title: "en-gb" },
                    { value: "en-ie", title: "en-ie" },
                    { value: "en-in", title: "en-in" },
                    { value: "en-nz", title: "en-nz" },
                    { value: "en-us", title: "en-us" },
                    { value: "en-za", title: "en-za" },
                    { value: "eo", title: "eo" },
                    { value: "es", title: "es" },
                    { value: "es-419", title: "es-419" },
                    { value: "es-ar", title: "es-ar" },
                    { value: "es-cl", title: "es-cl" },
                    { value: "es-co", title: "es-co" },
                    { value: "es-cr", title: "es-cr" },
                    { value: "es-ec", title: "es-ec" },
                    { value: "es-mx", title: "es-mx" },
                    { value: "es-pa", title: "es-pa" },
                    { value: "es-pe", title: "es-pe" },
                    { value: "es-us", title: "es-us" },
                    { value: "es-ve", title: "es-ve" },
                    { value: "et", title: "et" },
                    { value: "eu", title: "eu" },
                    { value: "fa", title: "fa" },
                    { value: "fi", title: "fi" },
                    { value: "fr", title: "fr" },
                    { value: "fr-ca", title: "fr-ca" },
                    { value: "fr-ch", title: "fr-ch" },
                    { value: "gl", title: "gl" },
                    { value: "he", title: "he" },
                    { value: "hi", title: "hi" },
                    { value: "hi-in", title: "hi-in" },
                    { value: "hr", title: "hr" },
                    { value: "hu", title: "hu" },
                    { value: "id", title: "id" },
                    { value: "is", title: "is" },
                    { value: "it", title: "it" },
                    { value: "it-ch", title: "it-ch" },
                    { value: "ja", title: "ja" },
                    { value: "km", title: "km" },
                    { value: "kn", title: "kn" },
                    { value: "ko", title: "ko" },
                    { value: "lo", title: "lo" },
                    { value: "lt", title: "lt" },
                    { value: "lv", title: "lv" },
                    { value: "mk", title: "mk" },
                    { value: "mn", title: "mn" },
                    { value: "mr-in", title: "mr-in" },
                    { value: "ms", title: "ms" },
                    { value: "nb", title: "nb" },
                    { value: "ne", title: "ne" },
                    { value: "nl", title: "nl" },
                    { value: "nn", title: "nn" },
                    { value: "or", title: "or" },
                    { value: "pl", title: "pl" },
                    { value: "pt", title: "pt" },
                    { value: "pt-br", title: "pt-br" },
                    { value: "rm", title: "rm" },
                    { value: "ro", title: "ro" },
                    { value: "ru", title: "ru" },
                    { value: "sk", title: "sk" },
                    { value: "sl", title: "sl" },
                    { value: "sr", title: "sr" },
                    { value: "sv", title: "sv" },
                    { value: "sw", title: "sw" },
                    { value: "ta", title: "ta" },
                    { value: "th", title: "th" },
                    { value: "tl", title: "tl" },
                    { value: "tr", title: "tr" },
                    { value: "tt", title: "tt" },
                    { value: "uk", title: "uk" },
                    { value: "ug", title: "ug" },
                    { value: "ur", title: "ur" },
                    { value: "uz", title: "uz" },
                    { value: "vi", title: "vi" },
                    { value: "wo", title: "wo" },
                    { value: "zh-cn", title: "zh-cn" },
                    { value: "zh-hk", title: "zh-hk" },
                    { value: "zh-tw", title: "zh-tw" },
                    { value: "zh-yue", title: "zh-yue" },
                ]
            }
        },
        {
            name: 'explicit',
            type: 'boolean',
            description: 'Do you need to warn parents about the content in this podcast? (You can set this for individual episodes to)'
        },
        {
            name: 'iTunesInfo',
            title: 'iTunes settings',
            type: 'object',
            description: 'iTunes has extra stuff',
            fields: [
                {
                    name: 'author',
                    type: 'object',
                    description: 'The name and email of the person or organization that iTunes should list in their different views',
                    fields: [
                        {
                            name: 'email',
                            type: 'email',
                        },
                        {
                            name: 'name',
                            type: 'string'
                        },
                    ]
                },
                {
                    name: 'itunesUrl',
                    type: 'url',
                    description: 'Helpful for when you want to show this podcast in other contexts than iTunes'
                },
                {
                    name: 'type',
                    type: 'string',
                    description: 'Is this a ongoing (episodic) podcast, or is it structured in seasons?',
                    options: {
                        list: [
                            {
                                value: 'episodic',
                                title: 'Episodic',
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
                    description: 'Each podcast can belong to 3 separate categories, and will be ranked separately in each.',
                    fieldsets: [
                        {
                            title: 'Optional categories',
                            name: 'categories',
                            options: {
                                collapsable: true,
                            },
                        },
                    ],
                    fields: ['first', 'secondary', 'tertiary'].map((category, index) => (
                        {
                            name: `${category}Category`,
                            type: 'string',
                            description: 'Where should this podcast be organized in iTunes?',
                            options: {
                                list: categories
                            },
                            fieldset: index ? 'categories' : null,
                        }
                    ))
                }
            ]
        }
    ]
}