import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'oo8nxu4h',
    dataset: 'production',
  },
  /**
   * blog-api-token
   * skutO6q5Jay9RpDxxIRWz6gMlPNB6bqHw6pRzUasnlLCiuCeykrT2bhz0Lswhqh6sPRyp1Us5shcDH2HChDM92BsuTeOmApuy6TfDK2E826BwS02Fv4Sh26j0el65aOhXTdyTAN8twHKGKSTDzZEQjuwyKm3hJURNiEhKSoFSFaxmO1ehe18
   */
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
