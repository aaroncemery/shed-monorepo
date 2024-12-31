import {defineType, defineField} from 'sanity'

export const documentationType = defineType({
  name: 'documentation',
  title: 'Documentation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'product',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'shade'}]}],
    }),
    defineField({
      name: 'content',
      type: 'portableText',
    }),
  ],
})
