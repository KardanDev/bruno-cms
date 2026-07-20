import BlockContentIcon from '@sanity/icons/BlockContent'
import HelpCircleIcon from '@sanity/icons/HelpCircle'
import ImageIcon from '@sanity/icons/Image'
import LinkIcon from '@sanity/icons/Link'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const callToAction = defineType({
  name: 'callToAction',
  title: 'Call to action',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Button label',
      type: 'string',
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: 'href',
      title: 'Link',
      description:
        'Use an internal path such as /contato, a full URL, or mailto:email@example.com.',
      type: 'string',
      validation: (rule) =>
        rule.required().custom((value) => {
          if (
            !value ||
            value.startsWith('/') ||
            value.startsWith('mailto:') ||
            /^https?:\/\//.test(value)
          ) {
            return true
          }
          return 'Use an internal path, a full URL, or a mailto: link.'
        }),
    }),
  ],
})

export const cmsImage = defineType({
  name: 'cmsImage',
  title: 'Image',
  type: 'image',
  icon: ImageIcon,
  options: {hotspot: true},
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      validation: (rule) =>
        rule.required().warning('Alternative text improves accessibility and SEO.'),
    }),
  ],
})

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'SEO title',
      type: 'string',
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: 'description',
      title: 'SEO description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(160),
    }),
    defineField({name: 'image', title: 'Social sharing image', type: 'cmsImage'}),
  ],
})

export const pageHero = defineType({
  name: 'pageHero',
  title: 'Page hero',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      validation: (rule) => rule.max(80),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.max(300),
    }),
    defineField({name: 'image', title: 'Image', type: 'cmsImage'}),
    defineField({name: 'cta', title: 'Call to action', type: 'callToAction'}),
  ],
})

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ item',
  type: 'object',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {select: {title: 'question', subtitle: 'answer'}},
})

export const timelineStep = defineType({
  name: 'timelineStep',
  title: 'Atendimento step',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'description'}},
})

export const valueItem = defineType({
  name: 'valueItem',
  title: 'Value',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'description'}},
})

export const stat = defineType({
  name: 'stat',
  title: 'Statistic',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (rule) => rule.required().max(12),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required().max(80),
    }),
  ],
  preview: {select: {title: 'value', subtitle: 'label'}},
})

export const pricingPlan = defineType({
  name: 'pricingPlan',
  title: 'Pricing plan',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price or starting price',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'What is included',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.min(1),
    }),
    defineField({name: 'cta', title: 'Call to action', type: 'callToAction'}),
    defineField({
      name: 'featured',
      title: 'Highlight this plan',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {select: {title: 'name', subtitle: 'price'}},
})

export const navigationItem = defineType({
  name: 'navigationItem',
  title: 'Navigation item',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {select: {title: 'label', subtitle: 'href'}},
})

export const contactFormCopy = defineType({
  name: 'contactFormCopy',
  title: 'Contact form copy',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({
      name: 'nameLabel',
      title: 'Name label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'emailLabel',
      title: 'Email label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subjectLabel',
      title: 'Subject label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'messageLabel',
      title: 'Message label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'submitLabel',
      title: 'Submit label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})

export const inlineImage = defineType({
  name: 'inlineImage',
  title: 'Inline image',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'cmsImage',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'caption', title: 'Caption', type: 'string'}),
  ],
  preview: {select: {title: 'caption', media: 'image'}},
})

export const richText = defineType({
  name: 'richText',
  title: 'Rich text',
  type: 'array',
  icon: BlockContentIcon,
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Heading 2', value: 'h2'},
        {title: 'Heading 3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Number', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (rule) => rule.required(),
              }),
              defineField({
                name: 'openInNewTab',
                title: 'Open in new tab',
                type: 'boolean',
                initialValue: false,
              }),
            ],
          },
        ],
      },
    }),
    defineArrayMember({type: 'inlineImage'}),
  ],
})
