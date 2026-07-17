import DocumentTextIcon from '@sanity/icons/DocumentText'
import {defineField, defineType} from 'sanity'

export const blogPage = defineType({
  name: 'blogPage',
  title: 'Articles page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({name: 'hero', title: 'Hero', type: 'pageHero', validation: (rule) => rule.required()}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
