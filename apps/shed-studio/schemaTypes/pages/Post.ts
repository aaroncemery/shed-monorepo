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
      name: 'totalItems',
      title: 'Total Items',
      type: 'number',
      validation: (Rule) =>
        Rule.required().custom((value, context) => {
          const {parent} = context as {parent: {testItemMax?: boolean; totalItemsOverride?: number}}
          const maxItems = parent?.testItemMax ? (parent?.totalItemsOverride ?? 5) : 5
          if (value === undefined) return 'Value is required'
          return value <= maxItems ? true : `Maximum ${maxItems} items allowed`
        })
    }),
    defineField({
      name: 'testItemMax',
      title: 'Test Item Max',
      type: 'boolean'
    }),
    defineField({
      name: 'totalItemsOverride',
      title: 'Total Items Override',
      type: 'number',
      hidden: ({parent}) => !parent?.testItemMax
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

// add a groq projection using a string parameter
