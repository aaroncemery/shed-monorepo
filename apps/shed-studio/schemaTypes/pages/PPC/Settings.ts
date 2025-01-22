import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ppcSettings',
  type: 'document',
  title: 'PPC Settings',
  fields: [
    defineField({
      name: 'navigation',
      type: 'array',
      title: 'Navigation Items',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'url', type: 'string', title: 'URL'}
          ]
        }
      ]
    }),
    defineField({
      name: 'footer',
      type: 'array',
      title: 'Footer Items',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'url', type: 'string', title: 'URL'}
          ]
        }
      ]
    })
  ]
})
