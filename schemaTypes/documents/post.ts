import DocumentTextIcon from '@sanity/icons/DocumentText'
import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Article',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (rule) => rule.required()}),
    defineField({name: 'excerpt', title: 'Excerpt', type: 'text', rows: 4, validation: (rule) => rule.required().max(250)}),
    defineField({name: 'mainImage', title: 'Main image', type: 'cmsImage'}),
    defineField({name: 'publishedAt', title: 'Published at', type: 'datetime', validation: (rule) => rule.required()}),
    defineField({name: 'body', title: 'Article body', type: 'richText', validation: (rule) => rule.required()}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  orderings: [
    {
      title: 'Published date, newest',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {select: {title: 'title', subtitle: 'publishedAt', media: 'mainImage'}},
})
