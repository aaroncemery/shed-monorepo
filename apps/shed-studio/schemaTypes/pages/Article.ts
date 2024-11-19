import {defineField, defineType} from 'sanity'
import {translationFieldsNewsInterface} from '../blocks/article'
import {useClient} from 'sanity'

interface Language {
  id: string
  title: string
}

const supportedLanguages = [
  {id: 'en', title: 'English'},
  {id: 'fr', title: 'French'},
  {id: 'es', title: 'Spanish'}
]

console.log(supportedLanguages.map((lang: Language) => translationFieldsNewsInterface(lang.id)))

export default defineType({
  name: 'article',
  type: 'document',
  title: 'Article',
  groups: [
    {name: 'story', default: true},
    {name: 'meta'},
    {name: 'promotion'},
    {name: 'translate'},
    ...supportedLanguages.map((lang: Language) => ({name: lang.id}))
  ],
  // fields: [supportedLanguages.map((lang) => translationFieldsNewsInterface(lang.id))].flat()
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'localeString',
      group: 'story'
    })
  ],
  orderings: [
    {
      title: 'Display Date, Newest',
      name: 'displayDateDesc',
      by: [{field: 'date.displayDate', direction: 'desc'}]
    },
    {
      title: 'Display Date, Oldest',
      name: 'displayDateAsc',
      by: [{field: 'date.displayDate', direction: 'asc'}]
    }
  ]
})
