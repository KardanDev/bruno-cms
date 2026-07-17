import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '3axf24ag',
    dataset: 'production',
  },
  typegen: {
    enabled: true,
    path: '../web/src/**/*.{ts,tsx}',
    schema: 'schema.json',
    generates: '../web/sanity.types.ts',
    overloadClientMethods: true,
  },
  deployment: {
    appId: 'vtvnqbzz9flu6g9rcn96e26r',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
