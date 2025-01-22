import {defineType, defineField} from 'sanity'

export const route = defineType({
  name: 'route',
  title: 'Route',
  type: 'document',
  fields: [
    defineField({
      name: 'specificDirection',
      title: 'Specific Direction',
      type: 'string',
      options: {
        list: ['Northbound', 'Southbound', 'Eastbound', 'Westbound'],
      },
    }),
    defineField({
      name: 'startPoint',
      title: 'Start Point',
      type: 'string',
    }),
    defineField({
      name: 'endPoint',
      title: 'End Point',
      type: 'string',
    }),
    defineField({
      name: 'turnGroups',
      title: 'Turn Groups',
      type: 'array',
      of: [{type: 'turnGroup'}],
    }),
    defineField({
      name: 'pullIns',
      title: 'Pull Ins',
      type: 'array',
      of: [{type: 'pullIn'}],
    }),
    defineField({
      name: 'pullOuts',
      title: 'Pull Outs',
      type: 'array',
      of: [{type: 'pullOut'}],
    }),
    defineField({
      name: 'terminals',
      title: 'Terminals',
      type: 'array',
      of: [{type: 'terminal'}],
    }),
  ],
})
