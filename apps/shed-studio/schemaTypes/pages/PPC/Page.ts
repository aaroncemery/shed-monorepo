import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ppcPage',
  type: 'document',
  title: 'PPC Page',
  fields: [
    defineField({
      name: 'parent',
      type: 'reference',
      title: 'Parent',
      to: [{type: 'ppcParent'}]
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}]
    })
  ]
})
