import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'jivitAneakajun',
  title: 'Jivit Aneakajun',
  type: 'document',
  fields: [
    defineField({
      name: 'guest',
      title: 'Guest',
      type: 'string',
    }),
    defineField({
      name: 'episode',
      title: 'Episode #',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'description',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
