import {defineField, defineType} from 'sanity'
import getLocales from '../components/getLocales'

// console.log(locales)

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  // groups: [
  //   ...TranslatedLanguageComponent.map((locale) => ({
  //     name: locale.language,
  //     title: locale.language,
  //     icon: 'globe'
  //   }))
  // ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'portableText'
    })
  ]
})
