import HelpCircleIcon from '@sanity/icons/HelpCircle'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const faqPage = defineType({
  name: 'faqPage',
  title: 'FAQ page',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({name: 'hero', title: 'Hero', type: 'pageHero', validation: (rule) => rule.required()}),
    defineField({
      name: 'faqs',
      title: 'Questions',
      type: 'array',
      of: [defineArrayMember({type: 'faqItem'})],
      validation: (rule) => rule.min(1),
    }),
    defineField({name: 'closingCta', title: 'Closing call to action', type: 'pageHero'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
