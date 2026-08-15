import DocumentTextIcon from '@sanity/icons/DocumentText'
import {defineField, defineType} from 'sanity'

export const blogPage = defineType({
  name: 'blogPage',
  title: 'Articles page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'pageHero',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'articlesBanner', title: 'Articles Banner', type: 'cmsImage'}),
    defineField({name: 'articlesBannerMobile', title: 'Articles Banner Mobile', type: 'cmsImage'}),
    defineField({name: 'closingCta', title: 'Closing call to action', type: 'pageHero'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
