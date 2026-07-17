import CaseIcon from '@sanity/icons/Case'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (rule) => rule.required()}),
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
    defineField({name: 'summary', title: 'Summary', type: 'text', rows: 4, validation: (rule) => rule.required()}),
    defineField({name: 'heroImage', title: 'Hero image', type: 'cmsImage'}),
    defineField({name: 'body', title: 'Details', type: 'richText', validation: (rule) => rule.required()}),
    defineField({
      name: 'features',
      title: 'What is included',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'faqTitle', title: 'FAQ title', type: 'string'}),
    defineField({name: 'faqs', title: 'Service FAQs', type: 'array', of: [defineArrayMember({type: 'faqItem'})]}),
    defineField({name: 'cta', title: 'Call to action', type: 'callToAction'}),
    defineField({name: 'orderRank', title: 'Display order', type: 'number', initialValue: 0}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {select: {title: 'title', subtitle: 'summary', media: 'heroImage'}},
})
