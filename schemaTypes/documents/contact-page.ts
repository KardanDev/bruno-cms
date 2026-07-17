import EnvelopeIcon from '@sanity/icons/Envelope'
import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact page',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({name: 'hero', title: 'Hero', type: 'pageHero', validation: (rule) => rule.required()}),
    defineField({name: 'form', title: 'Contact form', type: 'contactFormCopy', validation: (rule) => rule.required()}),
    defineField({name: 'contactNote', title: 'Contact note', type: 'text', rows: 3}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
