import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ppcParent',
  type: 'document',
  title: 'PPC Parent',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'parentRoute',
      type: 'string',
      title: 'Parent Route',
      description: 'The route for the parent page (e.g., "example-parent").',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'settings',
      type: 'reference',
      title: 'Settings',
      to: [{type: 'ppcSettings'}]
    })
  ]
})
