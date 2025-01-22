import {defineField, defineType} from 'sanity'

export const terminal = defineType({
  name: 'terminal',
  title: 'Terminal',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
})
