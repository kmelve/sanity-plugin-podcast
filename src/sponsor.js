import { MdAttachMoney } from 'react-icons/md'

export default {
  name: 'sponsor',
  type: 'document',
  title: 'Sponsor',
  icon: MdAttachMoney,
  fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of sponsor'
      },
      {
        name: 'url',
        type: 'url',
        title: 'URL',
      },
      {
        name: 'description',
        type: 'array',
        title: 'Description',
        of: [{ type: 'block' }]
      },
      {
        name: 'logo',
        type: 'image',
        title: 'Logo',
      },
  ]
}
