import CreditCardIcon from '@sanity/icons/CreditCard'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pricingPage = defineType({
  name: 'pricingPage',
  title: 'Pricing page',
  type: 'document',
  icon: CreditCardIcon,
  fields: [
    defineField({name: 'hero', title: 'Hero', type: 'pageHero', validation: (rule) => rule.required()}),
    defineField({
      name: 'plans',
      title: 'Pricing plans',
      type: 'array',
      of: [defineArrayMember({type: 'pricingPlan'})],
      validation: (rule) => rule.min(1),
    }),
    defineField({name: 'note', title: 'Pricing note', type: 'text', rows: 3}),
    defineField({name: 'closingCta', title: 'Closing call to action', type: 'pageHero'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
