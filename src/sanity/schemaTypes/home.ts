import {HomeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

const TITLE = 'Home'

export default defineField({
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
        name: "title",
        type: "string",
      }),
    // Modules
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        {type: 'hero'},
      ],
      group: 'editorial',
    })
  ],
  preview: {
    select: {
        title: "title",
        subtitle: "slug.current",
      }
  },
})