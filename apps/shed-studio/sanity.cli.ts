import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '3p5kfswt',
    dataset: 'production',
  },
  studioHost: 'aarons-shed',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
