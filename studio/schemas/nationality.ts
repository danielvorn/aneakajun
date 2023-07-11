import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'nationality',
  title: 'Nationality',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'flag',
      title: 'Flag',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
