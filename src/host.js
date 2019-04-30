import { MdPeople } from 'react-icons/md'

export default {
    name: 'host',
    title: 'Host',
    type: 'document',
    icon: MdPeople,
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
            name: 'image',
            type: 'image'
        }

    ]
}
