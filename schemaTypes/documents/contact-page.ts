import EnvelopeIcon from '@sanity/icons/Envelope'
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from '@tabler/icons-react'
import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact page',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'pageHero',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'form',
      title: 'Contact form',
      type: 'contactFormCopy',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'contactNote', title: 'Contact note', type: 'text', rows: 3}),
    defineField({name: 'facebookLink', title: 'Facebook', type: 'url', icon: IconBrandFacebook}),
    defineField({name: 'instagramLink', title: 'Instagram', type: 'url', icon: IconBrandInstagram}),
    defineField({name: 'whatsappLink', title: 'Whatsapp', type: 'url', icon: IconBrandWhatsapp}),
    defineField({name: 'linkedInLink', title: 'LinkedIn', type: 'url', icon: IconBrandLinkedin}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
