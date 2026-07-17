import UserIcon from '@sanity/icons/User'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About page',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({name: 'hero', title: 'Hero', type: 'pageHero', validation: (rule) => rule.required()}),
    defineField({name: 'storyEyebrow', title: 'Story eyebrow', type: 'string'}),
    defineField({name: 'storyTitle', title: 'Story title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'story', title: 'Story', type: 'richText', validation: (rule) => rule.required()}),
    defineField({name: 'portrait', title: 'Portrait', type: 'cmsImage'}),
    defineField({name: 'valuesTitle', title: 'Values title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'values', title: 'Values', type: 'array', of: [defineArrayMember({type: 'valueItem'})]}),
    defineField({name: 'stats', title: 'Statistics', type: 'array', of: [defineArrayMember({type: 'stat'})]}),
    defineField({name: 'closingCta', title: 'Closing call to action', type: 'pageHero'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
