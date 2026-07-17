import CogIcon from '@sanity/icons/Cog'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Site settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({name: 'siteLogo', title: 'Logo', type: 'cmsImage'}),
    defineField({
      name: 'siteName',
      title: 'Lawyer name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Footer tagline',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'monogram',
      title: 'Monogram',
      type: 'string',
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary call to action',
      type: 'callToAction',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [defineArrayMember({type: 'navigationItem'})],
      validation: (rule) => rule.min(1),
    }),
    defineField({name: 'phone', title: 'Phone', type: 'string'}),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({name: 'address', title: 'Office address', type: 'text', rows: 3}),
    defineField({name: 'mapUrl', title: 'Map link', type: 'url'}),
    defineField({name: 'officeHours', title: 'Office hours', type: 'string'}),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [defineArrayMember({type: 'navigationItem'})],
    }),
    defineField({name: 'seo', title: 'Default SEO', type: 'seo'}),
  ],
})
