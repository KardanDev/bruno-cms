import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {singletonTypes} from './singletons'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'bruno-website',

  projectId: '3axf24ag',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  document: {
    actions: (previous, {schemaType}) =>
      singletonTypes.includes(schemaType)
        ? previous.filter((action) => !['duplicate', 'delete'].includes(action.action ?? ''))
        : previous,
    newDocumentOptions: (previous, {creationContext}) =>
      creationContext.type === 'global'
        ? previous.filter((templateItem) => !singletonTypes.includes(templateItem.templateId))
        : previous,
  },

  schema: {
    types: schemaTypes,
  },
})
