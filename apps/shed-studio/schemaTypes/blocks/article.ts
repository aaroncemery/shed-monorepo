import {defineField, defineArrayMember} from 'sanity'

export const translationFieldsNewsInterface = (lang: string) =>
  defineField({
    name: 'lang',
    type: 'object',
    hidden: true,
    fields: [
      defineField({
        name: 'title',
        type: 'string',
        title: 'Headline'
      }),
      defineField({
        name: 'description',
        type: 'text',
        title: 'Description',
        rows: 3
      }),
      defineField({
        name: 'meta',
        title: 'Meta',
        type: 'object',
        fields: [
          defineField({
            name: 'title',
            type: 'string',
            title: 'Meta Title'
          }),
          defineField({
            name: 'description',
            type: 'string',
            title: 'Meta Description'
          })
        ]
      }),
      defineField({
        name: 'summary',
        type: 'array',
        title: 'What To Know',
        of: [
          defineArrayMember({
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            marks: {
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'link',
                  fields: [
                    {
                      title: 'Link',
                      name: 'href',
                      type: 'string'
                    },
                    {
                      title: 'External',
                      name: 'external',
                      type: 'boolean',
                      hidden: true
                    }
                  ]
                }
              ]
            }
          })
        ]
      }),
      defineField({
        name: 'notes',
        type: 'text',
        rows: 3
      }),
      defineField({
        name: 'pathname',
        type: 'string',
        title: 'Custom URL'
      })
    ]
  })
