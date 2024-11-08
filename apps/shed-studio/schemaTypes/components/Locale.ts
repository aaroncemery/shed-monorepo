import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'locale',
  title: 'Locale',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string'
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string'
    }),
    defineField({
      name: 'hrefLang',
      title: 'hrefLang',
      type: 'string'
    })
  ]
})
