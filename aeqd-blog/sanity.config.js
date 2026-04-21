import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'aeqd-blog',

  projectId: 'oo8nxu4h',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
/**
 * blog-api-token
 * skutO6q5Jay9RpDxxIRWz6gMlPNB6bqHw6pRzUasnlLCiuCeykrT2bhz0Lswhqh6sPRyp1Us5shcDH2HChDM92BsuTeOmApuy6TfDK2E826BwS02Fv4Sh26j0el65aOhXTdyTAN8twHKGKSTDzZEQjuwyKm3hJURNiEhKSoFSFaxmO1ehe18
 */
