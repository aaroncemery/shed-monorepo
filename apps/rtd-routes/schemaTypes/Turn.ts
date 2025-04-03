import {defineField, defineType} from 'sanity'

export const turnGroup = defineType({
  name: 'turn',
  title: 'Turn',
  type: 'document',
  fields: [
    defineField({
      name: 'street',
      title: 'Street',
      type: 'string',
      options: {
        list: ['Northbound', 'Southbound', 'Eastbound', 'Westbound'],
      },
    }),
    // street needs to be it's own type and then we can use a reference to it here
    defineField({
      name: 'direction',
      title: 'Direction',
      type: 'string',
      options: {
        list: ['Center', 'Left', 'Right'],
      },
    }),
  ],
})
