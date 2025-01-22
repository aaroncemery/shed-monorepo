import {defineType, defineField} from 'sanity'

export const pullOut = defineType({
  name: 'pullOut',
  title: 'Pull Out',
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
