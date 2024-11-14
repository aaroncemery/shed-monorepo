import {defineField} from 'sanity'

const supportedLanguages = [
  {id: 'en', title: 'English'},
  {id: 'fr', title: 'French'},
  {id: 'es', title: 'Spanish'}
]

export default defineField({
  name: 'localeString',
  title: 'Locale String',
  type: 'object',
  fields: supportedLanguages.map((language) => ({
    name: language.id,
    title: language.title,
    type: 'string'
  }))
})
