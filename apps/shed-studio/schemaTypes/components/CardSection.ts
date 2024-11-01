import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cardSection',
  title: 'Card Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'card'}],
    }),
  ],
})
