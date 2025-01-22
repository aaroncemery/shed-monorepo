import {defineField, defineType} from 'sanity'

export const turnGroup = defineType({
  name: 'turnGroup',
  title: 'Turn Group',
  type: 'document',
  fields: [
    defineField({
      name: 'chooseDirection',
      title: 'Choose Direction',
      type: 'string',
      options: {
        list: ['Northbound', 'Southbound', 'Eastbound', 'Westbound'],
      },
    }),
  ],
})
