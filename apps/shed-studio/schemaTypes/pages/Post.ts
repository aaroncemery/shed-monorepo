import {defineField, defineType} from 'sanity'
import {languageFilter} from '@sanity/language-filter'

const supportedLanguages = [
  {id: 'en', title: 'English'},
  {id: 'fr', title: 'French'},
  {id: 'es', title: 'Spanish'}
]

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'locale',
      title: 'Locale',
      type: 'object',
      fields: supportedLanguages.map((language) => ({
        name: language.id,
        title: language.title,
        type: 'localeString',
        enclosingType: {
          name: `locale-${language.id}`
        }
      }))
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero'
    })
  ]
})
