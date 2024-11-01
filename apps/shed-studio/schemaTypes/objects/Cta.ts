import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaLinkExternal',
      title: 'CTA Link External',
      type: 'url',
    }),
    defineField({
      name: 'ctaLinkInternal',
      title: 'CTA Link Internal',
      type: 'reference',
      to: [{type: 'post'}],
    }),
  ],
})
