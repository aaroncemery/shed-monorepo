import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'ptSub',
  title: 'Pt Sub',
  type: 'object',
  fields: [
    defineField({
      name: 'ptSub',
      title: 'Portable Text Subheader',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
          ],
        }),
      ],
    }),
  ],
})
