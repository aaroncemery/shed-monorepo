import {defineField, defineType} from 'sanity'
import {HoursCustomInput} from '../plugins/HoursCustomInput'

export const restroom = defineType({
  name: 'restroom',
  title: 'Restroom',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'hours',
      title: 'Hours of Operation',
      type: 'object',
      components: {
        input: HoursCustomInput,
      },
      fields: [
        defineField({
          name: 'startTime',
          type: 'string',
        }),
        defineField({
          name: 'endTime',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'location',
      title: 'Facilty / Location',
      type: 'string',
    }),
  ],
})
