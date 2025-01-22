import {defineType, defineField} from 'sanity'

export const pullIn = defineType({
  name: 'pullIn',
  title: 'Pull In',
  type: 'document',
  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'startPoint',
      title: 'Start Point (From)',
      type: 'string',
    }),
    defineField({
      name: 'turns',
      title: 'Turns',
      type: 'array',
      of: [{type: 'turnGroup'}],
    }),
  ],
})
