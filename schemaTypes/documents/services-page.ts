import CaseIcon from '@sanity/icons/Case'
import {defineField, defineType} from 'sanity'

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services page',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({name: 'hero', title: 'Hero', type: 'pageHero', validation: (rule) => rule.required()}),
    defineField({name: 'closingCta', title: 'Closing call to action', type: 'pageHero'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
